import { FontAwesomeIcon } from './FontAwesome';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyUs = () => {
  const { t, isRTL } = useLanguage();
  
  const features = [
    {
      icon: 'industry',
      titleKey: 'whyus.manufacturing',
      descKey: 'whyus.manufacturingDesc',
    },
    {
      icon: 'award',
      titleKey: 'whyus.quality',
      descKey: 'whyus.qualityDesc',
    },
    {
      icon: 'boxes-stacked',
      titleKey: 'whyus.packaging',
      descKey: 'whyus.packagingDesc',
    },
    {
      icon: 'truck-fast',
      titleKey: 'whyus.export',
      descKey: 'whyus.exportDesc',
    },
  ];

  return (
    <section className="py-20 section-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            {t('whyus.title')}
          </h2>
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
              
              <h3 className={`text-xl font-bold mb-3 text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                {t(feature.titleKey)}
              </h3>
              
              <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;