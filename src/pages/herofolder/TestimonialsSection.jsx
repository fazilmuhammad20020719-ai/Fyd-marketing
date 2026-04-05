import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';

const TESTIMONIALS = [
  {
    name: 'Emma Richard',
    role: 'CEO Nexatech',
    avatar: avatar1,
    quote: '"Fyd Marketing completely transformed our online presence! Their digital marketing strategies helped us double our revenue in just six months."',
  },
  {
    name: 'David Mont',
    role: 'Marketing Director',
    avatar: avatar2,
    quote: '"We\'ve worked with many agencies before, but Fyd stands out. Their data-driven approach and creative solutions gave us an edge over competitors."',
  },
  {
    name: 'Sophia Lewis',
    role: 'Founder',
    avatar: avatar3,
    quote: '"From SEO to paid ads, Fyd nailed every aspect of our campaign. Our website traffic skyrocketed, and lead generation has never been better!"',
  }
];

const Stars = () => (
  <div className="flex gap-1 mb-5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function TestimonialsSection() {
  const { isDark } = useTheme();

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Top Two-Column Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 mb-10">

          {/* Left — Stats Card */}
          <div className={`p-8 rounded-[2rem] border flex flex-col gap-6 ${
            isDark
              ? 'bg-gradient-to-b from-[#151515] to-[#120f16] border-white/10'
              : 'bg-gradient-to-b from-[#fdfdff] to-[#f4e6ff] border-[#ecd4ff]'
          }`}>

            {/* Avatars + Review Count */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[avatar1, avatar2, avatar3].map((src, i) => (
                  <img key={i} src={src} alt={`Client ${i+1}`} className="w-11 h-11 object-cover rounded-full border-[3px] border-[#c82aef]" />
                ))}
                <div className={`w-11 h-11 rounded-full border-[3px] border-[#c82aef] flex items-center justify-center text-xs font-bold ${isDark ? 'bg-[#1a1122] text-white' : 'bg-[#f8f0ff] text-[#c82aef]'}`}>+4</div>
              </div>
              <div>
                <p className={`text-base font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>2.7k Positive</p>
                <p className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>Reviews</p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex gap-8">
              <div>
                <p className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>90%</p>
                <p className={`text-sm font-semibold mt-1 ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>Improved Project</p>
              </div>
              <div>
                <p className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>49%</p>
                <p className={`text-sm font-semibold mt-1 ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>New Project</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-col gap-3">
              {['Social Media Growth', 'Performance Marketing'].map((tag, i) => (
                <div key={i} className={`flex items-center gap-2.5 px-5 py-3 rounded-full border w-max ${
                  isDark
                    ? 'bg-[#0d0d0d] border-white/10 text-gray-300'
                    : 'bg-white/60 border-[#ecd4ff] text-[#0a0a1a]'
                }`}>
                  <div className="w-4 h-4 rounded-full border-2 border-[#c82aef] flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c82aef]" />
                  </div>
                  <span className="text-[13px] font-bold">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Headline */}
          <div className={`p-8 sm:p-10 lg:p-14 rounded-[2rem] border flex flex-col justify-center ${
            isDark
              ? 'bg-gradient-to-b from-[#151515] to-[#120f16] border-white/10'
              : 'bg-gradient-to-b from-[#fdfdff] to-[#f4e6ff] border-[#ecd4ff]'
          }`}>

            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-5 h-5 rounded-full border-2 border-[#c82aef] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#c82aef]" />
              </div>
              <span className={`text-[12px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-200' : 'text-[#0a0a1a]'}`}>
                What Our Client Says
              </span>
            </div>

            {/* Heading */}
            <h2 className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.05] mb-6 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
              Hear from Our Satisfied<br />
              Clients, Real Success<br />
              Stories
            </h2>

            {/* Description */}
            <p className="text-[#c82aef] text-[14.5px] sm:text-[15.5px] font-semibold leading-relaxed max-w-xl">
              Discover how businesses like yours achieved outstanding growth with Fyd Marketing's expert digital marketing solutions.
            </p>
          </div>
        </div>

        {/* ── Bottom Three-Column Testimonial Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className={`group p-8 rounded-[2rem] border flex flex-col transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-b from-[#151515] to-[#120f16] border-white/10 hover:border-[#c82aef]/30'
                : 'bg-gradient-to-b from-[#fdfdff] to-[#f4e6ff] border-[#ecd4ff] hover:border-[#c82aef]/40 hover:shadow-[0_20px_40px_rgba(200,42,239,0.08)]'
            }`}>

              <Stars />

              {/* Avatar Row */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#c82aef]" />
                  <div>
                    <p className={`text-[14.5px] font-bold ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>{t.name}</p>
                    <p className={`text-[12.5px] font-medium ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>{t.role}</p>
                  </div>
                </div>
                {/* Large Quote Icon */}
                <svg className="w-9 h-9 text-[#c82aef] opacity-80 shrink-0 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className={`text-[14px] sm:text-[14.5px] leading-[1.65] font-medium ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>
                {t.quote}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
