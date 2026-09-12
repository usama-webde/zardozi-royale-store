
import React, { useState } from "react";
import { ChevronDown, Clock, Scissors, Truck, Sparkles, HelpCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { lang, isRTL } = useLanguage(); // Using 'lang' and 'isRTL' from your LanguageContext

  // Mapping uppercase context keys to object keys
  const currentKey = lang?.toUpperCase() || "EN";

  const translations = {
    EN: {
      workflowBadge: "Production & Delivery Workflow",
      workflowTitle: "How Your Bridal Dress Is Crafted",
      workflowSub: "From handcrafting in our workshop to express delivery at your doorstep.",
      step1Title: "Consult & Custom Fit",
      step1Desc: "Selection of bridal layout, color customization, and exact size specifications (1 to 3 Days).",
      step2Title: "Zardozi Handcrafting",
      step2Desc: "Master artisans apply pure zardozi, dabka, naqshi, and resham hand embroidery (3 to 5 Weeks).",
      step3Title: "QA & Express Shipping",
      step3Desc: "Final quality check, luxury packaging, and secure worldwide shipping with tracking (3 to 7 Days). Delivery charges apply separately.",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Everything you need to know about custom orders and delivery.",
      faqs: [
        {
          q: "How long does it take to craft a custom bridal outfit?",
          a: "Since bridal dresses feature intricate hand embroidery (zardozi, dabka, naqshi), production typically takes 3 to 5 weeks. Heavy formals and Walima dresses are completed within 2 to 3 weeks.",
        },
        {
          q: "Can I customize the color, fabric, or design of the dress?",
          a: "Yes, absolutely! We offer bespoke custom designs. You can customize the color palette, dupatta fabric, and embroidery depth according to your exact preferences.",
        },
        {
          q: "How are custom sizing and measurements taken?",
          a: "You can provide your bust, waist, hips, and length measurements by selecting 'Custom Fit' in the product modal. Our team will also guide you over WhatsApp once the order is confirmed.",
        },
        {
          q: "Do you offer international shipping and wholesale supply?",
          a: "Yes! We provide worldwide express shipping (UAE, USA, UK, Australia, Europe). Please note that delivery charges are paid separately by the customer. B2B wholesale pricing options are also available for boutiques and bulk buyers.",
        },
        {
          q: "Where should I contact for fitting appointments or workshop visits?",
          a: "You can book an appointment to visit our workshop in Alipur, District Muzaffargarh, by reaching out via WhatsApp (+92 324 8385874).",
        },
      ],
    },
    UR: {
      workflowBadge: "تیار اور ڈلیوری کا طریقہ کار",
      workflowTitle: "آپ کا برائیڈل لباس کیسے تیار ہوتا ہے",
      workflowSub: "ورکشاپ میں ہاتھ کی کاریگری سے لے کر آپ کے دروازے تک ایکسپریس ڈلیوری۔",
      step1Title: "مشاورتی اور کسٹم فٹ",
      step1Desc: "برائیڈل لے آؤٹ کا انتخاب، رنگ کی تبدیلی، اور درست سائز کی تفصیلات (1 سے 3 دن)۔",
      step2Title: "زرودوزی ہاتھ کی کاریگری",
      step2Desc: "ماہر کاریگر خالص زردوزی، دبکا، نقشہ، اور ریشم کی ہاتھ کی کڑھائی کرتے ہیں (3 سے 5 ہفتے)۔",
      step3Title: "معیار کی جانچ اور ایکسپریس شپنگ",
      step3Desc: "آخری کوالٹی چیک، لژری پیکنگ، اور ٹریکنگ کے ساتھ محفوظ دنیا بھر میں شپنگ (3 سے 7 دن)۔ ڈلیوری چارجز الگ سے ادا کرنے ہوں گے۔",
      faqTitle: "عام پوچھے جانے والے سوالات",
      faqSub: "حسب ضرورت آرڈرز اور ڈلیوری کے بارے میں وہ سب کچھ جو آپ کو جاننا ضروری ہے۔",
      faqs: [
        {
          q: "برائیڈل لباس تیار ہونے میں کتنا وقت لگتا ہے؟",
          a: "چونکہ برائیڈل لباس ہاتھ کی کڑھائی (زردوزی، دبکا، نقشہ) والے ہوتے ہیں، اس لیے 3 سے 5 ہفتے کا وقت لگتا ہے۔ ہیوی فارملز اور ولیمہ کے لباس 2 سے 3 ہفتوں میں مکمل ہو جاتے ہیں۔",
        },
        {
          q: "کیا میں لباس کا رنگ، فیبرک یا ڈیزائن تبدیل کروا سکتا ہوں؟",
          a: "ہاں بالکل! ہم حسب ضرورت ڈیزائن پیش کرتے ہیں۔ آپ اپنی پسند کے مطابق کلر پیلیٹ، دوپٹے کا فیبرک اور کڑھائی کی گہرائی منتخب کر سکتے ہیں۔",
        },
        {
          q: "کسٹم سائزنگ اور پیمائش کس طرح لی جاتی ہے؟",
          a: "آپ پروڈکٹ موڈل میں 'کسٹم فٹ' منتخب کر کے اپنی چھاتی، کمر، کولہوں اور لمبائی کی پیمائش دے سکتے ہیں۔ آرڈر کی تصدیق کے بعد ہماری ٹیم آپ کو واٹس ایپ پر بھی گائیڈ کر دے گی۔",
        },
        {
          q: "کیا آپ بین الاقوامی شپنگ اور ہول سیل سپلائی کرتے ہیں؟",
          a: "جی ہاں! ہم دنیا بھر میں ایکسپریس شپنگ (متحدہ عرب امارات، امریکہ، برطانیہ، آسٹریلیا، یورپ) فراہم کرتے ہیں۔ براہ کرم نوٹ کریں کہ ڈلیوری چارجز کسٹمر خود الگ سے ادا کرے گا۔ بوٹیک اور بلک خریداروں کے لیے B2B ہول سیل ریٹ کے اختیارات بھی دستیاب ہیں۔",
        },
        {
          q: "فٹنگ اپائنٹمنٹ یا ورکشاپ کے دورے کے لیے کہاں رابطہ کریں؟",
          a: "آپ علی پور، ضلع مظفر گڑھ میں ہماری ورکشاپ کے دورے کے لیے واٹس ایپ (+92 324 8385874) کے ذریعے اپائنٹمنٹ بک کر سکتے ہیں۔",
        },
      ],
    },
    AR: {
      workflowBadge: "سیر عمل الإنتاج والتوصيل",
      workflowTitle: "كيف يتم صنع فستان الزفاف الخاص بك",
      workflowSub: "من العمل اليدوي في ورشتنا إلى التوصيل السريع حتى باب منزلك.",
      step1Title: "الاستشارة والمقاس المخصص",
      step1Desc: "اختيار تصميم العروس، وتخصيص الألوان، ومواصفات الحجم الدقيقة (1 إلى 3 أيام).",
      step2Title: "التطريز اليدوي بالزرودوزي",
      step2Desc: "يقوم الحرفيون الخبراء بتطبيق التطريز اليدوي الخالص بالزرودوزي، والدبكة، والناقشي، والريشم (3 إلى 5 أسابيع).",
      step3Title: "فحص الجودة والشحن السريع",
      step3Desc: "فحص الجودة النهائي، والتغليف الفاخر، والشحن الآمن في جميع أنحاء العالم مع التتبع (3 إلى 7 أيام). يتم دفع رسوم التوصيل بشكل منفصل.",
      faqTitle: "الأسئلة الشائعة",
      faqSub: "كل ما تحتاج لمعرفته حول الطلبات المخصصة والتوصيل.",
      faqs: [
        {
          q: "كم يستغرق صنع فستان الزفاف المخصص؟",
          a: "نظراً لأن فساتين الزفاف تتميز بتطريز يدوي معقد (زرودوزي، دبكة، ناقشي)، عادة ما يستغرق الإنتاج من 3 إلى 5 أسابيع. يتم إكمال الفساتين الثقيلة وفساتين الوليمة خلال 2 إلى 3 أسابيع.",
        },
        {
          q: "هل يمكنني تخصيص اللون أو القماش أو التصميم للفستان؟",
          a: "نعم، بالتأكيد! نحن نقدم تصميمات مخصصة حسب الطلب. يمكنك تخصيص لوحة الألوان، وقماش الإيشارب (الدوباتا)، وعمق التطريز وفقاً لتفضيلاتك الدقيقة.",
        },
        {
          q: "كيف يتم أخذ المقاسات والأحجام المخصصة؟",
          a: "يمكنك تقديم قياسات الصدر، والخصر، والأرداف، والطول عن طريق تحديد 'مقاس مخصص' في نافذة المنتج. سيقوم فريقنا أيضاً بتوجيهك عبر الواتساب بمجرد تأكيد الطلب.",
        },
        {
          q: "هل تقدمون الشحن الدولي والتوريد بالجملة؟",
          a: "نعم! نحن نقدم شحناً سريعاً في جميع أنحاء العالم (الإمارات، أمريكا، بريطانيا، أستراليا، أوروبا). يرجى ملاحظة أن رسوم الشحن يدفعها العميل بشكل منفصل. تتوفر أيضاً خيارات أسعار الجملة B2B للمحلات والمشترين بكميات كبيرة.",
        },
        {
          q: "أين يجب أن أتواصل لحجز مواعيد القياس أو زيارات الورشة؟",
          a: "يمكنك حجز موعد لزيارة ورشتنا في أليبور، مقاطعة مظفرغڑھ، من خلال التواصل عبر الواتساب (+92 324 8385874).",
        },
      ],
    },
  };

  const currentLang = translations[currentKey] || translations.EN;

  return (
    <section 
      dir={isRTL ? "rtl" : "ltr"} 
      className="border-t border-slate-800/80 bg-slate-950/60 py-16 px-4"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Timeline Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>{currentLang.workflowBadge}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-amber-100">
            {currentLang.workflowTitle}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            {currentLang.workflowSub}
          </p>
        </div>

        {/* Timeline Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl relative space-y-3">
            <div className="w-10 h-10 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <div className={`flex items-center gap-2 text-amber-200 font-serif font-semibold text-base ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Scissors className="w-4 h-4 text-amber-400" /> {currentLang.step1Title}
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {currentLang.step1Desc}
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl relative space-y-3">
            <div className="w-10 h-10 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <div className={`flex items-center gap-2 text-amber-200 font-serif font-semibold text-base ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Sparkles className="w-4 h-4 text-amber-400" /> {currentLang.step2Title}
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {currentLang.step2Desc}
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl relative space-y-3">
            <div className="w-10 h-10 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <div className={`flex items-center gap-2 text-amber-200 font-serif font-semibold text-base ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Truck className="w-4 h-4 text-amber-400" /> {currentLang.step3Title}
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {currentLang.step3Desc}
            </p>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto space-y-6 pt-6">
          <div className="text-center space-y-2">
            <h3 className={`font-serif text-2xl font-bold text-amber-200 flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <HelpCircle className="w-5 h-5 text-amber-400" /> {currentLang.faqTitle}
            </h3>
            <p className="text-slate-400 text-xs">{currentLang.faqSub}</p>
          </div>

          <div className="space-y-3">
            {currentLang.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className={`w-full ${isRTL ? 'text-right' : 'text-left'} px-5 py-4 flex items-center justify-between text-amber-100 font-medium text-xs sm:text-sm hover:text-amber-400 transition-colors cursor-pointer`}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-400 transition-transform duration-200 shrink-0 ${isRTL ? 'mr-2' : 'ml-2'} ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className={`px-5 pb-4 text-slate-400 text-xs leading-relaxed border-t border-slate-800/60 pt-3 animate-in fade-in duration-200 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}