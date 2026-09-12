
import React, { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

export const currencies = {
  PKR: { symbol: "Rs.", rate: 1, label: "PKR (Rs.)" },
  USD: { symbol: "$", rate: 0.0036, label: "USD ($)" },
  AED: { symbol: "AED", rate: 0.013, label: "AED" },
  SAR: { symbol: "SAR", rate: 0.0135, label: "SAR" },
  GBP: { symbol: "£", rate: 0.0028, label: "GBP (£)" },
  EUR: { symbol: "€", rate: 0.0033, label: "EUR (€)" },
  CAD: { symbol: "CA$", rate: 0.0049, label: "CAD" },
  AUD: { symbol: "A$", rate: 0.0055, label: "AUD" },
  QAR: { symbol: "QAR", rate: 0.0131, label: "QAR" },
  OMR: { symbol: "OMR", rate: 0.00138, label: "OMR" },
  KWD: { symbol: "KWD", rate: 0.0011, label: "KWD" },
};

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("PKR");

  const formatPrice = (amountInPKR) => {
    if (amountInPKR === undefined || amountInPKR === null || isNaN(amountInPKR)) return "";
    const curr = currencies[currency] || currencies.PKR;
    const converted = amountInPKR * curr.rate;
    
    // Formatting numbers with commas
    const formattedNum = Math.round(converted).toLocaleString();
    return `${curr.symbol} ${formattedNum}`;
  };

  const getPaymentBreakdown = (amountInPKR) => {
    const halfPKR = amountInPKR / 2;
    return {
      advance: formatPrice(halfPKR),
      cod: formatPrice(halfPKR),
    };
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        currencies,
        formatPrice,
        getPaymentBreakdown,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}