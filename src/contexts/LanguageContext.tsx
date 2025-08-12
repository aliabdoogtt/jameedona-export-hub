import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ar' | 'en' | 'fr' | 'de' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.product': 'المنتج',
    'nav.specs': 'المواصفات',
    'nav.certifications': 'الشهادات',
    'nav.export': 'التصدير',
    'nav.oem': 'العلامة الخاصة',
    'nav.recipes': 'الوصفات',
    'nav.about': 'عن الشركة',
    'nav.contact': 'تواصل معنا',
    'nav.requestQuote': 'طلب عرض أسعار',
    
    // Hero
    'hero.title': 'جميدونا',
    'hero.subtitle': 'منتج الجميد الأردني الأصيل من مصنع الفرسان الرباعية',
    'hero.description': 'نقدم أجود أنواع الجميد المصنوع من اللبن الطازج بأعلى معايير الجودة والسلامة الغذائية للأسواق العالمية',
    'hero.requestQuote': 'اطلب عرض أسعار',
    'hero.downloadSpecs': 'حمّل المواصفات الفنية',
    
    // Why Us
    'whyus.title': 'لماذا نحن؟',
    'whyus.manufacturing': 'خبرة تصنيع',
    'whyus.manufacturingDesc': 'أكثر من 20 عاماً من الخبرة في تصنيع منتجات الألبان والجميد',
    'whyus.quality': 'جودة وشهادات',
    'whyus.qualityDesc': 'شهادات الجودة العالمية ISO 22000, HACCP, Halal, FDA',
    'whyus.packaging': 'مرونة تعبئة',
    'whyus.packagingDesc': 'أحجام متنوعة وحلول تعبئة مخصصة حسب احتياجات السوق',
    'whyus.export': 'دعم التصدير',
    'whyus.exportDesc': 'فريق متخصص في التصدير وخدمة العملاء على مدار الساعة',
    
    // Common
    'common.learnMore': 'اعرف أكثر',
    'common.download': 'تحميل',
    'common.contact': 'تواصل معنا',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.product': 'Product',
    'nav.specs': 'Specifications',
    'nav.certifications': 'Certifications',
    'nav.export': 'Export',
    'nav.oem': 'Private Label',
    'nav.recipes': 'Recipes',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.requestQuote': 'Request Quote',
    
    // Hero
    'hero.title': 'JAMEEDONA',
    'hero.subtitle': 'Authentic Jordanian Jameed from Al-Fursan Al-Ruba\'iya Factory',
    'hero.description': 'We provide the finest jameed made from fresh milk according to the highest quality and food safety standards for global markets',
    'hero.requestQuote': 'Request Quote',
    'hero.downloadSpecs': 'Download Specifications',
    
    // Why Us
    'whyus.title': 'Why Choose Us?',
    'whyus.manufacturing': 'Manufacturing Expertise',
    'whyus.manufacturingDesc': '20+ years of experience in dairy and jameed manufacturing',
    'whyus.quality': 'Quality & Certifications',
    'whyus.qualityDesc': 'International quality certifications: ISO 22000, HACCP, Halal, FDA',
    'whyus.packaging': 'Flexible Packaging',
    'whyus.packagingDesc': 'Various sizes and customized packaging solutions for market needs',
    'whyus.export': 'Export Support',
    'whyus.exportDesc': 'Specialized export team and 24/7 customer service',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.download': 'Download',
    'common.contact': 'Contact Us',
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.product': 'Produit',
    'nav.specs': 'Spécifications',
    'nav.certifications': 'Certifications',
    'nav.export': 'Export',
    'nav.oem': 'Marque Privée',
    'nav.recipes': 'Recettes',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.requestQuote': 'Demander Devis',
    
    // Hero
    'hero.title': 'JAMEEDONA',
    'hero.subtitle': 'Jameed Jordanien Authentique d\'Al-Fursan Al-Ruba\'iya Factory',
    'hero.description': 'Nous fournissons le meilleur jameed fabriqué à partir de lait frais selon les plus hauts standards de qualité et de sécurité alimentaire pour les marchés mondiaux',
    'hero.requestQuote': 'Demander Devis',
    'hero.downloadSpecs': 'Télécharger Spécifications',
    
    // Why Us
    'whyus.title': 'Pourquoi Nous Choisir?',
    'whyus.manufacturing': 'Expertise de Fabrication',
    'whyus.manufacturingDesc': 'Plus de 20 ans d\'expérience dans la fabrication de produits laitiers et jameed',
    'whyus.quality': 'Qualité & Certifications',
    'whyus.qualityDesc': 'Certifications qualité internationales: ISO 22000, HACCP, Halal, FDA',
    'whyus.packaging': 'Emballage Flexible',
    'whyus.packagingDesc': 'Différentes tailles et solutions d\'emballage personnalisées selon les besoins du marché',
    'whyus.export': 'Support Export',
    'whyus.exportDesc': 'Équipe export spécialisée et service client 24h/24',
    
    // Common
    'common.learnMore': 'En Savoir Plus',
    'common.download': 'Télécharger',
    'common.contact': 'Nous Contacter',
  },
  de: {
    // Header
    'nav.home': 'Startseite',
    'nav.product': 'Produkt',
    'nav.specs': 'Spezifikationen',
    'nav.certifications': 'Zertifizierungen',
    'nav.export': 'Export',
    'nav.oem': 'Private Label',
    'nav.recipes': 'Rezepte',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
    'nav.requestQuote': 'Angebot Anfordern',
    
    // Hero
    'hero.title': 'JAMEEDONA',
    'hero.subtitle': 'Authentischer Jordanischer Jameed von Al-Fursan Al-Ruba\'iya Factory',
    'hero.description': 'Wir bieten den besten Jameed aus frischer Milch nach höchsten Qualitäts- und Lebensmittelsicherheitsstandards für globale Märkte',
    'hero.requestQuote': 'Angebot Anfordern',
    'hero.downloadSpecs': 'Spezifikationen Herunterladen',
    
    // Why Us
    'whyus.title': 'Warum Uns Wählen?',
    'whyus.manufacturing': 'Fertigungsexpertise',
    'whyus.manufacturingDesc': '20+ Jahre Erfahrung in der Herstellung von Milchprodukten und Jameed',
    'whyus.quality': 'Qualität & Zertifizierungen',
    'whyus.qualityDesc': 'Internationale Qualitätszertifizierungen: ISO 22000, HACCP, Halal, FDA',
    'whyus.packaging': 'Flexible Verpackung',
    'whyus.packagingDesc': 'Verschiedene Größen und angepasste Verpackungslösungen für Marktanforderungen',
    'whyus.export': 'Export-Support',
    'whyus.exportDesc': 'Spezialisiertes Export-Team und 24/7 Kundenservice',
    
    // Common
    'common.learnMore': 'Mehr Erfahren',
    'common.download': 'Herunterladen',
    'common.contact': 'Kontaktieren Sie Uns',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.product': 'Producto',
    'nav.specs': 'Especificaciones',
    'nav.certifications': 'Certificaciones',
    'nav.export': 'Exportación',
    'nav.oem': 'Marca Privada',
    'nav.recipes': 'Recetas',
    'nav.about': 'Acerca',
    'nav.contact': 'Contacto',
    'nav.requestQuote': 'Solicitar Cotización',
    
    // Hero
    'hero.title': 'JAMEEDONA',
    'hero.subtitle': 'Jameed Jordano Auténtico de Al-Fursan Al-Ruba\'iya Factory',
    'hero.description': 'Ofrecemos el mejor jameed hecho de leche fresca según los más altos estándares de calidad y seguridad alimentaria para mercados globales',
    'hero.requestQuote': 'Solicitar Cotización',
    'hero.downloadSpecs': 'Descargar Especificaciones',
    
    // Why Us
    'whyus.title': '¿Por Qué Elegirnos?',
    'whyus.manufacturing': 'Experiencia en Manufactura',
    'whyus.manufacturingDesc': 'Más de 20 años de experiencia en fabricación de productos lácteos y jameed',
    'whyus.quality': 'Calidad y Certificaciones',
    'whyus.qualityDesc': 'Certificaciones de calidad internacional: ISO 22000, HACCP, Halal, FDA',
    'whyus.packaging': 'Empaque Flexible',
    'whyus.packagingDesc': 'Varios tamaños y soluciones de empaque personalizadas según necesidades del mercado',
    'whyus.export': 'Soporte de Exportación',
    'whyus.exportDesc': 'Equipo especializado en exportación y servicio al cliente 24/7',
    
    // Common
    'common.learnMore': 'Saber Más',
    'common.download': 'Descargar',
    'common.contact': 'Contáctenos',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={`font-${isRTL ? 'cairo' : 'inter'}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};