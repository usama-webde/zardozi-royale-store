
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCurrency } from '../context/CurrencyContext';
import { Heart } from 'lucide-react';

const ProductCard = ({ product, onToggleWishlist, isWishlisted }) => {
  const { lang, t, isRTL } = useLanguage();
  const { currency, currencies } = useCurrency();

  const curr = currencies?.[currency] || currencies?.['PKR'] || { symbol: 'Rs. ', rate: 1 };
  
  const convertedTotal = Math.round(product.price * curr.rate);
  const advanceAmount = Math.round(convertedTotal * 0.5);
  const codAmount = convertedTotal - advanceAmount;

  const formatPrice = (amount) => `${curr.symbol}${amount.toLocaleString()}`;
  const MY_WHATSAPP_NUMBER = "923248385874";

  // Selected image state initialized directly from product images
  const [activeImage, setActiveImage] = useState(product.images?.[0] || product.image || '');

  // Dynamic Language Data Selector for Cards
  const getLocalizedProduct = () => {
    if (lang === 'UR') {
      return {
        name: product.urduName || product.name,
        description: product.urduDescription || product.description,
        category: product.urduCategory || product.category
      };
    } else if (lang === 'AR') {
      return {
        name: product.arabicName || product.name,
        description: product.arabicDescription || product.description,
        category: product.arabicCategory || product.category
      };
    }
    return {
      name: product.name,
      description: product.description,
      category: product.category
    };
  };

  const localized = getLocalizedProduct();

  const handleWhatsAppOrder = () => {
    const message = 
`*NEW BRIDAL ORDER REQUEST - ZARDOZI COUTURE*
-----------------------------------------------
Dress Name: ${localized.name}
Category: ${localized.category}
TOTAL PRICE: ${formatPrice(convertedTotal)}
-----------------------------------------------
50% ADVANCE: ${formatPrice(advanceAmount)}
50% BALANCE (COD): ${formatPrice(codAmount)}
-----------------------------------------------
Kindly share bank details for advance payment to confirm order processing.`;

    window.open(`https://wa.me/${MY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div 
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        border: '1px solid #334155',
        borderRadius: '16px',
        padding: '16px',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
        maxWidth: '340px',
        width: '100%',
        margin: '15px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: isRTL ? 'right' : 'left'
      }}
    >
      <div>
        {/* Main Display Image with Wishlist Heart Button */}
        <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#1e293b' }}>
          <img 
            src={activeImage || product.images?.[0] || product.image} 
            alt={localized.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/300x400?text=Zardozi+Couture'; }}
          />
          
          {/* Wishlist Heart Button */}
          <button
            onClick={onToggleWishlist}
            aria-label="Toggle Wishlist"
            style={{
              position: 'absolute',
              top: '12px',
              right: isRTL ? 'unset' : '12px',
              left: isRTL ? '12px' : 'unset',
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid #334155',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s ease',
              zIndex: 10
            }}
            title="Add to Wishlist"
          >
            <Heart 
              style={{
                width: '18px',
                height: '18px',
                color: isWishlisted ? '#f43f5e' : '#cbd5e1',
                fill: isWishlisted ? '#f43f5e' : 'none',
                transition: 'all 0.2s ease'
              }} 
            />
          </button>
        </div>

        {/* Thumbnails Row */}
        {product.images && product.images.length > 0 && (
          <div style={{ 
            display: 'flex', 
            flexDirection: isRTL ? 'row-reverse' : 'row',
            gap: '6px', 
            marginTop: '8px', 
            overflowX: 'auto', 
            paddingBottom: '6px',
            scrollbarWidth: 'thin'
          }}>
            {product.images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt=""
                onClick={() => setActiveImage(img)}
                style={{ 
                  width: '45px', 
                  height: '55px', 
                  objectFit: 'cover', 
                  borderRadius: '6px', 
                  cursor: 'pointer',
                  border: activeImage === img ? '2px solid #fbbf24' : '1px solid #475569',
                  opacity: activeImage === img ? '1' : '0.6',
                  flexShrink: 0,
                  transition: 'all 0.2s ease'
                }} 
              />
            ))}
          </div>
        )}

        {/* Product Details Section */}
        <div style={{ marginTop: '14px' }}>
          <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fbbf24', fontWeight: 'bold', display: 'block' }}>
            {localized.category}
          </span>
          <h3 style={{ fontSize: '16px', color: '#f8fafc', margin: '4px 0 6px 0', fontWeight: '600', lineHeight: '1.3' }}>
            {localized.name}
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '12px', margin: '0 0 12px 0', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {localized.description}
          </p>
          
          {/* Price Box */}
          <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#f8fafc', marginBottom: '12px', display: 'flex', flexDirection: isRTL ? 'row-reverse' : 'row', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1e293b', paddingTop: '10px' }}>
            <span>{t('price')}:</span>
            <span style={{ color: '#fbbf24', fontSize: '18px' }}>{formatPrice(convertedTotal)}</span>
          </div>

          {/* Payment Breakdown Policy Box */}
          <div style={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '10px',
            padding: '10px 12px',
            marginBottom: '14px'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#fbbf24', marginBottom: '6px', letterSpacing: '0.05em', textAlign: isRTL ? 'right' : 'left' }}>
              {t('advanceBadge')} & {t('codBadge')}
            </div>
            <div style={{ display: 'flex', flexDirection: isRTL ? 'row-reverse' : 'row', justifyContent: 'space-between', fontSize: '12px', color: '#4ade80', fontWeight: '600', margin: '4px 0' }}>
              <span>{t('advanceBadge')}:</span>
              <span>{formatPrice(advanceAmount)}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: isRTL ? 'row-reverse' : 'row', justifyContent: 'space-between', fontSize: '12px', color: '#facc15', fontWeight: '600', margin: '4px 0' }}>
              <span>{t('codBadge')}:</span>
              <span>{formatPrice(codAmount)}</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* WhatsApp Order Button */}
        <button 
          onClick={handleWhatsAppOrder}
          style={{
            width: '100%',
            backgroundColor: '#16a34a',
            color: '#ffffff',
            border: 'none',
            padding: '11px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: 'bold',
            cursor: "pointer",
            display: 'flex',
            flexDirection: isRTL ? 'row-reverse' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 12px rgba(22, 163, 74, 0.3)'
          }}
        >
          <span>💬</span>
          <span>{t('whatsappOrder')}</span>
        </button>
      </div>
    </div>
  );
};

// Wrap with React.memo to prevent unnecessary re-renders and image flickering
export default React.memo(ProductCard, (prevProps, nextProps) => {
  return (
    prevProps.product.id === nextProps.product.id &&
    prevProps.isWishlisted === nextProps.isWishlisted &&
    prevProps.lang === nextProps.lang
  );
});