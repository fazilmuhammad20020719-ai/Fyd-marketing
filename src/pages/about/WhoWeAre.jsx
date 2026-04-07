import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function WhoWeAre() {
  const { isDark } = useTheme();

  const services = [
    { label: 'PPC & Paid Ads', col: 1 },
    { label: 'Performance Marketing', col: 2 },
    { label: 'Brand Strategy', col: 1 },
    { label: 'Social Media Growth', col: 2 },
    { label: 'Conversion Optimization', col: 1 },
    { label: 'Content Marketing', col: 2 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ─── Left Column — Corner Cropped Image Collage ─── */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[520px] mt-8 lg:mt-0">

          {/* Main Background Image */}
          <div className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden shadow-lg z-0">
            <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop" alt="Office Desk" className="w-full h-full object-cover" />
          </div>

          {/* Mask Wrapper for Top-Left Card */}
          <div className={`absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-[85%] sm:w-[75%] lg:w-[320px] z-10 pr-4 pb-4 rounded-br-[2.5rem] transition-colors duration-700 ${isDark ? 'bg-[#0d0d0d]' : 'bg-[#f8f7ff]'}`}>

            {/* Inner Experience Card */}
            <div
              className={`animate-float w-full min-h-[130px] rounded-[1.5rem] p-5 sm:p-6 flex items-center gap-4 transition-all duration-300 relative z-20 ${
                isDark
                  ? 'bg-[#151515] border border-white/5 shadow-[0_0_30px_rgba(200,42,239,0.15)] shadow-[#c82aef]/20'
                  : 'bg-[#faf8ff] border border-white shadow-[0_15px_40px_rgba(200,42,239,0.1)] shadow-purple-500/10'
              }`}
            >
              <div
                className="font-medium tracking-tight flex items-center shrink-0"
                style={{
                  WebkitTextStroke: '1.2px #c82aef',
                  color: 'transparent',
                  lineHeight: '1',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <span style={{ fontSize: '2.8rem' }}>21</span>
                <span style={{ fontSize: '1.8rem', marginTop: '0.12rem', marginLeft: '2px' }}>+</span>
              </div>
              <div
                className={`text-[13px] sm:text-[14px] font-bold leading-[1.4] ${
                  isDark ? 'text-white' : 'text-[#0a0a1a]'
                }`}
              >
                Years of Experience on
                <br />
                Digital Marketing
                <br />
                Services
              </div>
            </div>
            
          </div>
        </div>

        {/* ─── Right Column — Content ─── */}
        <div className={`flex flex-col justify-center ${isDark ? 'text-white' : 'text-gray-900'}`}>

          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-5 h-5 rounded-full border-2 border-[#c82aef] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#c82aef]" />
            </div>
            <span
              className={`text-[12px] font-bold uppercase tracking-wider ${
                isDark
                  ? 'text-gray-200'
                  : 'bg-[#3851ff] text-white px-3 py-1 rounded-sm'
              }`}
            >
              About Us
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-6">
            <span className={isDark ? 'text-white' : 'text-gray-900'}>
              Who We Are &amp;
            </span>
            <br />
            <span className={isDark ? 'text-gray-500' : 'text-gray-500'}>
              What Drives Us
            </span>
          </h2>

          {/* Description */}
          <p
            className={`text-[14px] sm:text-[15px] leading-relaxed mb-4 max-w-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            At Fyd Marketing, we specialize in crafting innovative digital marketing
            strategies that drive real business growth. Our about ensures your brand
            stays ahead in the competitive digital landscape.
          </p>

          <p
            className={`text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Get to know the passionate team behind the strategies, the values that
            guide us, and the mission that fuels our growth.
          </p>

          {/* Services Checklist — 2 Columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {services.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[1.5px] border-[#c82aef] text-[#c82aef] shrink-0">
                  <svg
                    className="w-[10px] h-[10px]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span
                  className={`text-[13px] sm:text-[14px] font-semibold tracking-wide ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
