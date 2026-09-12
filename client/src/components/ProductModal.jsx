
import React, { useState } from "react";
import { X, ShoppingBag, Ruler, Check, Sparkles } from "lucide-react";
import { useCurrency } from "../context/CurrencyContext";
import { useLanguage } from "../context/LanguageContext";

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const { formatPrice } = useCurrency();
  const { lang, t, isRTL } = useLanguage();

  const [selectedSize, setSelectedSize] = useState("M");
  const [showCustomFields, setShowCustomFields] = useState(false);
  const [added, setAdded] = useState(false);

  // Default active image to the product's primary image or first item in images array
  const [activeImage, setActiveImage] = useState(product.image || product.images?.[0] || "");

  const [measurements, setMeasurements] = useState({
    chest: "",
    waist: "",
    hips: "",
    length: "",
  });

  const sizes = ["S", "M", "L", "XL", "Custom Fit"];

  // Dynamic Language Data Selector
  const getLocalizedProduct = () => {
    if (lang === "UR") {
      return {
        name: product.urduName || product.name,
        description: product.urduDescription || product.description,
        category: product.urduCategory || product.category,
      };
    } else if (lang === "AR") {
      return {
        name: product.arabicName || product.name,
        description: product.arabicDescription || product.description,
        category: product.arabicCategory || product.category,
      };
    }
    return {
      name: product.name,
      description: product.description,
      category: product.category,
    };
  };

  const localized = getLocalizedProduct();

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setShowCustomFields(size === "Custom Fit");
  };

  const handleMeasurementChange = (e) => {
    setMeasurements({
      ...measurements,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    const customizedProduct = {
      ...product,
      name: localized.name, // Pass localized name to cart
      category: localized.category,
      image: activeImage, // Pass the currently selected thumbnail/image
      selectedSize,
      measurements: selectedSize === "Custom Fit" ? measurements : null,
    };
    onAddToCart(customizedProduct);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div 
      dir={isRTL ? "rtl" : "ltr"}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className={`bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col md:flex-row ${isRTL ? 'text-right' : 'text-left'}`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className={`absolute top-4 z-10 p-2 text-slate-400 hover:text-white bg-slate-950/60 hover:bg-slate-800 rounded-full backdrop-blur-sm transition-colors cursor-pointer ${isRTL ? 'left-4' : 'right-4'}`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image & Thumbnail Section */}
        <div className="md:w-1/2 relative min-h-[280px] md:min-h-full flex flex-col bg-slate-950/40 p-3 rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl">
          <div className="w-full h-72 md:h-80 overflow-hidden rounded-2xl relative">
            <img
              src={activeImage}
              alt={localized.name}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500?text=Zardozi+Couture'; }}
            />
          </div>

          {/* Thumbnails Row if images array exists */}
          {product.images && product.images.length > 0 && (
            <div className={`flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-thin ${isRTL ? 'flex-row-reverse' : ''}`}>
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setActiveImage(img)}
                  className={`w-12 h-14 object-cover rounded-lg cursor-pointer transition-all shrink-0 ${
                    activeImage === img 
                      ? "border-2 border-amber-400 opacity-100 shadow-md shadow-amber-500/20" 
                      : "border border-slate-700 opacity-60 hover:opacity-90"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Details & Sizing Form */}
        <div className="md:w-1/2 p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 inline-block">
                {localized.category || "Bridal Couture"}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-100 mt-2">
                {localized.name}
              </h3>
              <p className="text-xl font-bold text-amber-400 mt-1">
                {formatPrice(product.price)}
              </p>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              {localized.description || "Handcrafted bridal dress featuring intricate zardozi, dabka, and naqshi work on premium fabric. Tailored to perfection."}
            </p>

            {/* Size Selector */}
            <div className="space-y-2 border-t border-slate-800/80 pt-3">
              <label className={`text-xs font-semibold text-slate-300 flex items-center gap-1.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Ruler className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Select Size / Fit:
              </label>

              <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => handleSizeSelect(size)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                      selectedSize === size
                        ? "bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md shadow-amber-500/20"
                        : "bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Measurement Form */}
            {showCustomFields && (
              <div className="bg-slate-950/80 border border-amber-500/20 rounded-2xl p-3.5 space-y-2 animate-in fade-in duration-200">
                <p className={`text-[11px] text-amber-300 font-medium flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Custom Fitting Details (Inches)
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Chest (Inches)</span>
                    <input
                      type="text"
                      name="chest"
                      value={measurements.chest}
                      onChange={handleMeasurementChange}
                      placeholder="e.g. 36"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-amber-500/50 mt-0.5"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Waist (Inches)</span>
                    <input
                      type="text"
                      name="waist"
                      value={measurements.waist}
                      onChange={handleMeasurementChange}
                      placeholder="e.g. 30"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-amber-500/50 mt-0.5"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Hips (Inches)</span>
                    <input
                      type="text"
                      name="hips"
                      value={measurements.hips}
                      onChange={handleMeasurementChange}
                      placeholder="e.g. 40"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-amber-500/50 mt-0.5"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Shirt/Dress Length</span>
                    <input
                      type="text"
                      name="length"
                      value={measurements.length}
                      onChange={handleMeasurementChange}
                      placeholder="e.g. 52"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-amber-500/50 mt-0.5"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleAdd}
            disabled={added}
            className={`w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-amber-950/40 flex items-center justify-center gap-2 cursor-pointer mt-2 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4 text-slate-950 shrink-0" /> 
                <span>Added to Bridal Bag!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 shrink-0" /> 
                <span>Add to Cart ({selectedSize})</span>
              </>
            )}
          </button>

        </div>

      </div>
    </div>
  );
}