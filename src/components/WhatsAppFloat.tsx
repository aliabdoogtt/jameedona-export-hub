import { FontAwesomeIcon } from './FontAwesome';

const WhatsAppFloat = () => {
  const whatsappMessage = encodeURIComponent(
    'مرحباً، أرغب في الاستفسار عن منتجات الجميد من جميدونا. Hello, I would like to inquire about Jameed products from JAMEEDONA.'
  );
  
  const whatsappNumber = '+962XXXXXXXXX'; // Replace with actual number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-float group"
      aria-label="اتصل بنا عبر واتساب - Contact us via WhatsApp"
    >
      <FontAwesomeIcon icon="whatsapp" className="text-2xl group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-text-dark text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span className="font-cairo">تواصل معنا</span>
        <div className="text-xs font-inter">Chat with us</div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-text-dark translate-x-full"></div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;