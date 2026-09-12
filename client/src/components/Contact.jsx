
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    inquiryType: "custom",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Open WhatsApp directly with inquiry details for instant response
    const waMessage = `*New Website Inquiry*\nName: ${formData.name}\nPhone: ${formData.phone}\nType: ${formData.inquiryType}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/923248385874?text=${encodeURIComponent(waMessage)}`;
    
    // Optional: open WhatsApp in new tab after a brief moment
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 500);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", inquiryType: "custom", message: "" });
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-amber-100">Get In Touch</h2>
        <p className="text-slate-400 text-sm">
          Have a question regarding custom bridal sizing, wholesale inquiries, or fitting appointments? Reach out to us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Contact Info Cards */}
        <div className="space-y-6">
          
          {/* Phone & WhatsApp */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-2 w-full">
              <h4 className="text-amber-200 font-semibold text-base">WhatsApp & Call Contacts</h4>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                <div>
                  <p className="text-slate-200 text-sm font-medium">+92 324 8385874</p>
                  <p className="text-xs text-amber-500/80">Primary WhatsApp Contact</p>
                </div>
                <a
                  href="https://wa.me/923248385874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1.5 rounded-lg transition-colors w-fit cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Chat on WhatsApp
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                <div>
                  <p className="text-slate-200 text-sm font-medium">+92 309 7635128</p>
                  <p className="text-xs text-amber-500/80">Secondary Contact</p>
                </div>
                <a
                  href="https://wa.me/923097635128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1.5 rounded-lg transition-colors w-fit cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-amber-200 font-semibold text-base">Email Inquiry</h4>
              <a 
                href="mailto:usamamalik1475@gmail.com" 
                className="text-slate-300 text-sm mt-1 hover:text-amber-400 transition-colors block font-mono"
              >
                usamamalik1475@gmail.com
              </a>
              <p className="text-xs text-amber-500/80 mt-1">Direct replies for custom orders & catalog requests</p>
            </div>
          </div>

          {/* Workshop Location */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-amber-200 font-semibold text-base">Production Workshop Location</h4>
              <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                Alipur, District Muzaffargarh, Punjab, Pakistan
              </p>
              <p className="text-xs text-slate-500 mt-1">B2B Wholesale & Custom Fitting Appointments</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-amber-200 font-serif text-xl font-bold">Message Sent Successfully!</h3>
              <p className="text-slate-400 text-xs">Redirecting to WhatsApp for instant connection with Usama Malik...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-amber-200 mb-2">Send Direct Inquiry</h3>
              
              <div>
                <label className="block text-xs text-slate-300 font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Fatima Khan"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-500/50"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 font-medium mb-1">WhatsApp / Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+92 300 0000000"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-500/50"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 font-medium mb-1">Inquiry Type</label>
                <select 
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-500/50 cursor-pointer"
                >
                  <option value="Custom Bridal Order">Custom Bridal Order</option>
                  <option value="Wholesale / B2B Supply">Wholesale / B2B Supply</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-300 font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your requirement, dress preferences, or date of event..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-500/50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold py-3 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" /> Send Message via WhatsApp
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}