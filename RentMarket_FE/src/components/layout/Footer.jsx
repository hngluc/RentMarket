const Footer = () => {
  return (
    <footer className="w-full bg-[#f6f7f8] dark:bg-[#101922] border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-200 mt-auto">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} RentalMarket, Inc. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a className="hover:text-primary transition-colors cursor-pointer">Privacy</a>
          <a className="hover:text-primary transition-colors cursor-pointer">Terms</a>
          <a className="hover:text-primary transition-colors cursor-pointer">Sitemap</a>
        </div>
        <div className="flex gap-4 text-gray-500 dark:text-gray-400">
          <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">language</span>
          <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">attach_money</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
