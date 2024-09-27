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

const Cookiesw = () => {
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
            { label: t("Cookies"), path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <p style={{marginLeft:'4rem'}}>
      <h3>  Çerezler Hakkında Bildirim</h3>
<p>HIYAM KATANOĞLU (“HİYAM”) olarak biz, sizin mahremiyet ve gizlilikle ilgili endişelerinize saygı duyuyoruz ve sizinle kurduğumuz ilişkiye çok değer veriyoruz.</p>
<p>
Pek çok başka şirket gibi biz de sizin deneyimlerinizi ve size sunduğumuz ürün ve hizmetlerimizi daha da geliştirmemize ve iyileştirmemize yardımcı olacak bilgileri toplayabilmek için web sitemizde teknolojiden istifade ediyoruz. HİYAM olarak kullandığımız çerezler, web sitemizin çalışmasına olanak sağlamakta ve ziyaretçiler için hangi bilgilerin ve reklâmların en yararlı olduğunu anlamamıza yardımcı olmaktadır.</p>
<p>
Lütfen çerez uygulamalarımız hakkında bilgi edinmek için bir dakikanızı ayırınız ve varsa sorularınızı web sitelerimizdeki “Bize Ulaşın” formu aracılığıyla bir talepte bulunarak ya da bize bir e-posta göndererek lütfen bize bildirin.</p>
<p>
Bu Bildirimi mümkün olduğu kadar basit tutmaya çalıştık, fakat çerezler, IP adresleri ve tarayıcı gibi terimlere aşina değilseniz, önce anahtar terimler linkine bağlanarak bilgi edinin.</p>
<p>Bilgileri kim topluyor?</p>
<p>
HİYAM, çerezler ve başka izleme teknolojileri vasıtasıyla size ilişkin çeşitli kişisel veri ve bilgileri Çerezler Hakkında Bildirim'de açıklanan amaçlar doğrultusunda toplamaktadır. Bu Çerezler Hakkında Bildirim, (Facebook veya YouTube gibi) üçüncü şahıs platformlarında bulunan ve HİYAM tarafından veya adına işletilen tüm web sitelerine, uygulamalara ve HİYAM markalarına ait sayfalara ve ayrıca, bu web siteleri veya üçüncü şahıs platformları aracılığıyla erişilen veya kullanılan uygulamalara da uygulanır.</p>
<p> Bu Bildirimde “HİYAM”e yapılan atıflar, sizin iş ilişkisine girdiğiniz ya da etkileşimde ve iletişimde bulunduğunuz tüm HİYAM şirketlerini, iştiraklerini, bağlı şirketlerini, ortak girişim şirketlerini ve imtiyaz alan şirketlerini de kapsar.</p>
<p>
Rıza göstermeniz halinde, bu Çerezler Hakkında Bildirime ve Gizlilik Politikamız'a uygun olarak çerezleri kullanabiliriz. Bizim çerezleri bu şekilde kullanmamızı kabul etmiyorsanız, tarayıcı ayarlarınızı bu doğrultuda değiştirmeli ve bu yolla, web sitelerimizde kullandığınız çerezleri devreden çıkartmalı ya da web sitelerimizde çerezleri hiç kullanmamalısınız. Ancak kullandığınız çerezleri devreden çıkartmanız veya etkisizleştirmeniz halinde, bu, sizin web sitelerimizdeki kullanıcı deneyiminizi olumsuz etkileyebilir.</p>
<p>
Aşağıdaki bölüm, web sitelerimizde kullanmakta olduğumuz farklı çerez tiplerini, bunların her birinin kullanım amacıyla birlikte özetlemekte ve size bu çerezleri yönetme kabiliyetini kazandırmaktadır.
HİYAM, kişisel verilerinizi ancak ve sadece bunu yapması adil ve ilgili mevzuata uygun olduğu takdirde toplayacak, kullanacak veya diğer yollarla işleyecektir.</p>
<p>
HİYAM çerezlerinin topladıkları kişisel veri ve bilgileri nasıl kullandığımızı daha iyi ve daha ayrıntılı kavrayabilmek için, lütfen Gizlilik Politikamız'ı ziyaret ediniz.</p>
<p>
Çerez kelimesi ne anlama gelmektedir?</p>
<p>
Çerezler, piksel etiketleri ve benzeri teknolojiler (hepsi birlikte ‘çerezler’ olarak anılmaktadırlar), bir web sitesini ziyaret ettiğinizde – bilgisayarınız, akıllı telefonunuz veya tabletiniz gibi – internet bağlantılı cihazınıza indirilen küçük miktarlarda bilgileri içeren dosyalardır. Çerezler sizin daha sonraki her ziyaretinizde kaynak web sitesine ya da o çerezleri tanıyan başka bir web sitesine geri gönderilirler. Çerezler, sizin tercihlerinizi hatırlamak, sizin internet deneyiminizi genel olarak iyileştirmek ve size en iyi ürün ve hizmetleri sunmamızda bize yardımcı olmak gibi pek çok farklı ve faydalı işlevlere sahiptir.</p>
<p>
Pek çok farklı çerez tipi bulunmaktadır. Bu çerezlerin tümü aynı biçimde çalışırlar, fakat aralarında bazı ufak farklılıklar da bulunmaktadır. Web sitelerimizde kullandığımız çerezlerin ayrıntılı bir listesi için, lütfen çerez yönetim aracındaki ilgili bölüme bakınız.</p>
<p>
Çerezleri hangi amaçla kullanıyoruz?</p>
<p>
Çerezleri, HİYAM web sitelerini kullanılması daha kolay sitelere dönüştürmek, web sitelerimizde size kişiselleştirilmiş bir deneyim yaşama olanağı sağlamak ve ürünlerimiz, hizmetlerimiz ve web sitelerimizi sizin gereksinim ve ilgi alanlarınıza daha iyi uyarlamak amaçlarıyla kullanıyoruz. Çerezler, sizin HİYAM web sitelerindeki gelecek faaliyetlerinizi ve deneyimlerinizi hızlandırmamıza yardımcı olmak için de kullanılmaktadırlar.</p>
<p>
Sizin kullanılmasına rıza gösterdiğiniz çerezler, aynı zamanda, size ait kişisel verileri toplamak için de kullanılmaktadır. Daha sonra, bu veri ve bilgileri, sizin ilgi alanlarınıza uyarlanmış hedefe yönelik reklamlar sunabileceğimiz ve sizin bir reklamı gördüğünüz tekrar sayısını sınırlandırabileceğimiz bir biçimde izleyicilere göre profillendiriyoruz. HİYAM’in size ait kişisel verilere ilişkin olarak yürüttüğü reklam faaliyetleri hakkında daha ayrıntılı bilgi alabilmek için, lütfen Gizlilik Politikamız'ı ziyaret ediniz.</p>
<p>
Çerezleri, içeriğimizi ve reklamlarımızı geliştirmek amacıyla e-postalara ve haber bültenlerine de yerleştiriyoruz.</p>
<p>
Son olarak, çerezleri insanların web sitelerimizi nasıl kullandıklarını anlamamıza olanak sağlayan ve web sitelerimizin yapısı ve içeriğini zenginleştirmemize yardımcı olan ve reklam kampanyalarının HİYAM web siteleri ve HİYAM-dışı (üçüncü kişilerce işletilen) web siteleri üzerindeki etkinliğini ölçmemize de yardım eden anonim ve birleştirilmiş istatistiksel veriler derlemek amacıyla da kullanıyoruz.</p>
<p>
Kullandığınız çerezlerin tipleri ve kullanım amaçları hakkında daha ayrıntılı bilgi için lütfen çerez yönetim aracındaki ilgili bölüme bakınız.</p>
<p>
Çerezleri nasıl kontrol edebilirim veya silebilirim?</p>
<p>
Çerezlerinizi yönetmek için kullanabileceğiniz pek çok yol vardır:</p>
<p>
Rıza vermeyi reddedebilirsiniz;</p>
<p>
Tarayıcı ayarlarını kullanarak HİYAM veya üçüncü şahıs çerezlerini devreden çıkartabilir ve etkisizleştirebilirsiniz ya da
HİYAM veya üçüncü şahıs çerezlerini devreden çıkartmak ve etkisizleştirmek için çerez yönetim aracımızı kullanabilirsiniz.</p>
<p>
Tarayıcılarınız Vasıtasıyla Kontrol</p>
<p>
Web sitelerimizin cihazınızda çerezleri depolamasını istemiyorsanız, tarayıcı) ayarlarınızı belirli çerezler depolanmadan önce size bir uyarı notu gönderilecek biçimde değiştirebilirsiniz. Bu ayarlarınızı, tarayıcınızın kullandığımız çerezlerin çoğunu ya da sadece üçüncü şahısların belirli çerezlerini reddetmesini sağlayacak biçimde de ayarlayabilirsiniz. Çerezler için vermiş bulunduğunuz rıza beyanını da cihazınıza daha önce yüklenmiş ve depolanmış bulunan çerezleri silerek geri çekebilirsiniz.  
Ancak kullandığımız çerezleri devreden çıkartır ve etkisizleştirirseniz, bu, HİYAM web sitesinde bulunduğunuz süre içindeki deneyiminizi etkileyebilir, örneğin, bir web sitesinin belirli alanlarını ziyaret edemeyebilirsiniz ya da bir web sitesini ziyaret ettiğinizde kişiselleştirilmiş bilgiler almayabilirsiniz.</p>
<p>
HİYAM web sitesini görüntülemek ve ona erişmek için (örneğin, bilgisayarınız, akıllı telefonunuz veya tabletiniz gibi) farklı cihazlar kullanırsanız, bu cihazların her birindeki her tarayıcının sizin çerez tercihlerinize göre ayarlanmış olduğundan emin olmanız gerekecektir.
Ayarlarınızı ve çerezlerinizi değiştirmek için kullanabileceğiniz prosedürler, her bir tarayıcıda farklılık göstermektedir. Gerekirse, tarayıcınızdaki yardım fonksiyonunu kullanınız ya da doğrudan doğruya tarayıcınıza ilişkin kullanıcı rehberine gitmek için aşağıdaki linklerden birine tıklayınız:</p>
<p>
Internet Explorer</p>
<p>
Mozilla Firefox</p>
<p>
Google Chrome</p>
<p>
Safari</p>
<p>
Opera  </p>
<p>
Çerezleri sizin adınıza yönetmeleri için kullanabileceğiniz yazılım ürünleri de bulunmaktadır.
Web sitelerimizde kullandığımız çerezlerin nasıl kullanıldığını değerlendirmek amacıyla  _________  adresinden de bilgi edinebilirsiniz.</p>
<p>
Hangi çerezlerin kurulduğunu nasıl görebileceğiniz ve bu çerezleri nasıl yönetebileceğiniz ve nasıl silebileceğiniz hakkında bilgiler de dâhil çerezler hakkında daha fazla bilgi almak için,  ____________ adresini ziyaret ediniz.</p>
<p>
Çerez Yönetim Aracımız Vasıtasıyla Kontrol</p>
<p>
Çerez tercihlerinizi belirttikten sonra sol alt köşede yer alan çerez yönetim aracı ikonumuza tıklayıp HİYAM veya üçüncü şahıs çerezlerini devreden çıkartabilir ve etkisizleştirebilirsiniz. 
Örneğin çerezleri izleme fonksiyonunun kapatılması, HİYAM’in sizin internet davranışlarınızı artık izlememesini sağlar. Bununla birlikte, çerezleri izleme fonksiyonunu reddetmeniz, size daha az HİYAM reklamı gönderileceği anlamına gelmeyebilecektir. Bu eylem sadece size gönderilen reklamların sizin şahsi ilgi alanlarınıza uyarlanmamış reklamlar olacağı anlamına gelmektedir.  </p>
<p>
Hangi çerezleri kullanıyoruz?</p>
<p>
HİYAM web sitelerinde kullanılan çerezler genelde aşağıdaki gibi sınıflandırılabilirler:
Gerekli Çerezler: Bu çerezler, sizi ayrı bir kişi olarak tanımaz ve kimliğinizi belirlemezler.
Performans Çerezleri: Bu çerezler de sizi ayrı bir kişi olarak tanımaz ve kimliğinizi belirlemezler.
İşlevsellik Çerezleri: Bu çerezlerin topladığı bilgiler, sizin ifşa ettiğiniz ve verdiğiniz kişisel verileri de içerebilirler.</p>
<p>
Hedefleme ya da Reklam Çerezleri: Bu çerezlerin çoğu tipi, tüketicileri onların Cihaz ID veya IP adresi vasıtasıyla izler ve takip edebilir ve bu sebeple, kişisel veri ve bilgiler de toplayabilirler.
Üçüncü-Şahıs Çerezleri: İlgili üçüncü şahsın kullandığı çerezlerin tipine bağlı olarak, bu tip çerezlerin topladığı bilgiler kişisel veri ve bilgileri de içerebilir.</p>
<p>
HİYAM web sitelerinde kullanılan çerezler genelde aşağıdaki gibi sınıflandırılabilirler:</p>
<p>
Gerekli Çerezler: Bu çerezler, HİYAM web sitelerinin doğru ve düzgün çalışmasını temin etmek için gereklidir; web sitelerimizde gezinmenize ve özelliklerimizi kullanmanıza olanak sağlarlar. Bu çerezler olmadan, alışveriş sepeti gibi hizmetler sağlanamaz. Bunun örnekleri arasında, aynı oturumdaki bir sayfaya geri giderken daha önceki eylemlerin (örneğin, daha önce girilen metin) hatırlanmasından bahsedebiliriz.</p>
<p>
Bu çerezler kişisel veri ve bilgiler topluyorlar mı / beni tanıyor ve kimliğimi belirliyorlar mı? Bu çerezler, sizi ayrı bir kişi olarak tanımaz ve kimliğinizi belirlemezler. Bu çerezleri kabul etmezseniz, bu durum ilgili web sitesinin veya kısımlarının performansını etkileyebilir.</p>
<p>
Performans Çerezleri: Bu çerezler, örneğin en sık hangi sayfalara gittiğiniz, web sitelerimizde ne kadar vakit geçirdiğiniz ve hata mesajları gibi karşılaştığınız sorunlar da dâhil web sitelerimizi nasıl kullandığınıza dair bilgiler toplarlar. Bu çerezler, aynı zamanda, web sitelerimizden birine bir bağlı şirketten gelip gelmediğinizin ve ziyaretiniz sonucunda bizden bir ürün veya hizmet satın alıp almadığınızın (satın aldığınız ürün veya hizmetin detayları da dâhil) veya size sunduğumuz bir ürün veya hizmetimizi kullanıp kullanmadığınızın bağlı şirketlerce öğrenilmesini temin etmek amacıyla da kullanılmaktadır. Bu da web sitelerimizin performansını artırmamıza ve geliştirmemize yardımcı olur.
Bu çerezler kişisel veri ve bilgiler topluyorlar mı / beni tanıyor ve kimliğimi belirliyorlar mı? Bu çerezler, sizi ayrı bir kişi olarak tanımaz ve kimliğinizi belirlemezler. Bu çerezlerin topladığı tüm bilgiler birleştirilir ve bu sebeple anonimdir. Bu çerezler, sadece bir web sitesinin çalışmasının iyileştirilmesini temin etmek amacıyla kullanılırlar.</p>
<p>
İşlevsellik Çerezleri: Bu çerezler, web sitelerimizin size daha fazla kişiselleştirilmiş bir internet deneyimi sunabilmek gayesiyle, sizin yaptığınız seçim ve tercihleri (kullanıcı adınız, diliniz veya bulunduğunuz bölge gibi bilgiler) hatırlamalarına olanak sağlarlar. Bu çerezler, metin büyüklüğü ve fontlarda ve web sayfalarının uyarlama yapabileceğiniz diğer bölümlerinde yaptığınız değişiklikleri hatırlamak amacıyla da kullanılabilirler. Benzer şekilde, bu çerezler, olası tekrarlardan kaçınmak için hangi özellikli ürünlerin veya videoların görüntülendiğini izlemek ve sizin oyunlar oynamanıza ve bloglar, sohbet odaları ve forumlar gibi sosyal araçları kullanmanıza olanak sağlamak için de kullanılabilirler.   </p>
<p>
Bu çerezler kişisel veri ve bilgiler topluyorlar mı / beni tanıyor ve kimliğimi belirliyorlar mı? Bu çerezlerin topladığı bilgiler, sizin ifşa ettiğiniz ve açıkladığınız kişisel veri ve bilgileri de içerebilirler. Bu çerezleri kabul etmezseniz, bu tercihiniz web sitesinin performansını ve işlevselliğini etkileyebilir ve web sitesindeki içeriğe erişim haklarınızı kısıtlayabilir.</p>
<p>
Hedefleme ya da Reklâm Çerezleri: Bu çerezler, sizin için ve ilgi alanlarınız için daha önemli olan içerikleri size sunabilmek amacıyla kullanılırlar. Bunlar, aynı zamanda, hedefe yönelik reklâmlar sunabilmek ya da bir reklâmı gördüğünüz tekrar sayısını sınırlandırmak ve ayrıca, reklâm kampanyalarının HİYAM ve HİYAM-dışı (üçüncü kişilerce işletilen) web siteleri üzerindeki etkinliğini ölçmemize yardımcı olmak için de kullanılırlar.  Bu çerezler, web sitelerimizden birini ziyaret ettiğinizi hatırlarlar ve bu bilgi reklâmcılar ve iş birliği yaptığımız reklâm ajanslarımız da dâhil başka kişilerle de paylaşılır. Bu çerezler, üçüncü şahısların sağladıkları site işlevselliğine de bağlanabilirler.</p>
<p>
Bu çerezler kişisel veri ve bilgiler topluyorlar mı / beni tanıyor ve kimliğimi belirliyorlar mı? Bu çerezlerin çoğu tipleri, tüketicileri onların Cihaz ID veya IP adresi vasıtasıyla izlerler ve bu sebeple kişisel veri ve bilgiler de toplayabilirler.</p>
<p>
Üçüncü-Şahıs Çerezleri: Örneğin Facebook ve Google DoubleClick gibi kendi alanlarında size uyarlanmış HİYAM reklâmlarını size sunabilmeleri için, web sitelerimizi ziyaret ettiğinizde bizim adımıza sizin cihazınıza çerezler de yerleştirebilecek bir dizi iş ortağıyla çalışıyoruz. Bu çerezleri kabul etmek isteyip istemediğinize karar verebilmeniz için bu çerezleri kullanılmadan önce belirlemek ve size bu çerezleri tanıtmak için çaba gösteriyoruz. Ayrıca, web sitelerimizde dijital deneyimler ve işlevsellikler sunmaları için de bir dizi iş ortağıyla çalışıyoruz. Örneğin, HİYAM web sitelerine göz attığınızda, çerezlerimize rıza göstermemiş veya rızanızı geri çekmiş olsanız da web sitelerimizdeki özelliklerin bir kısmını (örneğin, bir YouTube videosu) sağlayan üçüncü şahıslar size çerezler sunabilir ve yerleştirebilirler. Bunun olmasının sebebi sizin doğrudan doğruya onların çerezlerinin kullanılmasına rıza göstermiş olmanızdır. Böyle durumlarda, doğrudan doğruya ilgili üçüncü şahsın web sitesindeki çerezleri rızanızı geri çekmeniz gerekir.    </p>
<p>
Bu çerezler kişisel veri ve bilgiler topluyorlar mı / beni tanıyor ve kimliğimi belirliyorlar mı? İlgili üçüncü şahsın kullandığı çerezlerin tipine bağlı olarak, bu çerezlerin topladıkları veri ve bilgiler kişisel veri ve bilgileri de içerebilir.</p>
<p>
Kullandığımız çerezlerin süresi açısından, web sitelerimizde iki farklı tipte çerez kullanabiliriz:</p>
<p>
Oturum Çerezleri: Bu çerezler, web sitelerimizi terk ettiğiniz zamana kadar cihazınızda kalan geçici nitelikte çerezlerdir ya da
Kalıcı Çerezler: Bu çerezler, cihazınızda çok daha uzun bir süre ya da siz onları manuel olarak silene kadar kalırlar (Çerezin cihazınızda ne kadar süre kalacağı, aşağıda belirtildiği gibi, hem ilgili çerezin “kendi ömür süresine” hem de sizin tarayıcı ayarlarınıza bağlıdır.)</p>
<p>
Son Güncelleme : Eylül 2024  </p>
</p>
      </LayoutOne>
    </Fragment>
  );
};

export default Cookiesw;
