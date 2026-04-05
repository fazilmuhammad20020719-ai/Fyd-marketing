import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const SERVICES = [
  {
    title: 'Social Media Marketing',
    icon: (
      <svg className="w-8 h-8 text-[#c82aef] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  },
  {
    title: 'Content Marketing',
    icon: (
      <svg className="w-8 h-8 text-[#c82aef] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    title: 'PPC Advertising',
    icon: (
      <svg className="w-8 h-8 text-[#c82aef] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    )
  },
  {
    title: 'Email Marketing',
    icon: (
      <svg className="w-8 h-8 text-[#c82aef] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Branding & Design',
    icon: (
      <svg className="w-8 h-8 text-[#c82aef] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: 'Web Development',
    icon: (
      <svg className="w-8 h-8 text-[#c82aef] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
];

export default function ServicesSection() {
  const { isDark } = useTheme();

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="w-5 h-5 rounded-full border-2 border-[#c82aef] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#c82aef]" />
            </div>
            <span className={`text-[12px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-200' : 'text-[#0a0a1a]'}`}>
              Our Core Services
            </span>
          </div>
          <h2 className={`text-[2.25rem] sm:text-[3rem] lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight max-w-3xl ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
            Digital Solutions That Drive <br /> Real Results
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-12">
          {SERVICES.map((service, idx) => (
            <div key={idx} className={`group p-8 rounded-[2rem] flex flex-col transition-all duration-300 min-h-[320px] ${
              isDark 
                ? 'bg-gradient-to-b from-[#151515] to-[#120f16] border border-white/10 shadow-[0_10px_30px_rgba(200,42,239,0.03)] hover:border-white/20 hover:shadow-[#c82aef]/10' 
                : 'bg-gradient-to-b from-[#fdfdff] via-[#f8f8fb] to-[#f4e6ff] border border-[#ecd4ff] shadow-[0_15px_40px_rgba(200,42,239,0.06)] hover:shadow-[0_20px_50px_rgba(200,42,239,0.12)]'
            }`}>
              
              {/* Top Row: Icon + Title */}
              <div className="flex items-center gap-5 mb-6">
                <div className={`shrink-0 w-[72px] h-[72px] rounded-2xl flex items-center justify-center relative transition-transform group-hover:-translate-y-1 duration-300 ${
                  isDark 
                    ? 'bg-[#1a1122] border border-[#c82aef]/30' 
                    : 'bg-white/90 backdrop-blur-sm border border-[#ecd4ff] shadow-[0_8px_20px_rgba(200,42,239,0.12)]'
                }`}>
                  <div className={`absolute inset-0 rounded-2xl blur-xl ${isDark ? 'bg-[#c82aef]/30' : 'bg-[#c82aef]/15'}`}></div>
                  {service.icon}
                </div>
                <h3 className={`text-[1.3rem] font-bold tracking-tight leading-[1.25] ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
                  {service.title.includes(' ') ? (
                    <>
                      {service.title.substring(0, service.title.lastIndexOf(' '))}
                      <br />
                      {service.title.substring(service.title.lastIndexOf(' ') + 1)}
                    </>
                  ) : service.title}
                </h3>
              </div>

              {/* Description */}
              <p className={`text-[14px] leading-[1.6] font-medium mb-8 flex-grow ${isDark ? 'text-[#8a8a8a]' : 'text-[#5a5a6e]'}`}>
                Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.
              </p>

              {/* View Details Button Pill */}
              <a href="#view" className={`flex items-baseline justify-between w-full p-2 pl-6 rounded-[2rem] transition-all duration-300 items-center ${
                isDark 
                  ? 'bg-[#0d0d0d] border border-white/10 group-hover:border-[#c82aef]/40' 
                  : 'bg-white/50 backdrop-blur-md border border-[#ecd4ff] shadow-[0_4px_15px_rgba(200,42,239,0.04)] group-hover:bg-white group-hover:border-[#c82aef]/40'
              }`}>
                <span className={`text-[13px] font-bold ${isDark ? 'text-gray-300' : 'text-[#0a0a1a]'}`}>View Details</span>
                <span className="flex items-center justify-center w-[38px] h-[38px] shrink-0 rounded-full bg-[#c82aef] text-white shadow-md shadow-[#c82aef]/30 transition-transform group-hover:translate-x-1">
                  <svg className="w-4 h-4 ml-0.5" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </a>

            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className={`text-[13.5px] sm:text-[14.5px] font-medium text-center ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>
          Need a custom solution? Let's create a strategy tailored for your business.{' '}
          <a href="#strategy" className="text-[#c82aef] hover:text-[#ae15d4] font-bold inline-block ml-1 transition-colors">
            Get a Free Strategy Call
          </a>
        </div>
        
      </div>
    </section>
  );
}
