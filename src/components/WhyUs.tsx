import { FontAwesomeIcon } from './FontAwesome';

const WhyUs = () => {
  const features = [
    {
      icon: 'industry',
      titleAr: 'خبرة تصنيع',
      titleEn: 'Manufacturing Expertise',
      descriptionAr: 'أكثر من 20 عاماً من الخبرة في تصنيع منتجات الألبان والجميد',
      descriptionEn: '20+ years of experience in dairy and jameed manufacturing',
    },
    {
      icon: 'award',
      titleAr: 'جودة وشهادات',
      titleEn: 'Quality & Certifications',
      descriptionAr: 'شهادات الجودة العالمية ISO 22000, HACCP, Halal, FDA',
      descriptionEn: 'International quality certifications: ISO 22000, HACCP, Halal, FDA',
    },
    {
      icon: 'boxes-stacked',
      titleAr: 'مرونة تعبئة',
      titleEn: 'Flexible Packaging',
      descriptionAr: 'أحجام متنوعة وحلول تعبئة مخصصة حسب احتياجات السوق',
      descriptionEn: 'Various sizes and customized packaging solutions for market needs',
    },
    {
      icon: 'truck-fast',
      titleAr: 'دعم التصدير',
      titleEn: 'Export Support',
      descriptionAr: 'فريق متخصص في التصدير وخدمة العملاء على مدار الساعة',
      descriptionEn: 'Specialized export team and 24/7 customer service',
    },
  ];

  return (
    <section className="py-20 section-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-dark font-cairo">
            لماذا نحن؟
          </h2>
          <p className="text-xl text-muted-foreground font-inter">
            Why Choose JAMEEDONA?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-elegant p-8 text-center group hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon 
                  icon={feature.icon as any} 
                  className="text-2xl text-white"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-text-dark font-cairo">
                {feature.titleAr}
              </h3>
              <h4 className="text-lg font-semibold mb-4 text-primary font-inter">
                {feature.titleEn}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed font-cairo mb-3">
                {feature.descriptionAr}
              </p>
              <p className="text-sm text-muted-foreground font-inter">
                {feature.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;