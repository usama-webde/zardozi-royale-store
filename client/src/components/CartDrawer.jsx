
import React, { useState, useEffect } from "react";
import { X, Trash2, CreditCard, Send, CheckCircle2, Building2, Smartphone, WifiOff } from "lucide-react";
import { useCurrency } from "../context/CurrencyContext";

export default function CartDrawer({ isOpen, onClose, cartItems = [], onRemoveItem, onRemove }) {
  const { formatPrice } = useCurrency();
  const [selectedMethod, setSelectedMethod] = useState("easypaisa");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [isLoading, setIsLoading] = useState(false);

  // Fallback support for both onRemoveItem and onRemove prop names
  const removeItem = onRemoveItem || onRemove;

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

  // Filter out any invalid or undefined items to prevent crash
  const safeCart = Array.isArray(cartItems) ? cartItems.filter(Boolean) : [];
  const totalAmount = safeCart.reduce((sum, item) => sum + (Number(item?.price) || 0), 0);
  const advanceAmount = Math.round(totalAmount * 0.5);
  const codAmount = totalAmount - advanceAmount;

  const safeFormatPrice = (val) => {
    try {
      return formatPrice ? formatPrice(val || 0) : `PKR ${val || 0}`;
    } catch {
      return `PKR ${val || 0}`;
    }
  };

  const itemNames = safeCart.map((i) => i?.name || "Bridal Wear").join(", ");

  const handleCheckout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-serif font-bold text-amber-400">
              Your Selected Outfits ({safeCart.length})
            </h2>
            {isOffline && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-medium">
                <WifiOff size={10} /> Offline Mode
              </span>
            )}
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-100 rounded-lg transition">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {safeCart.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <p className="text-slate-400 text-sm">Your cart is empty.</p>
              <p className="text-xs text-slate-500">Select a bridal or formal dress to proceed.</p>
            </div>
          ) : (
            <>
              {safeCart.map((item, index) => (
                <div key={item?.id || index} className="flex gap-3 bg-slate-950/60 p-3 rounded-lg border border-slate-800 items-center">
                  <img 
                    src={item?.image || item?.images?.[0] || 'https://via.placeholder.com/150'} 
                    alt={item?.name || "Outfit"} 
                    width="64"
                    height="64"
                    className="w-16 h-16 object-cover rounded-md bg-slate-900 flex-shrink-0"
                    loading="lazy"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Zardozi'; }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-slate-200 truncate">{item?.name || "Custom Dress"}</h4>
                    <p className="text-xs text-amber-400 font-bold mt-1">{safeFormatPrice(item?.price)}</p>
                  </div>
                  <button 
                    onClick={() => {
                      if (removeItem) {
                        removeItem(item?.id !== undefined ? item.id : index);
                      }
                    }} 
                    className="p-1.5 text-slate-500 hover:text-rose-400 transition" 
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}

              {/* Payment Terms & Breakdown Box */}
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl space-y-2 mt-4">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Total Order Price:</span>
                  <span className="font-bold text-slate-100">{safeFormatPrice(totalAmount)}</span>
                </div>
                <div className="flex justify-between text-xs text-amber-400 font-semibold pt-1 border-t border-amber-500/20">
                  <span>50% Advance (Pay Now):</span>
                  <span>{safeFormatPrice(advanceAmount)}</span>
                </div>
                <div className="flex justify-between text-xs text-emerald-400 font-semibold">
                  <span>50% Remaining (Cash on Delivery):</span>
                  <span>{safeFormatPrice(codAmount)}</span>
                </div>
                <p className="text-[10px] text-slate-400 italic mt-1">
                  * Note: Hand-embroidery starts after 50% advance confirmation.
                </p>
              </div>

              {/* Select Advance Payment Option */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Select Payment Option ({safeFormatPrice(advanceAmount)})
                </h3>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedMethod("easypaisa")}
                    className={`p-2.5 rounded-lg border text-center text-xs font-semibold flex flex-col items-center gap-1 transition ${
                      selectedMethod === "easypaisa"
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                        : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <Smartphone size={18} />
                    <span>JazzCash / EasyPaisa</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMethod("bank")}
                    className={`p-2.5 rounded-lg border text-center text-xs font-semibold flex flex-col items-center gap-1 transition ${
                      selectedMethod === "bank"
                        ? "border-amber-500 bg-amber-500/10 text-amber-400"
                        : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <Building2 size={18} />
                    <span>Bank Transfer</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMethod("card")}
                    className={`p-2.5 rounded-lg border text-center text-xs font-semibold flex flex-col items-center gap-1 transition ${
                      selectedMethod === "card"
                        ? "border-sky-500 bg-sky-500/10 text-sky-400"
                        : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <CreditCard size={18} />
                    <span>Cards / PayPal</span>
                  </button>
                </div>

                {/* Account Details Box */}
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs space-y-1.5 text-slate-300">
                  {selectedMethod === "easypaisa" && (
                    <>
                      <p className="font-semibold text-emerald-400">EasyPaisa / JazzCash Account:</p>
                      <p><span className="text-slate-400">Number:</span> <strong className="text-slate-100">03248385874</strong></p>
                      <p><span className="text-slate-400">Title:</span> <strong className="text-slate-100">Usama Malik</strong></p>
                    </>
                  )}

                  {selectedMethod === "bank" && (
                    <>
                      <p className="font-semibold text-amber-400">Bank Details:</p>
                      <p><span className="text-slate-400">Bank:</span> <strong className="text-slate-100">Meezan Bank Ltd</strong></p>
                      <p><span className="text-slate-400">Account / IBAN:</span> <strong className="text-slate-100">PK36MEZN000123456789</strong></p>
                      <p><span className="text-slate-400">Title:</span> <strong className="text-slate-100">Usama Malik</strong></p>
                    </>
                  )}

                  {selectedMethod === "card" && (
                    <>
                      <p className="font-semibold text-sky-400">International Payment:</p>
                      <p className="text-[11px] text-slate-400">Visa, Mastercard, or PayPal invoice.</p>
                      <p><span className="text-slate-400">PayPal Email:</span> <strong className="text-slate-100">usamamalik1475@gmail.com</strong></p>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer / Submit via WhatsApp */}
        {safeCart.length > 0 && (
          <div className="p-4 border-t border-slate-800 bg-slate-950 space-y-3">
            {isSubmitted ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-center text-xs text-emerald-400 flex items-center justify-center gap-2 font-semibold">
                <CheckCircle2 size={16} /> Opening WhatsApp to Confirm Order...
              </div>
            ) : isLoading ? (
              <div className="w-full bg-slate-800 text-slate-400 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider animate-pulse">
                Preparing Order...
              </div>
            ) : (
              <a
                href={`https://wa.me/923248385874?text=${encodeURIComponent(
                  `Hello Usama! I want to confirm my order.\nTotal: ${totalAmount} PKR\n50% Advance: ${advanceAmount} PKR (${selectedMethod.toUpperCase()})\n50% COD: ${codAmount} PKR\nItems: ${itemNames}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCheckout}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition shadow-lg shadow-emerald-600/20"
              >
                <Send size={16} /> Confirm Order & Pay 50% Advance
              </a>
            )}
            
            <p className="text-[10px] text-center text-slate-500">
              Direct confirmation with Usama Malik (+923248385874)
            </p>
          </div>
        )}

      </div>
    </div>
  );
}