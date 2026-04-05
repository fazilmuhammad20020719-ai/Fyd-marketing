import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const BRANDS = [
  { name: 'arkon', icon: 'M12 2L2 22h20L12 2z' },
  { name: 'crevox', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  { name: 'Brandex', icon: 'M4 4h16v16H4V4zm4 4v8h8V8H8z' },
  { name: 'bravix', icon: 'M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7z' },
  { name: 'Nexora', icon: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' },
  { name: 'Adsol', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z' },
];

export default function BrandsSection() {
  const { isDark } = useTheme();

  return (
    <section className={`py-12 transition-colors duration-700 ${isDark ? 'bg-[#0d0d0d]' : 'bg-[#f4f2ff]'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Main Card Container */}
        <div className={`p-8 sm:p-12 lg:p-16 rounded-[2rem] transition-colors duration-700 border overflow-hidden ${
          isDark 
            ? 'bg-[#151515] border-white/5 shadow-2xl' 
            : 'bg-gradient-to-br from-[#f8f5ff] via-[#ffffff] to-[#faf8ff] border-gray-100 shadow-[0_20px_50px_rgba(200,42,239,0.05)]'
        }`}>
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-16 mb-12">
            <h2 className={`text-3xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tight leading-[1.1] md:max-w-xs ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
              Powering Success for Top Brands
            </h2>
            <p className={`text-[15px] sm:text-base md:max-w-md leading-relaxed font-medium ${isDark ? 'text-[#8a8a8a]' : 'text-[#5a5a6e]'}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ligula, varius at rutrum et, finibus sed felis. Quisque eget tincidunt lectus. Sed quis diam sed neque mattis feugiat.
            </p>
          </div>

          {/* Marquee Row */}
          <div className="relative flex overflow-hidden group">
            
            {/* Fade Gradients for ends */}
            <div className={`absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r ${isDark ? 'from-[#151515] to-transparent' : 'from-[#fcfbffd6] to-transparent pointer-events-none'}`}></div>
            <div className={`absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l ${isDark ? 'from-[#151515] to-transparent' : 'from-[#faf8ffd6] to-transparent pointer-events-none'}`}></div>

            <div className="flex items-center gap-6 animate-slide-infinite whitespace-nowrap">
              {/* Duplicate the list twice for infinite scrolling */}
              {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
                <div 
                  key={i} 
                  className={`flex items-center gap-2.5 px-6 py-4 rounded-2xl transition-all duration-300 ${
                    isDark 
                      ? 'bg-[#0a0a0a] border border-white/5 text-gray-400 hover:text-white' 
                      : 'bg-white border border-gray-100 shadow-sm text-gray-700 hover:shadow-md hover:text-[#0a0a1a]'
                  }`}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d={brand.icon} />
                  </svg>
                  <span className="font-bold text-[17px] tracking-tight">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
