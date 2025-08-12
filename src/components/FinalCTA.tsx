import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from './FontAwesome';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-cairo">
            جاهز لبدء شراكة ناجحة؟
          </h2>
          <p className="text-xl md:text-2xl mb-4 font-inter">
            Ready to Start a Successful Partnership?
          </p>
          <p className="text-lg mb-12 max-w-3xl mx-auto font-cairo leading-relaxed">
            انضم إلى شبكة موزعينا حول العالم واستفد من جودة منتجاتنا وخدماتنا المتميزة. نحن نقدم الدعم الكامل لشركائنا من التسويق إلى اللوجستيات.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 min-w-[250px] font-bold"
            >
              <FontAwesomeIcon icon="paper-plane" className="ml-2" />
              طلب عرض أسعار فوري
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white text-lg px-8 py-4 min-w-[250px] font-bold"
            >
              <FontAwesomeIcon icon="vial" className="ml-2" />
              طلب عينة مجانية
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon="truck-fast" className="text-2xl" />
              </div>
              <h3 className="font-bold font-cairo mb-2">شحن سريع</h3>
              <p className="text-sm font-inter opacity-90">Fast Shipping Worldwide</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon="award" className="text-2xl" />
              </div>
              <h3 className="font-bold font-cairo mb-2">جودة مضمونة</h3>
              <p className="text-sm font-inter opacity-90">Guaranteed Quality</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon="phone" className="text-2xl" />
              </div>
              <h3 className="font-bold font-cairo mb-2">دعم 24/7</h3>
              <p className="text-sm font-inter opacity-90">24/7 Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;