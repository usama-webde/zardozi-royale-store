
import React from "react";
import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useCurrency } from "../context/CurrencyContext";
import { useLanguage } from "../context/LanguageContext";

export default function WishlistModal({
  isOpen,
  onClose,
  wishlistItems = [],
  onRemoveFromWishlist,
  onMoveToCart,
}) {
  if (!isOpen) return null;

  const { formatPrice } = useCurrency();
  const { lang, t, isRTL } = useLanguage();

  return (
    <div 
      dir={isRTL ? "rtl" : "ltr"}
      className={`fixed inset-0 z-50 flex items-center bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 ${
        isRTL ? 'justify-start' : 'justify-end'
      }`}
    >
      <div className={`bg-slate-900 w-full max-w-md h-full flex flex-col justify-between shadow-2xl p-6 overflow-hidden ${
        isRTL ? 'border-r border-slate-800' : 'border-l border-slate-800'
      }`}>
        
        {/* Header */}
        <div className={`flex items-center justify-between border-b border-slate-800 pb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500 shrink-0" />
            <h3 className="font-serif text-lg font-bold text-amber-200">Saved Favorites</h3>
            <span className="bg-rose-500/10 text-rose-400 text-xs px-2 py-0.5 rounded-full border border-rose-500/20 font-mono">
              {wishlistItems.length}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close wishlist"
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {wishlistItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 space-y-2 p-4">
              <Heart className="w-12 h-12 stroke-1 text-slate-600" />
              <p className="text-sm font-medium">No saved dresses yet.</p>
              <p className="text-xs text-slate-600">Click the heart icon on any outfit to save it for later.</p>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div
                key={item.id}
                className={`flex items-center justify-between gap-3 bg-slate-950/60 border border-slate-800 p-3 rounded-xl hover:border-slate-700 transition-colors ${
                  isRTL ? 'flex-row-reverse' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-16 object-cover rounded-lg border border-slate-800 shrink-0"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/100x120?text=Zardozi'; }}
                />
                <div className={`flex-1 min-w-0 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h4 className="text-xs font-semibold text-slate-200 truncate">{item.name}</h4>
                  <p className="text-[10px] text-amber-500/80 uppercase tracking-wider">{item.category}</p>
                  <p className="text-xs font-bold text-amber-300 mt-0.5">{formatPrice(item.price)}</p>
                </div>
                
                <div className={`flex items-center gap-1 shrink-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <button
                    onClick={() => onMoveToCart(item)}
                    aria-label="Move to Bag"
                    className="bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 p-2 rounded-lg transition-colors cursor-pointer"
                    title="Move to Bag"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveFromWishlist(item.id)}
                    aria-label="Remove item"
                    className="text-slate-500 hover:text-red-400 p-2 rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistItems.length > 0 && (
          <div className="border-t border-slate-800 pt-4">
            <p className="text-center text-slate-400 text-xs">
              Saved dresses are retained in your active browser session.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}