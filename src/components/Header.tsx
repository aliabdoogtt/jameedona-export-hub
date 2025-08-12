import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from './FontAwesome';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ar');

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'ar' ? 'en' : 'ar');
  };

  const menuItems = [
    { label: 'الرئيسية', labelEn: 'Home', href: '#home' },
    { label: 'المنتج', labelEn: 'Product', href: '#product' },
    { label: 'المواصفات', labelEn: 'Specs', href: '#specs' },
    { label: 'الشهادات', labelEn: 'Certifications', href: '#certs' },
    { label: 'التصدير', labelEn: 'Export', href: '#export' },
    { label: 'العلامة الخاصة', labelEn: 'OEM', href: '#oem' },
    { label: 'الوصفات', labelEn: 'Recipes', href: '#recipes' },
    { label: 'عن الشركة', labelEn: 'About', href: '#about' },
    { label: 'تواصل معنا', labelEn: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold hero-text font-cairo">
              جميدونا
            </div>
            <div className="text-sm text-muted-foreground ml-2 font-inter">
              JAMEEDONA
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {currentLang === 'ar' ? item.label : item.labelEn}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <FontAwesomeIcon icon="globe" className="fa-primary" />
              {currentLang === 'ar' ? 'EN' : 'العربية'}
            </Button>
            <Button className="btn-gradient flex items-center gap-2">
              <FontAwesomeIcon icon="paper-plane" />
              {currentLang === 'ar' ? 'طلب عرض أسعار' : 'Request Quote'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon 
              icon={isMenuOpen ? 'times' : 'bars'} 
              className="fa-primary text-xl"
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {currentLang === 'ar' ? item.label : item.labelEn}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/50">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon="globe" className="fa-primary" />
                  {currentLang === 'ar' ? 'EN' : 'العربية'}
                </Button>
                <Button className="btn-gradient flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon="paper-plane" />
                  {currentLang === 'ar' ? 'طلب عرض أسعار' : 'Request Quote'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;