import { useTranslation } from 'react-i18next';
import { ShieldCheck, Globe, Award, CheckCircle } from 'lucide-react';

export default function Brands() {
  const { t } = useTranslation();

  const fertilizers = [
    { name: 'Jai Kishan', origin: 'Zuari Agro Chemicals Ltd.' },
    { name: 'Mangala', origin: 'Mangalore Chemicals & Fertilizers Ltd.' },
    { name: 'Mahadhan Smartech', origin: 'Deepak Fertilisers' },
    { name: 'Coromandel Growmore', origin: 'Coromandel International' },
    { name: 'Pradeep Phosphate Ltd', origin: 'Adventz Group' },
    { name: 'SPIC', origin: 'Southern Petrochemical Industries' },
    { name: 'FACT', origin: 'The Fertilisers And Chemicals Travancore' }
  ];

  const seeds = [
    { name: 'Kaveri Seeds', specialty: 'Cotton, Maize, Paddy' },
    { name: 'Indo American Seeds', specialty: 'Vegetables & Flowers' },
    { name: 'Jindal Seeds', specialty: 'Hybrid Vegetables' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <Globe className="mx-auto text-green-600 mb-6" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Partner Brands</h1>
            <p className="text-gray-600 text-lg">
                We are proud to be authorized distributors and dealers for India's leading agricultural manufacturers. Our partnerships ensure you get 100% authentic products straight from the factory.
            </p>
        </div>
      </section>

      {/* Fertilizers Grid */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex items-center space-x-4 mb-12">
            <div className="h-10 w-2 bg-green-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight uppercase">Fertilizer Partners</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fertilizers.map((brand) => (
                <div key={brand.name} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                    <p className="text-xs text-gray-400 font-medium uppercase mb-4 tracking-wider">{brand.origin}</p>
                    <div className="flex items-center text-green-600 text-xs font-bold">
                        <CheckCircle size={14} className="mr-1" />
                        <span>Authorized Dealer</span>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Seeds Section */}
      <section className="bg-green-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center space-x-4 mb-12">
                <div className="h-10 w-2 bg-green-400 rounded-full"></div>
                <h2 className="text-3xl font-bold tracking-tight uppercase">Seed Partners</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {seeds.map((brand) => (
                    <div key={brand.name} className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                        <Award className="text-green-400 mb-6" size={40} />
                        <h3 className="text-2xl font-bold mb-3">{brand.name}</h3>
                        <p className="text-green-100/70 mb-6 leading-relaxed">Specializing in top-quality {brand.specialty} that guarantee higher yields.</p>
                        <ul className="space-y-2 text-sm text-green-300">
                             <li className="flex items-center"><CheckCircle size={14} className="mr-2" /> High Germination Rate</li>
                             <li className="flex items-center"><CheckCircle size={14} className="mr-2" /> Purity Guaranteed</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl italic font-serif text-gray-500 mb-8">
                "Quality in agricultural products is the first step towards a bountiful harvest. At SLNS Traders, we never compromise on our brand selections because we know the farmer's livelihood depends on it."
            </h3>
            <div className="w-16 h-1 bg-green-600 mx-auto"></div>
            <p className="mt-4 font-bold text-gray-900 uppercase tracking-widest text-xs">- G Madhusudhan, Owner</p>
      </section>
    </div>
  );
}
