import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const STEPS = [
  {
    num: '01',
    title: 'Discovery & Consult',
    desc: 'Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis.',
    icon: (
      <svg className="w-8 h-8 text-[#c82aef]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Strategy & Planning',
    desc: 'Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis.',
    icon: (
      <svg className="w-8 h-8 text-[#c82aef]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 10l2 2 2-2" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Execution & Optimize',
    desc: 'Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis.',
    icon: (
      <svg className="w-8 h-8 text-[#c82aef]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Result & Growth',
    desc: 'Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis.',
    icon: (
      <svg className="w-8 h-8 text-[#c82aef]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  const { isDark } = useTheme();

  return (
    <section className="py-20 overflow-hidden">
      <div className={`w-full border-y px-6 sm:px-12 lg:px-20 py-14 sm:py-16 lg:py-20 ${
        isDark
          ? 'bg-gradient-to-b from-[#0e0a14] to-[#0a0710] border-white/10'
          : 'bg-gradient-to-b from-[#fdfbff] to-[#f5eeff] border-[#ecd4ff]'
      }`}>
        <div className="max-w-7xl mx-auto">

          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 mb-12 items-end">

            {/* Left */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-5 h-5 rounded-full border-2 border-[#c82aef] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#c82aef]" />
                </div>
                <span className={`text-[12px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-300' : 'text-[#0a0a1a]'}`}>
                  How It Work
                </span>
              </div>
              <h2 className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
                Simple Steps to<br />Digital Success
              </h2>
            </div>

            {/* Right */}
            <div className="flex flex-col items-start lg:items-end gap-5">
              <p className={`text-[14.5px] sm:text-[15.5px] leading-[1.65] font-medium max-w-md ${isDark ? 'text-[#8a8a8a]' : 'text-[#5a5a6e]'}`}>
                Our streamlined process ensures your digital growth is seamless and effective. ipsum dolor sit amet, consectetur adipiscing elit. in ex ligula varius at rutrum et, finibus sed felis.
              </p>
              <a href="#started" className="text-[14px] font-bold text-[#c82aef] hover:text-[#ae15d4] flex items-center gap-2 group w-max transition-colors">
                Get Started Now
                <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#c82aef] text-white transition-transform group-hover:translate-x-1 shadow-md shadow-purple-500/30">
                  <svg className="w-3.5 h-3.5 ml-[1px]" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </a>
            </div>
          </div>

          {/* Steps Inner Card */}
          <div className={`rounded-[2rem] p-6 sm:p-8 border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-x ${
            isDark
              ? 'bg-gradient-to-br from-[#1a0d2e] via-[#1a1122] to-[#0e0a14] border-white/10 divide-white/10'
              : 'bg-gradient-to-br from-[#fdf6ff] via-white to-[#f8f0ff] border-[#ecd4ff] divide-[#ecd4ff]'
          }`}>
            {STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col gap-5 px-6 py-4 first:pl-0 last:pr-0 group">

                {/* Icon + Step Num Row */}
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center relative ${
                    isDark
                      ? 'bg-[#c82aef]/10 border border-[#c82aef]/20'
                      : 'bg-[#f8e6ff] border border-[#ecd4ff]'
                  }`}>
                    <div className="absolute inset-0 rounded-2xl blur-lg bg-[#c82aef]/20" />
                    <div className="relative z-10">{step.icon}</div>
                  </div>
                  <span className={`text-2xl font-extrabold tracking-tight opacity-30 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-[1.05rem] sm:text-[1.15rem] font-extrabold tracking-tight leading-snug ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className={`text-[13px] sm:text-[13.5px] leading-[1.6] font-medium ${isDark ? 'text-[#8a8a8a]' : 'text-[#5a5a6e]'}`}>
                  {step.desc}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
