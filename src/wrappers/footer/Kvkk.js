import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  deleteAllFromCart,
} from "../../store/slices/cart-slice";
import { cartItemStock } from "../../helpers/product";
import { useTranslation } from "react-i18next";

const Kvkk = () => {
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
            { label: t("Kvkk"), path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <p style={{marginLeft:'4rem'}}>
     <h3>KİŞİSEL VERİLERİN KORUNMASI KANUNU KAPSAMINDA BAŞVURU FORMU</h3>

     <p>Başvuru Formu’nu doldurarak web sitemizin İletişim Bilgileri sayfasında yer alan e-posta adresine iletebilirsiniz. Bu iletiyi takiben Başvuru Formunuzu, size bildirilecek kep uzantılı e-posta adresimize güvenli elektronik imzalı olarak yahut aşağıdaki posta adresimize kimliğinizi tespit edici belgeler ile ıslak imzalı olarak ya da noter aracılığıyla göndermeniz gerekmektedir. </p>

     <p>Adı Soyadı: </p>
     <p>T.C. Kimlik Numarası: </p>
     <p>Adres: </p>
     <p>Cep Telefonu: </p>
     <p>Elektronik Posta Adresi: </p>

     <p>HAKLARINIZ </p>
     <p>KVKK madde 11 uyarınca HİYAM’a başvurarak; </p>
<p>1. Kişisel verilerinizin işlenip işlenmediğini öğrenme, </p>
<p>2. Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme, </p>
<p>3. Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını </p>öğrenme,
<p> 4. Yurt içinde veya yurt dışında Kişisel Verilerinizin aktarıldığı üçüncü kişileri bilme, </p>
<p>5. Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme, </p>
<p>6. Amaç, süre ve meşruiyet prensipleri dâhilinde değerlendirilmek üzere Kişisel Verilerinizin işlenmesini gerektiren sebeplerin ortadan kalkması halinde silinmesini veya yok edilmesini isteme, </p>
<p>7. Kişisel verilerinizin düzeltilmesi, silinmesi ya da yok edilmesi halinde bu işlemlerin Kişisel Verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme, </p>
<p>8. İşlenen Kişisel Verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi durumunda aleyhinize bir sonucun ortaya çıkması halinde bu sonuca itiraz etme,</p>
<p>9. Kişisel verilerinizin kanuna aykırı olarak işlenmesi ve bu sebeple zarara uğramanız hâlinde zararın giderilmesini talep etme, haklarına sahipsiniz. </p>
<p>BAŞVURU SAHİBİ TALEP DETAYI Kişisel Verilerin Korunması Kanunu uyarınca yukarıda sayılan haklarınız kapsamında talebinizi aşağıda belirtiniz: </p>
<p>
__________________________________________________________________________________________________</p>
<p>BEYAN Veri Sorumlusu sıfatıyla Şirketinize yapmış olduğum başvurumun Kişisel Verilerin Korunması Kanunu'nun 13. maddesi uyarınca değerlendirilerek tarafıma yukarıda belirttiğim elektronik posta adresi aracılığı ile bilgi verilmesini talep ederim.</p>

<p>ADI SOYADI:</p>
<p>TARİH:</p>
<p>İMZA</p>
</p>
      </LayoutOne>
    </Fragment>
  );
};

export default Kvkk;
