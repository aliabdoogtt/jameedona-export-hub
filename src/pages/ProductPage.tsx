import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@/components/FontAwesome';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductPage = () => {
  const { t, isRTL } = useLanguage();

  const nutritionFacts = [
    { name: 'Protein', valueAr: '12 جرام', valueEn: '12g', percentage: 25 },
    { name: 'Fat', valueAr: '8 جرام', valueEn: '8g', percentage: 12 },
    { name: 'Carbohydrates', valueAr: '65 جرام', valueEn: '65g', percentage: 22 },
    { name: 'Sodium', valueAr: '850 ملجم', valueEn: '850mg', percentage: 35 },
    { name: 'Calcium', valueAr: '180 ملجم', valueEn: '180mg', percentage: 18 },
  ];

  const ingredients = {
    ar: 'لبن طازج مجفف، ملح طبيعي، مواد حافظة طبيعية',
    en: 'Fresh dried milk, natural salt, natural preservatives',
    fr: 'Lait frais séché, sel naturel, conservateurs naturels',
    de: 'Frische getrocknete Milch, natürliches Salz, natürliche Konservierungsstoffe',
    es: 'Leche fresca seca, sal natural, conservantes naturales'
  };

  const preparation = {
    ar: 'يُنقع الجميد في الماء الدافئ لمدة 30 دقيقة، ثم يُخلط جيداً حتى يصبح ناعماً',
    en: 'Soak jameed in warm water for 30 minutes, then mix well until smooth',
    fr: 'Faire tremper le jameed dans l\'eau tiède pendant 30 minutes, puis mélanger jusqu\'à consistance lisse',
    de: 'Jameed 30 Minuten in warmem Wasser einweichen, dann gut mischen bis es glatt ist',
    es: 'Remojar jameed en agua tibia por 30 minutos, luego mezclar bien hasta que esté suave'
  };

  return (
    <section id="product" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Product Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img 
              src="/lovable-uploads/1b1ebf6c-3799-4245-9aca-27e0e3bbff61.png"
              alt="منتج جميدونا - Jameedona Product"
              className="w-full h-[500px] object-cover rounded-2xl shadow-elegant"
            />
            <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full font-bold">
              <FontAwesomeIcon icon="award" className="mr-2" />
              Premium Quality
            </div>
          </div>

          <div className="space-y-6">
            <h1 className={`text-4xl md:text-5xl font-bold text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
              {isRTL ? 'منتج الجميد الأصيل' : 'Authentic Jameed Product'}
            </h1>
            
            <p className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? 'font-cairo' : 'font-inter'}`}>
              {isRTL 
                ? 'جميد مصنوع من اللبن الطازج 100% بطريقة تقليدية أردنية أصيلة، مجفف طبيعياً تحت أشعة الشمس'
                : 'Made from 100% fresh milk using traditional Jordanian methods, naturally sun-dried'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-gradient">
                <FontAwesomeIcon icon="shopping-cart" className="mr-2" />
                {isRTL ? 'طلب عينة مجانية' : 'Request Free Sample'}
              </Button>
              <Button size="lg" variant="outline">
                <FontAwesomeIcon icon="file-pdf" className="mr-2" />
                {isRTL ? 'تحميل بروشور' : 'Download Brochure'}
              </Button>
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="card-elegant p-8 mb-12">
          <h2 className={`text-3xl font-bold mb-6 text-center text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            <FontAwesomeIcon icon="utensils" className="mr-3 text-primary" />
            {isRTL ? 'المكونات' : 'Ingredients'}
          </h2>
          <p className={`text-lg text-center leading-relaxed ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            {ingredients[isRTL ? 'ar' : 'en']}
          </p>
        </div>

        {/* Nutrition Facts */}
        <div className="card-elegant p-8 mb-12">
          <h2 className={`text-3xl font-bold mb-8 text-center text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            <FontAwesomeIcon icon="apple-whole" className="mr-3 text-primary" />
            {isRTL ? 'القيم الغذائية' : 'Nutrition Facts'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionFacts.map((item, index) => (
              <div key={index} className="bg-accent p-6 rounded-xl text-center">
                <h3 className="font-bold text-text-dark mb-2">
                  {isRTL ? 
                    (item.name === 'Protein' ? 'البروتين' :
                     item.name === 'Fat' ? 'الدهون' :
                     item.name === 'Carbohydrates' ? 'الكربوهيدرات' :
                     item.name === 'Sodium' ? 'الصوديوم' : 'الكالسيوم') 
                    : item.name}
                </h3>
                <p className="text-2xl font-bold text-primary mb-1">
                  {isRTL ? item.valueAr : item.valueEn}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.percentage}% {isRTL ? 'القيمة اليومية' : 'Daily Value'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation */}
        <div className="card-elegant p-8 mb-12">
          <h2 className={`text-3xl font-bold mb-6 text-center text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            <FontAwesomeIcon icon="list-check" className="mr-3 text-primary" />
            {isRTL ? 'طريقة التحضير' : 'Preparation Method'}
          </h2>
          <p className={`text-lg text-center leading-relaxed ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            {preparation[isRTL ? 'ar' : 'en']}
          </p>
        </div>

        {/* Allergen Info */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
          <FontAwesomeIcon icon="exclamation-triangle" className="text-yellow-600 text-2xl mb-3" />
          <h3 className={`font-bold text-yellow-800 mb-2 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            {isRTL ? 'تحذير من الحساسية' : 'Allergen Information'}
          </h3>
          <p className={`text-yellow-700 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            {isRTL ? 'يحتوي على اللبن ومنتجات الألبان' : 'Contains milk and dairy products'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;