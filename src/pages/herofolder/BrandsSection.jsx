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
    <section className="py-12 px-6 sm:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Card Container */}
        <div className={`relative p-8 sm:p-12 lg:p-16 rounded-[2rem] transition-colors duration-700 border overflow-hidden z-10 ${
          isDark 
            ? 'bg-[#0e0e0e] border-white/[0.06]' 
            : 'bg-gradient-to-br from-[#f8f5ff] via-[#ffffff] to-[#faf8ff] border-[#c82aef]/10 shadow-[0_20px_50px_rgba(200,42,239,0.08)]'
        }`}>
          
          {/* Top Center Purple Glow */}
          <div 
            className="absolute pointer-events-none"
            style={{
              top: '-120px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '300px',
              background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.15) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          ></div>

          {/* Vertical Grid Lines */}
          {isDark && (
            <div className="absolute inset-0 pointer-events-none z-0">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 w-px"
                  style={{
                    left: `${(i / 6) * 100}%`,
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.04) 70%, transparent 100%)',
                  }}
                />
              ))}
            </div>
          )}

          {/* Header Row */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-16 mb-12">
            <h2 className="text-[2rem] sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.1] md:max-w-md lg:max-w-lg shrink-0">
              <span className={isDark ? 'text-white/80' : 'text-[#0a0a1a]'}>Powering </span>
              <span className={isDark ? 'text-white' : 'text-[#0a0a1a]'}>Success </span>
              <span className={isDark ? 'text-white/30' : 'text-[#0a0a1a]/40'}>for</span><br />
              <span className={isDark ? 'text-white/30' : 'text-[#0a0a1a]/40'}>Top Brands</span>
            </h2>
            <p className={`text-[15px] sm:text-base md:max-w-md leading-relaxed font-medium ${isDark ? 'text-[#6a6a6a]' : 'text-[#5a5a6e]'}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ligula, varius at rutrum et, finibus sed felis. Quisque eget tincidunt lectus. Sed quis diam sed neque mattis feugiat.
            </p>
          </div>

          {/* Marquee Row */}
          <div className="relative flex overflow-hidden group">
            
            {/* Fade Gradients for ends */}
            <div className={`absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r pointer-events-none ${isDark ? 'from-[#0e0e0e] to-transparent' : 'from-[#fcfbffd6] to-transparent'}`}></div>
            <div className={`absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l pointer-events-none ${isDark ? 'from-[#0e0e0e] to-transparent' : 'from-[#faf8ffd6] to-transparent'}`}></div>

            <div className="flex items-center gap-4 animate-slide-infinite whitespace-nowrap">
              {/* Duplicate the list three times for infinite scrolling */}
              {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
                <div 
                  key={i} 
                  className={`group flex items-center gap-2.5 px-6 py-3.5 rounded-xl transition-all duration-300 ${
                    isDark 
                      ? 'bg-[#161616] border border-white/[0.06] text-white/50 hover:text-white/80 hover:border-white/[0.12] hover:shadow-[0_5px_15px_rgba(255,255,255,0.05)]' 
                      : 'bg-white border border-[#c82aef]/30 shadow-[0_8px_20px_rgba(200,42,239,0.1)] text-gray-700 hover:shadow-[0_12px_30px_rgba(200,42,239,0.25)] hover:text-[#0a0a1a]'
                  }`}
                >
                  <svg className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${isDark ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'drop-shadow-[0_2px_8px_rgba(200,42,239,0.3)] group-hover:drop-shadow-[0_0_10px_rgba(200,42,239,0.6)]'}`} fill="currentColor" viewBox="0 0 24 24">
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
