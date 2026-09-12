
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  EN: {
    dir: "ltr",
    // Header & Announcement
    announcement: "50% Advance & 50% Cash on Delivery Worldwide",
    sales: "WhatsApp Sales",
    brandSub: "Karachi Handcrafted Couture",
    badge: "Bespoke Couture & Custom Tailoring",
    mainTitle: "Handcrafted Luxury Bridal Collections",
    mainSub: "Authentic Zardozi, Dabka & Naqshi embroidery crafted in Pakistan.",

    // Navbar Keys
    navHome: "Home",
    navCollections: "Collections",
    navAbout: "About Us",
    navContact: "Contact Us",
    navWishlist: "Wishlist",
    navCart: "Bag",

    // Products & Actions
    all: "All",
    quickView: "Quick View & Custom Size",
    addToCart: "Add to Cart",
    whatsappOrder: "WhatsApp Order",
    advanceBadge: "50% Advance",
    codBadge: "50% COD",
    price: "Price",
    guarantee: "100% Authentic Craftsmanship Guarantee",

    // Modals (Quick View, Custom Size, Cart & Wishlist)
    customSizeTitle: "Bespoke Measurement & Sizing",
    selectSize: "Select Standard Size",
    customMeasurements: "Or Provide Custom Measurements (Inches)",
    chest: "Chest",
    waist: "Waist",
    hips: "Hips",
    length: "Shirt / Lehenga Length",
    specialNotes: "Special Instructions",
    close: "Close",
    shoppingBag: "Shopping Bag",
    totalAmount: "Total Estimated Amount",
    checkoutWhatsapp: "Complete Order on WhatsApp",
    emptyCart: "Your shopping bag is empty.",
    wishlistTitle: "Your Wishlist",
    emptyWishlist: "Your wishlist is empty.",

    // Footer Keys
    footerBrandDesc: "Exclusive handcrafted Pakistani bridal collections featuring authentic Zardozi, Dabka, and Naqshi embroidery work.",
    footerEmail: "Email",
    footerWaOrders: "WhatsApp Orders",
    footerWaHelpline: "Customization Helpline",
    footerFollowUs: "Follow Us",
    footerSocialDesc: "Connect with us on social media for new bridal collection updates:",
    footerFb: "Facebook Page",
    footerTiktok: "TikTok Official",
    footerRights: "All rights reserved. Handcrafted Luxury Bridal Wear.",
  },
  UR: {
    dir: "rtl",
    // Header & Announcement
    announcement: "50% ایڈوانس اور 50% کیش آن ڈیلیوری دنیا بھر میں",
    sales: "واٹس ایپ سیلز",
    brandSub: "کراچی ہینڈ کرافٹڈ ڈیزائنز",
    badge: "کسٹم سلائی اور خاص آرڈر",
    mainTitle: "دستکاری سے تیار کردہ فاخرانہ برائیڈل کلیکشن",
    mainSub: "پاکستان کی مستند زردوزی، دبکہ اور نقش کاڑھائی۔",

    // Navbar Keys
    navHome: "ہوم",
    navCollections: "کلیکشنز",
    navAbout: "ہمارے بارے میں",
    navContact: "رابطہ کریں",
    navWishlist: "وش لسٹ",
    navCart: "بیگ",

    // Products & Actions
    all: "تمام",
    quickView: "فوری نظارہ اور کسٹم سائز",
    addToCart: "کارٹ میں شامل کریں",
    whatsappOrder: "واٹس ایپ آرڈر",
    advanceBadge: "50% ایڈوانس",
    codBadge: "50% بقایا COD",
    price: "قیمت",
    guarantee: "100% اصلی دستکاری کی ضمانت",

    // Modals (Quick View, Custom Size, Cart & Wishlist)
    customSizeTitle: "کسٹم سائز اور ناپ کا فارم",
    selectSize: "اسٹینڈرڈ سائز منتخب کریں",
    customMeasurements: "یا اپنی کسٹم پیمائش درج کریں (انچ میں)",
    chest: "چیسٹ",
    waist: "کمر",
    hips: "ہپس",
    length: "قمیض / لہنگا لمبائی",
    specialNotes: "خاص ہدایات / نوٹس",
    close: "بند کریں",
    shoppingBag: "شاپنگ بیگ",
    totalAmount: "کل تخمینہ قیمت",
    checkoutWhatsapp: "واٹس ایپ پر آرڈر مکمل کریں",
    emptyCart: "آپ کا شاپنگ بیگ خالی ہے۔",
    wishlistTitle: "آپ کی وش لسٹ",
    emptyWishlist: "آپ کی وش لسٹ خالی ہے۔",

    // Footer Keys
    footerBrandDesc: "دستکاری سے تیار کردہ فاخرانہ پاکستانی برائیڈل کلیکشنز، خالص زردوزی، دبکہ اور نقش کڑھائی کے ساتھ۔",
    footerEmail: "ای میل",
    footerWaOrders: "واٹس ایپ آرڈرز",
    footerWaHelpline: "کسٹمائزیشن ہیلپ لائن",
    footerFollowUs: "ہمیں فالو کریں",
    footerSocialDesc: "نئی برائیڈل کلیکشنز کی اپڈیٹس کے لیے ہمارے سوشل میڈیا پیجز وزٹ کریں:",
    footerFb: "فیس بک پیج",
    footerTiktok: "ٹک ٹاک آفیشل",
    footerRights: "جملہ حقوق محفوظ ہیں۔ دستکاری سے تیار کردہ فاخرانہ برائیڈل ویئر۔",
  },
  AR: {
    dir: "rtl",
    // Header & Announcement
    announcement: "50% مقدمًا و 50% عند الاستلام لجميع أنحاء العالم",
    sales: "مبيعات واتساب",
    brandSub: "أزياء كراتشي المصنوعة يدوياً",
    badge: "تفصيل خاص وتطريز يدويا",
    mainTitle: "مجموعات الزفاف الفاخرة المصنوعة يدوياً",
    mainSub: "تطريز زردوزي ودبكة ونقشي أصيل مصنوع في پاکستان.",

    // Navbar Keys
    navHome: "الرئيسية",
    navCollections: "المجموعات",
    navAbout: "من نحن",
    navContact: "اتصل بنا",
    navWishlist: "المفضلة",
    navCart: "السلة",

    // Products & Actions
    all: "الكل",
    quickView: "عرض سريع ومقاس خاص",
    addToCart: "أضف إلى السلة",
    whatsappOrder: "طلب عبر واتساب",
    advanceBadge: "50% مقدمًا",
    codBadge: "50% عند الاستلام",
    price: "السعر",
    guarantee: "ضمان الحرفية اليدوية الأصلية 100%",

    // Modals (Quick View, Custom Size, Cart & Wishlist)
    customSizeTitle: "المقاسات الخاصة والتفصيل",
    selectSize: "اختر المقاس القياسي",
    customMeasurements: "أو أدخل مقاساتك الخاصة (بالبوصة)",
    chest: "الصدر",
    waist: "الخصر",
    hips: "الأوراك",
    length: "طول القميص / التنورة",
    specialNotes: "ملاحظات خاصة",
    close: "إغلاق",
    shoppingBag: "حقيبة التسوق",
    totalAmount: "المبلغ الإجمالي التقديري",
    checkoutWhatsapp: "إتمام الطلب عبر واتساب",
    emptyCart: "حقيبة التسوق فارغة.",
    wishlistTitle: "قائمة المفضلة",
    emptyWishlist: "قائمة المفضلة فارغة.",

    // Footer Keys
    footerBrandDesc: "تشكيلات زفاف باكستانية فاخرة مصنوعة يدويًا مع تطريز أصيل بالزردوزي والدبكة والنقشي.",
    footerEmail: "البريد الإلكتروني",
    footerWaOrders: "طلبات الواتساب",
    footerWaHelpline: "خط التعديل والطلبات الخاصة",
    footerFollowUs: "تابعنا",
    footerSocialDesc: "تواصل معنا على وسائل التواصل الاجتماعي لمعرفة أحدث تشكيلات الزفاف:",
    footerFb: "صفحة الفيسبوك",
    footerTiktok: "تيك توك الرسمي",
    footerRights: "جميع الحقوق محفوظة. ملابس زفاف فاخرة مصنوعة يدويًا.",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("EN");

  const t = (key) => translations[lang]?.[key] || translations["EN"][key] || key;
  const isRTL = translations[lang]?.dir === "rtl";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}