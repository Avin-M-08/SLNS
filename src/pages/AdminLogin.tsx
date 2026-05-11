import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ShieldCheck, Lock } from 'lucide-react';

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required")
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function AdminLogin() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await res.json();
      if (res.ok) {
        localStorage.setItem('adminToken', result.token);
        toast.success("Login successful!");
        navigate('/admin/dashboard');
      } else {
        toast.error(result.message || "Invalid credentials");
      }
    } catch (err) {
      toast.error("An error occurred during login");
    }
  };

  return (
    <div className="bg-gray-100 min-h-[90vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-green-600 p-10 text-center text-white relative">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 flex items-center justify-center overflow-hidden">
                 <ShieldCheck size={200} className="rotate-12" />
             </div>
             <ShieldCheck size={48} className="mx-auto mb-4 relative z-10" />
             <h2 className="text-3xl font-bold relative z-10">Admin Portal</h2>
             <p className="text-green-100 text-sm mt-2 relative z-10">Authorized access only</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-10 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Username</label>
              <div className="relative">
                <input 
                  {...register('username')}
                  type="text" 
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-gray-300"
                  placeholder="Enter admin username"
                />
              </div>
              {errors.username && <p className="text-red-500 text-xs font-bold">{errors.username.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Password</label>
              <div className="relative">
                <input 
                  {...register('password')}
                  type="password" 
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-gray-300"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && <p className="text-red-500 text-xs font-bold">{errors.password.message}</p>}
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-gray-900 border border-gray-900 hover:bg-black text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center space-x-3 shadow-lg disabled:opacity-50"
            >
              <Lock size={20} />
              <span>{isSubmitting ? 'Verifying...' : 'Login to Dashboard'}</span>
            </button>
            
            <p className="text-center text-xs text-gray-400 pt-4 cursor-default">
                Forgot password? Contact system administrator.
            </p>
          </form>
        </div>
        
        <p className="text-center mt-8 text-gray-400 text-xs">
            © SLNS Traders Admin Panel v1.0.4
        </p>
      </div>
    </div>
  );
}
