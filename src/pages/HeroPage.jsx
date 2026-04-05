import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import heroVideo from '../assets/video.mp4';

export default function HeroPage() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-28 pb-6 px-6"
    >
      {/* ── Hero Card Container ── */}
      <div className={`relative w-full mx-auto rounded-3xl overflow-hidden min-h-[85vh] border transition-colors duration-500 ${isDark ? 'border-white/30' : 'border-gray-900/50'}`}>

        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/60 via-[#0d0d0d]/40 to-[#0d0d0d]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/50 via-transparent to-transparent" />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[85vh] px-8 sm:px-12 lg:px-16 pt-16 pb-10 max-w-7xl mx-auto">

          {/* Top — Headline */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-white max-w-4xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Amplify Your Brand with <br />
              Cutting‑Edge Digital
              Marketing
            </h1>
          </div>

          {/* Middle — Description */}
          <div className={`mt-8 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Fyd Marketing empowers businesses to grow online with data driven digital marketing,
              innovative branding, and performance focused strategies trusted by top
              brands lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          {/* Bottom — Action Bar */}
          <div className={`mt-10 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Get Started Button */}
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#1a1a2e] border border-white/10 text-white text-sm font-medium hover:bg-[#252540] transition-all duration-300 shadow-lg shadow-purple-500/20"
            >
              Get Started
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>

            {/* Play Button */}
            <div className="flex flex-row items-center justify-center gap-4 group cursor-pointer text-left">
              <button className="relative shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-[#050505] border-[3px] border-[#c82aef] text-white transition-all duration-300 z-10">
                {/* Static base ring */}
                <div className="absolute inset-0 rounded-full ring-[4px] ring-[#c82aef]/40" />
                {/* Pinging animated ring */}
                <div className="absolute inset-0 rounded-full ring-[4px] ring-[#c82aef]/60 animate-ping" style={{ animationDuration: '2.5s' }} />
                <svg className="w-5 h-5 ml-0.5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="text-xs sm:text-sm text-gray-400 max-w-[160px] leading-snug">
                Watch our video<br />reviews
              </div>
            </div>

            {/* Avatars + Reviews */}
            <div className="flex items-center justify-center gap-4 text-left">
              <div className="flex -space-x-3 shrink-0 z-0 hover:z-10 transition-all duration-300">
                <img src={avatar1} alt="Client 1" className="w-11 h-11 object-cover rounded-full border-[3px] border-[#c82aef] relative hover:scale-110 hover:z-50 transition-all duration-300" />
                <img src={avatar2} alt="Client 2" className="w-11 h-11 object-cover rounded-full border-[3px] border-[#c82aef] relative hover:scale-110 hover:z-50 transition-all duration-300" />
                <img src={avatar3} alt="Client 3" className="w-11 h-11 object-cover rounded-full border-[3px] border-[#c82aef] relative hover:scale-110 hover:z-50 transition-all duration-300" />
              </div>
              <div className="text-[15px] shrink-0 font-medium">
                <span className="text-gray-100 block tracking-wide">2.7k Positive</span>
                <span className="text-gray-400 block tracking-wide">Reviews</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
