import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Filter, ShoppingCart, Info, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Product {
  id: number;
  name: string;
  brand: string;
  category_name: string;
  description: string;
  uses: string;
  suitable_crops: string;
  image_url: string;
  stock_status: string;
}

export default function Products() {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [categories, setCategories] = useState<{id: number, name: string}[]>([]);

  useEffect(() => {
    // Fetch categories and initial products
    const fetchData = async () => {
      try {
        const catRes = await fetch('/api/categories');
        const catData = await catRes.json();
        setCategories(catData);

        const prodRes = await fetch('/api/products');
        const prodData = await prodRes.json();
        setProducts(prodData);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         p.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? p.id === selectedCategory : true; // In real app, this would be category_id
    // Note: My mock server currently returns all, but in real it handles query params. 
    // I'll filter client-side for the demo if I don't re-fetch.
    return matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Catalog</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our curated selection of high-yield seeds, heavy-duty fertilizers, and effective agricultural protective products.
            </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-md p-4 mb-12 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search products or brands..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
             <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all">
                <Filter size={18} />
                <span>Filters</span>
             </button>
             <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all flex-grow md:flex-grow-0">
                Search
             </button>
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className="bg-white rounded-2xl h-[400px] animate-pulse shadow-sm"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProducts.length > 0 ? filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all hover:border-green-200"
                >
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                    <img 
                      src={product.image_url || `https://picsum.photos/seed/${product.name}/400/300`} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-green-700 shadow-sm border border-green-100">
                           {product.brand}
                        </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium mb-3 uppercase tracking-tighter">
                      {product.category_name}
                    </p>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-6 h-10">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-green-600 font-bold text-sm">
                           <CheckCircle2 size={16} className="mr-1" />
                           <span>In Stock</span>
                        </div>
                        <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all">
                           <ShoppingCart size={20} />
                        </button>
                    </div>
                  </div>
                </motion.div>
              )) : (
                <div className="col-span-full py-20 text-center">
                    <div className="text-gray-300 mb-4 flex justify-center">
                       <ShoppingCart size={64} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-400">No products found</h3>
                    <p className="text-gray-500">Try adjusting your search terms or filters.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
