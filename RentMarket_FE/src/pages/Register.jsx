import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/authService';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      await register({
        username: formData.username,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email
      });
      
      setSuccess('Account created successfully!');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-display">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-10 py-3 bg-white dark:bg-[#1a2632]">
        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined">handshake</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] group-hover:text-primary transition-colors">RentalMarket</h2>
          </Link>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="hidden md:flex items-center gap-9">
            <Link to="/" className="text-slate-900 dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors">Home</Link>
          </div>
          <Link to="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
            <span className="truncate">Login</span>
          </Link>
        </div>
      </header>

      <div className="flex h-full grow flex-col items-center justify-center py-10 px-4 sm:px-10">
        <div className="w-full max-w-[480px] flex flex-col gap-6 bg-white dark:bg-[#1a2632] p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
          
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Create an Account</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Sign up to join our community.</p>
          </div>

          {success ? (
            <div className="text-center py-6">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <p className="text-slate-900 dark:text-white font-medium">{success}</p>
              <p className="text-slate-500 text-sm mt-2">Redirecting to login...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-sm rounded-lg p-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">error</span>
                  <span>{error}</span>
                </div>
              )}

              <div className="flex gap-4">
                <label className="flex flex-col flex-1">
                  <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">First Name</span>
                  <input name="firstName" value={formData.firstName} onChange={handleChange} required type="text" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 p-4 text-sm font-normal leading-normal transition-all" placeholder="First" />
                </label>
                <label className="flex flex-col flex-1">
                  <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">Last Name</span>
                  <input name="lastName" value={formData.lastName} onChange={handleChange} required type="text" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 p-4 text-sm font-normal leading-normal transition-all" placeholder="Last" />
                </label>
              </div>

              <label className="flex flex-col w-full">
                <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">Username</span>
                <div className="relative">
                  <input name="username" value={formData.username} onChange={handleChange} required type="text" minLength={3} maxLength={20} className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 p-4 pr-10 text-sm font-normal leading-normal transition-all" placeholder="Choose a username (3-20 characters)" />
                  <span className="material-symbols-outlined absolute right-3 top-3 text-slate-400 pointer-events-none text-xl">person</span>
                </div>
              </label>

              <label className="flex flex-col w-full">
                <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">Email Address</span>
                <div className="relative">
                  <input name="email" value={formData.email} onChange={handleChange} required type="email" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 p-4 pr-10 text-sm font-normal leading-normal transition-all" placeholder="name@company.com" />
                  <span className="material-symbols-outlined absolute right-3 top-3 text-slate-400 pointer-events-none text-xl">mail</span>
                </div>
              </label>

              <label className="flex flex-col w-full">
                <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">Password</span>
                <div className="relative">
                  <input name="password" value={formData.password} onChange={handleChange} required type="password" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 p-4 pr-10 text-sm font-normal leading-normal transition-all" placeholder="Create a password" />
                </div>
              </label>

              <label className="flex flex-col w-full">
                <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">Confirm Password</span>
                <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required type="password" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 p-4 text-sm font-normal leading-normal transition-all" placeholder="Confirm your password" />
              </label>

              <div className="flex items-start gap-3 py-2">
                <div className="flex items-center h-5">
                  <input id="terms" required type="checkbox" className="w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-primary/30 dark:bg-slate-700 dark:border-slate-600 dark:focus:ring-primary/60 dark:ring-offset-slate-800 text-primary" />
                </div>
                <label htmlFor="terms" className="text-sm font-medium text-slate-900 dark:text-slate-300">
                  I agree with the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </label>
              </div>

              <button type="submit" disabled={isLoading} className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors shadow-sm mt-2 disabled:opacity-70">
                <span className="truncate">{isLoading ? 'Creating Account...' : 'Create Account'}</span>
              </button>

              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-slate-500 dark:text-slate-400 text-sm">Already have an account?</span>
                <Link to="/login" className="text-primary text-sm font-bold hover:underline">Log in</Link>
              </div>
            </form>
          )}

        </div>
        
        <div className="mt-8 text-center text-slate-400 dark:text-slate-600 text-xs">
          <p>&copy; {new Date().getFullYear()} RentalMarket Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
