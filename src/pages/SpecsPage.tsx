import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@/components/FontAwesome';
import { useLanguage } from '@/contexts/LanguageContext';

const SpecsPage = () => {
  const { t, isRTL } = useLanguage();

  const packageSpecs = [
    {
      size: '500g',
      packageType: isRTL ? 'علبة بلاستيكية' : 'Plastic Container',
      cartonQty: '24',
      palletQty: '1,200',
      dimensions: '12 x 12 x 8 cm',
      weight: '0.6 kg'
    },
    {
      size: '1kg', 
      packageType: isRTL ? 'علبة بلاستيكية' : 'Plastic Container',
      cartonQty: '12',
      palletQty: '600',
      dimensions: '15 x 15 x 10 cm',
      weight: '1.1 kg'
    },
    {
      size: '5kg',
      packageType: isRTL ? 'كيس مفرغ من الهواء' : 'Vacuum Bag',
      cartonQty: '4',
      palletQty: '200',
      dimensions: '25 x 20 x 15 cm',
      weight: '5.2 kg'
    },
    {
      size: '10kg',
      packageType: isRTL ? 'كيس مفرغ من الهواء' : 'Vacuum Bag',
      cartonQty: '2',
      palletQty: '100',
      dimensions: '30 x 25 x 18 cm',
      weight: '10.3 kg'
    }
  ];

  const technicalSpecs = [
    {
      property: isRTL ? 'الرطوبة' : 'Moisture Content',
      value: '< 12%'
    },
    {
      property: isRTL ? 'الملوحة' : 'Salt Content',
      value: '8-12%'
    },
    {
      property: isRTL ? 'البروتين' : 'Protein',
      value: '> 15%'
    },
    {
      property: isRTL ? 'الدهون' : 'Fat Content',
      value: '< 2%'
    },
    {
      property: isRTL ? 'مدة الصلاحية' : 'Shelf Life',
      value: isRTL ? '18 شهر' : '18 months'
    },
    {
      property: isRTL ? 'درجة التخزين' : 'Storage Temperature',
      value: isRTL ? 'درجة حرارة الغرفة' : 'Room Temperature'
    }
  ];

  return (
    <section id="specs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            {isRTL ? 'المواصفات الفنية والتعبئة' : 'Technical Specifications & Packaging'}
          </h1>
          <p className={`text-xl text-muted-foreground ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            {isRTL ? 'تفاصيل شاملة عن المنتج وخيارات التعبئة' : 'Comprehensive product details and packaging options'}
          </p>
        </div>

        {/* Technical Specifications */}
        <div className="card-elegant p-8 mb-12">
          <h2 className={`text-3xl font-bold mb-8 text-center text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            <FontAwesomeIcon icon="flask" className="mr-3 text-primary" />
            {isRTL ? 'المواصفات الفنية' : 'Technical Specifications'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-accent p-6 rounded-xl text-center">
                <h3 className={`font-bold text-text-dark mb-2 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                  {spec.property}
                </h3>
                <p className="text-2xl font-bold text-primary">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Packaging Specifications */}
        <div className="card-elegant overflow-hidden mb-12">
          <div className="bg-gradient-primary text-white p-6">
            <h2 className={`text-3xl font-bold ${isRTL ? 'font-cairo' : 'font-inter'}`}>
              {isRTL ? 'مواصفات التعبئة والتغليف' : 'Packaging Specifications'}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-accent">
                  <th className={`text-${isRTL ? 'right' : 'left'} p-4 font-bold text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                    {isRTL ? 'الحجم' : 'Size'}
                  </th>
                  <th className={`text-${isRTL ? 'right' : 'left'} p-4 font-bold text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                    {isRTL ? 'نوع العبوة' : 'Package Type'}
                  </th>
                  <th className={`text-${isRTL ? 'right' : 'left'} p-4 font-bold text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                    {isRTL ? 'الكرتونة' : 'Per Carton'}
                  </th>
                  <th className={`text-${isRTL ? 'right' : 'left'} p-4 font-bold text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                    {isRTL ? 'البالت' : 'Per Pallet'}
                  </th>
                  <th className={`text-${isRTL ? 'right' : 'left'} p-4 font-bold text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                    {isRTL ? 'الأبعاد' : 'Dimensions'}
                  </th>
                  <th className={`text-${isRTL ? 'right' : 'left'} p-4 font-bold text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                    {isRTL ? 'الوزن الإجمالي' : 'Gross Weight'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {packageSpecs.map((spec, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-border/50 hover:bg-accent/50 transition-colors ${
                      index % 2 === 0 ? 'bg-background' : 'bg-accent/20'
                    }`}
                  >
                    <td className="p-4">
                      <span className="font-bold text-primary text-lg">
                        {spec.size}
                      </span>
                    </td>
                    <td className={`p-4 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                      {spec.packageType}
                    </td>
                    <td className="p-4 font-bold">
                      {spec.cartonQty} {isRTL ? 'قطعة' : 'pcs'}
                    </td>
                    <td className="p-4 font-bold">
                      {spec.palletQty} {isRTL ? 'قطعة' : 'pcs'}
                    </td>
                    <td className="p-4 font-mono text-sm">
                      {spec.dimensions}
                    </td>
                    <td className="p-4 font-bold">
                      {spec.weight}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card-elegant p-6 text-center">
            <FontAwesomeIcon icon="thermometer-half" className="text-3xl text-primary mb-4" />
            <h3 className={`font-bold text-text-dark mb-2 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
              {isRTL ? 'التخزين' : 'Storage'}
            </h3>
            <p className={`text-muted-foreground ${isRTL ? 'font-cairo' : 'font-inter'}`}>
              {isRTL ? 'مكان بارد وجاف' : 'Cool & Dry Place'}
            </p>
          </div>
          
          <div className="card-elegant p-6 text-center">
            <FontAwesomeIcon icon="calendar-alt" className="text-3xl text-primary mb-4" />
            <h3 className={`font-bold text-text-dark mb-2 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
              {isRTL ? 'مدة الصلاحية' : 'Shelf Life'}
            </h3>
            <p className={`text-muted-foreground ${isRTL ? 'font-cairo' : 'font-inter'}`}>
              {isRTL ? '18 شهر' : '18 Months'}
            </p>
          </div>
          
          <div className="card-elegant p-6 text-center">
            <FontAwesomeIcon icon="barcode" className="text-3xl text-primary mb-4" />
            <h3 className={`font-bold text-text-dark mb-2 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
              {isRTL ? 'الباركود' : 'Barcode'}
            </h3>
            <p className={`text-muted-foreground ${isRTL ? 'font-cairo' : 'font-inter'}`}>
              EAN-13
            </p>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center">
          <h3 className={`text-2xl font-bold mb-6 text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            {isRTL ? 'تحميل المستندات' : 'Download Documents'}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gradient">
              <FontAwesomeIcon icon="file-pdf" className="mr-2" />
              {isRTL ? 'ورقة البيانات الفنية' : 'Technical Data Sheet'}
            </Button>
            <Button size="lg" variant="outline">
              <FontAwesomeIcon icon="file-alt" className="mr-2" />
              {isRTL ? 'شهادة التحليل' : 'Certificate of Analysis'}
            </Button>
            <Button size="lg" variant="outline">
              <FontAwesomeIcon icon="download" className="mr-2" />
              {isRTL ? 'جميع المستندات' : 'All Documents'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsPage;