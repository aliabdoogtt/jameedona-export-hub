import { FontAwesomeIcon } from './FontAwesome';

const Footer = () => {
  const quickLinks = [
    { label: 'الرئيسية', labelEn: 'Home', href: '#home' },
    { label: 'المنتج', labelEn: 'Product', href: '#product' },
    { label: 'المواصفات', labelEn: 'Specs', href: '#specs' },
    { label: 'الشهادات', labelEn: 'Certifications', href: '#certs' },
    { label: 'التصدير', labelEn: 'Export', href: '#export' },
    { label: 'تواصل معنا', labelEn: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: 'facebook', url: '#', label: 'Facebook' },
    { icon: 'linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'x-twitter', url: '#', label: 'Twitter' },
    { icon: 'youtube', url: '#', label: 'YouTube' },
  ];

  const trustLogos = [
    'Halal', 'ISO 22000', 'HACCP', 'FDA', 'EUR.1'
  ];

  return (
    <footer className="bg-text-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold font-cairo mb-4">
              جميدونا
            </div>
            <p className="text-gray-300 font-cairo leading-relaxed">
              منتج الجميد الأردني الأصيل من مصنع الفرسان الرباعية. نفخر بتقديم أجود أنواع الجميد للأسواق العالمية.
            </p>
            <p className="text-gray-400 font-inter text-sm">
              Authentic Jordanian Jameed from Al-Fursan Al-Ruba'iya Factory
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-cairo mb-4">
              معلومات التواصل
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon="location-dot" className="text-primary mt-1" />
                <div>
                  <p className="font-cairo text-sm">
                    الأردن، عمان - المنطقة الصناعية
                  </p>
                  <p className="text-gray-400 font-inter text-xs">
                    Jordan, Amman - Industrial Zone
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon="phone" className="text-primary" />
                <span className="font-inter">+962 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon="envelope" className="text-primary" />
                <span className="font-inter">info@jameedona.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-cairo mb-4">
              روابط سريعة
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-primary transition-colors font-cairo text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Trust */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-cairo mb-4">
              تابعنا
            </h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-white/10 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon as any} />
                </a>
              ))}
            </div>
            
            <div>
              <h4 className="font-cairo font-semibold mb-3">شهادات الثقة</h4>
              <div className="flex flex-wrap gap-2">
                {trustLogos.map((logo, index) => (
                  <span
                    key={index}
                    className="bg-white/10 px-2 py-1 rounded text-xs font-inter"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-cairo">
              جميع الحقوق محفوظة © 2024 جميدونا - مصنع الفرسان الرباعية
            </p>
            <p className="text-gray-500 text-xs font-inter">
              All Rights Reserved © 2024 JAMEEDONA - Al-Fursan Al-Ruba'iya Factory
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;