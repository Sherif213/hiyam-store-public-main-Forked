import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  deleteAllFromCart,
} from "../../store/slices/cart-slice";
import { cartItemStock } from "../../helpers/product";
import { useTranslation } from "react-i18next";

const Teslimatta = () => {
  const {t}=useTranslation()
  let cartTotalPrice = 0;

  const [quantityCount] = useState(1);
  const dispatch = useDispatch();
  let { pathname } = useLocation();

  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Fragment>
      <SEO
        titleTemplate="Cart"
        description="Cart page of Hiyam react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: t("Home"), path: process.env.PUBLIC_URL + "/" },
            { label: t("Delivery"), path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <p style={{marginLeft:'4rem'}}>
     <h3>Teslimat</h3>

     Sipariş etmiş olduğunuz ürünleri 1 gün içinde kargoya teslim etmeye gayret ediyoruz. Temini zaman alan ürünler için kargo teslim süresi ürün detayında belirtildiği gibi 3 iş günüdür. Gecikmesi muhtemel teslimat durumunda size bilgi verilecektir. 

Talepleriniz sipariş sonunda belirlemiş olduğunuz teslimat tipine göre hazırlanmak üzere işleme alınacaktır. İstanbul merkezli şirketimizden ürünler yurtiçi kargo firmasıyla gönderilecektir. Siparişleriniz onaylandıktan sonra en geç 2 (iki) iş günü sonunda Kargo firmasına teslim edilir. 
iletişime geçerek değişik teslimat şartları konusunda görüşebilirsiniz. Ayrıca kargo teslimatları sadece Türkiye için geçerlidir
</p>
      </LayoutOne>
    </Fragment>
  );
};

export default Teslimatta;
