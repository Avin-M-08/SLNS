import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { 
    LayoutDashboard, ShoppingBag, MessageSquare, Files, 
    LogOut, Plus, Edit, Trash2, ExternalLink, Calendar
} from 'lucide-react';

interface Inquiry {
  id: number;
  name: string;
  phone: string;
  email: string;
  message: string;
  created_at: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('inquiries');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    // In a real app we'd fetch actual protected data
    // For demo, we fetch public info or mocks
    const fetchInquiries = async () => {
        setLoading(true);
        // Note: Real API would need token in header
        // For this demo dashboard visibility we just show some placeholder logic
        setTimeout(() => {
            setInquiries([
                { id: 1, name: 'Ramesh Reddy', phone: '9845012345', email: 'ramesh@farm.com', message: 'I need Jai Kishan Urea for my 10 acre paddy field. Do you have 50 bags in stock?', created_at: new Date().toISOString() },
                { id: 2, name: 'Basavaraj H', phone: '9008055443', email: 'basava.agro@gmail.com', message: 'Looking for Kaveri 7299 hybrid corn seeds for this season. Please quote price for 5kg packets.', created_at: new Date().toISOString() }
            ]);
            setLoading(false);
        }, 1000);
    };

    fetchInquiries();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    toast.success("Logged out successfully");
    navigate('/admin/login');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 hidden lg:flex flex-col">
          <div className="p-8 border-b border-gray-100">
              <div className="flex items-center space-x-2 text-green-600">
                  <LayoutDashboard size={24} />
                  <span className="font-bold text-xl text-gray-900 tracking-tight">Admin Console</span>
              </div>
          </div>
          
          <nav className="flex-grow p-6 space-y-2">
              {[
                  { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
                  { id: 'products', label: 'Manage Products', icon: ShoppingBag },
                  { id: 'inquiries', label: 'Farmer Inquiries', icon: MessageSquare },
                  { id: 'blogs', label: 'Blog Posts', icon: Files }
              ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === item.id ? 'bg-green-600 text-white shadow-lg shadow-green-600/20' : 'text-gray-500 hover:bg-gray-50 hover:text-green-600'}`}
                  >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                  </button>
              ))}
          </nav>
          
          <div className="p-6 border-t border-gray-100">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-sm text-red-500 hover:bg-red-50 transition-all border border-transparent hover:border-red-100"
              >
                  <LogOut size={18} />
                  <span>Logout Session</span>
              </button>
          </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
          <header className="flex justify-between items-center mb-10">
              <div>
                  <h1 className="text-3xl font-bold text-gray-900 capitalize">{activeTab}</h1>
                  <p className="text-gray-400 text-sm mt-1">Management portal for SLNS Traders</p>
              </div>
              <div className="flex space-x-4">
                  <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-sm flex items-center space-x-2 hover:bg-gray-50 shadow-sm">
                      <ExternalLink size={16} />
                      <span>Live Site</span>
                  </button>
                  <button className="px-6 py-3 bg-green-600 text-white rounded-xl font-bold text-sm flex items-center space-x-2 hover:bg-green-700 shadow-lg shadow-green-600/20">
                      <Plus size={18} />
                      <span>Add New</span>
                  </button>
              </div>
          </header>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              {[
                  { label: 'Total Products', value: '482', color: 'bg-blue-500' },
                  { label: 'Unread Inquiries', value: '14', color: 'bg-green-500' },
                  { label: 'Active Blogs', value: '28', color: 'bg-amber-500' },
                  { label: 'Store Visitors', value: '1.2k', color: 'bg-purple-500' }
              ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <div className={`h-1 w-12 ${stat.color} mt-4 rounded-full`}></div>
                  </div>
              ))}
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                  <h3 className="font-bold text-gray-900">Recent Customer Inquiries</h3>
                  <button className="text-xs font-bold text-green-600 hover:underline">View Historical Records</button>
              </div>
              
              <div className="overflow-x-auto">
                  <table className="w-full text-left">
                      <thead>
                          <tr className="border-b border-gray-100">
                              <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Farmer Detail</th>
                              <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Requirements</th>
                              <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Date Received</th>
                              <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {loading ? (
                              <tr>
                                  <td colSpan={4} className="px-8 py-20 text-center text-gray-400">Loading inquiries...</td>
                              </tr>
                          ) : (
                              inquiries.map(inq => (
                                  <tr key={inq.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                                      <td className="px-8 py-6">
                                          <div className="flex items-center space-x-3">
                                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                                                  {inq.name.charAt(0)}
                                              </div>
                                              <div>
                                                  <p className="font-bold text-gray-900">{inq.name}</p>
                                                  <p className="text-xs text-gray-500">{inq.phone}</p>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="px-8 py-6">
                                          <p className="text-sm text-gray-600 line-clamp-1 max-w-md">{inq.message}</p>
                                      </td>
                                      <td className="px-8 py-6">
                                          <div className="flex items-center space-x-2 text-xs text-gray-400">
                                              <Calendar size={14} />
                                              <span>{new Date(inq.created_at).toLocaleDateString()}</span>
                                          </div>
                                      </td>
                                      <td className="px-8 py-6 text-right">
                                          <div className="flex justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                              <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><Edit size={18} /></button>
                                              <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
                                          </div>
                                      </td>
                                  </tr>
                              ))
                          )}
                      </tbody>
                  </table>
              </div>
              
              <div className="p-6 text-center border-t border-gray-100">
                  <button className="text-sm text-gray-400 font-medium hover:text-gray-600 transition-colors">Show All 14 Inquiries</button>
              </div>
          </div>
      </main>
    </div>
  );
}
