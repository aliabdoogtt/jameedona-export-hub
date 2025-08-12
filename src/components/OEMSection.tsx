import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from './FontAwesome';

const OEMSection = () => {
  const oemSteps = [
    {
      icon: 'pen-ruler',
      titleAr: 'التصميم',
      titleEn: 'Design',
      descriptionAr: 'نصمم العبوة والعلامة التجارية حسب متطلباتك',
      descriptionEn: 'We design packaging and branding according to your requirements'
    },
    {
      icon: 'print',
      titleAr: 'الطباعة',
      titleEn: 'Printing',
      descriptionAr: 'طباعة عالية الجودة بأحدث التقنيات',
      descriptionEn: 'High-quality printing with latest technology'
    },
    {
      icon: 'industry',
      titleAr: 'الإنتاج',
      titleEn: 'Production',
      descriptionAr: 'تصنيع المنتج وتعبئته حسب المواصفات المطلوبة',
      descriptionEn: 'Manufacturing and packaging according to specifications'
    }
  ];

  return (
    <section id="oem" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-dark font-cairo">
            خدمة العلامة التجارية الخاصة
          </h2>
          <p className="text-xl text-muted-foreground font-inter mb-6">
            OEM/Private Label Services
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-cairo leading-relaxed">
            نقدم خدمات تصنيع منتجات الجميد تحت علامتك التجارية الخاصة بأعلى معايير الجودة وأقل كمية طلب في السوق
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {oemSteps.map((step, index) => (
            <div 
              key={index}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <div className="bg-gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-primary">
                  <FontAwesomeIcon 
                    icon={step.icon as any} 
                    className="text-3xl text-white"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-accent text-primary font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm border-2 border-background">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-text-dark font-cairo">
                {step.titleAr}
              </h3>
              <h4 className="text-lg font-semibold mb-4 text-primary font-inter">
                {step.titleEn}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed font-cairo mb-2">
                {step.descriptionAr}
              </p>
              <p className="text-sm text-muted-foreground font-inter">
                {step.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        <div className="card-elegant p-8 text-center bg-gradient-subtle">
          <h3 className="text-2xl font-bold mb-4 text-text-dark font-cairo">
            ابدأ علامتك التجارية اليوم
          </h3>
          <p className="text-lg text-muted-foreground mb-6 font-inter">
            Start Your Private Label Today
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3">
              <FontAwesomeIcon icon="check-circle" className="text-primary" />
              <span className="font-cairo">أقل كمية طلب: 1000 كيلو</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FontAwesomeIcon icon="check-circle" className="text-primary" />
              <span className="font-cairo">مدة التسليم: 2-3 أسابيع</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FontAwesomeIcon icon="check-circle" className="text-primary" />
              <span className="font-cairo">تصميم مجاني للعبوة</span>
            </div>
          </div>

          <Button size="lg" className="btn-gradient">
            <FontAwesomeIcon icon="paper-plane" className="ml-2" />
            ابدأ علامتك التجارية الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OEMSection;