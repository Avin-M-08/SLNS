/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './i18n';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Brands from './pages/Brands';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-right" />
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/910000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-50 flex items-center justify-center transform hover:scale-110"
          id="whatsapp-float"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.752 5.92c-1.83 0-3.626-.492-5.195-1.424l-.373-.222-3.868 1.015 1.033-3.771-.244-.388c-.987-1.57-1.51-3.391-1.51-5.26 0-5.51 4.482-9.992 9.992-9.992 2.67 0 5.179 1.039 7.07 2.93a9.92 9.92 0 0 1 2.93 7.07c0 5.511-4.482 9.992-9.992 9.992m8.467-18.467C19.045 1.94 16.53 1 12.72 1c-6.618 0-12 5.382-12 12 0 2.112.549 4.17 1.597 5.993L0 24l5.143-1.348A11.91 11.91 0 0 0 12.72 25c6.618 0 12-5.382 12-12 0-3.197-1.245-6.202-3.506-8.461z" />
          </svg>
        </a>
      </div>
    </Router>
  );
}
