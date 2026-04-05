import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function ExpertiseSection() {
  const { isDark } = useTheme();

  return (
    <section className={`relative overflow-hidden py-24 px-6 sm:px-12 lg:px-16 transition-colors duration-700 ${isDark ? 'bg-[#0d0d0d]' : 'bg-[#f4f2ff]'}`}>

      {/* Background Grid Lines (5 Lines) */}
      <div className="absolute inset-0 pointer-events-none flex justify-evenly z-0">
        <div className={`w-px h-full ${isDark ? 'bg-white-[0.04] bg-white/5' : 'bg-black/5'}`}></div>
        <div className={`w-px h-full ${isDark ? 'bg-white-[0.04] bg-white/5' : 'bg-black/5'}`}></div>
        <div className={`w-px h-full ${isDark ? 'bg-white-[0.04] bg-white/5' : 'bg-black/5'}`}></div>
        <div className={`w-px h-full ${isDark ? 'bg-white-[0.04] bg-white/5' : 'bg-black/5'}`}></div>
        <div className={`w-px h-full ${isDark ? 'bg-white-[0.04] bg-white/5' : 'bg-black/5'}`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* ─── Left Column — Corner Cropped Image Collage ─── */}
        <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[650px] mt-8 lg:mt-0">

          {/* Main Background Image */}
          <div className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden shadow-lg z-0">
            <img src="https://picsum.photos/1000/1200?random=10" alt="Team Work" className="w-full h-full object-cover" />
          </div>

          {/* Mask Wrapper for Top-Left Card (அகலம் மற்றும் இடத்தை சரிசெய்துள்ளேன்) */}
          <div className={`absolute -top-5 -left-5 lg:-top-8 lg:-left-8 w-[85%] lg:w-[540px] z-10 pr-5 pb-5 rounded-br-[2.5rem] transition-colors duration-700 ${isDark ? 'bg-[#0d0d0d]' : 'bg-[#f4f2ff]'}`}>

            {/* Inner Text Card */}
            <div className={`w-full min-h-[270px] rounded-[1.75rem] p-8 flex flex-col justify-center transition-all duration-300 relative z-20 ${isDark ? 'bg-[#151515] border border-white/5 shadow-[0_0_30px_rgba(200,42,239,0.15)] shadow-[#c82aef]/20' : 'bg-[#faf8ff] border border-white shadow-[0_15px_40px_rgba(200,42,239,0.1)] shadow-purple-500/10'}`}>
              <h3 className={`text-[1.75rem] sm:text-[2rem] lg:text-[2.2rem] font-bold tracking-tight leading-[1.25] mb-5 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
                Ready to Elevate Your<br />Digital Presence?
              </h3>
              <p className={`text-[15px] sm:text-[16px] mb-8 max-w-[260px] leading-[1.65] font-medium ${isDark ? 'text-[#8a8a8a]' : 'text-[#5a5a6e]'}`}>
                Let's create a custom strategy that fits your business goals.
              </p>
              <a href="#contact" className="text-[15px] font-bold text-[#c82aef] hover:text-[#ae15d4] flex items-center gap-2.5 group w-max transition-colors">
                Get Free Consultation
                <span className="flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#c82aef] text-white transition-transform group-hover:scale-110 shadow-lg shadow-purple-500/30">
                  <svg className="w-3.5 h-3.5 ml-0.5" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </a>
            </div>

          </div>
        </div>

        {/* ─── Right Column — Content ─── */}
        <div className={`flex flex-col justify-center pl-0 lg:pl-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 rounded-full border-2 border-[#c82aef] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#c82aef]" />
            </div>
            <span className={`text-[12px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-200' : 'bg-[#3851ff] text-white px-3 py-1 rounded-sm'}`}>
              Our Expertise
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight mb-6">
            <div className={`truncate-none ${isDark ? 'text-white' : 'text-gray-900'}`}>Data Driven Strategies,</div>
            <div className={isDark ? 'text-gray-500' : 'text-gray-600'}>Measurable Results</div>
          </h2>

          {/* Description */}
          <p className={`text-[15px] sm:text-base leading-relaxed mb-10 max-w-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            At Fyd Marketing, we specialize in crafting innovative digital marketing strategies that drive real
            business growth. Our expertise ensures your brand stays ahead in the competitive
            digital landscape.
          </p>

          <h3 className="text-lg font-bold mb-6 tracking-tight">What We Do Best</h3>

          {/* Bottom Section (Responsive Flexbox சரிசெய்யப்பட்டுள்ளது) */}
          <div className="flex flex-col xl:flex-row gap-8 lg:gap-10 items-start mt-2">

            {/* Checklist */}
            <ul className="space-y-4 shrink-0 mt-1 min-w-[200px]">
              {['Performance Marketing', 'Social Media Growth', 'Content Marketing', 'PPC & Paid Ads', 'Brand Strategy', 'Conversion Optimization'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[1.5px] border-[#c82aef] text-[#c82aef]">
                    <svg className="w-[10px] h-[10px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className={`text-[13px] sm:text-[14px] font-semibold tracking-wide ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{item}</span>
                </li>
              ))}
            </ul>

            {/* Years of Experience Card */}
            <div className={`p-8 rounded-[1.75rem] transition-all duration-300 w-full lg:w-[380px] min-h-[280px] flex flex-col justify-center shrink-0 relative ${isDark ? 'bg-[#151515] border border-white/5 shadow-[20px_0_50px_-15px_rgba(200,42,239,0.3)] shadow-[#c82aef]/20' : 'bg-gradient-to-br from-[#ead5ff] via-[#f4f0f9] to-[#f8f7f9] border border-white shadow-[0_10px_40px_rgba(200,42,239,0.15)] shadow-[#c82aef]/20'}`}>
              <div className="flex items-center gap-5 mb-5">
                <div
                  className="font-medium tracking-tight flex items-center shrink-0"
                  style={{
                    WebkitTextStroke: '1.5px #c82aef',
                    color: 'transparent',
                    lineHeight: '1',
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  <span style={{ fontSize: '4.5rem' }}>21</span>
                  <span style={{ fontSize: '3.2rem', marginTop: '0.2rem', marginLeft: '2px' }}>+</span>
                </div>
                <div className={`text-[15px] sm:text-[16px] font-bold leading-[1.4] pt-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Years of Experience on<br />
                  Digital Marketing<br />
                  Services
                </div>
              </div>
              <p className={`text-[14px] sm:text-[15px] leading-[1.65] ${isDark ? 'text-[#888888] font-medium' : 'text-gray-600'}`}>
                Lorem ipsum dolor sit amet consectetur<br />
                adipiscing elit in ex ligula varius at rutrum et<br />
                finibus sed felis quisque.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}