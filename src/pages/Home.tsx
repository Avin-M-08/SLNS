import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Sprout, Tractor, Droplets, Users, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();

  const features = [
    { title: 'Quality Fertilizers', desc: 'Authorized dealers for Jai Kishan, Mangala, and Mahadhan.', icon: Droplets },
    { title: 'Certified Seeds', desc: 'Premium wholesale seeds from Kaveri, Indo American & Jindal.', icon: Sprout },
    { title: 'Expert Guidance', desc: 'Over 4 decades of experience in agricultural consultation.', icon: Users },
    { title: 'Trusted Legacy', desc: 'Serving the farming community of Challakere since 1980.', icon: Award },
  ];

  const brands = [
    'Jai Kishan', 'Mangala', 'Mahadhan', 'Kaveri Seeds', 'Indo American', 'Coromandel', 'SPIC', 'FACT'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center mt-[-1px]">
        {/* BG Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Agriculture background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-600/20 border border-green-400/30 text-green-400 text-sm font-semibold mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
              {t('home.trusted')}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/products"
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center shadow-xl shadow-green-900/20"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a 
                href="https://wa.me/910000000000"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-bold text-lg transition-all backdrop-blur-md flex items-center justify-center"
              >
                {t('hero.whatsapp')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-12 hidden lg:block">
           <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-3 gap-8 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
                 <div className="flex items-center space-x-4">
                    <div className="text-4xl font-bold text-green-400">45+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">Years of<br/>Experience</div>
                 </div>
                 <div className="flex items-center space-x-4 border-l border-white/10 pl-8">
                    <div className="text-4xl font-bold text-green-400">10k+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">Happy<br/>Farmers</div>
                 </div>
                 <div className="flex items-center space-x-4 border-l border-white/10 pl-8">
                    <div className="text-4xl font-bold text-green-400">500+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">Products<br/>Available</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Partners Marquee Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">{t('home.brands')}</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 hover:opacity-100 transition-all">
            {brands.map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('home.why_us')}</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all hover:border-green-200"
              >
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6">
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full z-0"></div>
               <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-100 rounded-full z-0"></div>
               <img 
                 src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000" 
                 alt="Farmer"
                 className="relative z-10 rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute bottom-10 -right-10 z-20 bg-green-600 text-white p-8 rounded-2xl shadow-xl hidden md:block max-w-[240px]">
                  <p className="text-4xl font-bold mb-2">1980</p>
                  <p className="text-sm font-medium opacity-90 leading-tight">Founded by G Madhusudhan with a vision to empower farmers.</p>
               </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Empowering the Agricultural Backbone of Challakere.
              </h2>
              <p className="text-lg text-gray-600">
                For over 45 years, Sri Lakshmi Narasimha Swamy Traders has been a cornerstone of the agricultural community. We began with a single mission: to provide farmers with authentic, high-quality inputs that actually produce results.
              </p>
              <ul className="space-y-4">
                {[
                  'Authorized Distributor for Global Brands',
                  'Expert Crop Health Diagnostics',
                  'Wholesale Seed Distribution Specialists',
                  'Ethical and Transparent Pricing'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700 font-medium">
                    <CheckCircle2 size={20} className="text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link to="/about" className="text-green-600 font-bold border-b-2 border-green-600 pb-1 hover:text-green-700 hover:border-green-700 transition-colors">
                  Learn More About Our History
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-green-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Farmer Voices</h2>
            <p className="text-gray-500">Real stories from the farmers we support every day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Siddappa K', role: 'Paddy Farmer', content: 'I have been buying seeds from SLNS for 20 years. Their advice on fertilizer dosage saved my crop last year.', rating: 5 },
              { name: 'Mallikarjuna', role: 'Maize Grower', content: "Excellent quality hybrid seeds. Best yield I've ever had in Challakere region.", rating: 5 }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 mb-6">
                    {[...Array(t.rating)].map((_, i) => <Award key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-xl text-gray-700 italic font-medium leading-relaxed">"{t.content}"</p>
                </div>
                <div className="mt-8 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold uppercase">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-green-600 rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                 <Tractor size={400} className="absolute -top-20 -left-20 rotate-12" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto">
                 <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a consultation for your crops?</h2>
                 <p className="text-lg text-green-100 mb-10">
                    Visit our shop or get in touch on WhatsApp for free primary consultation on fertilizer dosage and seed selection.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/contact" className="px-10 py-4 bg-white text-green-700 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                      Visit Our Shop
                    </Link>
                    <a href="https://wa.me/910000000000" className="px-10 py-4 border border-white/30 bg-white/10 backdrop-blur-md rounded-xl font-bold hover:bg-white/20 transition-all">
                      Message Us Now
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
