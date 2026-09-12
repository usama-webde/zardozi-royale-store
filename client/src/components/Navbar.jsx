
import React, { useState } from "react";
import { 
  ShoppingBag, 
  Heart, 
  Globe, 
  Languages, 
  Phone, 
  X, 
  Sparkles,
  MessageCircle,
  User,
  LogOut
} from "lucide-react";
import { useCurrency } from "../context/CurrencyContext";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar({
  num1,
  num2,
  cartCount = 0,
  wishlistCount = 0,
  onOpenWishlist,
  onOpenCart,
  user,
  onOpenAuth,
  onLogout
}) {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const { currency, setCurrency, currencies } = useCurrency();
  const { lang, setLang, t, isRTL } = useLanguage();

  const scrollToSection = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav 
        dir={isRTL ? "rtl" : "ltr"}
        className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b-2 border-amber-500 shadow-2xl"
      >
        {/* Top Mini Announcement Bar */}
        <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border-b border-amber-500/20 py-1.5 px-4 text-xs text-amber-200">
          <div className={`max-w-7xl mx-auto flex items-center justify-between gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center gap-1.5 text-slate-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{t("announcement")}</span>
            </div>
            
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {/* WhatsApp Helpline */}
              <a
                href={`https://wa.me/${num1}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-amber-400 transition-colors flex items-center gap-1 font-medium ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <Phone className="w-3 h-3 text-amber-400 shrink-0" /> +{num1}
              </a>

              {/* User Authentication Status on Top Bar */}
              <div className="hidden sm:flex items-center gap-2 border-l border-amber-500/30 pl-4">
                {user ? (
                  <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-slate-300">Hi, <strong className="text-amber-400">{user?.name}</strong></span>
                    <button 
                      onClick={onLogout}
                      className="text-red-400 hover:text-red-300 transition flex items-center gap-1 text-[11px] bg-red-950/50 px-2 py-0.5 rounded border border-red-500/20 cursor-pointer"
                      title="Logout"
                    >
                      <LogOut className="w-3 h-3" /> Logout
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={onOpenAuth}
                    className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition cursor-pointer"
                  >
                    <User className="w-3 h-3" /> Sign In / Register
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Header */}
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4 flex-wrap ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Brand Logo */}
          <div
            onClick={() => scrollToSection("top")}
            className={`cursor-pointer flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 tracking-wider m-0">
              ZARDOZI COUTURE
            </h2>
            <span className="text-[9px] tracking-[0.2em] text-amber-400 uppercase font-medium">
              Bespoke Artisan Workshop
            </span>
          </div>

          {/* Navigation Links */}
          <div className={`hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider ${isRTL ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={() => scrollToSection("top")}
              className="text-slate-200 hover:text-amber-400 transition-colors cursor-pointer bg-transparent border-0"
            >
              {t("navHome")}
            </button>
            <button
              onClick={() => scrollToSection("products-section")}
              className="text-slate-200 hover:text-amber-400 transition-colors cursor-pointer bg-transparent border-0"
            >
              {t("navCollections")}
            </button>
            <button
              onClick={() => setShowAbout(true)}
              className="text-slate-200 hover:text-amber-400 transition-colors cursor-pointer bg-transparent border-0"
            >
              {t("navAbout")}
            </button>
            <button
              onClick={() => setShowContact(true)}
              className="text-slate-200 hover:text-amber-400 transition-colors cursor-pointer bg-transparent border-0"
            >
              {t("navContact")}
            </button>
          </div>

          {/* Right Action Controls */}
          <div className={`flex items-center gap-2 sm:gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Mobile Auth Button if logged out */}
            {!user && (
              <button
                onClick={onOpenAuth}
                className="sm:hidden p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 transition-all cursor-pointer"
                title="Sign In / Register"
              >
                <User className="w-4 h-4" />
              </button>
            )}

            {/* Language Selector Dropdown */}
            <div className={`relative flex items-center gap-1 bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-full px-2.5 py-1 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Languages className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                aria-label="Select Language"
                className="bg-transparent text-xs text-slate-200 font-semibold focus:outline-none cursor-pointer"
              >
                <option value="EN" className="bg-slate-900 text-slate-200">EN</option>
                <option value="UR" className="bg-slate-900 text-slate-200">اردو</option>
                <option value="AR" className="bg-slate-900 text-slate-200">عربي</option>
              </select>
            </div>

            {/* World Currency Selector Dropdown */}
            <div className={`relative flex items-center gap-1 bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-full px-2.5 py-1 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                aria-label="Select Currency"
                className="bg-transparent text-xs text-slate-200 font-semibold focus:outline-none cursor-pointer"
              >
                {Object.keys(currencies).map((currKey) => (
                  <option key={currKey} value={currKey} className="bg-slate-900 text-slate-200">
                    {currKey}
                  </option>
                ))}
              </select>
            </div>

            {/* Wishlist Icon */}
            <button
              onClick={onOpenWishlist}
              aria-label="Open Wishlist"
              className="relative p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-rose-400 border border-slate-800 transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              onClick={onOpenCart}
              aria-label="Open Cart"
              className="relative p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Order WhatsApp Direct Button */}
            <a
              href={`https://wa.me/${num1}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-md text-decoration-none ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{t("orderWhatsapp")}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* About Us Modal */}
      {showAbout && (
        <div 
          dir={isRTL ? "rtl" : "ltr"}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
        >
          <div className={`bg-slate-900 border-t-4 border-amber-500 rounded-2xl p-6 max-w-lg w-full relative shadow-2xl space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <button
              onClick={() => setShowAbout(false)}
              aria-label="Close modal"
              className={`absolute top-4 text-slate-400 hover:text-white bg-slate-800 rounded-full p-1 cursor-pointer ${isRTL ? 'left-4' : 'right-4'}`}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="font-serif text-2xl text-amber-400 font-bold m-0">
              {t("aboutTitle")}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t("aboutDesc1")}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t("aboutDesc2")}
            </p>
            <div className="bg-slate-950 border border-amber-500/30 p-3 rounded-xl text-xs text-amber-300">
              ✨ {t("announcement")}
            </div>
          </div>
        </div>
      )}

      {/* Contact Us Modal */}
      {showContact && (
        <div 
          dir={isRTL ? "rtl" : "ltr"}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
        >
          <div className={`bg-slate-900 border-t-4 border-emerald-500 rounded-2xl p-6 max-w-md w-full relative shadow-2xl space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <button
              onClick={() => setShowContact(false)}
              aria-label="Close modal"
              className={`absolute top-4 text-slate-400 hover:text-white bg-slate-800 rounded-full p-1 cursor-pointer ${isRTL ? 'left-4' : 'right-4'}`}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="font-serif text-2xl text-slate-100 font-bold m-0">
              {t("contactTitle")}
            </h2>
            <p className="text-slate-400 text-xs">{t("contactSub")}</p>

            <div className="space-y-3 pt-2">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <strong className="text-amber-400 text-xs block mb-1">
                  Primary Sales & Booking:
                </strong>
                <a
                  href={`https://wa.me/${num1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-emerald-400 font-bold text-sm flex items-center gap-1.5 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}
                >
                  <MessageCircle className="w-4 h-4 shrink-0" /> +{num1}
                </a>
              </div>

              {num2 && (
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <strong className="text-emerald-400 text-xs block mb-1">
                    Customization Helpline:
                  </strong>
                  <a
                    href={`https://wa.me/${num2}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-emerald-400 font-bold text-sm flex items-center gap-1.5 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" /> +{num2}
                  </a> جب کہ
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}