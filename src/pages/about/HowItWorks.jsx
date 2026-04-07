import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function HowItWorks() {
  const { isDark } = useTheme();

  const steps = [
    {
      num: '01',
      title: 'Discovery & Consult',
      desc: 'Lorem ipsum dol consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis',
      icon: (
        <svg className="w-[38px] h-[38px]" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="12" r="1.5" />
          <circle cx="19" cy="12" r="1.5" />
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7l10 10m-10 0l10-10" />
        </svg>
      )
    },
    {
      num: '02',
      title: 'Strategy & Planning',
      desc: 'Lorem ipsum dol consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis',
      icon: (
        <svg className="w-[38px] h-[38px]" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 8h2m-1-1v2" />
        </svg>
      )
    },
    {
      num: '03',
      title: 'Execution & Optimize',
      desc: 'Lorem ipsum dol consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis',
      icon: (
        <svg className="w-[38px] h-[38px]" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 20h8m-4-4v4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 9l2 2-2 2m4-4l-2 2 2 2" />
        </svg>
      )
    },
    {
      num: '04',
      title: 'Result & Growth',
      desc: 'Lorem ipsum dol consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis',
      icon: (
        <svg className="w-[38px] h-[38px]" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m10-10h-2M4 12H2" />
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[400px] bg-gradient-to-t from-[#c82aef]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-5 h-5 rounded-full border-2 border-[#c82aef] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#c82aef]" />
            </div>
            <span className={`text-[13px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>How it Work</span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.15] tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Simple Steps to <br />
            <span className={isDark ? 'text-gray-500' : 'text-gray-500'}>Digital Success</span>
          </h2>
        </div>
        <div className="flex flex-col items-start lg:items-start xl:pl-10">
          <p className={`text-[15px] leading-relaxed max-w-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Our streamlined process ensures your digital growth is seamless and effective. ipsum dolor sit amet, consectetur adipiscing elit. In ex ligula, varius at rutrum et, finibus sed felis.
          </p>
          <a href="#" className="flex items-center gap-2.5 text-[#c82aef] hover:text-purple-400 transition-colors text-[14px] font-bold tracking-wide">
            Get Started Now
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.2 10.7l-4.5 4.5a1 1 0 01-1.4-1.4l3.8-3.8-3.8-3.8a1 1 0 111.4-1.4l4.5 4.5a1 1 0 010 1.4z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className={`rounded-[28px] overflow-hidden border relative z-10 ${isDark ? 'border-[#c82aef]/30 bg-[#060606]' : 'border-[#c82aef]/20 bg-white shadow-xl shadow-purple-500/10'}`}>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y ${isDark ? 'divide-white/10 md:divide-x lg:divide-y-0' : 'divide-gray-100 md:divide-x lg:divide-y-0'}`}>
          {steps.map((step, idx) => (
            <div key={idx} className="p-8 lg:p-10 flex flex-col group hover:bg-[#c82aef]/[0.02] transition-colors duration-300">
              <div className="w-full flex justify-between items-start mb-12">
                <div className={`text-[#c82aef] transition-transform duration-500 group-hover:-translate-y-1`}>
                  {step.icon}
                </div>
                <div className={`text-[13px] font-semibold tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  {step.num}
                </div>
              </div>
              <div className="mt-auto">
                <h3 className={`text-[19px] font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                <p className={`text-[14px] leading-relaxed ${isDark ? 'text-[#8b8b8b]' : 'text-gray-500'}`}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
