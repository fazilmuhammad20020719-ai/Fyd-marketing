import React from 'react';
import { useTheme } from '../../context/ThemeContext';

import lightLogo from '../../assets/lightLogo.svg.svg';
import darkLogo from '../../assets/darkLogo.svg';

const QUICK_LINKS = ['Home', 'About Us', 'Service', 'Case Studies', 'Blog', 'Contact Us'];
const SERVICES = ['Social Media Marketing', 'SEO Optimization', 'PPC Advertising', 'Content Marketing', 'Branding Strategy', 'Email Marketing'];

const SocialIcon = ({ children, href, isDark }) => (
  <a
    href={href}
    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group ${isDark
      ? 'bg-[#1a0e2e] border border-[#c82aef]/40 shadow-[0_0_8px_rgba(200,42,239,0.15)] hover:shadow-[0_0_18px_rgba(200,42,239,0.5)] hover:bg-[#c82aef] hover:border-[#c82aef]'
      : 'bg-white/60 backdrop-blur-sm border border-[#e0c8ff] hover:bg-[#c82aef] hover:border-[#c82aef]'
      }`}
  >
    <span className={`transition-colors ${isDark ? 'text-[#c82aef] group-hover:text-white' : 'text-[#c82aef] group-hover:text-white'}`}>
      {children}
    </span>
  </a>
);

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className="px-6 sm:px-8 pb-8 pt-4 relative z-10">

      {/* ── Main Footer Box ── */}
      <div className={`w-full relative rounded-3xl border-[0.5px] overflow-hidden transition-all duration-500 ${isDark
        ? 'bg-gradient-to-b from-[#0e0a14]/95 to-[#070510]/95 border-[#c82aef]/40 shadow-[0_0_50px_rgba(200,42,239,0.12)]'
        : 'bg-gradient-to-b from-white/80 to-[#f3e8ff]/70 border-[#c82aef]/20 shadow-[0_8px_30px_rgba(200,42,239,0.08)]'
        }`}>

        {/* ── Light Effects ── */}
        <div className={`absolute top-1/2 left-[-20%] -translate-y-1/2 w-[70%] h-[120%] rounded-full blur-[160px] pointer-events-none opacity-30 ${isDark ? 'bg-[#c82aef]' : 'bg-[#e3b8ff]'}`} />

        {/* ── 4-Column Grid ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.2fr_1.3fr] gap-x-8 gap-y-10 items-start">

          {/* Col 1 – Brand */}
          <div className="flex flex-col gap-5 pr-0 lg:pr-6">
            <a href="#" className="inline-block relative group">
              <img
                src={isDark ? darkLogo : lightLogo}
                alt="Fyd Squad"
                className="h-13 w-auto scale-[2.8] origin-left mt-1 transition-all duration-300 group-hover:scale-[3.1]"
              />
            </a>
            <h3 className={`text-[1rem] font-extrabold leading-snug ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
              Driving Digital Growth with<br />Innovation &amp; Strategy
            </h3>
            <p className={`text-[13px] leading-relaxed ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>
              Lorem ipsum dolor si consectetur adipiscing elit ut sit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
            </p>
          </div>

          {/* Col 2 – Quick Links */}
          <div>
            <h4 className={`text-[15px] font-bold mb-5 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`text-[13px] font-medium transition-colors hover:text-[#c82aef] relative z-10 ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Services */}
          <div>
            <h4 className={`text-[15px] font-bold mb-5 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>Services</h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className={`text-[13px] font-medium transition-colors hover:text-[#c82aef] relative z-10 ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Contact Info + Social */}
          <div>
            <h4 className={`text-[15px] font-bold mb-5 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>Contact Info</h4>
            <ul className="flex flex-col gap-3 mb-7">
              {[
                'hello@fydmarketing.com',
                '+1 234 567 890',
                '123 Digital Street, New York, USA',
              ].map((item, i) => (
                <li key={i} className={`text-[13px] font-medium ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>
                  {item}
                </li>
              ))}
            </ul>

            <h4 className={`text-[15px] font-bold mb-4 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>Social Media</h4>
            <div className="flex items-center gap-3 flex-wrap relative z-10">
              {/* Facebook */}
              <SocialIcon href="#" isDark={isDark}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </SocialIcon>
              {/* YouTube */}
              <SocialIcon href="#" isDark={isDark}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </SocialIcon>
              {/* Instagram */}
              <SocialIcon href="#" isDark={isDark}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </SocialIcon>
              {/* LinkedIn */}
              <SocialIcon href="#" isDark={isDark}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialIcon>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className={`relative z-10 border-t px-8 sm:px-12 lg:px-16 ${isDark ? 'border-[#c82aef]/20' : 'border-[#c82aef]/10'}`}>
          <div className={`max-w-7xl mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] font-medium ${isDark ? 'text-gray-500' : 'text-[#8a8aaa]'}`}>
            <p>© 2025 Fyd Squad. Fox Creation All Rights Reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-[#c82aef] transition-colors relative z-10">Terms of Service</a>
              <a href="#" className="hover:text-[#c82aef] transition-colors relative z-10">Privacy Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}