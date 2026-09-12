
import React, { useState } from "react";
import { X, Ruler, Send, CheckCircle2, Sparkles } from "lucide-react";

export default function CustomMeasurementModal({ isOpen, onClose }) {
  const [unit, setUnit] = useState("inches");
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    dressType: "Bridal Lehenga / Choli",
    // Top Measurements
    shoulder: "",
    bust: "",
    waist: "",
    hips: "",
    shirtLength: "",
    armhole: "",
    sleeveLength: "",
    frontNeckDepth: "",
    backNeckDepth: "",
    // Bottom Measurements
    bottomWaist: "",
    bottomHips: "",
    lehengaLength: "",
    // Customization Notes
    colorPreference: "",
    additionalNotes: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.customerName || !formData.phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }

    const message = 
      `*CUSTOM BRIDAL MEASUREMENT FORM*\n` +
      `----------------------------------\n` +
      `*Client:* ${formData.customerName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Outfit Type:* ${formData.dressType}\n` +
      `*Unit:* ${unit}\n\n` +
      `*TOP / SHIRT / CHOLI MEASUREMENTS:*\n` +
      `- Shoulder: ${formData.shoulder || "N/A"}\n` +
      `- Bust / Chest: ${formData.bust || "N/A"}\n` +
      `- Upper Waist: ${formData.waist || "N/A"}\n` +
      `- Hips: ${formData.hips || "N/A"}\n` +
      `- Shirt / Choli Length: ${formData.shirtLength || "N/A"}\n` +
      `- Armhole: ${formData.armhole || "N/A"}\n` +
      `- Sleeve Length: ${formData.sleeveLength || "N/A"}\n` +
      `- Front Neck Depth: ${formData.frontNeckDepth || "N/A"}\n` +
      `- Back Neck Depth: ${formData.backNeckDepth || "N/A"}\n\n` +
      `*BOTTOM / LEHENGA / SHARARA:*\n` +
      `- Bottom Waist: ${formData.bottomWaist || "N/A"}\n` +
      `- Bottom Hips: ${formData.bottomHips || "N/A"}\n` +
      `- Lehenga / Pant Length: ${formData.lehengaLength || "N/A"}\n\n` +
      `*CUSTOMIZATION & NOTES:*\n` +
      `- Color Customization: ${formData.colorPreference || "Standard Original"}\n` +
      `- Extra Notes: ${formData.additionalNotes || "None"}\n` +
      `----------------------------------`;

    const encoded = encodeURIComponent(message);
    const phoneNumber = "923248385874";
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl my-8 text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-950/50 hover:bg-slate-800 transition cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
          <div className="p-2.5 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-400">
            <Ruler size={24} />
          </div>
          <div>
            <h2 className="text-xl font-serif font-bold text-amber-400">Bridal Custom Measurement Chart</h2>
            <p className="text-xs text-slate-400">Provide exact sizing for custom-tailored fitting</p>
          </div>
        </div>

        <form onSubmit={handleSubmitWhatsApp} className="space-y-6">
          
          {/* Personal Info & Unit Switcher */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
              <input
                type="text"
                name="customerName"
                required
                value={formData.customerName}
                onChange={handleChange}
                placeholder="e.g. Fatima Ali"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp / Phone *</label>
              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 1234567"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Sparkles size={16} className="text-amber-400" />
              <span>Select Unit of Measurement:</span>
            </div>
            <div className="flex gap-2">
              {["inches", "cm"].map((u) => (
                <button
                  type="button"
                  key={u}
                  onClick={() => setUnit(u)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition cursor-pointer ${
                    unit === u
                      ? "bg-amber-500 text-slate-950 shadow"
                      : "bg-slate-900 text-slate-400 border border-slate-800"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>

          {/* Section: Top / Shirt / Choli */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 size={14} /> Top / Shirt / Choli Specs ({unit})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Shoulder", name: "shoulder", placeholder: "14.5" },
                { label: "Bust / Chest", name: "bust", placeholder: "36" },
                { label: "Upper Waist", name: "waist", placeholder: "30" },
                { label: "Hips (Shirt)", name: "hips", placeholder: "40" },
                { label: "Shirt Length", name: "shirtLength", placeholder: "42" },
                { label: "Armhole", name: "armhole", placeholder: "16" },
                { label: "Sleeve Length", name: "sleeveLength", placeholder: "22" },
                { label: "Front Neck Depth", name: "frontNeckDepth", placeholder: "7" },
                { label: "Back Neck Depth", name: "backNeckDepth", placeholder: "8" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-[11px] text-slate-400 mb-0.5">{field.label}</label>
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs focus:border-amber-500 focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section: Bottom / Lehenga */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 size={14} /> Bottom / Lehenga / Trouser Specs ({unit})
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Bottom Waist", name: "bottomWaist", placeholder: "32" },
                { label: "Bottom Hips", name: "bottomHips", placeholder: "42" },
                { label: "Lehenga Length", name: "lehengaLength", placeholder: "44" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-[11px] text-slate-400 mb-0.5">{field.label}</label>
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs focus:border-amber-500 focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Color Preference & Extra Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Color / Fabric Preference</label>
              <input
                type="text"
                name="colorPreference"
                value={formData.colorPreference}
                onChange={handleChange}
                placeholder="e.g. Deep Maroon Velvet, Pastel Peach Organza"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Additional Customization Notes</label>
              <input
                type="text"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                placeholder="e.g. Extra lining, full sleeves, heavy dupatta borders"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-amber-500/10 text-sm cursor-pointer"
            >
              <Send size={16} /> Send Measurements via WhatsApp
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}