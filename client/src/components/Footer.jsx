
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = ({ num1, num2, email }) => {
  const { t, isRTL } = useLanguage();

  // Live Google Maps link for Alipur, District Muzaffargarh, Punjab, Pakistan
  const locationUrl = "https://maps.google.com/?q=Alipur,+District+Muzaffargarh,+Punjab,+Pakistan";

  return (
    <footer 
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        backgroundColor: '#111111',
        color: '#cccccc',
        padding: '50px 20px 20px 20px',
        borderTop: '3px solid #d4af37',
        marginTop: '60px',
        fontFamily: 'sans-serif',
        textAlign: isRTL ? 'right' : 'left'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: isRTL ? 'row-reverse' : 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '30px',
        paddingBottom: '30px',
        borderBottom: '1px solid #333333'
      }}>
        {/* Brand Column */}
        <div style={{ flex: '1 1 250px', minWidth: '250px' }}>
          <h3 style={{ 
            fontFamily: 'serif', 
            color: '#d4af37', 
            fontSize: '22px', 
            marginTop: 0,
            letterSpacing: '1px' 
          }}>
            ZARDOZI COUTURE
          </h3>
          <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#aaaaaa' }}>
            {t('footerBrandDesc')}
          </p>
          <div style={{ fontSize: '12px', color: '#d4af37', fontWeight: 'bold', marginTop: '10px' }}>
            ✨ {t('announcement')}
          </div>
        </div>

        {/* Contact Info Column */}
        <div style={{ flex: '1 1 220px', minWidth: '220px' }}>
          <h4 style={{ color: '#ffffff', fontSize: '16px', marginTop: 0, borderBottom: '2px solid #13990a', display: 'inline-block', paddingBottom: '4px' }}>
            {t('navContact')}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px', fontSize: '13px' }}>
            {email && (
              <div>
                <strong style={{ color: '#ffffff', display: 'block', marginBottom: '2px' }}>{t('footerEmail')}:</strong>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <a href={`mailto:${email}`} style={{ color: '#d4af37', textDecoration: 'none', fontWeight: '500' }}>
                    📧 {email}
                  </a>
                  <a 
                    href={`https://mail.google.com/mail/?view=cm&to=${email}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '11px',
                      backgroundColor: '#334155',
                      color: '#38bdf8',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      fontWeight: '600'
                    }}
                  >
                    Open Gmail ↗
                  </a>
                </div>
              </div>
            )}
            {num1 && (
              <div>
                <strong style={{ color: '#ffffff', display: 'block', marginBottom: '2px' }}>{t('footerWaOrders')}:</strong>
                <a href={`https://wa.me/${num1}`} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 'bold' }}>
                  💬 +{num1}
                </a>
              </div>
            )}
            {num2 && (
              <div>
                <strong style={{ color: '#ffffff', display: 'block', marginBottom: '2px' }}>{t('footerWaHelpline')}:</strong>
                <a href={`https://wa.me/${num2}`} target="_blank" rel="noopener noreferrer" style={{ color: '#128C7E', textDecoration: 'none', fontWeight: 'bold' }}>
                  💬 +{num2}
                </a>
              </div>
            )}
            {/* Live Location Link */}
            <div>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '2px' }}>Studio Location:</strong>
              <a 
                href={locationUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '500', display: 'inline-block', lineHeight: '1.4' }}
              >
                📍 Alipur, District Muzaffargarh, Punjab, Pakistan
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Column (Facebook & TikTok Links) */}
        <div style={{ flex: '1 1 200px', minWidth: '200px' }}>
          <h4 style={{ color: '#ffffff', fontSize: '16px', marginTop: 0, borderBottom: '2px solid #18ae10', display: 'inline-block', paddingBottom: '4px' }}>
            {t('footerFollowUs')}
          </h4>
          <p style={{ fontSize: '13px', color: '#aaaaaa', marginTop: '12px', marginBottom: '12px' }}>
            {t('footerSocialDesc')}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a 
              href="https://www.facebook.com/61572140415817/posts/122103712190738013/?app=fbl" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#1877F2',
                color: '#ffffff',
                padding: '9px 14px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 'bold',
                display: 'inline-block',
                textAlign: 'center',
                boxShadow: '0 4px 10px rgba(24, 119, 242, 0.3)'
              }}
            >
              📘 {t('footerFb')}
            </a>

            <a 
              href="https://vm.tiktok.com/ZS9SPjJTdvNNn-9D9TK/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#000000',
                color: '#ffffff',
                padding: '9px 14px',
                borderRadius: '6px',
                border: '1px solid #444444',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 'bold',
                display: 'inline-block',
                textAlign: 'center',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)'
              }}
            >
              🎵 {t('footerTiktok')}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '20px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#777777'
      }}>
        © {new Date().getFullYear()} Zardozi Couture. {t('footerRights')}
      </div>
    </footer>
  );
};

export default Footer;