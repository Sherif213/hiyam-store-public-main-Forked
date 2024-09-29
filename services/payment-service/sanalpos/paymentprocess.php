<?php

require __DIR__ . '/vendor/autoload.php';
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Log errors to a file
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/paymentprocess_error.log');

// Allow from any origin
header("Access-Control-Allow-Origin: *");

// Allow specific HTTP methods
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Allow specific headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

include 'views/shared/_header.php';

require_once('core/entity/CreditCard.php');
require_once('core/entity/Address.php');
require_once('core/entity/OrderItem.php');
require_once('core/entity/Recurring.php');
require_once('core/entity/RecurringPayment.php');
require_once('core/entity/OrderComment.php');
require_once('core/entity/RewardInfo.php');
require_once('core/GarantiPaymentProcess.php');
require_once('core/enums/AddressType.php');
require_once('core/enums/RewardType.php');
require_once('core/helpers/PriceFormatter.php');

use Gosas\Core\Entity\CreditCard;
use Gosas\Core\GarantiPaymentProcess;
use Gosas\Core\Entity\Address;
use Gosas\Core\Entity\OrderComment;
use Gosas\Core\Enums\AddressType;
use Gosas\Core\Entity\OrderItem;
use Gosas\Core\Entity\Recurring;
use Gosas\Core\Entity\RecurringPayment;
use Gosas\Core\Enums\RewardType;
use Gosas\Core\Helpers\PriceFormatter;

?>
<div class="card border-0">
    <div class="card-body">
        <?php
        try {
            error_log("Request method: " . $_SERVER["REQUEST_METHOD"]);
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $rawInput = file_get_contents('php://input');
                error_log("Raw input data: " . $rawInput);
                $data = json_decode($rawInput, true);
                error_log("Decoded input data: " . json_encode($data));

                // Validate and sanitize input
                $cardHolderName = isset($data['cardHolderName']) ? filter_var($data['cardHolderName'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
                $cardNumber = isset($data['cardNumber']) ? filter_var($data['cardNumber'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
                $expireMonth = isset($data['expireMonth']) ? filter_var($data['expireMonth'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
                $expireYear = isset($data['expireYear']) ? substr(filter_var($data['expireYear'], FILTER_SANITIZE_FULL_SPECIAL_CHARS), -2) : null;
                $cvvCode = isset($data['cvc']) ? filter_var($data['cvc'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
                $totalAmount = isset($data['totalAmount']) ? PriceFormatter::FormatAmount((float)filter_var($data['totalAmount'], FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION)) : null;
                $paymentType = isset($data['paymentMethod']) ? filter_var($data['paymentMethod'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;

                // Log sanitized input
                error_log("Sanitized input data: cardHolderName=$cardHolderName, cardNumber=$cardNumber, expireMonth=$expireMonth, expireYear=$expireYear, cvvCode=$cvvCode, totalAmount=$totalAmount, paymentType=$paymentType");

                // Check for missing required fields
                if (!$cardHolderName || !$cardNumber || !$expireMonth || !$expireYear || !$cvvCode || !$totalAmount || !$paymentType) {
                    throw new Exception("Missing required fields");
                }

                $cardInfo = new CreditCard(
                    $cardNumber,
                    $cardHolderName,
                    $expireYear,
                    $expireMonth,
                    $cvvCode
                );

                $paymentProcess = new GarantiPaymentProcess();
                error_log("Payment type: " . $paymentType);

                switch ($paymentType) {
                    case "Payment": {
                            error_log("Starting Payment process");
                            $postData = $paymentProcess->PreparePayment($cardInfo, $totalAmount);
                            error_log("Prepared Payment data: " . $postData);
                            $response = $paymentProcess->Pay($postData);
                            error_log("Payment response: " . json_encode($response));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($response);
                            break;
                        }
                    case "PreAuth": {
                            error_log("Starting PreAuth process");
                            $postData = $paymentProcess->PreparePreAuthPayment($cardInfo, $totalAmount);
                            error_log("Prepared PreAuth data: " . $postData);
                            $response = $paymentProcess->Pay($postData);
                            error_log("PreAuth response: " . json_encode($response));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($response);
                            break;
                        }
                    case "PostAuth": {
                            error_log("Starting PostAuth process");
                            $preAuthPostData = $paymentProcess->PreparePreAuthPayment($cardInfo, $totalAmount);
                            error_log("Prepared PreAuth data: " . $preAuthPostData);
                            $preAuthResponse = $paymentProcess->Pay($preAuthPostData);
                            error_log("PreAuth response: " . json_encode($preAuthResponse));

                            $orderId = $preAuthResponse->Order->OrderID;
                            error_log("PreAuth OrderID: " . $orderId);

                            $postData = $paymentProcess->PreparePostAuthPayment($totalAmount, $orderId);
                            error_log("Prepared PostAuth data: " . $postData);
                            $response = $paymentProcess->Pay($postData);
                            error_log("PostAuth response: " . json_encode($response));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($response);
                            break;
                        }
                    case "CancelPayment": {
                            error_log("Starting CancelPayment process");
                            $paymentPostData = $paymentProcess->PreparePayment($cardInfo, $totalAmount);
                            error_log("Prepared Payment data: " . $paymentPostData);
                            $paymentResponse = $paymentProcess->Pay($paymentPostData);
                            error_log("Payment response: " . json_encode($paymentResponse));

                            $orderId = $paymentResponse->Order->OrderID;
                            $retRefNum = $paymentResponse->Transaction->RetrefNum;
                            error_log("CancelPayment OrderID: " . $orderId . ", RetrefNum: " . $retRefNum);

                            $paymentCancelPostData = $paymentProcess->PrepareCancelPayment($totalAmount, $orderId, $retRefNum);
                            error_log("Prepared CancelPayment data: " . $paymentCancelPostData);
                            $response = $paymentProcess->Cancel($paymentCancelPostData);
                            error_log("CancelPayment response: " . json_encode($response));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($response);
                            break;
                        }
                    case "RefundPayment": {
                            error_log("Starting RefundPayment process");
                            $paymentPostData = $paymentProcess->PreparePayment($cardInfo, $totalAmount);
                            error_log("Prepared Payment data: " . $paymentPostData);
                            $paymentResponse = $paymentProcess->Pay($paymentPostData);
                            error_log("Payment response: " . json_encode($paymentResponse));

                            $orderId = $paymentResponse->Order->OrderID;
                            error_log("RefundPayment OrderID: " . $orderId);

                            $paymentRefundPostData = $paymentProcess->PrepareRefundPayment($totalAmount, $orderId);
                            error_log("Prepared RefundPayment data: " . $paymentRefundPostData);
                            $response = $paymentProcess->Refund($paymentRefundPostData);
                            error_log("RefundPayment response: " . json_encode($response));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($response);
                            break;
                        }
                    case "PartialRefundPayment": {
                            error_log("Starting PartialRefundPayment process");
                            $paymentPostData = $paymentProcess->PreparePayment($cardInfo, $totalAmount);
                            error_log("Prepared Payment data: " . $paymentPostData);
                            $paymentResponse = $paymentProcess->Pay($paymentPostData);
                            error_log("Payment response: " . json_encode($paymentResponse));

                            $orderId = $paymentResponse->Order->OrderID;
                            error_log("PartialRefundPayment OrderID: " . $orderId);

                            $paymentRefundPostData = $paymentProcess->PrepareRefundPayment($totalAmount - 10, $orderId);
                            error_log("Prepared PartialRefundPayment data: " . $paymentRefundPostData);
                            $response = $paymentProcess->Refund($paymentRefundPostData);
                            error_log("PartialRefundPayment response: " . json_encode($response));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($response);
                            break;
                        }
                    case "PaymentFull": {
                            error_log("Starting PaymentFull process");
                            $installmentCount = $_POST['InstallmentCount'];
                            error_log("Installment count: " . $installmentCount);
                            $address = new Address(
                                $_POST['FirstName'],
                                $_POST['LastName'],
                                AddressType::ShippingAddress,
                                $_POST['AddressText'],
                                $_POST['District'],
                                $_POST['City'],
                                $_POST['PhoneNumber']
                            );
                            error_log("Address: " . json_encode($address));
                            $orderItem = new OrderItem(
                                $_POST['ItemNumber'],
                                $_POST['ItemProductId'],
                                $_POST['ItemProductCode'],
                                $_POST['ItemQuantity'],
                                PriceFormatter::FormatAmount((float)$_POST['ItemPrice'])
                            );
                            error_log("OrderItem: " . json_encode($orderItem));
                            $orderComment = new OrderComment(
                                $_POST['CommentNumber'],
                                $_POST['CommentText']
                            );
                            error_log("OrderComment: " . json_encode($orderComment));
                            $postData = $paymentProcess->PreparePaymentWithOrderComment(
                                $cardInfo,
                                $address,
                                $orderItem,
                                $orderComment,
                                $totalAmount,
                                $installmentCount
                            );
                            error_log("Prepared PaymentFull data: " . $postData);
                            $response = $paymentProcess->Pay($postData);
                            error_log("PaymentFull response: " . json_encode($response));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($response);
                            break;
                        }
                    case "OrderInquiry": {
                            error_log("Starting OrderInquiry process");
                            $inquiryPostData = $paymentProcess->PrepareOrderInquiryPayment($cardInfo, $totalAmount, 0);
                            error_log("Prepared OrderInquiry data: " . $inquiryPostData);
                            $inquiryResponse = $paymentProcess->Send($inquiryPostData);
                            error_log("OrderInquiry response: " . json_encode($inquiryResponse));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($inquiryResponse);
                            break;
                        }
                    case "OrderDetailInquiry": {
                            error_log("Starting OrderDetailInquiry process");
                            $inquiryPostData = $paymentProcess->PrepareOrderDetailInquiryPayment($cardInfo, $totalAmount, 0);
                            error_log("Prepared OrderDetailInquiry data: " . $inquiryPostData);
                            $inquiryResponse = $paymentProcess->Send($inquiryPostData);
                            error_log("OrderDetailInquiry response: " . json_encode($inquiryResponse));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($inquiryResponse);
                            break;
                        }
                    case "DateRangeInquiry": {
                            error_log("Starting DateRangeInquiry process");
                            $inquiryPostData = $paymentProcess->PrepareDateRangeInquiryPayment($cardInfo, $totalAmount, 0, "2022/06/01 00:00", "2022/06/15 23:59");
                            error_log("Prepared DateRangeInquiry data: " . $inquiryPostData);
                            $inquiryResponse = $paymentProcess->Send($inquiryPostData);
                            error_log("DateRangeInquiry response: " . json_encode($inquiryResponse));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($inquiryResponse);
                            break;
                        }
                    case "BonusInquiry": {
                            error_log("Starting BonusInquiry process");
                            $inquiryPostData = $paymentProcess->PrepareBonusInquiryPayment($cardInfo, $totalAmount, 0);
                            error_log("Prepared BonusInquiry data: " . $inquiryPostData);
                            $inquiryResponse = $paymentProcess->Send($inquiryPostData);
                            error_log("BonusInquiry response: " . json_encode($inquiryResponse));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($inquiryResponse);
                            break;
                        }
                    case "DCCPayment": {
                            error_log("Starting DCCPayment process");
                            $paymentPostData = $paymentProcess->PrepareDCCPayment($cardInfo, $totalAmount, 0);
                            error_log("Prepared DCCPayment data: " . $paymentPostData);
                            $paymentResponse = $paymentProcess->Send($paymentPostData);
                            error_log("DCCPayment response: " . json_encode($paymentResponse));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($paymentResponse);
                            break;
                        }
                    case "DCCRateInquiry": {
                            error_log("Starting DCCRateInquiry process");
                            $inquiryPostData = $paymentProcess->PrepareDCCRateInquiryPayment($cardInfo, $totalAmount, 0);
                            error_log("Prepared DCCRateInquiry data: " . $inquiryPostData);
                            $inquiryResponse = $paymentProcess->Send($inquiryPostData);
                            error_log("DCCRateInquiry response: " . json_encode($inquiryResponse));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($inquiryResponse);
                            break;
                        }
                    case "DCCRateInquiryWithInstallment": {
                            error_log("Starting DCCRateInquiryWithInstallment process");
                            $inquiryPostData = $paymentProcess->PrepareDCCRateInquiryWithInstallmentPayment($cardInfo, $totalAmount, 0, 3);
                            error_log("Prepared DCCRateInquiryWithInstallment data: " . $inquiryPostData);
                            $inquiryResponse = $paymentProcess->Send($inquiryPostData);
                            error_log("DCCRateInquiryWithInstallment response: " . json_encode($inquiryResponse));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($inquiryResponse);
                            break;
                        }
                    case "DCCPaymentWithInstallment": {
                            error_log("Starting DCCPaymentWithInstallment process");
                            $paymentPostData = $paymentProcess->PrepareDCCPaymentWithInstallment($cardInfo, $totalAmount, 0, 3);
                            error_log("Prepared DCCPaymentWithInstallment data: " . $paymentPostData);
                            $paymentResponse = $paymentProcess->Send($paymentPostData);
                            error_log("DCCPaymentWithInstallment response: " . json_encode($paymentResponse));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($paymentResponse);
                            break;
                        }
                    case "RewardPointPayment": {
                            error_log("Starting RewardPointPayment process");
                            $rewardInfo = new RewardInfo(
                                RewardType::Bonus,
                                100
                            );
                            error_log("RewardInfo: " . json_encode($rewardInfo));
                            $paymentPostData = $paymentProcess->PrepareRewardPointPayment($cardInfo, $totalAmount, 0, $rewardInfo);
                            error_log("Prepared RewardPointPayment data: " . $paymentPostData);
                            $paymentResponse = $paymentProcess->Send($paymentPostData);
                            error_log("RewardPointPayment response: " . json_encode($paymentResponse));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($paymentResponse);
                            break;
                        }
                    case "PartialCancel": {
                            error_log("Starting PartialCancel process");
                            $preAuthPostData = $paymentProcess->PreparePreAuthPayment($cardInfo, $totalAmount);
                            error_log("Prepared PreAuth data: " . $preAuthPostData);
                            $preAuthResponse = $paymentProcess->Pay($preAuthPostData);
                            error_log("PreAuth response: " . json_encode($preAuthResponse));

                            $orderId = $preAuthResponse->Order->OrderID;
                            error_log("PreAuth OrderID: " . $orderId);
                            $retRefNum = $preAuthResponse->Transaction->RetrefNum;
                            error_log("PreAuth OriginalRetrefNum: " . $retRefNum);

                            error_log("Starting Partial cancel process");
                            $postData = $paymentProcess->PreparePartialCancelPayment($totalAmount - 10, $orderId, $retRefNum);
                            error_log("Prepared PartialCancel data: " . $postData);
                            $response = $paymentProcess->Pay($postData);
                            error_log("PartialCancel response: " . json_encode($response));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($response);
                            break;
                        }
                    case "PartialRefund": {
                            error_log("Starting PartialRefund process");
                            $paymentPostData = $paymentProcess->PreparePayment($cardInfo, $totalAmount);
                            error_log("Prepared Payment data: " . $paymentPostData);
                            $paymentResponse = $paymentProcess->Pay($paymentPostData);
                            error_log("Payment response: " . json_encode($paymentResponse));

                            $orderId = $paymentResponse->Order->OrderID;
                            error_log("PartialRefund OrderID: " . $orderId);

                            $paymentRefundPostData = $paymentProcess->PreparePartialRefundPayment($totalAmount - 10, $orderId);
                            error_log("Prepared PartialRefund data: " . $paymentRefundPostData);
                            $response = $paymentProcess->Refund($paymentRefundPostData);
                            error_log("PartialRefund response: " . json_encode($response));
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($response);
                            break;
                        }
                    case "FixedRecurringPayment": {
                            $type = "R";
                            $totalPaymentNum = 5;
                            $ferequencyType = "M";
                            $frequencyInterval = 1;
                            $startDate = "20220801";

                            $recurring = new Recurring(
                                $type,
                                $totalPaymentNum,
                                $ferequencyType,
                                $frequencyInterval,
                                $startDate
                            );

                            print "Fixed recurring payment başladı.. </br>";
                            $paymentPostData = $paymentProcess->PrepareFixedRecurringPayment($cardInfo, $totalAmount, 0, $recurring);
                            $paymentResponse = $paymentProcess->Send($paymentPostData);
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($paymentResponse);
                            break;
                        }
                    case "VariableRecurringPayment": {
                            $type = "R";
                            $totalPaymentNum = 2;
                            $ferequencyType = "M";
                            $frequencyInterval = 1;
                            $startDate = "20220801";

                            $recurring = new Recurring(
                                $type,
                                $totalPaymentNum,
                                $ferequencyType,
                                $frequencyInterval,
                                $startDate
                            );

                            $recurringPaymentList = array(
                                new RecurringPayment(
                                    900,
                                    1
                                ),
                                new RecurringPayment(
                                    10,
                                    2
                                ),
                            );

                            print "Variable recurring payment başladı.. </br>";
                            $paymentPostData = $paymentProcess->PrepareVariableRecurringPayment($cardInfo, $totalAmount, 0, $recurring, $recurringPaymentList);
                            $paymentResponse = $paymentProcess->Send($paymentPostData);
                            print "Bankadan Dönen Sonuc: </br>" . json_encode($paymentResponse);
                            break;
                        }
                    default: {
                            throw new Exception("Invalid payment type");
                        }
                }

        // Send a JSON response
        header('Content-Type: application/json');
        echo json_encode(['status' => 'success', 'response' => $response]);
    }
}catch (Exception $e) {
    error_log($e->getMessage());
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Server error', 'message' => $e->getMessage()]);
}
?>

        
    </div>
</div>
<?php include 'views/shared/_footer.php'; ?>