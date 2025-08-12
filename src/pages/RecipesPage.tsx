import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@/components/FontAwesome';
import { useLanguage } from '@/contexts/LanguageContext';
import mansafDish from '@/assets/mansaf-dish.jpg';

const RecipesPage = () => {
  const { t, isRTL } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const recipes = [
    {
      id: 1,
      nameAr: 'المنسف الأردني التقليدي',
      nameEn: 'Traditional Jordanian Mansaf',
      nameFr: 'Mansaf Jordanien Traditionnel',
      nameDe: 'Traditioneller Jordanischer Mansaf',
      nameEs: 'Mansaf Jordano Tradicional',
      image: mansafDish,
      cookingTime: '45 min',
      servings: '6-8',
      difficulty: isRTL ? 'متوسط' : 'Medium',
      ingredients: {
        ar: [
          '500 جرام جميد جميدونا',
          '2 كيلو لحم خروف',
          '3 أكواب أرز بسمتي',
          'خبز الشراك',
          'لوز مقشر للتزيين',
          'بقدونس مفروم'
        ],
        en: [
          '500g Jameedona Jameed',
          '2kg Lamb meat',
          '3 cups Basmati rice',
          'Shrak bread',
          'Blanched almonds for garnish',
          'Chopped parsley'
        ],
        fr: [
          '500g Jameed Jameedona',
          '2kg Viande d\'agneau',
          '3 tasses Riz Basmati',
          'Pain Shrak',
          'Amandes blanchies pour garniture',
          'Persil haché'
        ],
        de: [
          '500g Jameedona Jameed',
          '2kg Lammfleisch',
          '3 Tassen Basmati-Reis',
          'Shrak-Brot',
          'Blanchierte Mandeln zur Dekoration',
          'Gehackte Petersilie'
        ],
        es: [
          '500g Jameed Jameedona',
          '2kg Carne de cordero',
          '3 tazas Arroz Basmati',
          'Pan Shrak',
          'Almendras blanqueadas para decorar',
          'Perejil picado'
        ]
      },
      instructions: {
        ar: [
          'انقع الجميد في الماء الدافئ لمدة 30 دقيقة',
          'اسلقي اللحم مع البهارات حتى ينضج',
          'اخلطي الجميد المنقوع مع مرق اللحم',
          'اتركي الخليط ينضج على نار هادئة لمدة 20 دقيقة',
          'اسلقي الأرز حتى ينضج',
          'قدمي المنسف على خبز الشراك مع اللحم والأرز'
        ],
        en: [
          'Soak jameed in warm water for 30 minutes',
          'Boil meat with spices until tender',
          'Mix soaked jameed with meat broth',
          'Let mixture simmer on low heat for 20 minutes',
          'Cook rice until tender',
          'Serve mansaf on shrak bread with meat and rice'
        ],
        fr: [
          'Faire tremper le jameed dans l\'eau tiède pendant 30 minutes',
          'Faire bouillir la viande avec les épices jusqu\'à tendreté',
          'Mélanger le jameed trempé avec le bouillon de viande',
          'Laisser mijoter le mélange à feu doux pendant 20 minutes',
          'Cuire le riz jusqu\'à tendreté',
          'Servir le mansaf sur du pain shrak avec la viande et le riz'
        ],
        de: [
          'Jameed 30 Minuten in warmem Wasser einweichen',
          'Fleisch mit Gewürzen kochen bis es zart ist',
          'Eingeweichten Jameed mit Fleischbrühe mischen',
          'Mischung 20 Minuten bei niedriger Hitze köcheln lassen',
          'Reis kochen bis er gar ist',
          'Mansaf auf Shrak-Brot mit Fleisch und Reis servieren'
        ],
        es: [
          'Remojar jameed en agua tibia por 30 minutos',
          'Hervir carne con especias hasta que esté tierna',
          'Mezclar jameed remojado con caldo de carne',
          'Dejar que la mezcla hierva a fuego lento por 20 minutos',
          'Cocinar arroz hasta que esté tierno',
          'Servir mansaf en pan shrak con carne y arroz'
        ]
      },
      videoId: 'recipe-mansaf-traditional'
    },
    {
      id: 2,
      nameAr: 'شوربة الجميد',
      nameEn: 'Jameed Soup',
      nameFr: 'Soupe de Jameed',
      nameDe: 'Jameed Suppe',
      nameEs: 'Sopa de Jameed',
      image: mansafDish,
      cookingTime: '25 min',
      servings: '4',
      difficulty: isRTL ? 'سهل' : 'Easy',
      ingredients: {
        ar: [
          '200 جرام جميد جميدونا',
          'بصلة متوسطة مقطعة',
          'ملعقة كبيرة زيت زيتون',
          'كوبين مرق دجاج',
          'ملح وفلفل حسب الذوق'
        ],
        en: [
          '200g Jameedona Jameed',
          '1 medium onion, chopped',
          '1 tbsp olive oil',
          '2 cups chicken broth',
          'Salt and pepper to taste'
        ],
        fr: [
          '200g Jameed Jameedona',
          '1 oignon moyen, haché',
          '1 c. à soupe d\'huile d\'olive',
          '2 tasses de bouillon de poulet',
          'Sel et poivre au goût'
        ],
        de: [
          '200g Jameedona Jameed',
          '1 mittlere Zwiebel, gehackt',
          '1 EL Olivenöl',
          '2 Tassen Hühnerbrühe',
          'Salz und Pfeffer nach Geschmack'
        ],
        es: [
          '200g Jameed Jameedona',
          '1 cebolla mediana, picada',
          '1 cda aceite de oliva',
          '2 tazas caldo de pollo',
          'Sal y pimienta al gusto'
        ]
      },
      instructions: {
        ar: [
          'انقع الجميد في الماء الدافئ',
          'اقلي البصل حتى يذبل',
          'أضف الجميد المذاب والمرق',
          'اتركي الخليط ينضج 15 دقيقة',
          'تبلي بالملح والفلفل'
        ],
        en: [
          'Soak jameed in warm water',
          'Sauté onion until soft',
          'Add dissolved jameed and broth',
          'Simmer for 15 minutes',
          'Season with salt and pepper'
        ],
        fr: [
          'Faire tremper le jameed dans l\'eau tiède',
          'Faire revenir l\'oignon jusqu\'à tendreté',
          'Ajouter le jameed dissous et le bouillon',
          'Laisser mijoter 15 minutes',
          'Assaisonner avec sel et poivre'
        ],
        de: [
          'Jameed in warmem Wasser einweichen',
          'Zwiebel anbraten bis weich',
          'Aufgelösten Jameed und Brühe hinzufügen',
          '15 Minuten köcheln lassen',
          'Mit Salz und Pfeffer würzen'
        ],
        es: [
          'Remojar jameed en agua tibia',
          'Saltear cebolla hasta que esté suave',
          'Agregar jameed disuelto y caldo',
          'Hervir a fuego lento por 15 minutos',
          'Sazonar con sal y pimienta'
        ]
      },
      videoId: 'recipe-jameed-soup'
    }
  ];

  const getCurrentLang = () => {
    const { language } = useLanguage();
    return language;
  };

  const getRecipeName = (recipe: any) => {
    const lang = getCurrentLang();
    switch(lang) {
      case 'ar': return recipe.nameAr;
      case 'fr': return recipe.nameFr;
      case 'de': return recipe.nameDe;
      case 'es': return recipe.nameEs;
      default: return recipe.nameEn;
    }
  };

  const getIngredients = (recipe: any) => {
    const lang = getCurrentLang();
    return recipe.ingredients[lang] || recipe.ingredients.en;
  };

  const getInstructions = (recipe: any) => {
    const lang = getCurrentLang();
    return recipe.instructions[lang] || recipe.instructions.en;
  };

  return (
    <section id="recipes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            {isRTL ? 'وصفات شهية بالجميد' : 'Delicious Jameed Recipes'}
          </h1>
          <p className={`text-xl text-muted-foreground ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            {isRTL ? 'اكتشف أشهى الأطباق التي يمكن تحضيرها بالجميد' : 'Discover delicious dishes you can prepare with jameed'}
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="space-y-16">
          {recipes.map((recipe, index) => (
            <div key={recipe.id} className="card-elegant overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Recipe Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={recipe.image}
                    alt={getRecipeName(recipe)}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Recipe Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        <FontAwesomeIcon icon="clock" className="mr-1" />
                        {recipe.cookingTime}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        <FontAwesomeIcon icon="users" className="mr-1" />
                        {recipe.servings} {isRTL ? 'أشخاص' : 'servings'}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        <FontAwesomeIcon icon="star" className="mr-1" />
                        {recipe.difficulty}
                      </span>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                      onClick={() => setSelectedVideo(recipe.videoId)}
                    >
                      <FontAwesomeIcon icon="play-circle" className="mr-2" />
                      {isRTL ? 'شاهد الفيديو' : 'Watch Video'}
                    </Button>
                  </div>
                </div>

                {/* Recipe Details */}
                <div className={`p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className={`text-3xl font-bold mb-4 text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                    {getRecipeName(recipe)}
                  </h2>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <h3 className={`text-xl font-bold mb-3 text-primary ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                      <FontAwesomeIcon icon="utensils" className="mr-2" />
                      {isRTL ? 'المكونات' : 'Ingredients'}
                    </h3>
                    <ul className="space-y-2">
                      {getIngredients(recipe).map((ingredient: string, idx: number) => (
                        <li key={idx} className={`flex items-start gap-2 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                          <FontAwesomeIcon icon="check-circle" className="text-primary mt-1 text-sm" />
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions */}
                  <div>
                    <h3 className={`text-xl font-bold mb-3 text-primary ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                      <FontAwesomeIcon icon="list-ol" className="mr-2" />
                      {isRTL ? 'طريقة التحضير' : 'Instructions'}
                    </h3>
                    <ol className="space-y-3">
                      {getInstructions(recipe).map((step: string, idx: number) => (
                        <li key={idx} className={`flex gap-3 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                          <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-elegant p-8 bg-gradient-subtle">
            <h3 className={`text-2xl font-bold mb-4 text-text-dark ${isRTL ? 'font-cairo' : 'font-inter'}`}>
              {isRTL ? 'هل لديك وصفة مميزة بالجميد؟' : 'Do you have a special jameed recipe?'}
            </h3>
            <p className={`text-muted-foreground mb-6 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
              {isRTL ? 'شاركها معنا وسنعرضها على موقعنا' : 'Share it with us and we\'ll feature it on our website'}
            </p>
            <Button className="btn-gradient">
              <FontAwesomeIcon icon="paper-plane" className="mr-2" />
              {isRTL ? 'شارك وصفتك' : 'Share Your Recipe'}
            </Button>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative max-w-4xl w-full bg-card rounded-lg overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className={`font-bold ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                  {isRTL ? 'فيديو طريقة التحضير' : 'Recipe Video Tutorial'}
                </h3>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <FontAwesomeIcon icon="times" />
                </button>
              </div>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <FontAwesomeIcon icon="play-circle" className="text-6xl text-primary mb-4" />
                  <p className={`text-muted-foreground ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                    {isRTL ? 'فيديو توضيحي لطريقة التحضير' : 'Recipe video tutorial would be embedded here'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecipesPage;