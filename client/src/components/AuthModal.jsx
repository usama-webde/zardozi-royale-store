
import React, { useState } from 'react';

function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [isResetMode, setIsResetMode] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    let endpoint = '/api/auth/login';
    let bodyData = { email, password };

    if (isResetMode) {
      endpoint = '/api/auth/reset-password';
      bodyData = { email, newPassword };
    } else if (isForgot) {
      endpoint = '/api/auth/forgot-password';
      bodyData = { email };
    } else if (!isLogin) {
      endpoint = '/api/auth/register';
      bodyData = { name, email, password };
    }

    try {
      const res = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData)
      });
      
      const contentType = res.headers.get("content-type");
      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        throw new Error("Server error or backend is not running on port 5000.");
      }

      if (!res.ok) throw new Error(data.error || 'Request failed');

      if (isResetMode) {
        // Automatically log the user in with the new token/session returned from password reset
        onLoginSuccess(data.user, data.token);
        setMessage(data.message);
        setTimeout(() => {
          onClose();
          setIsResetMode(false);
          setIsForgot(false);
          setIsLogin(true);
          setNewPassword('');
          setMessage('');
        }, 1000);
      } else if (isForgot) {
        setMessage(data.message);
        setTimeout(() => {
          setIsResetMode(true);
          setIsForgot(false);
          setMessage('');
        }, 1000);
      } else if (isLogin) {
        onLoginSuccess(data.user, data.token);
        onClose();
      } else {
        // Professional Auto-Login immediately after successful registration
        onLoginSuccess(data.user, data.token);
        onClose();
      }
    } catch (err) {
      setError(err.message.includes('Failed to fetch') 
        ? 'Check your internet connection and backend server.' 
        : err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-amber-500/30 w-full max-w-md rounded-2xl p-6 shadow-2xl relative text-slate-100">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-amber-400 text-xl font-bold"
        >
          &times;
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-serif font-bold text-amber-400">Zardozi Royale</h2>
          <p className="text-sm text-slate-400 mt-1">
            {isResetMode ? 'Set Your New Password' : isForgot ? 'Password Recovery' : isLogin ? 'Welcome Back, Esteemed Guest' : 'Create Your Client Account'}
          </p>
        </div>

        {/* Feedback Messages */}
        {error && <div className="bg-red-500/20 border border-red-500 text-red-300 text-sm p-3 rounded-lg mb-4 text-center">{error}</div>}
        {message && <div className="bg-emerald-500/20 border border-emerald-500 text-emerald-300 text-sm p-3 rounded-lg mb-4 text-center">{message}</div>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && !isForgot && !isResetMode && (
            <div>
              <label className="block text-xs text-amber-300 uppercase tracking-wider mb-1">Full Name</label>
              <input 
                type="text" 
                required 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 focus:border-amber-500 focus:outline-none transition text-sm"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div>
            <label className="block text-xs text-amber-300 uppercase tracking-wider mb-1">Email Address</label>
            <input 
              type="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 focus:border-amber-500 focus:outline-none transition text-sm"
              placeholder="name@example.com"
            />
          </div>

          {!isForgot && !isResetMode && (
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs text-amber-300 uppercase tracking-wider">Password</label>
                {isLogin && (
                  <button 
                    type="button" 
                    onClick={() => { setIsForgot(true); setError(''); setMessage(''); }}
                    className="text-xs text-amber-400 hover:underline"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 focus:border-amber-500 focus:outline-none transition text-sm pr-12"
                  placeholder="••••••••"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          )}

          {isResetMode && (
            <div>
              <label className="block text-xs text-amber-300 uppercase tracking-wider mb-1">New Password</label>
              <div className="relative">
                <input 
                  type={showNewPassword ? "text" : "password"} 
                  required 
                  value={newPassword} 
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 focus:border-amber-500 focus:outline-none transition text-sm pr-12"
                  placeholder="Enter new password"
                />
                <button 
                  type="button" 
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-3 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  {showNewPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-amber-600 hover:bg-amber-500 text-slate-950 font-semibold py-3 rounded-lg transition shadow-lg tracking-wide text-sm mt-2"
          >
            {isResetMode ? 'Update Password' : isForgot ? 'Proceed to Reset' : isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {/* Footer Toggle */}
        <div className="text-center mt-6 text-sm text-slate-400">
          {isForgot || isResetMode ? (
            <button 
              onClick={() => { setIsForgot(false); setIsResetMode(false); setError(''); setMessage(''); }}
              className="text-amber-400 hover:underline font-medium"
            >
              Back to Sign In
            </button>
          ) : isLogin ? (
            <p>
              New to Zardozi Royale?{' '}
              <button 
                onClick={() => { setIsLogin(false); setError(''); setMessage(''); }}
                className="text-amber-400 font-medium hover:underline"
              >
                Create Account
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button 
                onClick={() => { setIsLogin(true); setError(''); setMessage(''); }}
                className="text-amber-400 font-medium hover:underline"
              >
                Sign In
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default AuthModal;