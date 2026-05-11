import { useTranslation } from 'react-i18next';
import { Image as ImageIcon, Search } from 'lucide-react';

export default function Gallery() {
  const { t } = useTranslation();

  const images = [
    { url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800', title: 'Quality Fertilizers' },
    { url: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=800', title: 'Jai Kishan Stock' },
    { url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800', title: 'Hybrid Seeds' },
    { url: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800', title: 'Organic Products' },
    { url: 'https://images.unsplash.com/photo-1615814433168-90d1448b30dc?auto=format&fit=crop&q=80&w=800', title: 'Agricultural Tools' },
    { url: 'https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=800', title: 'Shop Interior' },
    { url: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?auto=format&fit=crop&q=80&w=800', title: 'Harvest Success' },
    { url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800', title: 'Farmer Support' }
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
                <div className="flex items-center space-x-2 text-green-600 font-bold uppercase tracking-wider text-sm">
                    <ImageIcon size={18} />
                    <span>Visual Portfolio</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Our Gallery</h1>
                <p className="text-gray-500 text-lg max-w-xl">A glimpse into our shop, our premium products, and the success stories of the farmers we serve.</p>
            </div>
            
            <div className="flex bg-gray-50 p-2 rounded-xl border border-gray-100">
                {['All', 'Products', 'Shop', 'Farmers'].map(filter => (
                    <button key={filter} className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${filter === 'All' ? 'bg-white shadow-sm text-green-600' : 'text-gray-400 hover:text-gray-600'}`}>
                        {filter}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((img, i) => (
                <div key={i} className={`group relative overflow-hidden rounded-2xl shadow-md h-72 ${i === 1 || i === 6 ? 'sm:col-span-2' : ''}`}>
                    <img 
                      src={img.url} 
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-1">SLNS Traders</p>
                            <h3 className="text-lg font-bold">{img.title}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Success Counter Branding */}
        <div className="mt-20 py-16 border-t border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
             <div>
                 <p className="text-4xl font-bold text-gray-900 mb-2 font-mono">1.5k+</p>
                 <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">In-Stock Items</p>
             </div>
             <div>
                 <p className="text-4xl font-bold text-gray-900 mb-2 font-mono">45k+</p>
                 <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Kg Seeds Sold</p>
             </div>
             <div>
                 <p className="text-4xl font-bold text-gray-900 mb-2 font-mono">12+</p>
                 <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Premium Brands</p>
             </div>
             <div>
                 <p className="text-4xl font-bold text-gray-900 mb-2 font-mono">100%</p>
                 <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Authenticity</p>
             </div>
        </div>
      </div>
    </div>
  );
}
