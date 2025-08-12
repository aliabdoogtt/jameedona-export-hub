import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from './FontAwesome';
import factoryHero from '@/assets/factory-hero.jpg';

const Factory = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const factoryImages = [
    {
      src: factoryHero,
      title: 'خط الإنتاج الرئيسي',
      titleEn: 'Main Production Line',
      description: 'أحدث المعدات لضمان أعلى جودة'
    },
    {
      src: factoryHero,
      title: 'مختبر الجودة',
      titleEn: 'Quality Lab',
      description: 'فحوصات صارمة لكل دفعة إنتاج'
    },
    {
      src: factoryHero,
      title: 'منطقة التعبئة',
      titleEn: 'Packaging Area',
      description: 'تعبئة آمنة ونظيفة'
    },
    {
      src: factoryHero,
      title: 'مخازن التبريد',
      titleEn: 'Cold Storage',
      description: 'حفظ المنتجات في درجة حرارة مثالية'
    },
    {
      src: factoryHero,
      title: 'منطقة الشحن',
      titleEn: 'Shipping Area',
      description: 'تجهيز الطلبات للتصدير'
    },
    {
      src: factoryHero,
      title: 'مكاتب الإدارة',
      titleEn: 'Administrative Offices',
      description: 'فريق متخصص في خدمة العملاء'
    }
  ];

  const certificates = [
    { name: 'ISO 22000', icon: 'award' },
    { name: 'HACCP', icon: 'award' },
    { name: 'Halal', icon: 'award' },
    { name: 'FDA', icon: 'award' },
    { name: 'EUR.1', icon: 'award' },
    { name: 'Jordan FDA', icon: 'award' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-dark font-cairo">
            مصنعنا وشهاداتنا
          </h2>
          <p className="text-xl text-muted-foreground font-inter mb-6">
            Our Factory & Certifications
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-cairo leading-relaxed">
            مصنع حديث مجهز بأحدث التقنيات ويحمل جميع الشهادات العالمية لضمان أعلى معايير الجودة والسلامة
          </p>
        </div>

        {/* Factory Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-text-dark font-cairo">
            جولة في المصنع
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {factoryImages.map((image, index) => (
              <div 
                key={index}
                className="card-elegant overflow-hidden group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                    <FontAwesomeIcon 
                      icon="external-link-alt" 
                      className="text-white text-2xl"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-text-dark font-cairo mb-1">
                    {image.title}
                  </h4>
                  <p className="text-sm text-primary font-inter mb-2">
                    {image.titleEn}
                  </p>
                  <p className="text-sm text-muted-foreground font-cairo">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-text-dark font-cairo">
            شهادات الجودة والسلامة
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="card-elegant p-6 text-center group hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon 
                    icon={cert.icon as any} 
                    className="text-2xl text-white"
                  />
                </div>
                <h4 className="font-bold text-text-dark font-inter">
                  {cert.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Download Certificates */}
        <div className="text-center">
          <Button size="lg" className="btn-gradient">
            <FontAwesomeIcon icon="download" className="ml-2" />
            تحميل جميع الشهادات
          </Button>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedImage}
                alt="Factory Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FontAwesomeIcon icon="times" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Factory;