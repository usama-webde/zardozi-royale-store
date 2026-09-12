
// Pre-generate images array to keep references stable and prevent flickering
const getImages = (folder) => Array.from({ length: 20 }, (_, i) => `/images/${folder}/${i + 1}.jpg`);

const dress1Images = getImages('dress-1');
const dress2Images = getImages('dress-2');
const dress3Images = getImages('dress-3');
const dress4Images = getImages('dress-4');
const dress5Images = getImages('dress-5');
const dress6Images = getImages('dress-6');
const dress7Images = getImages('dress-7');
const dress8Images = getImages('dress-8');
const dress9Images = getImages('dress-9');
const dress10Images = getImages('dress-10');
const dress11Images = getImages('dress-11');
const dress12Images = getImages('dress-12');

export const products = [
  {
    id: 1,
    name: 'Royal Zardozi & Dabka Gold Lehenga',
    urduName: 'شاہی زردوزی اور ڈبکا گولڈ لہنگا',
    arabicName: 'ليغندا زردوزي ودبكة ذهبية ملكية',
    category: 'Bridal Lehenga',
    urduCategory: 'برائیڈل لہنگا',
    arabicCategory: 'ليغندا العروس',
    price: 185000,
    description: 'Handcrafted pure raw silk bridal lehenga embellished with traditional gold zardozi, dabka, and real stone work.',
    urduDescription: 'ہاتھ سے بنا ہوا خالص راؤ سلک برائیڈل لہنگا جو روایتی سنہری زردوزی، ڈبکا اور اصلی پتھر کے کام سے سجایا گیا ہے۔',
    arabicDescription: 'ليغندا عروس من الحرير الخالص مصنوعة يدويًا ومزينة بتطريز زردوزي ذهبي تقليدي ودبكة وأحجار حقيقية.',
    image: dress1Images[0],
    images: dress1Images
  },
  {
    id: 2,
    name: 'Mughal Crimson Red Bridal Gharara',
    urduName: 'مغل کریملن ریڈ برائیڈل غرارہ',
    arabicName: 'غرارة العروس الحمراء القرمزية المغولية',
    category: 'Bridal Gharara',
    urduCategory: 'برائیڈل غرارہ',
    arabicCategory: 'غرارة العروس',
    price: 210000,
    description: 'Classic crimson red gharara set with thick naqshi borders, kora work, and heavily embroidered double dupatta.',
    urduDescription: 'کلاسیکی گہرے سرخ رنگ کا غرارہ سیٹ جس پر موٹے نقشی بارڈرز، کورا ورک اور بھاری کڑھائی والا ڈبل دوپٹہ ہے۔',
    arabicDescription: 'طقم غرارة أحمر قرمزي كلاسيكي مع حواف نقش سميكة وعمل كورا وطرحة مزدوجة مطرزة بغزارة.',
    image: dress2Images[0],
    images: dress2Images
  },
  {
    id: 3,
    name: 'Emerald Green Velvet Pishwas',
    urduName: 'ایمرلڈ گرین ویلویٹ پیشواس',
    arabicName: 'بيشواس مخملي أخضر زمردي',
    category: 'Velvet Pishwas',
    urduCategory: 'ویلویٹ پیشواس',
    arabicCategory: 'بيشواس مخمل',
    price: 195000,
    description: 'Royal emerald green pure velvet pishwas featuring intricate silver naqshi, tilla, and dabka flare details.',
    urduDescription: 'شاہی زمردی سبز خالص مخمل کا پیشواس جس پر چاندی کے نفشی، طلا اور ڈبکا کا دلکش اور باریک کام کیا گیا ہے۔',
    arabicDescription: 'بيشواس مخملي أخضر زمردي ملكي يتميز بتفاصيل معقدة من النقش الفضي والتل والدبكة.',
    image: dress3Images[0],
    images: dress3Images
  },
  {
    id: 4,
    name: 'Blush Pink Organza Bridal Maxi',
    urduName: 'بلش پنک آرگنزا برائیڈل میکسی',
    arabicName: 'ماكسي عروس من الأورجانزا الوردي الفاتح',
    category: 'Bridal Maxi',
    urduCategory: 'برائیڈل میکسی',
    arabicCategory: 'ماكسي العروس',
    price: 165000,
    description: 'Ethereal blush pink organza maxi adorned with pearls, resham threads, and delicate zardozi motifs.',
    urduDescription: 'خوبصورت ہلکے گلابی رنگ کی آرگنزا میکسی جو موتیوں، ریشم کے دھاگوں اور نازک زردوزی کے پھولوں سے مزین ہے۔',
    arabicDescription: 'ماكسي أورجانزا وردي فتاح أثيري مزين باللؤلؤ وخيوط الحرير وتصاميم الزردوزي الرقيقة.',
    image: dress4Images[0],
    images: dress4Images
  },
  {
    id: 5,
    name: 'Antique Gold Heavy Long Trail Pishwas',
    urduName: 'اینٹیک گولڈ ہیوی لانگ ٹریل پیشواس',
    arabicName: 'بيشواس طويل ذو ذيل ثقيل ذهبي عتيق',
    category: 'Long Trail Pishwas',
    urduCategory: 'لانگ ٹریل پیشواس',
    arabicCategory: 'بيشواس طويل',
    price: 240000,
    description: 'Grand antique gold bridal pishwas with a majestic trailing back, heavy zardozi, and multi-faceted stone embellishments.',
    urduDescription: 'شاندار اینٹیک سنہری برائیڈل پیشواس جس کا پچھلا حصہ ٹریل کے ساتھ ہے، بھاری زردوزی اور مختلف قیمتی پتھروں سے سجا ہوا۔',
    arabicDescription: 'بيشواس عروس ذهبي عتيق فخم مع ظهر طويل مهيب، وتطريز ثقيل بالزردوزي، وتزيينات بأحجار متعددة الأوجه.',
    image: dress5Images[0],
    images: dress5Images
  },
  {
    id: 6,
    name: 'Maroon Heritage Peacock Lehenga',
    urduName: 'مرون ہیریটেج پیکاک لہنگا',
    arabicName: 'ليغندا الطاووس التراثية العنابية',
    category: 'Bridal Lehenga',
    urduCategory: 'برائیڈل لہنگا',
    arabicCategory: 'ليغندا العروس',
    price: 225000,
    description: 'Deep maroon silk lehenga featuring traditional peacock motif zardozi embroidery and heavy resham border work.',
    urduDescription: 'گہرے مرون رنگ کا ریشمی لہنگا جس پر روایتی مور کے ڈیزائن کی زردوزی کڑھائی اور بھاری ریشمی بارڈر کا کام ہے۔',
    arabicDescription: 'ليغندا حريرية عنابية عميقة تتميز بتطريز زردوزي تقليدي بنمط الطاووس وعمل حواف حريرية ثقيلة.',
    image: dress6Images[0],
    images: dress6Images
  },
  {
    id: 7,
    name: 'Royal Emerald & Gold Bridal Sharara',
    urduName: 'شاہی ایمرلڈ اینڈ گولڈ برائیڈل شرارہ',
    arabicName: 'شرارة عروس ملكية بلون الزمرد والذهب',
    category: 'Bridal Sharara',
    urduCategory: 'برائیڈل شرارہ',
    arabicCategory: 'شرارة العروس',
    price: 190000,
    description: 'Exquisite emerald green net sharara paired with a heavily hand-embroidered short shirt featuring kora, dabka and pearls.',
    urduDescription: 'خوبصورت زمردی سبز نیٹ کا شرارہ جس کے ساتھ بھاری ہاتھ کی کڑھائی والی شارٹ قمیض ہے، جس پر کورا، ڈبکا اور موتیوں کا کام ہے۔',
    arabicDescription: 'شرارة شبكية خضراء زمردية رائعة مع قميص قصير مطرز يدويًا بغزارة يضم الكورا والدبكة واللؤلؤ.',
    image: dress7Images[0],
    images: dress7Images
  },
  {
    id: 8,
    name: 'Peach & Silver Crystal Peplum Set',
    urduName: 'پیچ اینڈ سلور کرسٹل پیملم سیٹ',
    arabicName: 'طقم بيبلوم بلون الخوخ والفضي الكريستالي',
    category: 'Peplum & Lehenga',
    urduCategory: 'پیملم اور لہنگا',
    arabicCategory: 'بيبلوم وليغندا',
    price: 175000,
    description: 'Modern peach raw silk peplum intricately adorned with metallic silver crystals, dabka, and sparkling sequin work.',
    urduDescription: 'جدید پیچ راؤ سلک پیملم جو دھاتی چاندی کے کرستلز، ڈبکا اور چمکدار ستاروں کے کام سے باریکی سے سجایا گیا ہے۔',
    arabicDescription: 'بيبلوم من الحرير الخام الخوخي الحديث مزين بشكل معقد بالكريستال الفضي المعدني والدبكة والترتر المتلألئ.',
    image: dress8Images[0],
    images: dress8Images
  },
  {
    id: 9,
    name: 'Burgundy Velvet Royal Sherwani & Bridal Jora',
    urduName: 'برگنڈی ویلویٹ رائل شیروانی اینڈ برائیڈل جوڑا',
    arabicName: 'بدلة عروس وشرواني مخملي ملكي بلون العنابي الغامق',
    category: 'Velvet Couture',
    urduCategory: 'ویلویٹ کوچیور',
    arabicCategory: 'أزياء المخمل',
    price: 230000,
    description: 'Deep burgundy pure velvet bridal outfit styled with heavy antique gold zardozi motifs and rich border detailing.',
    urduDescription: 'گہرے برگنڈی خالص مخمل کا برائیڈل لباس جس پر اینٹیک سنہری زردوزی کے نقش اور بھرپور بارڈر کی تفصیلات ہیں۔',
    arabicDescription: 'زي عروس من المخمل الخالص بلون العنابي الداكن مصمم بزخارف زردوزي ذهبية عتيقة ثقيلة وتفاصيل حواف غنية.',
    image: dress9Images[0],
    images: dress9Images
  },
  {
    id: 10,
    name: 'Ivory & Gold Regal Farshi Lehenga',
    urduName: 'آئیوری اینڈ گولڈ ریگل فرشی لہنگا',
    arabicName: 'ليغندا فرش الملكية باللون العاجي والذهب',
    category: 'Farshi Lehenga',
    urduCategory: 'فرشی لہنگا',
    arabicCategory: 'ليغندا فرش',
    price: 250000,
    description: 'Majestic ivory net farshi lehenga featuring heavy traditional naqshi, zardozi and multi-colored resham accents.',
    urduDescription: 'شاندار آئیوری نیٹ کا فرشی لہنگا جس پر روایتی نقشی، زردوزی اور مختلف رنگوں کے ریشم کا بھاری کام ہے۔',
    arabicDescription: 'ليغندا فرش شبكية عاجية مهيبة تتميز بتطريز تقليدي ثقيل من النقش والزردوزي ولمسات حريرية متعددة الألوان.',
    image: dress10Images[0],
    images: dress10Images
  },
  {
    id: 11,
    name: 'Ruby Red Traditional Bridal Sari',
    urduName: 'روبی ریڈ روایتی برائیڈل ساڑھی',
    arabicName: 'ساري عروس تقليدي أحمر ياقوتي',
    category: 'Bridal Sari',
    urduCategory: 'برائیڈل ساڑھی',
    arabicCategory: 'ساري العروس',
    price: 160000,
    description: 'Pure organza ruby red sari featuring intricately worked pallu and borders with zardozi, kora, and Sitara embellishments.',
    urduDescription: 'خالص آرگنزا روبی ریڈ ساڑھی جس کا پلو اور بارڈر زردوزی، کورا اور ستارے کے باریک کام سے مزین ہے۔',
    arabicDescription: 'ساري من الأورجانزا الخالص باللون الأحمر الياقوتي يضم طرحة وحواف مزخرفة بشكل معقد بالزردوزي والكورا والستارة.',
    image: dress11Images[0],
    images: dress11Images
  },
  {
    id: 12,
    name: 'Champagne Gold Heavy Cutwork Angrakha',
    urduName: 'شمپین گولڈ ہیوی کٹ ورک انگ رکھا',
    arabicName: 'أنجراخا شامبانيا ذهبية ثقيلة بتصميم مقطوع',
    category: 'Bridal Angrakha',
    urduCategory: 'برائیڈل انگ رکھا',
    arabicCategory: 'أنجراخا العروس',
    price: 215000,
    description: 'Sophisticated champagne gold net angrakha with heavy architectural cutwork borders, dabka, and pearl droplet finishing.',
    urduDescription: 'شاندار شمپین گولڈ نیٹ انگ رکھا جس پر بھاری آرکیٹیکچرل کٹ ورک بارڈرز، ڈبکا اور موتیوں کی فنشنگ کی گئی ہے۔',
    arabicDescription: 'أنجراخا شبكية ذهبية شامبانيا أنيقة مع حواف مقطوعة هندسية ثقيلة، ودبكة، اللمسات النهائية بقطرات اللؤلؤ.',
    image: dress12Images[0],
    images: dress12Images
  }
];