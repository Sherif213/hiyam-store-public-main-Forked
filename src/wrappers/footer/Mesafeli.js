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

const Mesafeli = () => {
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
            { label: t("MESAFELİ SATIŞ SÖZLEŞMESİ"), path: process.env.PUBLIC_URL + pathname },
          ]}
        />
       <p style={{marginLeft:'4rem'}}>
       <h3> MESAFELİ SATIŞ SÖZLEŞMESİ</h3>
<p>MADDE 1- TARAFLAR</p>
<p>1.1. SATICI:</p>
<p>Unvanı: HIYAM KATANOĞLU </p>
<p>Adresi: </p>
<p>Telefon: </p>
<p>Fax: </p>
<p>Müşteri Hizmetleri Telefon: </p>
<p>Mersis Numarası: </p>
<p>1.2. ALICI("TÜKETİCİ"):</p>
<p>Adı/Soyadı/Unvanı:</p>
<p>Adresi: </p>
<p>Telefon: </p>
<p>E-mail: </p>
<p>VKN: </p>
<p>MADDE 2- KONU</p>
<p>İşbu sözleşmenin konusu, TÜKETİCİ''nin SATICI’nın internet sitesiden elektronik ortamda siparişini yaptığı aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkındaki Kanun hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.</p>
<p>MADDE 3- SÖZLEŞME KONUSU ÜRÜN, ÖDEME VE TESLİMATA İLİŞKİN BİLGİLER</p>
<p>3.1- Sözleşme konusu mal veya hizmetin adı, adeti, KDV dahil satış fiyatı, ödeme şekli ve temel nitelikleri</p>
<p>Ürün Adı ve Temel Nitelikleri       </p>                                                      	 <p>Adet	Satış Bedeli</p>
<p>(KDV dahil toplam Türk Lirası)	Vadeli Satış Bedeli</p>
<p>(KDV dahil toplam)</p>
__________________________________________________	  _____	_____	______

<p>3.2- Ödeme Şekli:</p>
<p>Kredi Kartı ile İşlem</p>
<p>Sipariş özeti sayfasında sipariş toplamının kaç taksitle ödeneceği bilgisi bulunmaktadır.
Bankanız kampanyalar düzenleyerek sizin seçtiğiniz taksit adedinin daha üstünde bir taksit adedi uygulayabilir, taksit öteleme gibi hizmetler sunulabilir. Bu tür kampanyalar bankanızın inisiyatifindedir ve şirketimizin bilgisi dâhilinde olması durumunda sayfalarımızda kampanyalar hakkında bilgi verilmektedir.</p>
<p>Kredi kartınızın hesap kesim tarihinden itibaren sipariş toplamı taksit adedine bölünerek kredi kartı özetinize bankanız tarafından yansıtılacaktır. Banka taksit tutarlarını küsurat farklarını dikkate alarak aylara eşit olarak dağıtmayabilir. Detaylı ödeme planınızın oluşturulması bankanız inisiyatifindedir.</p>
<p>3.3- Diğer yandan vadeli satışların sadece Bankalara ait kredi kartları ile yapılması nedeniyle, TÜKETİCİ, ilgili faiz oranlarını ve temerrüt faizi ile ilgili bilgileri bankasından ayrıca teyit edeceğini, yürürlükte bulunan mevzuat hükümleri gereğince faiz ve temerrüt faizi ile ilgili hükümlerin Banka ve TÜKETİCİ arasındaki kredi kartı sözleşmesi kapsamında uygulanacağını kabul, beyan ve taahhüt eder.</p>
<p>Ayrıca, Kredili satış imkanının Bankalar tarafından sadece Banka Müşterisi olan TÜKETİCİ'ye sağlanması nedeniyle, TÜKETİCİ, ilgili faiz oranlarını ve temerrüt faizi ile ilgili bilgileri bankasından ayrıca teyit edeceğini, yürürlükte bulunan mevzuat hükümleri gereğince faiz ve temerrüt faizi ile ilgili hükümlerin Banka ve TÜKETİCİ arasındaki Anında/Mesafeli Alışveriş Kredisi sözleşmesi kapsamında uygulanacağını kabul, beyan ve taahhüt eder. Kredi verme ve detaylı ödeme planınızın oluşturulması Bankanız inisiyatifindedir.</p>
<p>3.4- İade Prosedürü:</p>
<p>İade işlemlerinde, iade etmek istediğiniz ürünün ambalajının/paketinin açılmamış ve/veya kullanılmamış, hasar görmemiş, barkodunun zedelenmemiş, kopmamış olması gerekir. İade etmek istediğiniz ürün veya ürünleri orijinal kutusu ve tüm aksesuarları ile göndermelisiniz. Satın alınabilirliğini kaybetmiş ürünlerde cayma hakkı kullanılmaz. Kozmetik, kişisel bakım ürünlerinin ambalajlarının açılmamış, denenmemiş, bozulmamış ve kullanılmamış olmaları halinde iade edilebilir. 
TÜKETİCİ'nin cayma hakkını kullandığı durumlarda ya da siparişe konu olan ürünün çeşitli sebeplerle tedarik edilememesi veya hakem heyeti kararları ile TÜKETİCİ'ye bedel iadesine karar verilen durumlarda, ödeme seçeneklerine ilişkin iade prosedürü aşağıda belirtilmiştir:</p>
<p>a) Kredi Kartı ile Ödeme Seçeneklerinde İade Prosedürü</p>
<p>Alışveriş kredi kartı ile ve taksitli olarak yapılmışsa, TÜKETİCİ ürünü kaç taksit ile aldıysa Banka TÜKETİCİ'ye geri ödemesini taksitle yapmaktadır. SATICI bankaya ürün bedelinin tamamını tek seferde ödedikten sonra, Banka poslarından yapılan taksitli harcamaların TÜKETİCİ'nin kredi kartına iadesi durumunda, konuya müdahil tarafların mağdur duruma düşmemesi için talep edilen iade tutarları, yine taksitli olarak hamil taraf hesaplarına Banka tarafından aktarılır. TÜKETİCİ'nin satış iptaline kadar ödemiş olduğu taksit tutarları, eğer iade tarihi ile kartın hesap kesim tarihleri çakışmazsa her ay karta 1 (bir) iade yansıyacak ve TÜKETİCİ iade öncesinde ödemiş olduğu taksitleri satışın taksitleri bittikten sonra, iade öncesinde ödemiş olduğu taksitleri sayısı kadar ay daha alacak ve mevcut borçlarından düşmüş olacaktır.</p>
<p>Kart ile alınmış mal ve hizmetin iadesi durumunda SATICI, Banka ile yapmış olduğu sözleşme gereği TÜKETİCİ'ye nakit para ile ödeme yapamaz. SATICI, bir iade işlemi söz konusu olduğunda ilgili yazılım aracılığı ile iadesini yapacak olup, SATICI ilgili tutarı Banka'ya nakden veya mahsuben ödemekle yükümlü olduğundan yukarıda anlatmış olduğumuz prosedür gereğince TÜKETİCİ'ye nakit olarak ödeme yapılamamaktadır. Kredi kartına iade, SATICI'nın Banka'ya bedeli tek seferde ödemesinden sonra, Banka tarafından yukarıdaki prosedür gereğince yapılacaktır.</p>
<p>TÜKETİCİ, bu prosedürü okuduğunu ve kabul ettiğini kabul ve taahhüt eder.</p>
<p>b) Havale/EFT Ödeme Seçeneklerinde İade Prosedürü</p>
<p>İade, TÜKETİCİ'den banka hesap bilgileri istenerek, TÜKETİCİ'nin belirttiği hesaba (hesabın fatura adresindeki kişinin adına veya kullanıcı üyenin adına olması şarttır) havale ve EFT şeklinde yapılacaktır.
SATICI bankaya ürün bedelinin tamamını tek seferde geri öder.</p>
<p>Havale/EFT yoluyla alınmış mal ve hizmetin iadesi durumunda SATICI, Banka ile yapmış olduğu sözleşme gereği TÜKETİCİ'ye nakit para ile ödeme yapamaz. SATICI, bir iade işlemi söz konusu olduğunda ilgili yazılım aracılığı ile iadesini yapacak olup, SATICI ilgili tutarı Banka'ya nakden veya mahsuben ödemekle yükümlü olduğundan yukarıda anlatmış olduğumuz prosedür gereğince TÜKETİCİ'ye nakit olarak ödeme yapılamamaktadır.</p>
<p>TÜKETİCİ, bu prosedürü okuduğunu ve kabul ettiğini kabul ve taahhüt eder.</p>
<p>3.5- Teslimat Şekli ve Adresi:</p>
<p>Teslimat Adresi:</p>
<p>Teslim Edilecek Kişi: </p>
<p>Fatura Adresi: </p>
<p>Paketleme, kargo ve teslim masrafları TÜKETİCİ tarafından karşılanmaktadır. Kargo ücreti ____ -TL olup, kargo fiyatı sipariş toplam tutarına eklenmektedir. Ürün bedeline dahil değildir. Teslimat, anlaşmalı kargo şirketi aracılığı ile, TÜKETİCİ'nin yukarıda belirtilen adresinde elden teslim edilecektir. Teslim anında TÜKETİCİ'nin adresinde bulunmaması durumunda dahi Firmamız edimini tam ve eksiksiz olarak yerine getirmiş olarak kabul edilecektir. Bu nedenle, TÜKETİCİ'nin ürünü geç teslim almasından ve/veya hiç teslim almamasından kaynaklanan zararlardan ve giderlerden SATICI sorumlu değildir. SATICI, sözleşme konusu ürünün sağlam, eksiksiz, siparişte belirtilen niteliklere uygun ve varsa garanti belgeleri ve kullanım kılavuzları ile teslim edilmesinden sorumludur.</p>
<p>MADDE 4- CAYMA HAKKI</p>
<p>TÜKETİCİ, SATICI ile imzaladığı işbu Mesafeli Satış Sözleşmesi'nden 14 (ondört) gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin cayma hakkına sahiptir. TÜKETİCİ, sözleşme konusu malı, cayma hakkını kullandığı tarihten itibaren 10 gün içinde satıcıya ya da satıcının belirlediği taşıyıcıya iade etmekle yükümlüdür. Cayma hakkı süresi, hizmet ifasına ilişkin sözleşmelerde sözleşmenin kurulduğu gün; mal teslimine ilişkin sözleşmelerde ise TÜKETİCİ'nin veya TÜKETİCİ tarafından belirlenen üçüncü kişinin malı teslim aldığı gün başlar. Ancak TÜKETİCİ, sözleşmenin kurulmasından malın teslimine kadar olan süre içinde de cayma hakkını kullanabilir. Cayma hakkı süresinin belirlenmesinde;</p>
<p>a) Tek sipariş konusu olup ayrı ayrı teslim edilen mallarda, TÜKETİCİ'nin veya TÜKETİCİ tarafından belirlenen üçüncü kişinin son malı teslim aldığı gün,</p>
<p>b) Birden fazla parçadan oluşan mallarda, TÜKETİCİ'nin veya TÜKETİCİ tarafından belirlenen üçüncü kişinin son parçayı teslim aldığı gün,</p>
<p>c) Belirli bir süre boyunca malın düzenli tesliminin yapıldığı sözleşmelerde, TÜKETİCİ'nin veya TÜKETİCİ tarafından belirlenen üçüncü kişinin ilk malı teslim aldığı gün esas alınır. Cayma bildiriminizi cayma hakkı süresi dolmadan İnternet Sitesi'nde yer alan kişisel üyelik sayfanızdaki kolay iade seçeneği üzerinden gerçekleştirebilirsiniz. Cayma hakkınız kapsamında öngörülen taşıyıcı sipariş edilen ürünün tarafınıza teslim edildiği kargo firması olup, İnternet Sitesi'nde yer alan kişisel üyelik sayfanızdaki kolay iade seçeneğinde geri gönderime ilişkin detaylar açıklanmıştır.</p>
<p>Tüketici aşağıdaki sözleşmelerde cayma hakkını kullanamaz:</p>
<p>a) Fiyatı finansal piyasalardaki dalgalanmalara bağlı olarak değişen ve SATICI veya sağlayıcının kontrolünde olmayan mal veya hizmetlere ilişkin sözleşmeler.</p>
<p>b) Tüketicinin istekleri veya kişisel ihtiyaçları doğrultusunda hazırlanan mallara ilişkin sözleşmeler.</p>
<p>c) Çabuk bozulabilen veya son kullanma tarihi geçebilecek malların teslimine ilişkin sözleşmeler.</p>
<p>ç) Tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olan mallardan; iadesi sağlık ve hijyen açısından uygun olmayanların teslimine ilişkin sözleşmeler.</p>
<p>d) Tesliminden sonra başka ürünlerle karışan ve doğası gereği ayrıştırılması mümkün olmayan mallara ilişkin sözleşmeler.</p>
<p>e) Malın tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olması halinde maddi ortamda sunulan kitap, dijital içerik ve bilgisayar sarf malzemelerine ilişkin sözleşmeler.</p>
<p>f) Abonelik sözleşmesi kapsamında sağlananlar dışında, gazete ve dergi gibi süreli yayınların teslimine ilişkin sözleşmeler.</p>
<p>g) Belirli bir tarihte veya dönemde yapılması gereken, konaklama, eşya taşıma, araba kiralama, yiyecek-içecek tedariki ve eğlence veya dinlenme amacıyla yapılan boş zamanın değerlendirilmesine ilişkin sözleşmeler.</p>
<p>ğ) Elektronik ortamda anında ifa edilen hizmetler veya TÜKETİCİ'ye anında teslim edilen gayrimaddi mallara ilişkin sözleşmeler.</p>
<p>h) Cayma hakkı süresi sona ermeden önce, TÜKETİCİ'nin onayı ile ifasına başlanan hizmetlere ilişkin sözleşmeler.</p>
<p>MADDE 5- GENEL HÜKÜMLER</p>
<p>5.1- TÜKETİCİ, SATICI’nın internet sitesinde sözleşme konusu ürüne ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini beyan eder.</p>
<p>5.2- Ürün sözleşme tarihinden itibaren en geç 30 gün içerisinde teslim edilecektir. Ürününün teslim edilmesi anına kadar tüm sorumluluk SATICI'ya aittir.</p>
<p>5.3- Sözleşme konusu ürün, TÜKETİCİ'dan başka bir kişi/kuruluşa teslim edilecek ise, teslim edilecek kişi/kuruluşun teslimatı kabul etmemesinden SATICI sorumlu tutulamaz.</p>
<p>5.4- SATICI, sözleşme konusu ürünün sağlam, eksiksiz, siparişte belirtilen niteliklere uygun ve varsa garanti belgeleri ve kullanım kılavuzları ile teslim edilmesinden sorumludur.</p>
<p>5.5- Sözleşme konusu ürünün teslimatı için işbu sözleşmenin bedelinin TÜKETİCİ'nin tercih ettiği ödeme şekli ile ödenmiş olması şarttır. Herhangi bir nedenle ürün bedeli ödenmez veya banka kayıtlarında iptal edilir ise, SATICI ürünün teslimi yükümlülüğünden kurtulmuş kabul edilir.</p>
<p>5.6- Ürünün tesliminden sonra TÜKETİCİ'ya ait kredi kartının TÜKETİCİ'nin kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce haksız veya hukuka aykırı olarak kullanılması nedeni ile ilgili banka veya finans kuruluşun ürün bedelini SATICI'ya ödememesi halinde, TÜKETİCİ'nin kendisine teslim edilmiş olması kaydıyla ürünün SATICI'ya gönderilmesi zorunludur.</p>
<p>5.7- 385 sayılı vergi usul kanunu genel tebliği uyarınca iade işlemlerinin yapılabilmesi için tarafınıza göndermiş olduğumuz iade bölümü bulunan faturada ilgili bölümlerin eksiksiz olarak doldurulması ve imzalandıktan sonra tarafımıza ürün ile birlikte geri gönderilmesi gerekmektedir.</p>
<p>5.8- Satışı ilgili mevzuatlar gereği resmi merciler nezdinde gerçekleştirilecek resmi işlemler ile tamamlanması öngörülen ürünler için Ön Bilgilendirme Formu ve Mesafeli Satış Sözleşmesi bir ön protokol niteliğindedir. Bu ürünlerin toplam bedeline satışa ilişkin resmi işlemlerin tamamlanması sırasında ortaya çıkacak masraflar dahil değildir. Söz konusu masraflar TÜKETİCİ tarafından resmi işlemlerin yerine getirilmesi esnasında ödenecektir. Bu satışlar, resmi merciler nezdinde resmi işlemlerin yerine getirilmesi ile tamamlanmış sayılacaktır. Bu kapsamda cayma hakkı, kargo / teslimat ve benzeri nitelikteki uygulama alanı bulunmayan hükümler bu ürünler için geçerli olmayacaktır.</p>
<p>MADDE 6- UYUŞMAZLIK VE YETKİLİ MAHKEME</p>
<p>İşbu sözleşme ile ilgili çıkacak ihtilaflarda; Türk Mahkemeleri yetkili olup, uygulanacak hukuk Türk Hukuku'dur.</p>
<p>Türkiye Cumhuriyeti sınırları içerisinde geçerli olmak üzere her yıl Ticaret Bakanlığı tarafından ilan edilen değere kadar olan ihtilaflar için TÜKETİCİ işleminin yapıldığı veya TÜKETİCİ ikametgahının bulunduğu yerdeki İl veya İlçe Tüketici Hakem Heyetleri, söz konusu değerin üzerindeki ihtilaflarda ise TÜKETİCİ işleminin yapıldığı veya TÜKETİCİ ikametgahının bulunduğu yerdeki Tüketici Mahkemeleri Yetkili olacaktır.</p>
<p>Siparişin gerçekleşmesi durumunda TÜKETİCİ işbu sözleşmenin tüm koşullarını kabul etmiş sayılır.</p>
<p>SATICI: HIYAM KATANOĞLU</p>

<p>ALICI("TÜKETİCİ"): </p>

<p>Tarih : </p>
</p>
      </LayoutOne>
    </Fragment>
  );
};

export default Mesafeli;
