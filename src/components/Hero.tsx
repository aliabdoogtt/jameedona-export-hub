import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from './FontAwesome';
import factoryHero from '@/assets/factory-hero.jpg';

const Hero = () => {
  const trustBadges = [
    { name: 'Halal', icon: 'award' },
    { name: 'ISO 22000', icon: 'award' },
    { name: 'HACCP', icon: 'award' },
    { name: 'FDA', icon: 'award' },
    { name: 'EUR.1', icon: 'award' },
    { name: 'Made in Jordan', icon: 'flag' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${factoryHero})` }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-up">
            {trustBadges.map((badge, index) => (
              <div 
                key={badge.name}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FontAwesomeIcon icon={badge.icon as any} className="text-white/90" />
                <span className="text-sm font-medium">{badge.name}</span>
              </div>
            ))}
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-cairo animate-fade-up">
            جميدونا
            <span className="block text-3xl md:text-4xl font-inter mt-2">
              JAMEEDONA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-4 animate-fade-up font-cairo leading-relaxed">
            منتج الجميد الأردني الأصيل من مصنع الفرسان الرباعية
          </p>
          <p className="text-lg md:text-xl mb-8 animate-fade-up font-inter">
            Authentic Jordanian Jameed from Al-Fursan Al-Ruba'iya Factory
          </p>

          {/* Support Text */}
          <p className="text-lg mb-12 max-w-3xl mx-auto animate-fade-up font-cairo leading-relaxed">
            نقدم أجود أنواع الجميد المصنوع من اللبن الطازج بأعلى معايير الجودة والسلامة الغذائية للأسواق العالمية
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
            <Button size="lg" className="btn-gradient text-lg px-8 py-4 min-w-[200px]">
              <FontAwesomeIcon icon="paper-plane" className="ml-2" />
              اطلب عرض أسعار
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 min-w-[200px] bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              <FontAwesomeIcon icon="file-arrow-down" className="ml-2" />
              حمّل المواصفات الفنية
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 animate-fade-up">
            <a 
              href="tel:+962" 
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
            >
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                <FontAwesomeIcon icon="phone" />
              </div>
              <span className="font-medium">+962 XX XXX XXXX</span>
            </a>
            <a 
              href="mailto:info@jameedona.com" 
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
            >
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                <FontAwesomeIcon icon="envelope" />
              </div>
              <span className="font-medium">info@jameedona.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;