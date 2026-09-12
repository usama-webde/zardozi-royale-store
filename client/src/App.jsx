
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import WishlistModal from './components/WishlistModal';
import CustomMeasurementModal from './components/CustomMeasurementModal';
import AuthModal from './components/AuthModal';
import Toast from './components/Toast';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { useLanguage } from './context/LanguageContext';
import { useCurrency } from './context/CurrencyContext';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Cart & Wishlist States
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  
  // Auth States
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Custom Measurement Modal States
  const [isMeasurementOpen, setIsMeasurementOpen] = useState(false);
  const [selectedProductForMeasurement, setSelectedProductForMeasurement] = useState(null);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState(null);

  // Contexts
  const { lang } = useLanguage();
  const { currency, currencies } = useCurrency();

  const WHATSAPP_SALES = "923248385874";    
  const WHATSAPP_HELPLINE = "923097635128";  
  const OFFICIAL_EMAIL = "usamamalik1475@gmail.com";

  // Fetch products from backend API & check logged in user safely
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products from backend:', err);
        setLoading(false);
      });

    const savedUser = localStorage.getItem('zardozi_user');
    if (savedUser && savedUser !== 'undefined' && savedUser !== 'null') {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse saved user from localStorage:', e);
        localStorage.removeItem('zardozi_user');
        localStorage.removeItem('zardozi_token');
      }
    }
  }, []);

  const handleLoginSuccess = (userData, token) => {
    setUser(userData);
    localStorage.setItem('zardozi_user', JSON.stringify(userData));
    localStorage.setItem('zardozi_token', token);
    showToast(`Welcome back, ${userData?.name || 'Valued Customer'}!`);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('zardozi_user');
    localStorage.removeItem('zardozi_token');
    showToast('Logged out successfully');
  };

  // Helper to trigger toast notifications
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart Functions
  const handleAddToCart = (product) => {
    const productId = product?._id || product?.id;
    if (!productId) return;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => (item._id || item.id) === productId);
      if (existing) {
        return prevCart.map((item) =>
          (item._id || item.id) === productId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
    showToast('Item added to cart successfully!');
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => (item._id || item.id) !== id));
  };

  // Wishlist Functions
  const handleToggleWishlist = (product) => {
    const productId = product?._id || product?.id;
    if (!productId) return;

    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => (item._id || item.id) === productId);
      if (exists) {
        showToast('Removed from wishlist');
        return prevWishlist.filter((item) => (item._id || item.id) !== productId);
      }
      showToast('Added to wishlist');
      return [...prevWishlist, product];
    });
  };

  // Price Conversion Helper
  const formatPrice = (priceInPKR) => {
    const curr = currencies?.[currency] || currencies?.['PKR'] || { symbol: 'Rs. ', rate: 1 };
    const converted = Math.round((Number(priceInPKR) || 0) * curr.rate);
    return `${curr.symbol}${converted.toLocaleString()}`;
  };

  const totalCartItemsCount = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product?.category === selectedCategory);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col justify-between font-sans">
      <div>
        {/* Navbar Component */}
        <Navbar 
          num1={WHATSAPP_SALES} 
          num2={WHATSAPP_HELPLINE} 
          cartCount={totalCartItemsCount}
          wishlistCount={wishlist.length}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          user={user}
          onOpenAuth={() => setIsAuthOpen(true)}
          onLogout={handleLogout}
        />

        {/* Auth / Profile Bar */}
        <div className="bg-slate-900 border-b border-amber-500/20 py-2 px-6 flex justify-between items-center text-sm">
          <span className="text-amber-400/80 font-serif italic text-xs sm:text-sm">
            ✨ Handcrafted Royal Zardozi & Dabka Collection
          </span>
          <div>
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-slate-300">Hello, <strong className="text-amber-400">{user?.name}</strong></span>
                <button 
                  onClick={handleLogout}
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 text-xs px-3 py-1 rounded transition cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsAuthOpen(true)}
                className="bg-amber-600 hover:bg-amber-500 text-slate-950 font-semibold text-xs px-4 py-1.5 rounded transition shadow cursor-pointer"
              >
                Sign In / Register
              </button>
            )}
          </div>
        </div>

        <main className="p-4 sm:p-6 max-w-7xl mx-auto">
          {/* Hero Component */}
          <Hero />

          {/* Products & Filter Section */}
          <div id="products-section" className="scroll-mt-24">
            {/* FilterBar Component */}
            <FilterBar 
              selectedCategory={selectedCategory} 
              onSelectCategory={setSelectedCategory} 
              lang={lang} 
            />

            {/* Product Cards Grid */}
            {loading ? (
              <div className="text-center py-20 text-amber-500 text-xl font-medium">Loading Zardozi Collection...</div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20 text-gray-400 text-lg">No products found in database yet. Add one via backend!</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {filteredProducts.map((product) => {
                  const prodId = product._id || product.id;
                  return (
                    <ProductCard 
                      key={prodId} 
                      product={product} 
                      num1={WHATSAPP_SALES} 
                      num2={WHATSAPP_HELPLINE} 
                      onAddToCart={() => handleAddToCart(product)}
                      onToggleWishlist={() => handleToggleWishlist(product)}
                      onOpenMeasurement={() => {
                        setSelectedProductForMeasurement(product);
                        setIsMeasurementOpen(true);
                      }}
                      isWishlisted={wishlist.some((item) => (item._id || item.id) === prodId)}
                      formatPrice={formatPrice}
                      lang={lang}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* CartDrawer Component */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemove={handleRemoveFromCart}
        formatPrice={formatPrice}
        whatsappSales={WHATSAPP_SALES}
        lang={lang}
      />

      {/* WishlistModal Component */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlist}
        onRemoveFromWishlist={(id) => {
          setWishlist((prev) => prev.filter((item) => (item._id || item.id) !== id));
        }}
        onMoveToCart={(product) => {
          handleAddToCart(product);
          setWishlist((prev) => prev.filter((item) => (item._id || item.id) !== (product._id || product.id)));
        }}
        formatPrice={formatPrice}
        lang={lang}
      />

      {/* CustomMeasurementModal Component */}
      {isMeasurementOpen && (
        <CustomMeasurementModal
          isOpen={isMeasurementOpen}
          onClose={() => {
            setIsMeasurementOpen(false);
            setSelectedProductForMeasurement(null);
          }}
          product={selectedProductForMeasurement}
          whatsappSales={WHATSAPP_SALES}
          lang={lang}
        />
      )}

      {/* AuthModal Component */}
      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Toast Notification Component */}
      {toastMessage && <Toast message={toastMessage} />}

      {/* FAQ & Workflow Section */}
      <FaqSection />

      {/* Footer Component */}
      <Footer 
        num1={WHATSAPP_SALES} 
        num2={WHATSAPP_HELPLINE} 
        email={OFFICIAL_EMAIL} 
      />
    </div>
  );
}