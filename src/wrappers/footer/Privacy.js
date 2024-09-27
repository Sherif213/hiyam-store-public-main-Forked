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

const Privacy = () => {
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
            { label: t("Privacy"), path: process.env.PUBLIC_URL + pathname },
          ]}
        />
      <p style={{marginLeft:'4rem'}}>
     <h3> Gizlilik Bildirimi </h3>
<p>Kişisel verilerinize ve bunların nasıl kullanıldığına önem verdiğinizi biliyoruz ve HİYAM'in kişisel verilerinizi dikkatli bir şekilde kullandığına güvenmenizi istiyoruz. Bu Gizlilik Bildirimi, hangi kişisel verileri topladığımızı, bunları neden topladığımızı ve bunlarla ne yaptığımızı anlamanıza yardımcı olacaktır.</p>
<p>Gizlilik uygulamalarımızı tanımak için lütfen bir dakikanızı ayırın ve herhangi bir sorunuz olması halinde, e-posta göndererek veya web sitelerimizdeki "Bize Ulaşın" formu aracılığıyla bir talep göndererek bize sorularınızı bildirin.</p>
<p>Kişisel verilerinizin doğrudan pazarlama için kullanılması da dâhil olmak üzere belirli kullanımlarına itiraz etme hakkına sahipsiniz. Haklarınızın neler olduğunu ve bunları nasıl kullanabileceğinizi buradan öğrenin.</p>
<p>Kim topluyor?</p>
<p>HİYAM'a sağlanan veya HİYAM tarafından toplanan tüm kişisel veriler, veri sorumlusu olan HİYAM tarafından kontrol edilir.</p>
<p>Bu Gizlilik Bildirimi, sunduğumuz hizmetler ve ürünlerle bağlantılı olarak HİYAM tarafından toplanan kişisel veriler için geçerlidir. Bu Bildirimde "HİYAM" şirketine yapılan atıflar, HİYAM şirketi ve ayrıca, HİYAM’ın doğrudan veya dolaylı olarak sahip olduğu ve/veya kontrol ettiği ve sizin etkileşimde bulunduğunuz veya bir iş ilişkiniz olan herhangi bir şirket anlamına gelir.</p>
<p>Bu Gizlilik Bildirimi, bizim site kullanım bilgilerinize dayanarak üçüncü taraf web siteleri, platformları ve uygulamaları üzerinden size gönderdiğimiz (veya bizim adımıza hareket eden bir hizmet sağlayıcının size gönderdiği) HİYAM ürünleri ve hizmetleri için teklifler ve reklamlar da dâhil olmak üzere HİYAM'in pazarlama içeriği için de geçerlidir. Bu üçüncü taraf web sitelerinin genellikle kendi Gizlilik Bildirimi ve Hüküm ve Koşulları vardır. Bu web sitelerini kullanmadan önce bunları okumanızı tavsiye ederiz.</p>
<p>Hangi Kişisel Veriler Toplanıyor?</p>
<p>Kişisel veriler, belirli bir kişinin kimliğini doğrudan veya dolaylı olarak tespit etmek için kullanılabilecek her türlü bilgi anlamına gelir.</p>
<p>Talep ettiğimiz kişisel verileri HİYAM'a vermek zorunda değilsiniz, ancak bunu yapmamayı tercih ederseniz, size ürünlerimizi veya hizmetlerimizi ya da yüksek kalitede bir hizmeti sunamayabilir ya da sorularınıza yanıt veremeyebiliriz.</p>
<p>Kişisel verileri çeşitli kaynaklardan toplayabiliriz. Bu kaynaklar arasında şunlar vardır:
Bize doğrudan verdiğiniz kişisel veriler,</p>
<p>Otomatik olarak topladığımız kişisel veriler ve
Başka kaynaklardan topladığımız kişisel veriler</p>
<p>Kişisel veriler, belirli bir kişinin kimliğini doğrudan veya dolaylı olarak tespit etmek için kullanılabilecek her türlü bilgi anlamına gelir. Bu tanım, Tüketici Hattımız, doğrudan pazarlama kampanyalarımız, çekilişlerimiz ve yarışmalarımız aracılığıyla çevrimdışı olarak ve ayrıca, web sitelerimiz, uygulamalarımız ve üçüncü taraf platformlardaki markalı sayfalarımız ve üçüncü taraf platformlar vasıtasıyla erişilen veya kullanılan uygulamalar aracılığıyla çevrimiçi olarak toplanan kişisel verileri içerir.</p>
<p>Bu tanım, Tüketici Hattımız, doğrudan pazarlama kampanyalarımız, çekilişlerimiz ve yarışmalarımız aracılığıyla çevrimdışı olarak ve ayrıca, web sitelerimiz, uygulamalarımız ve üçüncü taraf platformlarındaki markalı sayfalarımız ve üçüncü taraf platformları vasıtasıyla erişilen veya kullanılan uygulamalar üzerinden çevrimiçi olarak toplanan kişisel verileri kapsar.</p>
<p>Bizimle iletişime geçtiğinizde kişisel verilerinizi vermeniz istenebilir. HİYAM şirketleri kişisel verilerinizi birbirleriyle ve diğer HİYAM Grup şirketleriyle paylaşabilir ve bu Gizlilik Bildirimi çerçevesinde kullanabilir. Ayrıca ürünlerimizi, hizmetlerimizi, içeriğimizi ve reklamlarımızı geliştirmek için bu bilgileri başka bilgilerle de birleştirebiliriz.</p>
<p>Talep ettiğimiz kişisel verileri HİYAM'e vermek zorunda değilsiniz, ancak bunu yapmamayı tercih ederseniz, size ürünlerimizi veya hizmetlerimizi veya yüksek kalitede bir hizmeti sunamayabilir ya da sorularınıza yanıt veremeyebiliriz.</p>
<p>Kişisel verilerinizi toplama yöntemlerimiz</p>
<p>Kişisel verileri çeşitli kaynaklardan toplayabiliriz. Bunlar arasında aşağıda açıklananlar yer almaktadır:</p>
<p>Bize doğrudan verdiğiniz kişisel veriler. Görüntülediğiniz veya etkileşimde bulunduğunuz içerik türleri veya faaliyetlerinizin sıklığı ve süresi gibi hizmetlerimizi ve ürünlerimizi nasıl kullandığınız hakkında veri toplarız. Ayrıca bir pazarlama bültenine kaydolduğunuzda, bir anketi doldurduğunuzda veya ürünlerimizi satın almak için bir hesaba kaydolduğunuzda bize verdiğiniz kişisel verileri de toplarız. Bunu yaparken adınız, cinsiyetiniz, doğum tarihiniz, adresiniz, e-posta adresiniz, telefon numaranız veya kredi kartı bilgileriniz gibi kişisel verilerinizi de isteyebiliriz. Bazı HİYAM markaları, sizin açık izninizle, hakkınızda "özel kategorideki kişisel verileri" toplayabilir. Topladığımız özel kategorideki veriler ve bunları nasıl kullandığımız hakkında daha fazla bilgi için lütfen aşağıdaki ilgili bölüme bakın.</p>
<p>Otomatik olarak topladığımız kişisel veriler. Bizimle çevrimiçi etkileşime girdiğinizde belirli türde kişisel verileri de alır ve saklarız. Örneğin, web tarayıcınız web sitelerimize veya diğer web sitelerinde HİYAM tarafından veya HİYAM adına sunulan reklamlara ve diğer içeriklere eriştiğinde kişisel verileri elde etmek için çerezleri ve izleme kullanırız. Kişisel verileriniz ayrıca arama yaptığınızda, satın alma yaptığınızda, gönderi paylaştığınızda, bir yarışmaya veya ankete katıldığınızda ya da müşteri hizmetleri ekiplerimizle iletişim kurduğunuzda da toplanır. Topladığımız kişisel veri türlerine örnek olarak şunlar verilebilir: IP adresi cihaz kimliği, konum verileri, tarayıcı türü ve sürümü, saat dilimi ayarı, tarayıcı eklenti türleri ve sürümleri, işletim sistemi ve satın alma geçmişi gibi bilgisayar ve bağlantı bilgileri - HİYAM bu verileri bazen diğer tüketicilerden gelen benzer bilgilerle bir araya getirir. HİYAM'in web sitelerindeki bazı internet gezintileriniz sırasında, sayfa yanıt süreleri, indirme hataları, belirli sayfalara yapılan ziyaretlerin uzunluğu, sayfa etkileşim bilgileri ve sayfadan uzağa göz atmak için kullanılan yöntemler de dâhil olmak üzere oturum bilgilerini ölçmek ve toplamak için yazılım araçları da kullanabiliriz. Ayrıca dolandırıcılığı önleme ve teşhis amacıyla cihazınızı tanımlamamıza yardımcı olacak teknik bilgiler de toplayabiliriz.</p>
<p>Başka kaynaklardan topladığımız kişisel veriler. Üçüncü taraflarla olan güvenilir ortaklıklarımız ve üçüncü taraf platformlarında HİYAM hesaplarını işlettiğimiz yerler de dâhil olmak üzere başka kaynaklardan kişisel veriler toplarız: Örneğin, Facebook'ta "beğen" işlevini veya Google+'da +1 işlevini kullandığınızda kişisel veriler toplarız. Ek olarak, reklamlarımızın alakalı ve başarılı olup olmadığını ölçmek için sizin ve diğer ziyaretçilerin reklamlarımızla etkileşimleri hakkında bilgi alırız. Ayrıca, ortaklaşa hizmet veya ürün sunduğumuzda bir üçüncü taraftan ya da elimizdeki kişisel veriler hakkında HİYAM'a içgörü sağlayabilecek üçüncü taraf veri zenginleştirme sağlayıcılarından siz ve faaliyetleriniz hakkında bilgi topluyoruz.</p>
<p>"Özel kategorilerdeki kişisel verileri" ne zaman ve neden topluyoruz?</p>
<p>Bu özel veri kategorilerini topladığımız ve işlediğimiz durumları sınırlandırıyoruz.  </p>
<p>HİYAM bazen size özel reklamlar ve ilgili promosyonlar göndermek için alerjiler, hamilelik veya cilt tipi gibi sağlığınızla ilgili verileri toplar. HİYAM bu kişisel verileri yalnızca bunun için bize izin verdiğiniz durumlarda toplar ve kullanır. Bazı durumlarda, doğrudan herhangi bir özel veri kategorisinin toplanmasını içermeyen, ancak sağlığınızı veya diğer özel veri kategorilerini ima edebilecek veya önerebilecek hizmetler veya ürünler talep etmiş olabilirsiniz.</p>
<p>HİYAM'ın özel kategorilerdeki verileri topladığı ve işlediği durumları göstermek için aşağıdaki örneği verdik:</p>
<p>HİYAM, tüketicilere ihtiyaçlarına uygun ürünlere ilişkin reklam ve promosyonlar sunmak için tüketicilerin alerjileriyle ilgili kişisel verileri de toplamaktadır.</p>
<p>Çocukların mahremiyeti ve gizliliğini nasıl koruruz?</p>
<p>HİYAM ürün ve hizmetlerini kullanan çocukların gizliliğini ve güvenliğini korumak için ekstra önlemler almanın önemini anlıyoruz.</p>
<p>HİYAM'ın web sitelerinin çoğu, yetişkinlerce kullanılmak üzere tasarlanmış ve düzenlenmiştir. Web sitelerimizden birinin daha genç bir kitle tarafından kullanılması amaçlandığında, cari yasalar ve mevzuatın gerektirdiği durumlarda kişisel verileri toplamadan önce ebeveyn sorumluluğuna sahip kişiden izin alacağız (onayın gerekli olduğu asgari yaş Ülkeden Ülkeye değişmektedir).</p>
<p>Ülkenizde ebeveyn izninin gerekli olduğu yaşın altında bir çocuksanız, bu Gizlilik Bildiriminin koşullarını anladığınızdan ve kabul ettiğinizden emin olmak için ebeveyniniz veya vasinizle birlikte bunları gözden geçirmelisiniz. Bir çocuğun ebeveyninin veya vasisinin onayının alınması gereken durumlarda, bu tür bir onay olmadan çocuktan kişisel veri topladığımızı tespit edersek, söz konusu kişisel verileri mümkün olan en kısa sürede sileceğiz. HİYAM web sitelerinin belirli bölümlerine erişim hakkı ve/veya eşantiyonlar, numuneler veya başka ödülleri almaya uygunluk durumu genellikle belirli bir yaşın üzerindeki kullanıcılarla sınırlıdır.</p>
<p>Kişisel verilerinizi bazen yaş doğrulama kontrolleri yapmak ve bu tür yaş kısıtlamalarını uygulamak için kullanırız.</p>
<p>Verilerinizi Hangi Amaçla Kullanıyoruz?</p>
<p>Kişisel verilerinizi yalnızca belirli ve sınırlı amaçlar için toplar, işleriz. Bu amaçlar arasında örneğin ödemelerinizi işleme koymak, şikâyetlerinizi değerlendirmek ve yanıtlamak, ürünlerimizi, hizmetlerimizi, iletişim yöntemlerimizi ve web sitelerimizin işlevselliğini geliştirmek ve iyileştirmek, size kişiselleştirilmiş ürünler, iletişimler ve hedefli reklamların yanı sıra ürün önerileri sunmak da yer almaktadır.</p>
<p>Ayrıca, çevrimiçi gezinme, arama ve satın alma davranışlarınız ve marka iletişimlerimizle etkileşimleriniz hakkındaki bilgileri segmentler (belirli ortak özelliklere sahip gruplar) oluşturarak ve kişisel verilerinizi bir veya daha fazla segmente yerleştirerek analiz etmek suretiyle profiller oluştururuz.</p>
<p>Buna ek olarak, HİYAM kişisel verilerinizi otomatik araçlar kullanarak da işler. Otomatik karar, kişisel verilerinizle ilgili karar verme sürecine hiçbir insanın dâhil olmadığı, yalnızca otomatik yollarla alınan bir karardır.</p>
<p>Kişisel verilerinizi aşağıdaki amaçlar için toplar, işleriz;</p>
<p>Ürünlerimizi satın almanız halinde ödemelerinizi işleme koymak, sipariş durumunuzu size bildirmek, sorularınız ve taleplerinizle ilgilenmek ve şikâyetlerinizi değerlendirmek ve yanıtlamak amacıyla;
Sorgularınızı işlemek ve yanıtlamak ya da sorularınızı ve/veya taleplerinizi yanıtlamak üzere sizinle iletişime geçmek amacıyla;</p>
<p>Ürünlerimizi, hizmetlerimizi, iletişim yöntemlerimizi ve web sitelerimizin işlevselliğini geliştirmek ve iyileştirmek amacıyla;</p>
<p>Girmiş olduğunuz yarışmalar veya promosyonlar amacıyla; size bilgi iletmek ve bültenimize veya diğer iletişimlerim kanallarımıza kaydınızı ve/veya aboneliğinizi yönetmek amacıyla;
Yarışmalarımıza, çekilişlerimize veya promosyon faaliyetlerimize katılımınız veya talebinizle ilgili günlük iş ihtiyaçlarımızı yönetmek amacıyla;</p>
<p>Bizimle telefonla, elektronik yollarla veya başka bir şekilde iletişime geçen kişilerin kimliğini doğrulamak amacıyla;</p>
<p>Kurum içi eğitim ve kalite güvence amaçları için;</p>
<p>Tüketicilerin ilgi alanlarını, isteklerini ve değişen ihtiyaçlarını anlamak ve değerlendirmek, web sitemizi, mevcut ürünlerimizi ve hizmetlerimizi iyileştirmek ve/veya yeni ürün ve hizmetler geliştirmek amacıyla ve
Size kişiselleştirilmiş ürünler, iletişim şekilleri ve hedefli reklamların yanı sıra ürün önerileri sunmak amacıyla.</p>
<p>Kişisel verilerinizi yukarıda belirtilen amaçlarla veya başka amaçlarla topladığımızda ve kullandığımızda, toplamadan önce veya toplama sırasında sizi bilgilendireceğiz.</p>
<p>Uygun olması halinde, kişisel verileri işlemek için onayınızı isteyeceğiz. İşleme faaliyetleri için onay verdiğiniz durumlarda, onayınızı istediğiniz zaman geri çekme hakkına sahipsiniz.</p>
<p>Bazı durumlarda, kişisel verilerinizi işlemek için meşru menfaat koşulunu esas alırız. Örneğin, markalarımızdan birinde bir sadakat programına kaydolduğunuzda ve toplanan kişisel verileri ürünlerimizi veya hizmetlerimizi iyileştirmek için veri analizi yapmak üzere kullandığımızda bir meşru menfaat söz konusu olabilir. Bu dayanak, yalnızca, örneğin bir sözleşmenin ifasına yardımcı olmak veya bir hizmeti optimize etmek gibi meşru bir menfaati elde etmek için gerekli olduğu ve birey olarak haklarınızdan daha ağır basmadığı durumlarda kullanılacaktır. Bu yasal dayanak yalnızca kişisel verilerinizi işlemenin daha az müdahaleci bir yolu olmadığı durumlarda kullanılacaktır. Kişisel verilerinizin işlenmesinde meşru menfaatin gerekçe olarak kullanılması halinde bunun kaydını tutacağımızı ve bu bilgileri talep etme hakkınız olduğunu garanti edebiliriz.</p>
<p>Kişisel verilerinizi, taraf olduğunuz veya olacağınız bir sözleşmeyi ifa etmek için işleriz. Örneğin, satın aldığınız bir ürünü veya hizmeti teslim etmek, yarışmalarımızdan birine katılmanıza izin vermek ya da talep ettiğiniz numuneleri size göndermek için kişisel verilerinizi işlememiz gerekir.
Kişisel verilerinizi ayrıca yasal bir yükümlülüğümüz (örneğin, vergi veya sosyal güvenlik yükümlülükleri) olduğunda da işlemekteyiz. Örneğin, bir mahkeme emri veya mahkeme celbi, kişisel verileri belirli bir amaç için işlememizi gerektirebilir ya da yerel kara para aklamayı önleme kuralları kapsamında şüpheli işlemleri bildirmek için kişisel verileri işlememiz gerekebilir. </p>
<p>Profil Oluşturma</p>
<p>HİYAM kişisel verilerinizi profil oluşturmak için kullanır. Çevrimiçi gezinme, arama ve satın alma davranışlarınız ve marka iletişimlerimizle etkileşimleriniz hakkındaki bilgileri segmentler (belirli ortak özelliklere sahip gruplar) oluşturarak ve kişisel verilerinizi bir veya daha fazla segmente yerleştirerek analiz etmek suretiyle profiller oluştururuz. Bu segmentler HİYAM tarafından web sitesini ve size yönelik iletişimlerimizi kişiselleştirmek (sitemizi ziyaret ettiğinizde veya size gönderilen bir haber bülteninde size ilgili içeriğin gösterilmesi gibi) ve HİYAM sitelerinde ve üçüncü taraf web siteleri aracılığıyla HİYAM markalarından ilgili teklifleri ve reklamları görüntülemek için kullanılır. Segmentler, HİYAM sitelerindeki üçüncü taraf kampanyaları için de kullanılabilir. HİYAM, örneğin tarayıcınızda çerezlerin ayarlanmasını çevrimiçi olarak kabul etmeniz veya markalarımızdan birinin e-posta bültenlerine kaydolmanız gibi ilgili onayı verdiğiniz durumlarda verilerinizi profiller.
Kişisel verilerinizin bu şekilde kullanılmasını önlemek için Çerez Bildirimimi’zin çerezleri yönet bölümünü kullanarak istediğiniz zaman onayınızı geri çekebilirsiniz ya da web sitelerimizden birine giriş yaptıysanız veya herhangi bir pazarlama bültenine kaydolduysanız e-posta adresinizin kullanılmasına ilişkin aboneliğinizi iptal edebilirsiniz.</p>
<p>Örneğin – </p>
<p>HİYAM, sizin izninizle şu kişilerden veri toplar: </p>
<p>o   Görüntülediğiniz içerik ve içeriğimizle etkileşim şekliniz hakkında web sitelerimiz;</p>
<p>o   Sosyal platformlarda ve diğer yayıncıların web sitelerinde size sunduğumuz dijital görüntülü reklamlarımız ve  </p>
<p>o   Çevrimiçi olarak doldurduğunuz ve ilgi alanlarınız hakkında bize gönderdiğiniz formlar.
·        Ayrıca, görüntülü reklamlarımızdan birine tıkladığınızda ve perakende ortaklarımızdan birinden bir şey satın almaya devam ettiğinizde satın aldığınız ürünleri de takip ediyoruz.</p>
<p>Bizden e-posta veya SMS almayı talep ettiyseniz, neyle ilgilendiğinizi görmek için içeriği açıp açmadığınızı, okuyup okumadığınızı veya tıklayıp tıklamadığınızı izleriz, böylece size hoşunuza gideceğini düşündüğümüz daha fazla içerik sunabiliriz.</p>
<p>Bu verileri beğenilerinizi ve beğenmediklerinizi profillemek için kullanırız.  Örneğin, web sitemizde Cilt temizliği tarifleri düzenli olarak görüntülediğinizi görürsek ve bizden e-posta almayı seçtiyseniz, ilginizi çekmek için siteye yeni giren Cilt temizliği tarifleri hakkında size bir güncelleme verebiliriz ya da ziyaret ettiğinizde web içeriğimizi en çok ilgileneceğinizi düşündüğümüz şeylere göre uyarlayabiliriz.</p>
<p>Bu profil bilgilerine dayanarak, bizden veya birlikte reklam verdiğimiz yayıncı ağımızdan içerik görüntülerken beğeneceğinizi ve görmek isteyeceğinizi düşündüğümüz reklamları da size verebiliriz.  Bazen, sizin izninizle, size yakınlarda yapılan ve ilginizi çekebileceğini düşündüğümüz promosyonlar veya etkinliklerle ilgili reklamlar sunmak için mevcut konumunuzu kullanabiliriz.
Ayrıca, sizinle benzer ilgi alanlarına sahip olacağını düşündüğümüz ve benzer reklamlarla ilgileneceğine inandığımız kişileri belirlemek için yaşınız, cinsiyetiniz, yaşam evreniz, yaşam tarzınız ve daha geniş ilgi alanlarınız gibi belirli üçüncü taraflara sağladığınız ve onlarla paylaşılmasına izin verdiğiniz bilgileri de kullanabiliriz.</p>
<p>Otomatik karar verme</p>
<p>Bazı durumlarda, HİYAM kişisel verilerinizi otomatik araçlar kullanarak işler. Otomatik karar, kişisel verilerinizle ilgili karar verme sürecine hiçbir insanın dâhil olmadığı, yalnızca otomatik yollarla alınan bir karardır. Örneğin:</p>
<p>HİYAM, çalışan adaylarını değerlendirmek için bilimsel temelli davranışsal değerlendirmeler ve veri bilimi tekniklerinden oluşan oyun simülasyonları kullanmaktadır. Adaylardan bir dizi oyun oynamaları istenir ve oyun sırasında sergilenen davranış kalıpları, adayın belirli bir rol için potansiyelini tahmin etmek üzere HİYAM tarafından özelleştirilmiş bir algoritma tarafından değerlendirilir. Bu algoritma, adil, etkili ve tarafsız kalmasını sağlamak için düzenli olarak test edilmektedir.</p>
<p>Sizin üzerinizde önemli etkisi olan kararları yalnızca otomatik karar vermeye dayalı olarak almayacağız. Bunu yaparsak sizi bilgilendirir ve kararımızı vermek için otomatik işlemeyi esas alma kararımız ve bunu yapmak için yasal dayanağımız hakkında size açık bilgi veririz. Örneğin, HİYAM yalnızca sizinle bir sözleşmenin yapılması veya ifası için gerekli olduğunda ya da açık rızanız olduğunda kişisel verilerinizi otomatik yöntemler kullanarak işler.</p>
<p>Yalnızca otomatik işlemeye dayanan ve üzerinizde yasal veya başka önemli etkiler yaratan bir karara tâbi olmama hakkına sahipsiniz. Özellikle, şu haklara sahipsiniz:</p>
<p>insan müdahalesi istemek ve almak;</p>
<p>kendi bakış açınızı ifade etmek;</p>
<p>bir değerlendirme sonrasında varılan karara ilişkin bir açıklama almak
böyle bir karara itiraz etmek.</p>
 <p>Kiminle Paylaşılacak?</p>
<p>HİYAM, kişisel verilerinizi HİYAM ve/veya bağlı şirketler içinde ve aşağıdaki durumlarda seçilen üçüncü taraflarla paylaşır:</p>
<p>·      Üçüncü taraf hizmet sağlayıcılar. Taleplerinizi yerine getirmek, sorularınıza yanıt vermek, siparişlerinizi yerine getirmek, kuponlarınızı onaylamak, size numune göndermek, çekilişlere katılmanızı sağlamak veya web sitelerimiz aracılığıyla çeşitli diğer özellikleri, hizmetleri ve materyalleri kullanımınıza sunmak için - Kişisel verilerinizi, HİYAM'ın web sitelerini barındıran veya işleten, ödemeleri işleyen, verileri analiz eden, müşteri hizmetleri, posta veya teslimat hizmetleri sağlayan şirketler ve promosyonlarımıza katılan veya bunları yöneten sponsorlar veya diğer üçüncü taraflar gibi bizim adımıza farklı işlevleri yerine getiren üçüncü taraf hizmet sağlayıcılarla paylaşıyoruz. Bunlar işlevlerini yerine getirmek için gereken kişisel verilere erişebilirler, ancak bunları başka amaçlarla kullanamazlar. Ayrıca, bu kişisel verileri bu Gizlilik Bildirimine uygun olarak ve geçerli veri koruma yasaları ve yönetmeliklerinin izin verdiği şekilde işlemeleri gerekmektedir.</p>
<p>·        Diğer üçüncü taraflar. Kişisel verileriniz ayrıca tarafımızca kullanılacak veya pazarlama, tanıtım, veri zenginleştirme ve diğer tekliflerin yanı sıra ürün bilgileri ile bağlantılı olarak sponsorlarımız, reklam verenlerimiz, reklam ağlarımız, reklam sunucularımız, sosyal medya ağlarımız ve analiz şirketlerimiz veya diğer üçüncü taraflarla paylaşılacaktır.</p>
<p>·        Ticari transferler. Kişisel verileriniz, öncelikle iş ve operasyonel amaçlar için tarafımızdan kullanılacak veya HİYAM ve/veya bağlı şirketler ile paylaşılacaktır.  HİYAM ve/veya bağlı şirketlerin işini geliştirmeye devam ettikçe varlıklarını, iştiraklerini veya iş birimlerini satabilir veya satın alabilir.  Bu tür işlemlerde, kişisel verileriniz genellikle devredilen ticari varlıklardan biridir, ancak önceden var olan herhangi bir Gizlilik Bildiriminde verilen sözlere tâbi olmaya devam eder (elbette aksini onaylamadığınız sürece). Başka bir kuruluşun bizi, işlerimizi veya varlıklarımızın tamamını veya bir kısmını ya da HİYAM'in web siteleriyle ilgili varlıkları satın alması halinde, kişisel verileriniz mevcut durum tespiti sürecinin bir parçası olarak söz konusu kuruluşa iletilecek ve devredilen varlıklardan biri olarak söz konusu kuruluşa aktarılacaktır.  Ayrıca, tarafımızdan veya aleyhimize herhangi bir iflas veya yeniden yapılandırma takibi başlatılırsa, tüm bu kişisel veriler bizim bir varlığımız olarak kabul edilecek ve bu nedenle üçüncü taraflara satılmaları veya aktarılmaları mümkün olacaktır.</p>
<p>·        Yasal açıklama. Aşağıdaki durumlarda, kişisel verilerinizi üçüncü taraflara aktarabiliriz;</p>
<p>o   Yasal bir yükümlülüğe uymak için;</p>
<p>o   Cari bir yasanın bunu zorunlu kıldığına iyi niyetle inandığımızda;</p>
<p>o   Bir soruşturma yürüten resmi makamların talebi üzerine;</p>
<p>o   "Kullanım Koşullarımızı" veya diğer geçerli politikaları doğrulamak veya uygulamak için;</p>
<p>o   Dolandırıcılığı veya herhangi bir teknik veya güvenlik açığını tespit etmek ve bunlara karşı korunmak için;</p>
<p>o   Acil bir duruma müdahale etmek için veya başka bir amaçla</p>
<p>o   Üçüncü tarafların, HİYAM web sitelerinin ziyaretçilerinin, HİYAM'in veya kamunun haklarını, mülkiyetini, güvenliğini veya emniyetini korumak için.</p>
<p>Kişisel Verilerinizi Nasıl Koruyoruz?</p>
<p>HİYAM, kişisel verilerinizin güvenliğini çok ciddiye almaktadır. Kişisel verilerinizi kötüye kullanım, müdahale, kayıp, yetkisiz erişim, değişiklik veya ifşaya karşı korumak için her türlü çabayı gösteriyoruz.
Önlemlerimiz arasında uygun erişim kontrolleri uygulamak, yararlandığımız BT ortamlarını korumak için en son Bilgi Güvenliği Yeteneklerine yatırım yapmak ve mümkün olan her yerde kişisel verileri şifrelemek, takma ad vermek ve anonimleştirmek yer almaktadır.</p>
<p>Kişisel verilerinize erişim izni yalnızca gerekli olması halinde çalışanlarımıza ve acentelerimize verilmektedir ve üçüncü taraflarca işlendiğinde katı sözleşme gizliliği yükümlülüklerine tâbi tutulmaktadır.</p>
<p>Kişisel Verilerinizi Ne Kadar Süreyle Saklıyoruz?</p>
<p>Kişisel verilerinizi, işlendikleri amaç için ihtiyaç duyduğumuz sürece saklayacağız. Örneğin, bizimle çevrimiçi bir satın alma işlemi yaptığınızda, satın alma işleminizle ilgili verileri, girdiğiniz belirli sözleşmeyi ifa edebilmemiz için saklayacağız ve bundan sonra kişisel verileri, satın alma işlemiyle ilgili herhangi bir şikâyeti, soruyu veya endişeyi ele almamızı veya yanıtlamamızı sağlayan bir süre boyunca saklayacağız.</p>
<p>Verileriniz, bizimle olan deneyiminizi geliştirmeye devam edebilmemiz ve size verilmesi gereken sadakat ödüllerini almanızı sağlamak için de saklanabilir.</p>
<p>Doğrudan hedef doğrultusunda topladığımız tanımlanabilir verileri mümkün olduğunca kısa bir süre için saklarız ve ardından kalıcı olarak silmek için önlemler alırız.</p>
<p>Elimizde tuttuğumuz kişisel verileri aktif bir şekilde gözden geçireceğiz ve artık saklanmaları için yasal bir gereklilik, iş gereksinimi veya tüketici ihtiyacı kalmadığında bunları güvenli bir şekilde sileceğiz veya bazı durumlarda anonim hale getireceğiz.</p>
<p>Haklarınız Nelerdir?</p>
<p>Kişisel verilerinizin nasıl işlendiğine ilişkin haklarınız saklıdır. Bu haklarınızı istediğiniz zaman kullanabilirsiniz. Aşağıda bu haklara genel bir bakış ve bunun sizin için ne anlama geldiği yer almaktadır. Haklarınızı e-posta göndererek veya web sitelerimizdeki "Bize Ulaşın" formu aracılığıyla bir talep göndererek kullanabilirsiniz.</p>
<p>Kişisel verilerinizi işlediğimiz durumlarda, verilerin nasıl işlendiği konusunda bir dizi hakkınız bulunmaktadır ve bu hakları istediğiniz zaman kullanabilirsiniz. Aşağıda bu haklara genel bir bakış ve bunun sizin için ne anlama geldiği yer almaktadır. Haklarınızı e-posta göndererek veya web sitelerimizdeki "Bize Ulaşın" formu aracılığıyla bir talep göndererek kullanabilirsiniz.
Bilgilendirilme hakkı. Kişisel verilerinizi nasıl kullandığımız ve haklarınız hakkında açık, şeffaf ve kolayca anlaşılabilir bilgiler alma hakkına sahipsiniz. Bu nedenle, size bu Bildirimde yer alan bilgileri sağlıyoruz.  </p>
<p>Erişim ve düzeltme hakkı. Kişisel verilerinize istediğiniz zaman erişme, bunları düzeltme veya güncelleme hakkına sahipsiniz. Bunun önemini anlıyoruz; haklarınızı kullanmak isterseniz lütfen bizimle iletişime geçin.</p>
<p>Veri taşınabilirliği hakkı. Bize sağladığınız kişisel veriler taşınabilir olabilir. Bu, belirli koşullar altında taşınabileceği, kopyalanabileceği veya elektronik olarak iletilebileceği anlamına gelir.
Unutulma hakkı. Belirli koşullar altında, verilerinizi silmemizi talep etme hakkına sahipsiniz. Hakkınızda tuttuğumuz kişisel verileri silmek isterseniz, lütfen bize bildirin; talebinize yasal gerekliliklere uygun olarak yanıt vermek için makul adımlar atacağız. Topladığımız kişisel verilere artık herhangi bir amaç için ihtiyaç duyulmuyorsa ve yasalar gereği bunları saklamamız gerekmiyorsa, bunları silmek, yok etmek veya kalıcı olarak kimliksizleştirmek için elimizden geleni yapacağız. 
İşlemeyi kısıtlama hakkı. Belirli koşullar altında, kişisel verilerinizin işlenmesini kısıtlama hakkına sahipsiniz.</p>
<p>İtiraz etme hakkı. Belirli koşullar altında, doğrudan pazarlama için işleme de dâhil olmak üzere belirli işleme türlerine itiraz etme hakkına sahipsiniz (yani, bizden sizi bilgilendiren e-postalar almak veya çeşitli potansiyel fırsatlarla ilgili olarak iletişime geçmek).</p>
<p>Bir Denetim Makamına şikâyette bulunma hakkı. Kişisel verilerinizi nasıl işlediğimiz hakkında doğrudan herhangi bir yerel Denetim Makamına şikâyette bulunma hakkına sahipsiniz.</p>
<p>İzni geri çekme hakkı. Kişisel verilerinizle yaptığımız herhangi bir işleme onay verdiyseniz (yani, kişisel verilerinizi işlemek için yasal dayanak olarak onayınızı esas alıyorsak), onayınızı istediğiniz zaman geri çekme hakkına sahipsiniz (ancak bunu yaparsanız, bu, kişisel verilerinizle o ana kadar onayınızla yaptığımız herhangi bir şeyin yasadışı olduğu anlamına gelmez). Kişisel verilerinizin işlenmesi için verdiğiniz onayı, aşağıda verilen ayrıntılarla birlikte bizimle iletişime geçerek istediğiniz zaman geri çekebilirsiniz.</p>
<p>Otomatik karar verme ile ilgili haklar. Yalnızca otomatik işlemeye dayanan ve üzerinizde yasal veya başka önemli etkiler yaratan bir karara tâbi olmama hakkına sahipsiniz. Özellikle, şu haklara sahipsiniz:
insan müdahalesi istemek ve almak;</p>
<p>kendi bakış açınızı ifade etmek;</p>
<p>bir değerlendirme sonrasında varılan karara ilişkin bir açıklama almak
böyle bir karara itiraz etmek.</p>
<p>Haklarınız hakkında daha fazla bilgi ve tavsiye için Ülkenizdeki Veri Koruma Yönetmeliğine başvurabilirsiniz.</p>
<p>HİYAM ile Nasıl İletişime Geçersiniz?</p>
<p>HİYAM, web sitesi üzerinden İletişim sayfası yoluyla iletişime geçebilirsiniz. </p> 
<p>HİYAM'in Gizlilik Bildirimi veya veri işleme hakkında herhangi bir sorunuz veya endişeniz varsa ya da yerel gizlilik kanunlarının olası bir ihlâli hakkında şikâyette bulunmak istiyorsanız, lütfen e-posta göndererek veya web sitelerimizdeki "Bize Ulaşın" formu aracılığıyla bir talep göndererek bunu yapın.
Bir gizlilik sorusu veya erişim talebi alındığında, temasları önceliklendiren ve dile getirmek istediğiniz özel endişeyi veya soruyu ele almaya çalışan özel bir ekibimiz vardır. Sorununuzun doğası gereği daha temel bir sorun olabileceği durumlarda, sizden daha fazla bilgi istenebilir. Tüm bu tür doğrudan temaslara yanıt verilir. Alınan yanıttan memnun kalmazsanız, şikâyetinizi Ülkenizdeki ilgili Denetim Otoritesine iletebilirsiniz. Bizden talep etmeniz halinde, durumunuz için geçerli olabilecek ilgili şikâyet yolları hakkında size bilgi vermeye çalışacağız.</p>
<p>Bu Bildirimi Nasıl Güncel Tutuyoruz?</p>
<p>Müşteri geri bildirimlerini ve ürün ve hizmetlerimizdeki değişiklikleri yansıtmak için gerektiğinde bu Gizlilik Bildirimini güncelleyeceğiz. Bu bildirimde değişiklikler yayınladığımızda, bu Bildirimin üst kısmındaki "son güncelleme" tarihini revize edeceğiz. Değişiklikler önemliyse, daha belirgin bir bildirim sağlayacağız (belirli hizmetler için Gizlilik Bildirimi değişikliklerinin e-postayla bildirilmesi dâhil). Bu Gizlilik Bildiriminin önceki sürümlerini de incelemeniz için bir arşivde tutacağız.</p>
<p>İzniniz olmadan bu Gizlilik Bildirimi kapsamındaki haklarınızı azaltmayacağız. </p>
<p>Ek Gizlilik Şartları veya Bildirimleri</p>
<p>Bu Gizlilik Bildirimine ek olarak, ek gizlilik şartları veya bildirimleri tarafından yönetilecek belirli kampanyalar veya promosyonlar olabilir. Katıldığınız takdirde bunlara uymanız gerekeceğinden, bu tür kampanyalara veya promosyonlara katılmadan önce bu ek şartları veya bildirimleri okumanızı öneririz. Tüm ek gizlilik şartları veya bildirimleri size belirgin bir şekilde sunulacaktır.</p>
 <p>Son güncelleme tarihi: Eylül 2024</p>

      </p>
      </LayoutOne>
    </Fragment>
  );
};

export default Privacy;
