import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, ChevronRight, BookOpen, Sprout, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface Blog {
    id: number;
    title_en: string;
    title_kn: string;
    content_en: string;
    content_kn: string;
    image_url: string;
    created_at: string;
}

export default function Blog() {
  const { i18n } = useTranslation();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
          setBlogs(data);
          setLoading(false);
      });
  }, []);

  const categories = [
      { name: 'Crop Guidance', icon: Sprout, count: 12 },
      { name: 'Fertilizer Tips', icon: TrendingUp, count: 8 },
      { name: 'Market Trends', icon: TrendingUp, count: 5 }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Farmer Support & Tips</h1>
            <p className="text-gray-500 text-lg">Knowledge is the best fertilizer. Stay updated with seasonal tips and agricultural guidance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-6 flex items-center">
                        <BookOpen size={20} className="mr-2 text-green-600" />
                        Categories
                    </h3>
                    <div className="space-y-3">
                        {categories.map(cat => (
                            <button key={cat.name} className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                <span className="text-sm font-medium text-gray-600 group-hover:text-green-600">{cat.name}</span>
                                <span className="bg-gray-100 text-gray-400 text-xs px-2 py-1 rounded-full group-hover:bg-green-100 group-hover:text-green-600 transition-colors">{cat.count}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-green-600 p-8 rounded-2xl shadow-xl text-white">
                    <h3 className="font-bold mb-4">Need personalized advice?</h3>
                    <p className="text-sm text-green-100 mb-6">Our experts can help you choose the right seeds for your specific soil type and season.</p>
                    <a href="https://wa.me/910000000000" className="block w-full py-3 bg-white text-green-600 rounded-xl font-bold text-center text-sm">WhatsApp Consultation</a>
                </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
                {loading ? (
                    <div className="space-y-8">
                        {[1, 2].map(i => (
                            <div key={i} className="h-64 bg-white rounded-2xl animate-pulse shadow-sm"></div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-12">
                        {blogs.map((blog) => (
                            <motion.article 
                                key={blog.id} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-md flex flex-col md:flex-row hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="md:w-2/5 h-[250px] md:h-auto overflow-hidden">
                                    <img 
                                      src={blog.image_url || `https://picsum.photos/seed/${blog.id}/600/400`} 
                                      alt="Blog"
                                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                      referrerPolicy="no-referrer"
                                    />
                                </div>
                                <div className="p-8 md:p-10 md:w-3/5 flex flex-col justify-center">
                                    <div className="flex items-center space-x-2 text-xs font-bold text-green-600 uppercase tracking-widest mb-4">
                                        <Calendar size={14} />
                                        <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors cursor-pointer">
                                        {i18n.language === 'en' ? blog.title_en : blog.title_kn}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-8">
                                        {i18n.language === 'en' ? blog.content_en : blog.content_kn}
                                    </p>
                                    <div className="pt-2">
                                        <button className="flex items-center text-gray-900 font-bold group">
                                            <span>Read Full Advice</span>
                                            <ChevronRight size={20} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
