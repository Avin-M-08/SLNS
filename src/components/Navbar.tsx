import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Landmark, Globe, Phone, ShoppingBag, Info, Image as ImageIcon, MessageSquare, ShieldCheck, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'kn' : 'en');
  };

  const navLinks = [
    { name: t('nav.home'), path: '/', icon: Landmark },
    { name: t('nav.products'), path: '/products', icon: ShoppingBag },
    { name: t('nav.about'), path: '/about', icon: Info },
    { name: t('nav.brands'), path: '/brands', icon: Globe },
    { name: t('nav.blog'), path: '/blog', icon: MessageSquare },
    { name: t('nav.gallery'), path: '/gallery', icon: ImageIcon },
    { name: t('nav.contact'), path: '/contact', icon: Phone },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm" id="main-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:bg-green-700 transition-colors">
                <ShieldCheck size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 leading-tight">Sri Lakshmi Narasimha Swamy Traders</span>
                <span className="text-xs text-green-600 font-medium tracking-wider uppercase">Challakere</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center space-x-1",
                  location.pathname === link.path
                    ? "text-green-700 bg-green-50"
                    : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                )}
              >
                <link.icon size={16} />
                <span>{link.name}</span>
              </Link>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="ml-4 px-4 py-2 bg-green-600 text-white rounded-full text-sm font-bold hover:bg-green-700 transition-all shadow-md flex items-center space-x-2"
            >
              <Globe size={16} />
              <span>{i18n.language === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
            </button>

            <Link to="/admin/login" className="p-2 text-gray-400 hover:text-green-600 transition-colors">
              <User size={20} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 bg-green-600 text-white rounded-full text-xs font-bold"
            >
              {i18n.language === 'en' ? 'ಕನ್ನಡ' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium flex items-center space-x-3",
                    location.pathname === link.path
                      ? "text-green-700 bg-green-50"
                      : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                  )}
                >
                  <link.icon size={20} />
                  <span>{link.name}</span>
                </Link>
              ))}
              <Link
                to="/admin/login"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50 flex items-center space-x-3"
              >
                <User size={20} />
                <span>Admin Login</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
