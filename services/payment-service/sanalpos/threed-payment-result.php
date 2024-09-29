<?php include 'views/shared/_header.php';   

// Log the incoming request data
error_log("Incoming request data: " . json_encode($_POST));

// Check if the parameters exist and assign default values if they don't
$mdstatus = isset($_POST['mdstatus']) ? $_POST['mdstatus'] : null;
$errmsg = isset($_POST['errmsg']) ? $_POST['errmsg'] : null;
$mderrormessage = isset($_POST['mderrormessage']) ? $_POST['mderrormessage'] : null;
$response = isset($_POST['response']) ? $_POST['response'] : null;
$txntype = isset($_POST['txntype']) ? $_POST['txntype'] : null;
$txnamount = isset($_POST['txnamount']) ? $_POST['txnamount'] : null;
$txninstallmentcount = isset($_POST['txninstallmentcount']) ? $_POST['txninstallmentcount'] : null;
$oid = isset($_POST['oid']) ? $_POST['oid'] : null;
$clientid = isset($_POST['clientid']) ? $_POST['clientid'] : null;

// Log the parsed parameters
error_log("Parsed parameters: mdstatus=$mdstatus, errmsg=$errmsg, mderrormessage=$mderrormessage, response=$response, txntype=$txntype, txnamount=$txnamount, txninstallmentcount=$txninstallmentcount, oid=$oid, clientid=$clientid");

// Process the parameters as needed
echo "Bankadan dönen cevap: [mdstatus=$mdstatus, errmsg=$errmsg, mderrormessage=$mderrormessage, response=$response, txntype=$txntype, txnamount=$txnamount, txninstallmentcount=$txninstallmentcount, oid=$oid, clientid=$clientid]";
?>  

// Include the footer   
<?php include 'views/shared/_footer.php'; ?>