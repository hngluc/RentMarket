import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Lắng nghe sự thay đổi của route (ví dụ vừa navigate từ /login về /) để cập nhật lại state token
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] dark:border-gray-800 bg-white dark:bg-[#1a2632] px-10 py-3 shadow-sm transition-colors duration-200">
      <div className="flex items-center gap-4 text-[#0d141b] dark:text-white">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">handshake</span>
          </div>
          <h2 className="text-[#0d141b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] group-hover:text-primary transition-colors">RentalMarket</h2>
        </Link>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        <nav className="hidden md:flex items-center gap-8">
          <Link to="#" className="text-[#0d141b] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors">Become a Host</Link>
          <Link to="#" className="text-[#0d141b] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors">Trips</Link>
          <Link to="#" className="text-[#0d141b] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors relative">
            Messages
            <span className="absolute -top-1 -right-2 size-2 rounded-full bg-red-500 hidden"></span>
          </Link>
        </nav>

        <div className="flex gap-3 items-center border-l pl-4 md:border-none md:pl-0 border-[#e7edf3] dark:border-gray-800">
          {token ? (
            <div className="flex gap-3 items-center">
              <button className="relative flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#f0f4f8] dark:bg-[#2a3a4a] text-[#0d141b] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                <span className="absolute top-2.5 right-2.5 size-2 rounded-full bg-red-500 border border-white dark:border-[#2a3a4a]"></span>
              </button>
              
              <button 
                onClick={handleLogout}
                className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 text-sm font-bold leading-normal tracking-[0.015em] transition-colors border border-red-200 dark:border-red-900/50"
              >
                <span className="material-symbols-outlined mr-1.5 text-[18px]">logout</span>
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/register" className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm">
                <span className="truncate">Sign Up</span>
              </Link>
              <Link to="/login" className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-background-light dark:bg-gray-800 text-[#0d141b] dark:text-white hover:border-gray-300 dark:hover:bg-gray-700 text-sm font-bold leading-normal tracking-[0.015em] transition-colors border border-transparent dark:border-gray-600">
                <span className="truncate">Log In</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
