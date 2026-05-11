import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address").optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { t } = useTranslation();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        toast.success("Message sent! We'll contact you soon.");
        reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('contact.title')}</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">Have questions about our products or need agricultural advice? Our team is here to help you.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-green-500 transition-all">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6">
                        <MapPin size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-600 text-sm">{t('contact.address')}</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-green-500 transition-all">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6">
                        <Phone size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Call/WhatsApp</h3>
                    <p className="text-gray-600 text-sm font-mono">+91 99000 00000</p>
                    <p className="text-gray-600 text-sm font-mono">+91 98800 00000</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-green-500 transition-all">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6">
                        <Clock size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{t('contact.hours')}</h3>
                    <div className="text-sm text-gray-600">
                        <p className="flex justify-between"><span>Mon - Thu:</span> <span className="text-green-600 font-bold">9AM - 8PM</span></p>
                        <p className="flex justify-between"><span>Friday:</span> <span className="text-red-500 font-bold">Holiday</span></p>
                        <p className="flex justify-between"><span>Sat - Sun:</span> <span className="text-green-600 font-bold">9AM - 8PM</span></p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
                <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
                    <h2 className="text-3xl font-bold mb-8">Send us an Inquiry</h2>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                                <input 
                                    {...register('name')}
                                    placeholder="Enter your name"
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-gray-300"
                                />
                                {errors.name && <p className="text-red-500 text-xs font-bold">{errors.name.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                                <input 
                                    {...register('phone')}
                                    placeholder="+91 XXXXX XXXXX"
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-gray-300"
                                />
                                {errors.phone && <p className="text-red-500 text-xs font-bold">{errors.phone.message}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address (Optional)</label>
                            <input 
                                {...register('email')}
                                placeholder="john@example.com"
                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-gray-300"
                            />
                            {errors.email && <p className="text-red-500 text-xs font-bold">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Your Message</label>
                            <textarea 
                                {...register('message')}
                                rows={5}
                                placeholder="Tell us about your requirements or crop problems..."
                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-gray-300 resize-none"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-xs font-bold">{errors.message.message}</p>}
                        </div>

                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-green-900/20 transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
                        >
                            <Send size={24} />
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="h-[450px] bg-gray-100 rounded-[2.5rem] border border-gray-200 shadow-inner flex items-center justify-center text-gray-400 overflow-hidden relative">
                <div className="absolute inset-0 grayscale opacity-40">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
                    className="w-full h-full object-cover"
                    alt="Map Preview"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative z-10 text-center bg-white/90 p-8 rounded-2xl shadow-2xl border border-white">
                    <MapPin className="mx-auto text-green-600 mb-4" size={48} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Shop in Challakere</h3>
                    <p className="text-gray-600 mb-6">Near Jamia Masjid, Bellary Road</p>
                    <a 
                      href="https://www.google.com/maps/search/Sri+Lakshmi+Narasimha+Swamy+Traders+Challakere"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition"
                    >
                        Open in Google Maps
                    </a>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
