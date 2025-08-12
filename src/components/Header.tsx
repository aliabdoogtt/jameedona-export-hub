import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from './FontAwesome';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  const languages = [
    { code: 'ar' as Language, name: 'العربية', flag: '🇯🇴' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
    { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  ];

  const menuItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.product', href: '#product' },
    { key: 'nav.specs', href: '#specs' },
    { key: 'nav.certifications', href: '#certs' },
    { key: 'nav.export', href: '#export' },
    { key: 'nav.oem', href: '#oem' },
    { key: 'nav.recipes', href: '#recipes' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className={`flex items-center justify-between h-16 ${isRTL ? 'flex-row' : 'flex-row'}`}>
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold hero-text font-cairo">
              {isRTL ? 'جميدونا' : 'JAMEEDONA'}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            {/* Language Selector */}
            <div className="relative group">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <FontAwesomeIcon icon="globe" className="fa-primary" />
                <span>{languages.find(l => l.code === language)?.flag}</span>
                <span>{languages.find(l => l.code === language)?.name}</span>
                <FontAwesomeIcon icon="chevron-down" className="text-xs" />
              </Button>
              
              {/* Language Dropdown */}
              <div className="absolute top-full mt-1 right-0 bg-card border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 min-w-[160px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 hover:bg-accent transition-colors flex items-center gap-2 ${
                      language === lang.code ? 'bg-accent text-primary' : ''
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <Button className="btn-gradient flex items-center gap-2">
              <FontAwesomeIcon icon="paper-plane" />
              {t('nav.requestQuote')}
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
                  {t(item.key)}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      language === lang.code ? 'bg-accent text-primary' : 'hover:bg-accent'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
                <Button className="btn-gradient flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon="paper-plane" />
                  {t('nav.requestQuote')}
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