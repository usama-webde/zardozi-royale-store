
import React from "react";
import { useCurrency } from "../context/CurrencyContext";
import { Globe } from "lucide-react";

export default function CurrencySelector() {
  const { currency, setCurrency, exchangeRates } = useCurrency();

  // Safeguard against missing or empty exchange rates
  const rates = exchangeRates && typeof exchangeRates === "object" ? exchangeRates : { PKR: { symbol: "Rs" } };

  return (
    <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 text-xs text-amber-400 px-3 py-1.5 rounded-full shadow-inner">
      <Globe size={14} className="text-amber-400 shrink-0" />
      <select
        value={currency || "PKR"}
        onChange={(e) => setCurrency(e.target.value)}
        className="bg-transparent text-amber-300 font-semibold focus:outline-none cursor-pointer"
        aria-label="Select Currency"
      >
        {Object.keys(rates).map((curr) => (
          <option key={curr} value={curr} className="bg-slate-900 text-slate-100">
            {curr} ({rates[curr]?.symbol || curr})
          </option>
        ))}
      </select>
    </div>
  );
}