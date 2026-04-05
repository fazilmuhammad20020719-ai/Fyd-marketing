import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function BannerSection() {
  const { isDark } = useTheme();

  return (
    <section className="relative w-full overflow-hidden min-h-[400px] sm:min-h-[450px] flex items-center group my-12 py-16">
        
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('https://picsum.photos/1400/600?random=22')" }}
        />

        {/* Gradient Overlays */}
        <div className={`absolute inset-0 z-0 transition-colors duration-500 ${
          isDark 
            ? 'bg-gradient-to-r from-[#120a1f]/95 via-[#1a1122]/90 to-[#231533]/80' 
            : 'bg-gradient-to-r from-[#fdfbffe6] via-[#eee2fad9] to-[#e8d1ffbf] backdrop-blur-[2px]'
        }`} />
        
        {/* Inner Constraints for Alignment */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl">
          
          {/* Play Button Row */}
          <div className="flex items-center gap-5 mb-8">
            <button className={`w-[52px] h-[52px] rounded-full flex items-center justify-center shrink-0 border-2 transition-transform hover:scale-110 shadow-lg ${
              isDark 
                ? 'bg-[#151515] border-[#c82aef] text-[#c82aef] shadow-[#c82aef]/20' 
                : 'bg-white border-[#c82aef] text-[#0a0a1a] shadow-[0_10px_20px_rgba(200,42,239,0.2)]'
            }`}>
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </button>
            <span className={`text-[12px] sm:text-[13px] font-bold leading-snug max-w-[120px] ${isDark ? 'text-gray-300' : 'text-[#0a0a1a]'}`}>
              See How We<br />Help Brands<br />Grow
            </span>
          </div>

          {/* Heading */}
          <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.1] mb-5 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
            Transform Your Business with Fyd Marketing!
          </h2>

          {/* Description text */}
          <p className={`text-[14px] sm:text-[15px] leading-relaxed max-w-xl font-medium ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>
            Take your digital marketing to the next level with data-driven strategies and innovative solutions.<br className="hidden sm:block" />
            Let's create something amazing together!
          </p>

        </div>
      </div>
    </section>
  );
}
