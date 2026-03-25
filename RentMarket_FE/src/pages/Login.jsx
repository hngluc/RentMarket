import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = await login(formData.username, formData.password);
      const token = data?.result?.token;
      
      if (token) {
        localStorage.setItem('token', token);
        navigate('/');
      } else {
        setError('Login failed: Token not found in response.');
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display items-center justify-center p-4">
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"></div>
      </div>
      
      {/* Main Card Container */}
      <div className="relative z-10 w-full max-w-[480px] flex flex-col bg-white dark:bg-[#1a232e] rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col items-center pt-10 pb-4 px-8">
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary text-[28px]">lock</span>
          </div>
          <h1 className="text-[#0d141b] dark:text-white tracking-tight text-[28px] font-bold leading-tight text-center">Welcome Back</h1>
          <p className="text-[#4c739a] dark:text-slate-400 text-sm font-normal mt-2 text-center">Enter your details to access your account</p>
        </div>
        
        {/* Error Callout */}
        {error && (
          <div className="px-8 pb-2">
            <div className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50 rounded-lg p-3">
              <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-[20px]">error</span>
              <p className="text-red-700 dark:text-red-300 text-sm font-medium leading-normal">{error}</p>
            </div>
          </div>
        )}
        
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-8 py-6">
          {/* Email Field */}
          <label className="flex flex-col gap-1.5 w-full">
            <p className="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal">Email Address</p>
            <div className="relative">
              <input 
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="form-input flex w-full rounded-lg border border-[#cfdbe7] dark:border-slate-600 bg-slate-50 dark:bg-[#101922] text-[#0d141b] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 pl-11 text-base placeholder:text-[#4c739a] dark:placeholder:text-slate-500 transition-colors" 
                placeholder="john@example.com" 
                type="text" 
              />
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4c739a] dark:text-slate-500 text-[20px]">mail</span>
            </div>
          </label>
          
          {/* Password Field */}
          <label className="flex flex-col gap-1.5 w-full">
            <div className="flex justify-between items-center">
              <p className="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal">Password</p>
              <a className="text-primary hover:text-blue-600 text-sm font-medium" href="#">Forgot password?</a>
            </div>
            <div className="relative">
              <input 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="form-input flex w-full rounded-lg border border-[#cfdbe7] dark:border-slate-600 bg-slate-50 dark:bg-[#101922] text-[#0d141b] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 pl-11 text-base placeholder:text-[#4c739a] dark:placeholder:text-slate-500 transition-colors" 
                placeholder="Enter your password" 
                type="password" 
              />
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4c739a] dark:text-slate-500 text-[20px]">key</span>
            </div>
          </label>
          
          {/* Login Button */}
          <button 
            type="submit"
            disabled={isLoading}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary hover:bg-blue-600 dark:hover:bg-blue-500 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors mt-2 shadow-sm shadow-blue-500/20 disabled:opacity-70"
          >
            <span className="truncate">{isLoading ? 'Logging in...' : 'Login'}</span>
          </button>
        </form>
        
        {/* Footer Section */}
        <div className="px-8 pb-8 pt-2 text-center">
          <p className="text-[#4c739a] dark:text-slate-400 text-sm">
            Don't have an account? 
            <Link className="text-primary hover:text-blue-600 dark:hover:text-blue-400 font-semibold ml-1" to="/register">Register</Link>
          </p>
        </div>
      </div>
      
      {/* Bottom copyright/meta */}
      <div className="mt-8 text-[#4c739a] dark:text-slate-500 text-xs text-center">
        &copy; {new Date().getFullYear()} RentalMarket. All rights reserved.
      </div>
    </div>
  );
};

export default Login;
