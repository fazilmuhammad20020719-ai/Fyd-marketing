import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const CheckIcon = ({ isDark }) => (
  <svg className="w-4 h-4 text-[#c82aef] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowBtn = ({ label }) => (
  <a href="#details" className="flex items-center justify-between w-full px-6 py-3.5 rounded-full border border-[#c82aef] hover:bg-[#c82aef]/5 transition-all duration-300 group">
    <span className="text-[14px] font-bold text-[#0a0a1a] dark:text-white">{label}</span>
    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#c82aef] text-white shadow-md shadow-purple-500/30 transition-transform group-hover:translate-x-1">
      <svg className="w-4 h-4 ml-0.5" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></svg>
    </span>
  </a>
);

const STARTER_FEATURES = ['Basic SEO & Marketing', 'Social Media Management (1 Platform)', 'Monthly Performance Report'];
const ENTERPRISE_FEATURES = ['Complete Digital Marketing Suite', 'Paid Ads Management', 'Dedicated Account Manager', 'Email Marketing & Automation', 'Dedicated Account Manager', 'Weekly Performance Insights'];
const GROWTH_FEATURES = ['Basic SEO & Marketing', 'Social Media Management (1 Platform)', 'Monthly Performance Report'];
const PRIORITY_FEATURES = ['Data–Driven Digital Marketing', 'Proven Strategies for Higher', 'Scalable Solution for Every Business'];

export default function PricingSection() {
  const { isDark } = useTheme();

  const card = `relative overflow-hidden rounded-[2rem] border p-8 flex flex-col gap-5 ${
    isDark
      ? 'bg-gradient-to-b from-[#151515] to-[#120f16] border-white/10'
      : 'bg-gradient-to-b from-[#fdfdff] to-[#f4e6ff] border-[#ecd4ff]'
  }`;

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="w-5 h-5 rounded-full border-2 border-[#c82aef] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#c82aef]" />
            </div>
            <span className={`text-[12px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-200' : 'text-[#0a0a1a]'}`}>
              Our Core Services
            </span>
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
            Flexible Pricing Plans for<br />Every Business
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Column 1 ── */}
          <div className="flex flex-col gap-6">

            {/* Let's Find Card */}
            <div className={`relative overflow-hidden rounded-[2rem] border p-8 flex flex-col justify-between min-h-[220px] ${
              isDark
                ? 'bg-gradient-to-b from-[#2a0d3a] to-[#1a1030] border-[#c82aef]/30'
                : 'bg-gradient-to-b from-[#eedeff] to-[#e2caff] border-[#d8b4fe]'
            }`}>
              {/* Color blobs */}
              {isDark && <>
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#c82aef]/25 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-purple-800/30 blur-3xl pointer-events-none" />
              </>}
              <h3 className={`relative z-10 text-2xl sm:text-3xl font-extrabold leading-[1.2] tracking-tight ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
                Let's Find the<br />Right Strategy<br />for You!
              </h3>
              <a href="#consultation" className="relative z-10 text-[13.5px] font-bold text-[#c82aef] hover:text-[#ae15d4] flex items-center gap-2 group w-max transition-colors mt-4">
                Book a Free Consultation
                <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#c82aef] text-white transition-transform group-hover:translate-x-1">
                  <svg className="w-3 h-3 ml-[1px]" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </a>
            </div>

            {/* Starter Plan */}
            <div className={card}>
              {isDark && <>
                <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-[#c82aef]/20 blur-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c82aef]/40 to-transparent pointer-events-none" />
              </>}
              <div className="relative z-10">
                <h3 className={`text-xl font-extrabold mb-1 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>Starter</h3>
                <p className={`text-[13.5px] font-medium ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>Perfect for startups & small businesses</p>
              </div>
              <div className="relative z-10 flex items-baseline gap-1">
                <span className={`text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>$99</span>
                <span className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>/Month</span>
              </div>
              <div className="relative z-10"><ArrowBtn label="View Details" /></div>
              <div className="flex flex-col gap-2.5 mt-1">
                {STARTER_FEATURES.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className={`text-[13px] font-medium ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Column 2 - Enterprise (tall) ── */}
          <div className={`${card} justify-between`}>
            {isDark && <>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-60 h-40 rounded-full bg-[#c82aef]/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 h-32 rounded-full bg-violet-800/25 blur-3xl pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c82aef]/60 to-transparent pointer-events-none" />
            </>}
            <div>
              <div className="relative z-10">
                <h3 className={`text-xl font-extrabold mb-1 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>Enterprise</h3>
                <p className={`text-[13.5px] font-medium mb-6 ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>Full scale marketing for maximum impact</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>$399</span>
                  <span className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>/Month</span>
                </div>
                <ArrowBtn label="View Details" />
              </div>
              
              <div className="relative z-10 flex flex-col gap-3.5 mt-8 mb-6">
                <div className="flex items-center gap-3">
                  <svg className={`w-4 h-4 shrink-0 ${isDark ? 'text-gray-300' : 'text-gray-500'}`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 13h-2v-2h2v2zm2-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                  </svg>
                  <span className={`text-[13.5px] font-bold ${isDark ? 'text-gray-300' : 'text-[#5a5a6e]'}`}>Dedicated Account Manager</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className={`w-4 h-4 shrink-0 ${isDark ? 'text-gray-300' : 'text-gray-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="13" r="8"/>
                    <path d="M12 9v4l2 2"/>
                    <path d="M5 3L2 6"/>
                    <path d="M19 3l3 3"/>
                    <path d="M12 2v2"/>
                  </svg>
                  <span className={`text-[13.5px] font-bold ${isDark ? 'text-gray-300' : 'text-[#5a5a6e]'}`}>Priority Support 24/7</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className={`w-4 h-4 shrink-0 ${isDark ? 'text-gray-300' : 'text-gray-500'}`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.83 13.91l3.52 1.4 1.4 3.52c.2.5.68.83 1.25.83s1.05-.33 1.25-.83l1.4-3.52 3.52-1.4c.5-.2.83-.68.83-1.25s-.33-1.05-.83-1.25l-3.52-1.4-1.4-3.52A1.334 1.334 0 0 0 9 5.66c-.57 0-1.05.33-1.25.83l-1.4 3.52-3.52 1.4A1.334 1.334 0 0 0 2 12.66c0 .57.33 1.05.83 1.25zm16.91-9.65l-1.63-.65-.65-1.63a.667.667 0 0 0-1.24 0l-.65 1.63-1.63.65a.666.666 0 0 0 0 1.24l1.63.65.65 1.63c.1.25.34.41.62.41s.52-.16.62-.41l.65-1.63 1.63-.65a.666.666 0 0 0 0-1.24zm0 12.24l-1.63-.65-.65-1.63a.667.667 0 0 0-1.24 0l-.65 1.63-1.63.65a.666.666 0 0 0 0 1.24l1.63.65.65 1.63c.1.25.34.41.62.41s.52-.16.62-.41l.65-1.63 1.63-.65a.666.666 0 0 0 0-1.24z" />
                  </svg>
                  <span className={`text-[13.5px] font-bold ${isDark ? 'text-gray-300' : 'text-[#5a5a6e]'}`}>Customized Growth Strength</span>
                </div>
              </div>

              <div className={`w-full h-px ${isDark ? 'bg-white/5' : 'bg-black/5'} relative z-10 mb-6`} />

              <div className="relative z-10 flex flex-col gap-2.5">
                {ENTERPRISE_FEATURES.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className={`text-[13px] font-medium ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Column 3 ── */}
          <div className="flex flex-col gap-6">

            {/* Your Growth Our Priority */}
            <div className={card}>
              {isDark && <>
                <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-[#c82aef]/20 blur-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c82aef]/50 to-transparent pointer-events-none" />
              </>}
              <h3 className={`relative z-10 text-[1.1rem] font-extrabold ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>Your Growth, Our Priority!</h3>
              <div className="flex flex-col gap-3 mt-1">
                {PRIORITY_FEATURES.map((f, i) => (
                  <div key={i} className={`flex items-center justify-between px-4 py-3 rounded-full border text-[13px] font-semibold ${
                    isDark
                      ? 'border-white/10 bg-[#0d0d0d] text-gray-300'
                      : 'border-[#ecd4ff] bg-white/60 text-[#0a0a1a]'
                  }`}>
                    <span>{f}</span>
                    <div className="w-5 h-5 rounded-full bg-[#c82aef] flex items-center justify-center shrink-0 ml-2">
                      <svg className="w-3 h-3 text-white ml-[1px]" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Plan */}
            <div className={card}>
              {isDark && <>
                <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-[#c82aef]/20 blur-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c82aef]/50 to-transparent pointer-events-none" />
              </>}
              <div className="relative z-10">
                <h3 className={`text-xl font-extrabold mb-1 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>Growth</h3>
                <p className={`text-[13.5px] font-medium ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>Best for growing businesses ready</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className={`text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>$299</span>
                <span className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>/Month</span>
              </div>
              <ArrowBtn label="View Details" />
              <div className="flex flex-col gap-2.5 mt-1">
                {GROWTH_FEATURES.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className={`text-[13px] font-medium ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
