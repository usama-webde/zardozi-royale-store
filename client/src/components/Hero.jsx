
import React from "react";
import { Sparkles, MessageCircle, ArrowDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero({ onExploreClick }) {
  const { isRTL } = useLanguage();

  return (
    <div 
      dir={isRTL ? "rtl" : "ltr"}
      className="relative bg-slate-950 border-b border-slate-800 text-slate-100 py-16 md:py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        <span className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          <Sparkles size={14} /> Direct Master Artisans & Workshop
        </span>

        <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-100 tracking-tight leading-tight">
          Bespoke Handcrafted Bridal & Heavy Formals
        </h1>

        <p className="text-slate-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
          Pure Zardozi, Dabka, Naqshi & Cutdana craftsmanship tailored according to your custom measurements. Order online with 50% advance payment.
        </p>

        <div className={`flex flex-wrap justify-center gap-3 pt-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <button
            onClick={onExploreClick}
            className={`bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            Explore Couture Collection <ArrowDown size={14} />
          </button>

          <a
            href="https://wa.me/923248385874?text=Hi!%20I%20want%20to%20book%20a%20custom%20bridal%20order."
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-emerald-400 font-semibold px-6 py-3 rounded-xl text-xs tracking-wider transition flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <MessageCircle size={16} /> WhatsApp Consultation
          </a>
        </div>
      </div>
    </div>
  );
}