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

const Bilgi = () => {
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
            { label: t("ÖN BİLGİLENDİRME FORMU"), path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <p style={{marginLeft:'4rem'}}>
     
       <h3>ÖN BİLGİLENDİRME FORMU</h3> 
<p>SATICI:</p>
<p>Unvanı: HİYAM KATANOĞLU</p>
<p>Adresi: ______________________</p>
<p>Telefon:______________________</p>
<p>Fax: ___________________</p>
<p>Müşteri Hizmetleri Telefon: ________________________</p>
<p>Mersis Numarası: _________________________________</p>
<p> BİLGİLENDİRME FORMU</p>

<p>1) Sözleşme konusu mal veya hizmetin adı, adeti, KDV dahil satış fiyatı, ödeme şekli ve temel nitelikleri</p>

<p>Ödeme Şekli: Kredi Kartı ile İşlem</p>
<p>Sipariş özeti sayfasında sipariş toplamının kaç taksitle ödeneceği bilgisi bulunmaktadır.
Bankanız kampanyalar düzenleyerek sizin seçtiğiniz taksit adedinin daha üstünde bir taksit adedi uygulayabilir, taksit öteleme gibi hizmetler sunulabilir. Bu tür kampanyalar bankanızın inisiyatifindedir ve şirketimizin bilgisi dâhilinde olması durumunda sayfalarımızda kampanyalar hakkında bilgi verilmektedir.</p>
<p>Kredi kartınızın hesap kesim tarihinden itibaren sipariş toplamı taksit adedine bölünerek kredi kartı özetinize bankanız tarafından yansıtılacaktır. Banka taksit tutarlarını küsurat farklarını dikkate alarak aylara eşit olarak dağıtmayabilir. Detaylı ödeme planınızın oluşturulması bankanız inisiyatifindedir.</p>

<p>Ürün Adı ve Temel Nitelikleri	Adet	Satış Bedeli
(KDV dahil toplam Türk Lirası)	Vadeli Satış Bedeli
(KDV dahil toplam)
____________________________________________		_______	Vadesiz

</p>
<p>2) Paketleme, kargo ve teslim masrafları ALICI tarafından karşılanmaktadır. Kargo ücreti _____ olup, kargo fiyatı sipariş toplam tutarına eklenmektedir. Ürün bedeline dahil değildir. Teslimat, anlaşmalı kargo şirketi aracılığı ile, ALICI'nın yukarıda belirtilen adresinde elden teslim edilecektir. Teslim anında ALICI'nın adresinde bulunmaması durumunda dahi Firmamız edimini tam ve eksiksiz olarak yerine getirmiş olarak kabul edilecektir. Bu nedenle, ALICI'nın ürünü geç teslim almasından ve/veya hiç teslim almamasından kaynaklanan zararlardan ve giderlerden SATICI sorumlu değildir. SATICI, sözleşme konusu ürünün sağlam, eksiksiz, siparişte belirtilen niteliklere uygun ve varsa garanti belgeleri ve kullanım kılavuzları ile teslim edilmesinden sorumludur.</p>



<p>3) Ürün sözleşme tarihinden itibaren en geç 30 gün içerisinde teslim edilecektir. Ürününün teslim edilmesi anına kadar tüm sorumluluk SATICI’ya aittir.</p>
<p>4) Tüketici (ALICI), 14 (ondört) gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin işbu Mesafeli Satış Sözleşmesin’den cayma hakkına sahiptir. TÜKETİCİ, sözleşme konusu malı, cayma hakkını kullandığı tarihten itibaren 10 gün içinde satıcıya ya da satıcının belirlediği taşıyıcıya iade etmekle yükümlüdür. Cayma hakkı süresi, hizmet ifasına ilişkin sözleşmelerde sözleşmenin kurulduğu gün; mal teslimine ilişkin sözleşmelerde ise tüketicinin veya tüketici tarafından belirlenen üçüncü kişinin malı teslim aldığı gün başlar. Ancak tüketici, sözleşmenin kurulmasından malın teslimine kadar olan süre içinde de cayma hakkını kullanabilir. Cayma hakkı süresinin belirlenmesinde;</p>
<p>
a) Tek sipariş konusu olup ayrı ayrı teslim edilen mallarda, tüketicinin veya tüketici tarafından belirlenen üçüncü kişinin son malı teslim aldığı gün,</p>
<p>b) Birden fazla parçadan oluşan mallarda, tüketicinin veya tüketici tarafından belirlenen üçüncü kişinin son parçayı teslim aldığı gün,</p>
<p>
c) Belirli bir süre boyunca malın düzenli tesliminin yapıldığı sözleşmelerde, tüketicinin veya tüketici tarafından belirlenen üçüncü kişinin ilk malı teslim aldığı gün esas alınır. Cayma bildiriminizi cayma hakkı süresi dolmadan gerçekleştirebilirsiniz. Cayma hakkınız kapsamında öngörülen taşıyıcı sipariş edilen ürünün tarafınıza teslim edildiği kargo firmasıdır.</p>
<p>
Tüketici aşağıdaki sözleşmelerde cayma hakkını kullanamaz:</p>
<p>
a) Fiyatı finansal piyasalardaki dalgalanmalara bağlı olarak değişen ve SATICI veya sağlayıcının kontrolünde olmayan mal veya hizmetlere ilişkin sözleşmeler.</p>
<p>
b) Tüketicinin istekleri veya kişisel ihtiyaçları doğrultusunda hazırlanan mallara ilişkin sözleşmeler.</p>
<p>
c) Çabuk bozulabilen veya son kullanma tarihi geçebilecek malların teslimine ilişkin sözleşmeler.</p>
<p>
ç) Tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olan mallardan; iadesi sağlık ve hijyen açısından uygun olmayanların teslimine ilişkin sözleşmeler.</p>
<p>
d) Tesliminden sonra başka ürünlerle karışan ve doğası gereği ayrıştırılması mümkün olmayan mallara ilişkin sözleşmeler.</p>
<p>
e) Malın tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olması halinde maddi ortamda sunulan kitap, dijital içerik ve bilgisayar sarf malzemelerine ilişkin sözleşmeler.</p>
<p>
f) Abonelik sözleşmesi kapsamında sağlananlar dışında, gazete ve dergi gibi süreli yayınların teslimine ilişkin sözleşmeler.</p>
<p>
g) Belirli bir tarihte veya dönemde yapılması gereken, konaklama, eşya taşıma, araba kiralama, yiyecek-içecek tedariki ve eğlence veya dinlenme amacıyla yapılan boş zamanın değerlendirilmesine ilişkin sözleşmeler.</p>
<p>
ğ) Elektronik ortamda anında ifa edilen hizmetler veya tüketiciye anında teslim edilen gayrimaddi mallara ilişkin sözleşmeler.</p>
<p>
h) Cayma hakkı süresi sona ermeden önce, tüketicinin onayı ile ifasına başlanan hizmetlere ilişkin sözleşmeler.</p>

<p>
6) Tüketicilerin şikâyet ve itirazları: Siparişinize ve/veya siparişinize konu ürüne ve/veya siparişinizle ilgili herhangi bir konuda şikayetinizin olması halinde şikayetlerinizi yukarıda belirtilen iletişim bilgileri veya _____________ internet sitesinde belirtilen iletişim bilgileri vasıtasıyla SATICI’ya iletebilirsiniz. İletmiş olduğunuz şikâyet başvurularınız derhal kayıtlara alınacak, yetkili birimler tarafından değerlendirilerek çözümlenmeye çalışılacak ve en kısa sürede size geri dönüş sağlanacaktır. İşbu sözleşme ile ilgili çıkacak ihtilaflarda; Türk Mahkemeleri yetkili olup, uygulanacak hukuk Türk Hukuku’dur.
Türkiye Cumhuriyeti sınırları içerisinde geçerli olmak üzere İş bu Sözleşme ile ilgili çıkacak ihtilaflarda; her yıl Ticaret Bakanlığı tarafından ilan edilen değere kadar olan ihtilaflar için TÜKETİCİ işleminin yapıldığı veya TÜKETİCİ ikametgahının bulunduğu yerdeki İl veya İlçe Tüketici Hakem Heyetleri, söz konusu değerin üzerindeki ihtilaflarda ise TÜKETİCİ işleminin yapıldığı veya TÜKETİCİ ikametgahının bulunduğu yerdeki Tüketici Mahkemeleri yetkili olacaktır.</p>
<p>
7) Satışı ilgili mevzuatlar gereği resmi merciler nezdinde gerçekleştirilecek resmi işlemler ile tamamlanması öngörülen ürünler için Ön Bilgilendirme Formu ve Mesafeli Satış Sözleşmesi bir ön protokol niteliğindedir. Bu ürünlerin toplam bedeline satışa ilişkin resmi işlemlerin tamamlanması sırasında ortaya çıkacak masraflar dahil değildir. Söz konusu masraflar TÜKETİCİ tarafından resmi işlemlerin yerine getirilmesi esnasında ödenecektir. Bu satışlar, resmi merciler nezdinde resmi işlemlerin yerine getirilmesi ile tamamlanmış sayılacaktır. Bu kapsamda cayma hakkı, kargo / teslimat ve benzeri nitelikteki uygulama alanı bulunmayan hükümler bu ürünler için geçerli olmayacaktır.</p>

<p>SATICI:</p>
<p>
Unvanı: HIYAM KATANOĞLU</p>
<p>
Adresi: </p>
<p>
Telefon:  </p>
<p>
Fax: </p>
<p>
Müşteri Hizmetleri Telefon: </p>
<p>
Mersis Numarası: </p>
<p>
ALICI:</p>
<p>
Adı/soyadı/Unvanı: </p>
<p>Adresi: </p>
<p>Telefon: </p>
<p>E-mail: </p>
<p>VKN: </p>
<p>Tarih : </p>


</p>
      </LayoutOne>
    </Fragment>
  );
};

export default Bilgi;
