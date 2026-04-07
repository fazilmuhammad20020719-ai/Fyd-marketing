import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const CARDS = [
  {
    title: 'Data-Driven Approach',
    description: 'Every decision is backed by real-time analytics for maximum impact lorem ipsum dolor sit consectetur adipiscing elit ut elit tellus luctus nec.',
    icon: (
      <svg className="w-10 h-10 text-[#c82aef] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Simple Document/Data Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        <circle cx="15" cy="9" r="3" strokeWidth={1.5} />
      </svg>
    ),
    bgLight: 'bg-gradient-to-br from-[#fcfcff] via-[#f8f8fb] to-[#fae6ff]',
  },
  {
    title: 'Creative & Inovative',
    description: 'Cutting-edge marketing techniques to keep you ahead of the competition lorem ipsum dolor sit awsa consectetur adipiscing elit ut elit.',
    icon: (
      <svg className="w-10 h-10 text-[#c82aef] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Ribbon/Badge Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    bgLight: 'bg-gradient-to-b from-[#eedeff] via-[#fbfbfe] to-[#fbfbfe]',
  },
  {
    title: 'Transparent Reporting',
    description: 'Clear insights and performance tracking, so you always know your ROI lorem ipsum dolo consectetur adipiscing elit ut elit tellus luctus nec.',
    icon: (
      <svg className="w-10 h-10 text-[#c82aef] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Presentation Board Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    bgLight: 'bg-gradient-to-br from-[#fcfcff] via-[#f8f8fb] to-[#fae6ff]',
  }
];

export default function WhyChooseSection() {
  const { isDark } = useTheme();

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-stretch">
        
        {/* ─── Left Column — Cards ─── */}
        <div className="flex flex-col justify-between gap-8 h-full">
          {CARDS.map((card, idx) => (
            <div 
              key={idx} 
              className={`p-8 sm:p-10 rounded-[2rem] flex flex-col sm:flex-row gap-8 items-start transition-colors duration-300 h-full ${
                isDark 
                  ? 'bg-gradient-to-b from-[#151515] to-[#120f16] border border-white/10 shadow-[0_0_20px_rgba(200,42,239,0.05)]' 
                  : `${card.bgLight} border border-[#ecd4ff] shadow-[0_15px_40px_rgba(200,42,239,0.04)]`
              }`}
            >
              {/* Icon Container */}
              <div className={`shrink-0 w-[84px] h-[84px] rounded-2xl flex items-center justify-center relative transition-transform hover:scale-105 duration-300 ${
                isDark 
                  ? 'bg-[#1a1122] border border-[#c82aef]/30' 
                  : 'bg-white/80 backdrop-blur-sm border border-[#ecd4ff] shadow-[0_8px_20px_rgba(200,42,239,0.12)]'
              }`}>
                {/* Subtle Inner Glow */}
                <div className={`absolute inset-0 rounded-2xl blur-xl ${isDark ? 'bg-[#c82aef]/30' : 'bg-[#c82aef]/15'}`}></div>
                {card.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1 mt-1 sm:mt-0">
                <h3 className={`text-[1.35rem] sm:text-[1.5rem] font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
                  {card.title}
                </h3>
                <p className={`text-[15px] sm:text-[15.5px] leading-[1.65] font-medium mb-6 ${isDark ? 'text-[#8a8a8a]' : 'text-[#5a5a6e]'}`}>
                  {card.description}
                </p>
                <a href="#readmore" className="text-[14px] font-bold text-[#c82aef] hover:text-[#ae15d4] flex items-center gap-2 group w-max transition-colors mt-auto">
                  Read More
                  <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#c82aef] text-white transition-transform group-hover:translate-x-1 shadow-md shadow-[#c82aef]/30">
                    <svg className="w-3.5 h-3.5 ml-0.5" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Right Column — Content and Corner Image ─── */}
        <div className="flex flex-col h-full pt-4">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-5 h-5 rounded-full border-2 border-[#c82aef] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#c82aef]" />
            </div>
            <span className={`text-[12px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-200' : 'text-[#0a0a1a]'}`}>
              Why Choose Fyd Squad
            </span>
          </div>

          {/* Headline */}
          <h2 className={`text-4xl sm:text-[3rem] font-extrabold leading-[1.1] tracking-tight mb-6 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
            Your Success is Our <br />
            Mission
          </h2>

          {/* Paragraph */}
          <p className={`text-[15.5px] sm:text-[16.5px] leading-relaxed mb-10 md:pr-4 font-medium ${isDark ? 'text-[#8a8a8a]' : 'text-[#5a5a6e]'}`}>
            In the fast-paced digital world, choosing the right marketing partner
            makes all the difference. At Fyd Squad, we don't just create campaigns—we
            craft strategies that deliver measurable success.
          </p>

          {/* Image Container with Custom Cutout */}
          <div className="relative w-full flex-grow min-h-[400px] sm:min-h-[500px] lg:min-h-[550px] group">
            
            {/* Background Image With Stroke */}
            <div className={`absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden border-2 transition-colors duration-500 ${isDark ? 'border-white/30' : 'border-gray-900/50'}`}>
              <img src="https://picsum.photos/800/1000?random=15" alt="Marketing Team Collaborating" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              {isDark && <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>}
            </div>

            {/* Bottom-Right Cutout Mask Wrapper */}
            <div className={`absolute bottom-0 right-0 w-[85%] sm:w-[360px] pt-5 pl-5 rounded-tl-[3rem] rounded-br-[2rem] z-10 transition-colors duration-700 ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#fdfdff]'}`}>
              
              {/* Inner Floating Card */}
              <div className={`animate-float w-full min-h-[220px] p-6 sm:p-8 rounded-[1.75rem] flex flex-col justify-center transition-all duration-300 relative z-20 ${
                isDark 
                  ? 'bg-gradient-to-tr from-[#1a1122] to-[#151515] border border-white/10 shadow-[0_0_30px_rgba(200,42,239,0.15)] shadow-[#c82aef]/20 hover:border-[#c82aef]/30' 
                  : 'bg-gradient-to-br from-[#f8f0ff] to-[#fdfdff] border border-[#ecd4ff] shadow-[0_15px_40px_rgba(200,42,239,0.08)] shadow-purple-500/10'
              }`}>
                <h4 className={`text-[1.1rem] sm:text-[1.35rem] font-bold tracking-tight leading-[1.3] mb-6 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
                  Partner with Fyd Squad & <br />
                  take your brand to the<br />
                  next level.
                </h4>
                <a href="#contact" className="text-[14px] font-bold text-[#c82aef] hover:text-[#ae15d4] flex items-center gap-2 group/btn w-max transition-colors mt-auto">
                  Let's Talk Strategy
                  <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#c82aef] text-white transition-transform group-hover/btn:scale-110 shadow-md shadow-purple-500/30">
                    <svg className="w-3.5 h-3.5 ml-0.5" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </a>
              </div>

            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
