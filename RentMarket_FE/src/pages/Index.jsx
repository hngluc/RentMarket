import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-white dark:bg-[#1a2632] pb-8 pt-4">
        <div className="mx-auto max-w-[1280px] px-4 md:px-10">
          <div 
            className="relative overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat min-h-[500px] flex flex-col items-center justify-center p-6 text-center shadow-md" 
            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRdhV_1MkercPPF9Hc0JIC5DlOhRFBw5pMr89Q_rLEUEC2a7Ttgqtg7HZS8t7ZwmsVGBkhA_LGlM_Gs_YvfwTuZBN8ZWowCAb-foNM6YEL81N8DP-RgE5_04SNjFR7gtBSNZWfOxqNEzLiRawPTM0x3utgQgD4Kxr1gPRU6R7DsJB0xPQyF26p56IfQh3Qz6Hc5ZGGd2TDSMwduo4xX1d9461g2wN8QyWibGmpGWe-EOFdq1HNHmQv8xEfWM9m_GQ_y0gbnR8IEz0")' }}
          >
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] mb-4 drop-shadow-lg">
              Rent anything, anywhere
            </h1>
            <h2 className="text-gray-200 text-lg md:text-xl font-medium mb-10 max-w-2xl drop-shadow-md">
              Connect with locals to find unique gear for your next project or adventure.
            </h2>
            
            {/* Search Bar Component */}
            <div className="bg-white dark:bg-[#23303e] p-2 rounded-full shadow-xl flex flex-col md:flex-row items-center w-full max-w-4xl border border-gray-100 dark:border-gray-700">
              {/* Location Input */}
              <div className="flex-1 w-full px-6 py-3 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#2a3a4a] rounded-full transition-colors group cursor-pointer relative">
                <label className="text-xs font-bold text-gray-800 dark:text-white block uppercase tracking-wider mb-1 text-left">Where</label>
                <input className="w-full bg-transparent border-none p-0 text-sm text-gray-600 dark:text-gray-300 focus:ring-0 placeholder:text-gray-400 font-medium outline-none" placeholder="Search destinations" type="text" />
              </div>
              
              {/* Date Input */}
              <div className="flex-1 w-full px-6 py-3 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#2a3a4a] rounded-full transition-colors group cursor-pointer">
                <label className="text-xs font-bold text-gray-800 dark:text-white block uppercase tracking-wider mb-1 text-left">Dates</label>
                <input className="w-full bg-transparent border-none p-0 text-sm text-gray-600 dark:text-gray-300 focus:ring-0 placeholder:text-gray-400 font-medium outline-none" placeholder="Add dates" type="text" />
              </div>
              
              {/* Category Input */}
              <div className="flex-1 w-full px-6 py-3 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#2a3a4a] rounded-full transition-colors group cursor-pointer">
                <label className="text-xs font-bold text-gray-800 dark:text-white block uppercase tracking-wider mb-1 text-left">Category</label>
                <select className="w-full bg-transparent border-none p-0 text-sm text-gray-600 dark:text-gray-300 focus:ring-0 font-medium cursor-pointer outline-none appearance-none">
                  <option>All items</option>
                  <option>Cameras</option>
                  <option>Drones</option>
                  <option>Bikes</option>
                  <option>Camping</option>
                </select>
              </div>
              
              {/* Search Button */}
              <div className="p-2 w-full md:w-auto flex">
                <button className="w-full md:w-auto bg-primary hover:bg-blue-600 text-white rounded-full p-4 flex items-center justify-center gap-2 shadow-md transition-all hover:scale-105 cursor-pointer">
                  <span className="material-symbols-outlined">search</span>
                  <span className="md:hidden font-bold">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Scroller */}
      <div className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a2632]">
        <div className="mx-auto max-w-[1280px] px-4 md:px-10 py-6 overflow-x-auto">
          <div className="flex gap-8 min-w-max">
            <button className="flex flex-col items-center gap-2 group min-w-[64px] pb-2 border-b-2 border-primary cursor-pointer transition-all">
              <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">photo_camera</span>
              <span className="text-xs font-semibold text-primary">Photography</span>
            </button>
            <button className="flex flex-col items-center gap-2 group min-w-[64px] opacity-60 hover:opacity-100 pb-2 border-b-2 border-transparent hover:border-gray-300 cursor-pointer transition-all">
              <span className="material-symbols-outlined text-3xl text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform">pedal_bike</span>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Bikes</span>
            </button>
            <button className="flex flex-col items-center gap-2 group min-w-[64px] opacity-60 hover:opacity-100 pb-2 border-b-2 border-transparent hover:border-gray-300 cursor-pointer transition-all">
              <span className="material-symbols-outlined text-3xl text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform">camping</span>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Camping</span>
            </button>
            <button className="flex flex-col items-center gap-2 group min-w-[64px] opacity-60 hover:opacity-100 pb-2 border-b-2 border-transparent hover:border-gray-300 cursor-pointer transition-all">
              <span className="material-symbols-outlined text-3xl text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform">surfing</span>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Water Sports</span>
            </button>
            <button className="flex flex-col items-center gap-2 group min-w-[64px] opacity-60 hover:opacity-100 pb-2 border-b-2 border-transparent hover:border-gray-300 cursor-pointer transition-all">
              <span className="material-symbols-outlined text-3xl text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform">flight</span>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Drones</span>
            </button>
            <button className="flex flex-col items-center gap-2 group min-w-[64px] opacity-60 hover:opacity-100 pb-2 border-b-2 border-transparent hover:border-gray-300 cursor-pointer transition-all">
              <span className="material-symbols-outlined text-3xl text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform">piano</span>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Music</span>
            </button>
            <button className="flex flex-col items-center gap-2 group min-w-[64px] opacity-60 hover:opacity-100 pb-2 border-b-2 border-transparent hover:border-gray-300 cursor-pointer transition-all">
              <span className="material-symbols-outlined text-3xl text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform">tools_wrench</span>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Tools</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="mx-auto max-w-[1280px] w-full px-4 md:px-10 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#0d141b] dark:text-white text-2xl font-bold leading-tight">Featured Rentals</h2>
          <Link to="#" className="text-primary font-medium hover:underline flex items-center gap-1">
            View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group flex flex-col bg-white dark:bg-[#1a2632] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 cursor-pointer">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1RTp0jUkzFGXYexPsYxs_NTPyKjGFk8i0jAolJH14AAlA4tumfOOkoo0_NHzp_a0VpZs5CnC8OsNO1KXF_SLQpHtgMp2DeurNB1b1VaU6hE668aILfFTzPfHkaqqZb1FNPrDFpHfP2hAH2nMgD4zbhJlDciVcu3csRP82_eNw73cJktDmFOZs6Od1hErTI0DQGJSwkPYLRm13h3EhqdTW5DCkXF2z156PKqf6L8Hecbhvse3VMSvRUb9RbQwRvOgeHchJV_xZW3o")' }}
              ></div>
              <div className="absolute top-3 right-3">
                <button className="p-2 rounded-full bg-white/80 dark:bg-black/50 text-gray-700 dark:text-white hover:bg-white dark:hover:bg-black transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 rounded bg-white/90 dark:bg-black/70 text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-white">Superhost</span>
              </div>
            </div>
            <div className="flex flex-col p-4 gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">Sony A7III Kit</h3>
                <div className="flex items-center gap-1 text-sm bg-gray-50 dark:bg-gray-800 px-1 rounded">
                  <span className="material-symbols-outlined text-yellow-500 text-[16px] fill-current">star</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">4.95</span>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-1">Includes 24-70mm GM Lens</p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-bold text-gray-900 dark:text-white text-lg">$65</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">/ day</span>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="group flex flex-col bg-white dark:bg-[#1a2632] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 cursor-pointer">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmxZOE6sCGJKEqN2pBa6abc56HqHFbT0cjVS8D-ckXzUWo5Fzr_7XTWjJA1byfQ6ZUE8qrQV1vzh3uzp7UwX8YIb_EzlPIVRKgib3KuRsIT60IOD5Q2jynnTegHPASMkoBPPpdwgMJY5TxcFcCMiPxhYD6WDpPC8IabltJ7KmlUPz0L8mdiSBqmaTQXsAdJ-FTgMUYUdYwg6q-qgyN8-qrY4ZgiMH43Fy8An042SvzM_iv2vcXd49AZV0ae6zGbuHpFBh5JLOihVY")' }}
              ></div>
              <div className="absolute top-3 right-3">
                <button className="p-2 rounded-full bg-white/80 dark:bg-black/50 text-gray-700 dark:text-white hover:bg-white dark:hover:bg-black transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col p-4 gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">Trek Fuel EX 8</h3>
                <div className="flex items-center gap-1 text-sm bg-gray-50 dark:bg-gray-800 px-1 rounded">
                  <span className="material-symbols-outlined text-yellow-500 text-[16px] fill-current">star</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">4.8</span>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-1">Size M, Full suspension</p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-bold text-gray-900 dark:text-white text-lg">$45</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">/ day</span>
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="group flex flex-col bg-white dark:bg-[#1a2632] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 cursor-pointer">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4hxfF9I911VDQ1aPPkL1m9KPMfKJGtKstqwT9Y2AdyZ9i4KVb19s-Ao1jjEnQZFnamqEyeVDcy2LVm-2ix2SzokOl16wPu8GkOgYzfM4p8By6WgZnIg9eIKBsfFBDQyEcMO72HcHLTtggLaUTuqSRUsPlRe9GQH1ri8zw2ZO6a2k0Z3Bdg7TAgr6p5ZnWqhWdnuz5QOwxIHy5atwBwXjAuznmqvAs6Oxi1oYo4p8t0A9e8akdA_6BQBpSi2rVBs8ngpQIjkwaCUQ")' }}
              ></div>
              <div className="absolute top-3 right-3">
                <button className="p-2 rounded-full bg-white/80 dark:bg-black/50 text-gray-700 dark:text-white hover:bg-white dark:hover:bg-black transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col p-4 gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">DJI Mavic Air 2</h3>
                <div className="flex items-center gap-1 text-sm bg-gray-50 dark:bg-gray-800 px-1 rounded">
                  <span className="material-symbols-outlined text-yellow-500 text-[16px] fill-current">star</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">5.0</span>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-1">Fly More Combo, 3 batteries</p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-bold text-gray-900 dark:text-white text-lg">$55</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">/ day</span>
              </div>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="group flex flex-col bg-white dark:bg-[#1a2632] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 cursor-pointer">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-yZD1itH-UBXJyWSiX3rrzcMctCgdawRob2G3170fbGZL84QEiDE9aC2W0ZES2j2fkx2tk8aCnlInKdVixb2TAEUBlPxds2lbWHTLa4QakmKG6hrxATdhFqGUgtLia5iXuFZpqzJGdcvFjf5TdIJ0nY3ZI95cXfl8Dbt-OOkeQ7NGmfQWlHrdjl29VwljoOsYGTMxfO0U1zMefHVh0Fnu6b5prO_CBoT6Thua8P96EzMzY9i-2ZqOCjBNCqXZAUAf7vDXtZ_fSGc")' }}
              ></div>
              <div className="absolute top-3 right-3">
                <button className="p-2 rounded-full bg-white/80 dark:bg-black/50 text-gray-700 dark:text-white hover:bg-white dark:hover:bg-black transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 rounded bg-white/90 dark:bg-black/70 text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-white">Popular</span>
              </div>
            </div>
            <div className="flex flex-col p-4 gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">North Face Tent</h3>
                <div className="flex items-center gap-1 text-sm bg-gray-50 dark:bg-gray-800 px-1 rounded">
                  <span className="material-symbols-outlined text-yellow-500 text-[16px] fill-current">star</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">4.9</span>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-1">4-Person, Weatherproof</p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-bold text-gray-900 dark:text-white text-lg">$30</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">/ day</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works Section */}
      <div className="w-full bg-white dark:bg-[#1a2632] py-16 border-t border-gray-100 dark:border-gray-800">
        <div className="mx-auto max-w-[1280px] px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight text-[#0d141b] dark:text-white mb-4">How RentalMarket Works</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Start earning from your idle items or find exactly what you need for a fraction of the cost.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background-light dark:bg-[#23303e]">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">search</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d141b] dark:text-white">Find</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Browse thousands of unique items from verified locals in your area or destination.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background-light dark:bg-[#23303e]">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">calendar_month</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d141b] dark:text-white">Book</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Select your dates, message the host, and securely book through our platform.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background-light dark:bg-[#23303e]">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">sentiment_satisfied</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d141b] dark:text-white">Enjoy</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Pick up your item, enjoy your adventure, and return it. It's that simple!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="w-full bg-primary py-20 mt-auto">
        <div className="mx-auto max-w-[1280px] px-4 md:px-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to start earning?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Join thousands of hosts sharing their gear and making extra income securely.</p>
          <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors text-lg cursor-pointer">
            Become a Host
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
