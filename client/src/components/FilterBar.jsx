
import React from 'react';

export default function FilterBar({ selectedCategory, onSelectCategory, lang = 'EN', categories = [] }) {
  // Fallback default categories agar parent se pass na hon
  const defaultCategories = [
    { key: 'All', en: 'All', ur: 'تمام', ar: 'الكل' },
    { key: 'Bridal Lehenga', en: 'Bridal Lehenga', ur: 'برائیڈل لہنگا', ar: 'ليغندا العروس' },
    { key: 'Bridal Gharara', en: 'Bridal Gharara', ur: 'برائیڈل غرارہ', ar: 'غرارة العروس' },
    { key: 'Velvet Pishwas', en: 'Velvet Pishwas', ur: 'ویلویٹ پیشواس', ar: 'بيشواس مخمل' },
    { key: 'Bridal Maxi', en: 'Bridal Maxi', ur: 'برائیڈل میکسی', ar: 'ماكسي العروس' },
    { key: 'Long Trail Pishwas', en: 'Long Trail Pishwas', ur: 'لانگ ٹریل پیشواس', ar: 'بيشواس طويل' },
    { key: 'Bridal Sharara', en: 'Bridal Sharara', ur: 'برائیڈل شرارہ', ar: 'شرارة العروس' },
    { key: 'Peplum & Lehenga', en: 'Peplum & Lehenga', ur: 'پیملم اور لہنگا', ar: 'بيبلوم وليغندا' },
    { key: 'Velvet Couture', en: 'Velvet Couture', ur: 'ویلویٹ کوچیور', ar: 'أزياء المخمل' },
    { key: 'Farshi Lehenga', en: 'Farshi Lehenga', ur: 'فرشی لہنگا', ar: 'ليغندا فرش' },
    { key: 'Bridal Sari', en: 'Bridal Sari', ur: 'برائیڈل ساڑھی', ar: 'ساري العروس' },
    { key: 'Bridal Angrakha', en: 'Bridal Angrakha', ur: 'برائیڈل انگ رکھا', ar: 'أنجراخا العروس' }
  ];

  const categoryList = categories.length > 0 ? categories : defaultCategories;

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categoryList.map((cat, index) => {
        const label = lang === 'UR' ? cat.ur : lang === 'AR' ? cat.ar : cat.en;
        return (
          <button
            key={index}
            onClick={() => onSelectCategory(cat.key)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
              selectedCategory === cat.key
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-amber-500/50 hover:text-amber-300'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}