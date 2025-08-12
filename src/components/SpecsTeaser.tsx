import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from './FontAwesome';

const SpecsTeaser = () => {
  const packageSizes = [
    {
      size: '500g',
      packageType: 'علبة بلاستيكية / Plastic Container',
      cartonQty: '24 علبة / 24 pcs',
      palletQty: '1,200 علبة / 1,200 pcs'
    },
    {
      size: '1kg',
      packageType: 'علبة بلاستيكية / Plastic Container', 
      cartonQty: '12 علبة / 12 pcs',
      palletQty: '600 علبة / 600 pcs'
    },
    {
      size: '5kg',
      packageType: 'كيس مفرغ من الهواء / Vacuum Bag',
      cartonQty: '4 أكياس / 4 bags',
      palletQty: '200 كيس / 200 bags'
    },
    {
      size: '10kg',
      packageType: 'كيس مفرغ من الهواء / Vacuum Bag',
      cartonQty: '2 كيس / 2 bags', 
      palletQty: '100 كيس / 100 bags'
    }
  ];

  return (
    <section id="specs" className="py-20 section-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-dark font-cairo">
            المواصفات والتعبئة
          </h2>
          <p className="text-xl text-muted-foreground font-inter">
            Specifications & Packaging
          </p>
        </div>

        <div className="card-elegant overflow-hidden">
          <div className="bg-gradient-primary text-white p-6">
            <h3 className="text-2xl font-bold font-cairo mb-2">
              جدول الأحجام والتعبئة
            </h3>
            <p className="font-inter">
              Package Sizes & Specifications
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-accent">
                  <th className="text-right p-4 font-cairo font-bold text-text-dark">
                    الحجم / Size
                  </th>
                  <th className="text-right p-4 font-cairo font-bold text-text-dark">
                    نوع العبوة / Package Type
                  </th>
                  <th className="text-right p-4 font-cairo font-bold text-text-dark">
                    الكرتونة / Carton
                  </th>
                  <th className="text-right p-4 font-cairo font-bold text-text-dark">
                    البالت / Pallet
                  </th>
                </tr>
              </thead>
              <tbody>
                {packageSizes.map((spec, index) => (
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
                    <td className="p-4 font-cairo">
                      {spec.packageType}
                    </td>
                    <td className="p-4 font-cairo">
                      {spec.cartonQty}
                    </td>
                    <td className="p-4 font-cairo">
                      {spec.palletQty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-accent border-t border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <FontAwesomeIcon icon="boxes-stacked" className="text-2xl text-primary mb-2" />
                <div className="font-bold font-cairo">مدة الصلاحية</div>
                <div className="text-sm text-muted-foreground font-inter">18 months shelf life</div>
              </div>
              <div className="text-center">
                <FontAwesomeIcon icon="industry" className="text-2xl text-primary mb-2" />
                <div className="font-bold font-cairo">التخزين</div>
                <div className="text-sm text-muted-foreground font-inter">Cool, dry place</div>
              </div>
              <div className="text-center">
                <FontAwesomeIcon icon="award" className="text-2xl text-primary mb-2" />
                <div className="font-bold font-cairo">المنشأ</div>
                <div className="text-sm text-muted-foreground font-inter">Made in Jordan</div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="btn-gradient">
                <FontAwesomeIcon icon="file-arrow-down" className="ml-2" />
                تحميل المواصفات الفنية الكاملة
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsTeaser;