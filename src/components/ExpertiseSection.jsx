import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ExpertiseSection() {
  const { isDark } = useTheme();

  return (
    <section className={`py-20 px-6 sm:px-12 lg:px-16 transition-colors duration-700 ${isDark ? 'bg-[#0d0d0d]' : 'bg-[#f4f2ff]'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column — Image Collage */}
        <div className="h-[600px] sm:h-[650px] grid grid-cols-12 grid-rows-12 gap-4">
          
          {/* Card 1: Purple Box */}
          <div className="relative z-10 col-span-7 row-span-6 rounded-[2rem] bg-[#f9f1ff] p-6 sm:p-8 flex flex-col justify-center border border-white/60 shadow-xl shadow-purple-500/10">
            <h3 className="text-xl sm:text-[1.35rem] font-bold tracking-tight text-gray-900 leading-snug mb-3">
              Ready to Elevate Your<br />Digital Presence?
            </h3>
            <p className="text-sm text-gray-600 mb-8 max-w-[200px] leading-relaxed">
              Let's create a custom strategy that fits your business goals.
            </p>
            <a href="#contact" className="text-sm font-bold text-[#c82aef] hover:text-purple-700 flex items-center gap-2 group w-max">
              Get Free Consultation
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#c82aef] text-white group-hover:scale-110 transition-transform">
                <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </a>
          </div>

          {/* Image 1: Tall Top Right */}
          <div className="col-span-5 row-span-7 rounded-[2rem] overflow-hidden shadow-lg z-0">
            <img src="https://picsum.photos/400/600?random=1" alt="Creative Strategy" className="w-full h-full object-cover" />
          </div>

          {/* Image 2: Wide Bottom Left */}
          <div className="col-span-8 row-span-6 rounded-[2rem] overflow-hidden shadow-lg -mt-4 z-20">
            <img src="https://picsum.photos/600/400?random=2" alt="Team Meeting" className="w-full h-full object-cover" />
          </div>

          {/* Image 3: Small Bottom Right */}
          <div className="col-span-4 row-span-5 rounded-[2rem] overflow-hidden shadow-lg -mt-4 z-10">
            <img src="https://picsum.photos/300/300?random=3" alt="Analyzing Data" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Column — Content */}
        <div className={`flex flex-col justify-center pl-0 lg:pl-10 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 rounded-full border-2 border-[#c82aef] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#c82aef]" />
            </div>
            <span className="bg-[#3851ff] text-white text-[11px] font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
              Our Expertise
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight mb-6">
            Data Driven Strategies,<br />Measurable Results
          </h2>

          {/* Description */}
          <p className={`text-[15px] sm:text-base leading-relaxed mb-10 max-w-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            At Fyd Marketing, we specialize in crafting innovative digital marketing strategies that drive real
            business growth. Our expertise ensures your brand stays ahead in the competitive
            digital landscape.
          </p>

          <h3 className="text-lg font-bold mb-6 tracking-tight">What We Do Best</h3>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-10 items-start">
            
            {/* Checklist */}
            <ul className="space-y-4 shrink-0 mt-1">
              {['Performance Marketing', 'Social Media Growth', 'Content Marketing', 'PPC & Paid Ads', 'Brand Strategy', 'Conversion Optimization'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[1.5px] border-[#c82aef] text-[#c82aef]">
                    <svg className="w-[10px] h-[10px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className={`text-[13px] font-semibold tracking-wide ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{item}</span>
                </li>
              ))}
            </ul>

            {/* Years of Experience Card */}
            <div className={`p-6 rounded-3xl border transition-colors duration-300 max-w-[280px] ${isDark ? 'bg-purple-900/10 border-[#c82aef]/30' : 'bg-[#fcf5ff] border-[#f6e5fc] shadow-sm'}`}>
              <div className="flex items-start gap-4 mb-4">
                <span 
                  className="text-6xl font-bold"
                  style={{ 
                    WebkitTextStroke: '2px #c82aef', 
                    color: 'transparent',
                    lineHeight: '0.8'
                  }}
                >
                  21+
                </span>
                <span className="text-sm font-bold leading-snug mt-1">
                  Years of Experience on Digital Marketing Services
                </span>
              </div>
              <p className={`text-[13px] leading-relaxed mt-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit in ex ligula varius at rutrum et 
                finibus sed felis quisque.
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
