
import React from "react";
import { Sparkles, HeartHandshake, ShieldCheck, Gem } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { lang, isRTL } = useLanguage();

  // Localized Content Map for Multilingual Support (EN, UR, AR)
  const getContent = () => {
    if (lang === 'UR') {
      return {
        badge: "ہماری وراثت اور کاریگری",
        title: "لاجواب خوبصورتی کی تخلیق",
        description: "روئل برائیڈل کوٹور روایتی جنوبی ایشیائی کڑھائی اور فیشن کے ہنر کو زندہ رکھنے کے لیے پرعزم ہے۔ ہر لباس کو انتہائی مہارت کے ساتھ ہاتھ سے تیار کیا جاتا ہے۔",
        card1Title: "خالص زردوزی اور ڈبکا",
        card1Desc: "ہمارے ماہر کاریگر خالص راؤ سلک، مخمل اور آرگنزا کپڑوں پر روایتی زردوزی، ڈبکا، نقشی اور ریشم کا کام کرتے ہیں۔",
        card2Title: "مرضی کے مطابق تبدیلی (بیسپوک)",
        card2Desc: "من پسند رنگوں سے لے کر ذاتی ڈیزائن اور سائز تک، ہم آپ کے خوابوں کے دلہن کے لباس کو حقیقت بناتے ہیں۔",
        card3Title: "عالمی ترسیل اور ہول سیل",
        card3Desc: "دلہنوں، ریٹیلرز اور بوٹیک مالکان کے لیے معیاری کوالٹی کے ساتھ دنیا بھر میں محفوظ ترسیل۔",
        storyTitle: "کراچی میں ہاتھ سے تیار کردہ، دنیا بھر میں پسندیدہ",
        storyDesc: "کراچی کے مرکزی فیشن ہب میں قائم، ہمارا ورکشاپ نسلوں پرانی روایتی تکنیکوں کو جدید لگژری کٹس کے ساتھ جوڑتا ہے۔ چاہے بارات ہو، ولیمہ ہو یا مہندی، ہم ہر تفصیل کو شاندار بناتے ہیں۔"
      };
    } else if (lang === 'AR') {
      return {
        badge: "تراثنا وحرفتنا",
        title: "صياغة أناقة خالدة",
        description: "تلتزم رويال بريدال كوتور الحفاظ على فن التطريز والأزياء التقليدية في جنوب آسيا. كل قطعة ملابس مصنوعة يدويًا بإتقان تام.",
        card1Title: "زردوزي ودبكة أصلية",
        card1Desc: "يستخدم حرفيونا المهرة أعمال الزردوزي والدبكة والنقش والحرير الأصلية على أقمشة الحرير والمخمل والأورجانزا الفاخرة.",
        card2Title: "تصميم مخصص حسب الطلب",
        card2Desc: "من لوحات الألوان المخصصة إلى القصات والمقاسات الشخصية، نجعل رؤية أحلام زفافك حقيقة واقعة.",
        card3Title: "توريد عالمي وبالجملة",
        card3Desc: "التوصيل في جميع أنحاء العالم مع ضمان جودة عالية للعرائس الأفراد وتجار التجزئة وأصحاب البوتيكات.",
        storyTitle: "صنوعة يدوياً في كراتشي، ومحبوبة في جميع أنحاء العالم",
        storyDesc: "مقرها في ريادة مراكز الأزياء في كراتشي، تجمع ورشتنا بين التقنيات التقليدية المتوارثة عبر الأجيال وقصات الفخامة الحديثة. سواء كان لحفل زفاف أو وليمة أو حناء، نضمن تألق كل تفصيل."
      };
    }
    // Default English Content
    return {
      badge: "Our Heritage & Craftsmanship",
      title: "Crafting Timeless Elegance",
      description: "Royal Bridal Couture is dedicated to preserving the artistry of traditional South Asian embroidery and couture. Every outfit is hand-crafted with perfection.",
      card1Title: "Authentic Zardozi & Dabka",
      card1Desc: "Our skilled artisans utilize genuine zardozi, dabka, naqshi, and resham work on premium silk, velvet, and organza fabrics.",
      card2Title: "Bespoke Customization",
      card2Desc: "From custom color palettes to personalized silhouettes and sizing, we bring your dream bridal vision to life.",
      card3Title: "Global & Wholesale Supply",
      card3Desc: "Delivering worldwide with pristine quality assurance for individual brides, retailers, and boutique owners.",
      storyTitle: "Handcrafted in Karachi, Loved Worldwide",
      storyDesc: "Based out of Karachi's premier fashion hubs, our workshop combines traditional techniques passed through generations with modern luxury cuts. Whether for a Barat, Walima, or Mehendi, we ensure every detail shines."
    };
  };

  const content = getContent();

  return (
    <div 
      className="max-w-7xl mx-auto px-4 py-12 space-y-16 animate-in fade-in duration-300"
      style={{
        textAlign: isRTL ? 'right' : 'left',
        direction: isRTL ? 'rtl' : 'ltr'
      }}
    >
      
      {/* Header Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{content.badge}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-amber-100">
          {content.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {content.description}
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
          <div className={`p-3 w-fit bg-amber-500/10 rounded-xl text-amber-400 ${isRTL ? 'ms-auto md:ms-0' : ''}`}>
            <Gem className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-serif font-semibold text-amber-200">{content.card1Title}</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {content.card1Desc}
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
          <div className={`p-3 w-fit bg-amber-500/10 rounded-xl text-amber-400 ${isRTL ? 'ms-auto md:ms-0' : ''}`}>
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-serif font-semibold text-amber-200">{content.card2Title}</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {content.card2Desc}
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
          <div className={`p-3 w-fit bg-amber-500/10 rounded-xl text-amber-400 ${isRTL ? 'ms-auto md:ms-0' : ''}`}>
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-serif font-semibold text-amber-200">{content.card3Title}</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {content.card3Desc}
          </p>
        </div>

      </div>

      {/* Story Box */}
      <div className="bg-slate-900/80 border border-amber-500/20 rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h3 className="font-serif text-2xl font-bold text-amber-200">{content.storyTitle}</h3>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
          {content.storyDescription}
        </p>
      </div>

    </div>
  );
}