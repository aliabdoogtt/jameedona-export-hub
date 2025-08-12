import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from './FontAwesome';
import jameedProduct from '@/assets/jameed-product.jpg';

const ProductTeaser = () => {
  const productFeatures = [
    {
      icon: 'utensils',
      titleAr: 'المكونات',
      titleEn: 'Ingredients',
      href: '#ingredients'
    },
    {
      icon: 'apple-whole',
      titleAr: 'القيم الغذائية',
      titleEn: 'Nutrition',
      href: '#nutrition'
    },
    {
      icon: 'list-check',
      titleAr: 'طريقة التحضير',
      titleEn: 'Preparation',
      href: '#preparation'
    }
  ];

  return (
    <section id="product" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Product Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={jameedProduct}
                alt="منتج جميدونا - Jameedona Product"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold">
                <FontAwesomeIcon icon="award" className="ml-2" />
                Premium Quality
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-dark font-cairo">
                منتج الجميد الأصيل
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary font-inter">
                Authentic Jameed Product
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed font-cairo mb-4">
                جميد مصنوع من اللبن الطازج 100% بطريقة تقليدية أردنية أصيلة، مجفف طبيعياً تحت أشعة الشمس ومحضر وفقاً لأعلى معايير الجودة والسلامة الغذائية.
              </p>
              
              <p className="text-muted-foreground font-inter mb-8">
                Made from 100% fresh milk using traditional Jordanian methods, naturally sun-dried and prepared according to the highest quality and food safety standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {productFeatures.map((feature, index) => (
                  <a
                    key={index}
                    href={feature.href}
                    className="flex flex-col items-center p-4 rounded-xl bg-accent hover:bg-primary hover:text-white transition-all duration-300 group"
                  >
                    <FontAwesomeIcon 
                      icon={feature.icon as any} 
                      className="text-2xl mb-3 text-primary group-hover:text-white transition-colors"
                    />
                    <span className="font-semibold font-cairo text-sm">
                      {feature.titleAr}
                    </span>
                    <span className="text-xs font-inter mt-1 opacity-75">
                      {feature.titleEn}
                    </span>
                  </a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-gradient">
                  <FontAwesomeIcon icon="shopping-cart" className="ml-2" />
                  طلب عينة مجانية
                </Button>
                <Button size="lg" variant="outline">
                  <FontAwesomeIcon icon="file-pdf" className="ml-2" />
                  تحميل بروشور المنتج
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTeaser;