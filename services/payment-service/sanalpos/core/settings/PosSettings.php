<?php

namespace Gosas\Core\Settings;

require_once('core/enums/RequestMode.php');

use Gosas\Core\Enums\RequestMode;

class PosSettings
{
    public $requestUrl;
    public $requestMode;

    public $version = "512";
    public $provUserId = "PROVAUT";
    public $provUserId3DS = "GARANTI";
    public $provUserPassword = "Sidra2004.";
    public $userId = "PROVAUT";
    public $terminalId = "10302239";
    public $merchantId = "2671445";

    public $emailAddress = "eticaret@garanti.com.tr";
    public $ipAddress = "192.168.0.1";

    public $storeKey = "736964726131373031303131303453696472615369647261";
    public $threeDPaymentResultUrl = "http://localhost:8000/threed-payment-result.php";

    public function __construct($mode)
    {
        $this->requestMode = $mode;
    }

    public function GetRequestUrl()
    {
        if ($this->requestMode === RequestMode::Prod) {
            $this->requestUrl = "https://sanalposprov.garanti.com.tr/VPServlet";
        } else {
            $this->requestUrl = "https://sanalposprov.garantibbva.com.tr/VPServlet";
        }

        return $this->requestUrl;
    }
}