
import React from "react";
import { CheckCircle2, ShoppingBag, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Toast({ product, onClose }) {
  if (!product) return null;

  const { t, isRTL } = useLanguage();

  return (
    <div 
      dir={isRTL ? "rtl" : "ltr"}
      className={`fixed bottom-6 z-50 flex items-center gap-3 bg-slate-900/95 border border-amber-500/30 text-slate-100 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-5 fade-in duration-300 max-w-sm ${
        isRTL ? 'left-6' : 'right-6'
      }`}
    >
      
      {/* Success Icon */}
      <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400 shrink-0">
        <CheckCircle2 className="w-5 h-5" />
      </div>

      {/* Dress Info */}
      <div className={`flex-1 min-w-0 space-y-0.5 ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className={`flex items-center gap-1.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <ShoppingBag className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <p className="text-xs font-bold text-amber-200">Added to Bridal Bag!</p>
        </div>
        <p className="text-xs text-slate-300 truncate font-medium">{product.name}</p>
        {product.selectedSize && (
          <p className="text-[10px] text-amber-500/80">
            Selected Size: <span className="text-slate-300 font-semibold">{product.selectedSize}</span>
          </p>
        )}
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="text-slate-500 hover:text-slate-200 p-1 rounded-lg transition-colors cursor-pointer shrink-0"
      >
        <X className="w-4 h-4" />
      </button>

    </div>
  );
}