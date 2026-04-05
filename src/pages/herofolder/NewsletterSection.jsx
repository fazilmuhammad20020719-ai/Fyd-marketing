import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function NewsletterSection() {
  const { isDark } = useTheme();
  const [email, setEmail] = useState('');

  return (
    <section className="py-12 px-6 sm:px-12 lg:px-16 overflow-hidden">
      <div className={`max-w-7xl mx-auto rounded-[2.5rem] border px-8 sm:px-16 lg:px-24 py-14 sm:py-16 flex flex-col items-center text-center transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-b from-[#151515] to-[#120f16] border-[#c82aef]/30 shadow-[0_0_40px_rgba(200,42,239,0.08)]'
          : 'bg-gradient-to-b from-[#fdfbff] to-[#f4e6ff] border-[#c82aef]/30 shadow-[0_15px_60px_rgba(200,42,239,0.07)]'
      }`}>

        {/* Headline */}
        <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.1] mb-4 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
          Stay Ahead in Digital Marketing
        </h2>

        {/* Description */}
        <p className={`text-[14.5px] sm:text-[15.5px] font-medium leading-relaxed mb-10 max-w-xl ${isDark ? 'text-[#8a8a8a]' : 'text-[#5a5a6e]'}`}>
          Get exclusive insights, trends, and strategies delivered straight to your inbox. Subscribe now!
        </p>

        {/* Input + Button */}
        <div className={`flex items-center w-full max-w-[580px] rounded-full border pr-2 py-2 pl-6 gap-2 transition-all duration-300 focus-within:shadow-[0_0_0_3px_rgba(200,42,239,0.2)] ${
          isDark
            ? 'border-white/15 bg-[#0d0d0d]'
            : 'border-[#ecd4ff] bg-white shadow-[0_4px_20px_rgba(200,42,239,0.06)]'
        }`}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Give your best email"
            className={`flex-1 bg-transparent outline-none text-[14px] font-medium placeholder:font-medium ${
              isDark
                ? 'text-white placeholder:text-gray-500'
                : 'text-[#0a0a1a] placeholder:text-[#9d9daa]'
            }`}
          />
          <button className="flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-[#c82aef] hover:bg-[#ae15d4] text-white font-bold text-[14px] transition-colors duration-300 shadow-md shadow-purple-500/30 shrink-0">
            Subscribe
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
              <svg className="w-4 h-4 ml-0.5" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
