
import React, { useState, useEffect } from "react";
import { X, Trash2, ShoppingBag, MessageSquare, WifiOff } from "lucide-react";
import { useCurrency } from "../context/CurrencyContext";

export default function CartModal({ isOpen, onClose, cartItems = [], onRemoveItem, onClearCart }) {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  // Monitor network status for offline readiness
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOpen) return null;

  const { formatPrice } = useCurrency();

  const totalPrice = cartItems.reduce((acc, item) => acc + (Number(item?.price) || 0), 0);

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let message = `*NEW BRIDAL ORDER INQUIRY*\n`;
    message += `-----------------------------------\n`;
    cartItems.forEach((item, index) => {
      const sizeText = item?.selectedSize ? ` [Size: ${item.selectedSize}]` : "";
      message += `${index + 1}. *${item?.name || "Bridal Dress"}*${sizeText}\n   Category: ${item?.category || "Couture"}\n   Price: ${formatPrice(item?.price || 0)}\n`;
      
      if (item?.selectedSize === "Custom Fit" && item?.measurements) {
        message += `   Custom Fit Details:\n   - Chest: ${item.measurements.chest || "N/A"}" | Waist: ${item.measurements.waist || "N/A"}"\n   - Hips: ${item.measurements.hips || "N/A"}" | Length: ${item.measurements.length || "N/A"}"\n`;
      }
      message += `\n`;
    });
    message += `-----------------------------------\n`;
    message += `*Total Estimated Bill:* ${formatPrice(totalPrice)}\n\n`;
    message += `Hello! I would like to confirm my order details and discuss handcrafting & delivery timeline.`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "923248385874"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border-l border-slate-800 w-full max-w-md h-full flex flex-col justify-between shadow-2xl p-6 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif text-lg font-bold text-amber-200">Your Bridal Bag</h3>
            <span className="bg-amber-500/10 text-amber-400 text-xs px-2 py-0.5 rounded-full border border-amber-500/20 font-mono">
              {cartItems.length}
            </span>
            {isOffline && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-medium">
                <WifiOff size={10} /> Offline
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 space-y-2">
              <ShoppingBag className="w-12 h-12 stroke-1 text-slate-600" />
              <p className="text-sm font-medium">Your cart is currently empty.</p>
              <p className="text-xs text-slate-600">Explore the catalog and add your favorite dresses.</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item?.id || index}-${index}`}
                className="flex items-center justify-between gap-3 bg-slate-950/60 border border-slate-800 p-3 rounded-xl hover:border-slate-700 transition-colors"
              >
                <img
                  src={item?.image || item?.images?.[0] || 'https://via.placeholder.com/150'}
                  alt={item?.name || "Bridal Outfit"}
                  className="w-14 h-16 object-cover rounded-lg border border-slate-800 bg-slate-900"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Zardozi'; }}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-slate-200 truncate">{item?.name || "Custom Dress"}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-amber-500/80 uppercase tracking-wider">{item?.category || "Couture"}</span>
                    {item?.selectedSize && (
                      <span className="text-[10px] bg-slate-800 text-amber-300 px-1.5 py-0.2 rounded border border-slate-700">
                        {item.selectedSize}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-amber-300 mt-1">{formatPrice(item?.price || 0)}</p>
                </div>
                <button
                  onClick={() => onRemoveItem(index)}
                  className="text-slate-500 hover:text-red-400 p-2 rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Summary Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-slate-800 pt-4 space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-semibold text-slate-200">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Custom Stitching & Fitting</span>
                <span className="text-emerald-400 font-medium">Included</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-amber-200 pt-2 border-t border-slate-800/60">
                <span>Total Estimated Bill</span>
                <span className="text-amber-400">{formatPrice(totalPrice)}</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/40 active:scale-[0.98] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" /> Checkout via WhatsApp
              </button>

              <button
                onClick={onClearCart}
                className="w-full text-slate-500 hover:text-slate-300 text-xs text-center py-1.5 transition-colors cursor-pointer"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}