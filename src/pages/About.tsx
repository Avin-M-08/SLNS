import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ShieldCheck, History, Mountain, Award, MapPin } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-green-700 py-20 text-white relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
           <ShieldCheck size={400} className="absolute -top-20 -right-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Legacy</h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Serving the farmers of Challakere for over 45 years with trust, quality, and dedication.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=1000" 
                  alt="Shop History"
                  className="rounded-3xl shadow-xl w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-[280px]">
                    <p className="text-green-600 font-bold text-sm uppercase tracking-widest mb-2 flex items-center">
                        <History size={16} className="mr-2" /> Since 1980
                    </p>
                    <p className="text-gray-800 font-medium">One of the first authorized dealers in the region.</p>
                </div>
            </div>
            
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">Sri Lakshmi Narasimha Swamy Traders</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Established in 1980 by **G Madhusudhan**, SLNS Traders was founded on the principle that every farmer deserves access to top-grade agricultural inputs. At a time when quality seeds were hard to find, we bridged the gap, bringing global agricultural brands to the heart of Challakere.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <Award className="text-green-600 mb-3" size={24} />
                        <h3 className="font-bold mb-1">Authorized Dealer</h3>
                        <p className="text-xs text-gray-500">Official distributor for brands like Jai Kishan & Kaveri Seeds.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <Mountain className="text-green-600 mb-3" size={24} />
                        <h3 className="font-bold mb-1">Local Heritage</h3>
                        <p className="text-xs text-gray-500">A family-run business rooted in the soil of Karnataka.</p>
                    </div>
                </div>

                <div className="space-y-4 border-l-4 border-green-600 pl-6 bg-green-50 py-6 pr-6 rounded-r-xl">
                    <h3 className="font-bold text-green-800">Our Mission</h3>
                    <p className="text-gray-700 italic">
                        "To provide scientifically proven, high-quality agricultural products that ensure sustainable growth and prosperity for the hardworking farmers of our community."
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <MapPin className="mx-auto text-green-600 mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-4">Serving Challakere & Nearby Regions</h2>
            <p className="text-gray-600 mb-12 max-w-xl mx-auto">We are strategically located to serve wholesale and retail buyers across several districts.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
               {['Challakere', 'Chitradurga', 'Bellary', 'Molakalmuru', 'Hiriyur', 'Nayakanahatti'].map(area => (
                 <span key={area} className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200 text-gray-700 font-medium">{area}</span>
               ))}
            </div>
        </div>
      </section>
    </div>
  );
}
