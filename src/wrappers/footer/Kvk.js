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

const Kvk = () => {
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
        <h3>Kişisel verilerin korunması</h3>
        <p>HIYAM KATANOĞLU (“HİYAM”) olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. HİYAM olarak ürün ve hizmetlerimizden faydalanan kişiler dahil, HİYAM ile ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu'na (“KVKK”) uygun olarak işlenerek, muhafaza edilmesine önem vermekteyiz. Bu sorumluluğumuzun tam bilinci ile KVKK uyarınca “Veri Sorumlusu” sıfatıyla, kişisel verilerinizi aşağıda yer alan kapsamda ve şartlarda işlemekteyiz.</p>
<p>HİYAM tarafından kişisel verilerinizin ne tür yöntemler aracılığıyla ve hangi amaçlar doğrultusunda işlendiği ve saklandığı hakkında daha detaylı bilgi için HİYAM Gizlilik İlkeleri ve Çerezler Hakkında Bildirim'i inceleyebilirsiniz.</p>
<p>Kişisel Veri Nedir?</p>
<p>Kişisel veri, KVKK’da kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi olarak tanımlanmıştır. Buna göre bizimle paylaştığınız adınız, soyadınız, doğum tarihiniz, kimlik numaranız, elektronik posta adresiniz, telefon numaranız ve benzeri bilgiler kişisel veri olarak adlandırılmaktadır.
HİYAM, kişisel verilerinizi, HİYAM ile doğrudan paylaştığınız hallerde, otomatik yollarla veya üçüncü şahıs platformları gibi başka kaynaklar aracılığıyla toplamaktadır.</p>
<p>1. Kişisel verilerinizin işlenme amacı ve dayanağı nedir?</p>
<p>
HİYAM ile olan ürün ve hizmet ilişkiniz dolayısıyla yasal yükümlülüklerimizi yerine getirebilmek ve sizi kampanyalar ve avantajlardan haberdar edebilmek için HİYAM kişisel bilgilerinizi toplamaktadır ve bu kapsamda işlemektedir.</p>
<p>Bu doğrultuda HİYAM; kişisel verilerinizi, her türlü şikâyetinizi değerlendirmek ve işleme almak, ödemelerinizi işleme almak, ürünlerimizi, hizmetlerimizi, iletişim yöntemlerimizi ve internet sitelerimizin işlevselliğini geliştirmek ve sizin için kişiselleştirilmiş ürünler, iletişim içerikleri ve hedefe yönelik reklamlar ve ayrıca ürün tavsiyeleri sunmak için toplamakta ve işlemektedir.</p>
<p>Yukarıda sayılan amaçlar doğrultusunda HİYAM, kişisel verilerinizi, açık rızanıza istinaden veya sizinle yaptığımız sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması halinde veya temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatimizin gerektirdiği hallerde, burada belirtilen amaçlar ve kapsam dahilinde işlemekte ve saklamaktadır.</p>
<p>2. Kişisel verilerinizi hangi amaçla, kimlere aktarıyoruz?</p>
<p>
Kişisel verileriniz HİYAM hissedarlarıyla, doğrudan/dolaylı yurtiçi/yurtdışı iştiraklerimizle, iş ilişkisinin devamı esnasında birlikte bizi temsil eden ve/veya faaliyetlerimizi yürütebilmek için işbirliği yaptığımız iş ortağımız olan yurtiçi/yurtdışı kişi ve kurumlarla (kargo, gönderi, çağrı merkezi, veri tabanı, bulut vb. hizmetleri sunan şirketlerle) paylaşılabilmektedir. Ayrıca, yasal yükümlülüklerimiz nedeniyle ve bunlarla sınırlı olmak üzere mahkemeler ve diğer kamu kurumları ile kişisel veriler paylaşılmaktadır. Ayrıca, HİYAM internet sitelerini ziyaretinize ilişkin kişisel verilerinizi ve gezinme bilgileriniz gibi trafik bilgilerinizi; güvenliğiniz ve HİYAM'ın ilgili mevzuat kapsamındaki yükümlülüklerinin ifası amacıyla yasal olarak bu bilgileri kanunen talep etmeye yetkili olan kamu kurum ve kuruluşları ile paylaşabilecektir.</p>
<p>3. Kişisel verilerinizi nasıl saklıyoruz?
Şirketimiz ile paylaşılan kişisel verileriniz HİYAM’iı yurtiçi sunucularında ilgili yasal düzenlemelere, KVKK hükümlerine ve HİYAM standartlarına uygun olarak saklanmaktadır. Bu kapsamda HİYAM, kişisel verilerinizin güvenliğini sağlamak adına yasal mevzuat ile belirlenen gerekli teknik ve idari güvenlik önlemlerini almaktadır.</p>
<p>4. Kişisel verilerinizi ne kadar süre ile tutuyoruz?
KVKK Madde 7/f.1. hükmü uyarınca, kişisel verilerinizin işlenmesi gerektiren amaç ortadan kalktığında ve/veya ilgili mevzuat uyarınca verilerinizi saklamakla yükümlü kılındığımız yasal süreler dolduğunda, kişisel verileriniz tarafımızca silinecek, yok edilecek veya anonim hale getirilecektir.</p>
<p>5. Kişisel Verilerin Korunması Kanunu’ndan doğan haklarınız nelerdir?
KVKK Madde 11 uyarınca, kişisel verilerinizin işlendiği HİYAM tarafından veri sorumlusu sıfatı ile işlediği ölçüde;</p>
<p>Herhangi bir kişisel verinizin işlenip işlenmediğini öğrenme;
Kişisel verilerinizin işlenme faaliyetlerine ilişkin olarak bilgi talep etme;
Kişisel verilerinizin işlenme amaçlarını öğrenme;
Kişisel verilerin yurt içinde veya yurt dışında üçüncü kişilere aktarılmış olması durumunda bu kişileri öğrenme;</p>
<p>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme;
Kişisel verilerin işlenmesini gerektiren sebeplerin ortadan kalkması halinde kişisel verilerin silinmesini veya yok edilmesini isteme;
Silme ve düzeltme işlemlerinin, verilerin aktarıldığını üçüncü kişilere bildirilmesi isteme;
Kişisel verilerin otomatik sistemler vasıtasıyla işlenmesi sonucu ortaya çıkabilecek aleyhte sonuçlara itiraz etme; ve</p>
<p>Kişisel verilerinizin kanuna aykırı bir şekilde işlenmesi sebebiyle zarara uğramanız halinde bu zararın tazmin edilmesini isteme hakkına sahipsiniz.</p>
<p>Başvurunuzda yer alan talepleriniz, talebin niteliğine göre en kısa sürede ve en geç otuz gün içinde sonuçlandırılacaktır.</p>
<p>6. Tarafımıza bildirmiş olduğunuz kişisel verilerinize ilişkin haklarınızı ne şekilde kullanabilirsiniz?
KVKK Madde 11'de yer alan ve yukarıda sayılan haklarınızı İletişim sayfamızda yer alan e-posta adresine KVKK Başvuru Formu’nu doldurarak iletmeniz halinde kullanabilirsiniz.</p>

</p>
      </LayoutOne>
    </Fragment>
  );
};

export default Kvk;
