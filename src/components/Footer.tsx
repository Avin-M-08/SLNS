import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <span className="text-xl font-bold">SLNS Traders</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your premium partner for high-quality agricultural inputs since 1980. We provide the best seeds, fertilizers, and pesticides to farmers in Challakere and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-green-600 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/products" className="hover:text-green-500 transition-colors">Our Products</Link></li>
              <li><Link to="/brands" className="hover:text-green-500 transition-colors">Brands We Stock</Link></li>
              <li><Link to="/blog" className="hover:text-green-500 transition-colors">Farmer Tips</Link></li>
              <li><Link to="/gallery" className="hover:text-green-500 transition-colors">Image Gallery</Link></li>
              <li><Link to="/about" className="hover:text-green-500 transition-colors">Our History</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-green-600 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-mono">
              <li className="flex items-start space-x-3">
                <MapPin className="text-green-500 shrink-0" size={18} />
                <span>Near Jamia Masjid, Bellary Road, Challakere – 577522</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-green-500 shrink-0" size={18} />
                <span>+91 99000 00000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-green-500 shrink-0" size={18} />
                <span>info@slnstraders.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-green-600 pb-2 inline-block">{t('contact.hours')}</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-green-500">9 AM - 8 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span className="text-red-500">Holiday</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun</span>
                <span className="text-green-500">9 AM - 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {year} Sri Lakshmi Narasimha Swamy Traders. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <Link to="/admin/login" className="hover:text-white transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
