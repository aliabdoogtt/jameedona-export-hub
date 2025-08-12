import { FontAwesomeIcon } from './FontAwesome';

const Markets = () => {
  const markets = [
    { country: 'السعودية', countryEn: 'Saudi Arabia', flag: '🇸🇦' },
    { country: 'الكويت', countryEn: 'Kuwait', flag: '🇰🇼' },
    { country: 'الإمارات', countryEn: 'UAE', flag: '🇦🇪' },
    { country: 'قطر', countryEn: 'Qatar', flag: '🇶🇦' },
    { country: 'عُمان', countryEn: 'Oman', flag: '🇴🇲' },
    { country: 'البحرين', countryEn: 'Bahrain', flag: '🇧🇭' },
    { country: 'لبنان', countryEn: 'Lebanon', flag: '🇱🇧' },
    { country: 'العراق', countryEn: 'Iraq', flag: '🇮🇶' },
    { country: 'مصر', countryEn: 'Egypt', flag: '🇪🇬' },
    { country: 'فلسطين', countryEn: 'Palestine', flag: '🇵🇸' },
    { country: 'سوريا', countryEn: 'Syria', flag: '🇸🇾' },
    { country: 'المغرب', countryEn: 'Morocco', flag: '🇲🇦' },
  ];

  return (
    <section className="py-20 section-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-dark font-cairo">
            أسواقنا العالمية
          </h2>
          <p className="text-xl text-muted-foreground font-inter mb-6">
            Our Global Markets
          </p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <FontAwesomeIcon icon="globe" className="text-primary" />
            <span className="font-cairo">نصدر إلى أكثر من 15 دولة حول العالم</span>
          </div>
        </div>

        <div className="card-elegant p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {markets.map((market, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-accent hover:bg-primary hover:text-white transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-3xl">{market.flag}</span>
                <div className="flex-1">
                  <div className="font-semibold font-cairo text-sm">
                    {market.country}
                  </div>
                  <div className="text-xs font-inter opacity-75 group-hover:opacity-100">
                    {market.countryEn}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-primary rounded-xl text-white text-center">
            <h3 className="text-xl font-bold mb-2 font-cairo">
              هل تريد أن تكون شريكنا في بلدك؟
            </h3>
            <p className="font-inter mb-4">
              Want to become our partner in your country?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <FontAwesomeIcon icon="paper-plane" />
                <span className="font-cairo">تواصل معنا الآن</span>
              </a>
              <a 
                href="mailto:export@jameedona.com" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                <FontAwesomeIcon icon="envelope" />
                <span className="font-inter">export@jameedona.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;