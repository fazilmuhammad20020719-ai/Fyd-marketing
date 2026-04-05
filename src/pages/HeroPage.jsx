import { useState, useEffect } from 'react';
import heroBg from '../assets/hero-bg.png';
import avatars from '../assets/avatars.png';

export default function HeroPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/70 via-transparent to-transparent" />
      </div>

      {/* Animated purple glow accents */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-600/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Headline */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight">
              <span className="text-white">Amplify Your</span>
              <br />
              <span className="text-white">Brand with </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300">
                Cutting‑Edge
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                Digital Marketing
              </span>
            </h1>
          </div>

          {/* Right — Description + CTA */}
          <div
            className={`flex flex-col gap-8 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              Fyd Marketing empowers businesses to grow online with data‑driven digital marketing,
              innovative branding, and performance-focused strategies trusted by top brands.
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
              >
                Get Started
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>

              {/* Avatar Stack + Positive Reviews */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src={avatars} alt="Happy Clients" className="w-28 h-10 object-cover rounded-full" />
                </div>
                <div className="text-sm">
                  <span className="font-bold text-purple-400">2.7k+</span>
                  <span className="text-gray-400 ml-1">Positive<br />Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section — Video + Stats */}
        <div
          className={`mt-16 flex flex-wrap items-center gap-8 transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Play Button */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <button className="relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-purple-500/50 text-purple-400 hover:text-white hover:border-purple-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20">
              <div className="absolute inset-0 rounded-full bg-purple-500/10 animate-ping" style={{ animationDuration: '2s' }} />
              <svg className="w-5 h-5 ml-0.5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div className="text-sm text-gray-400 max-w-[180px]">
              Watch our video reviews and<br />see how businesses achieve<br />success with Fyd's digital<br />marketing solutions.
            </div>
          </div>

          {/* Stats Divider */}
          <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Stats */}
          <div className="flex gap-10">
            <div>
              <div className="text-3xl font-bold text-white">150<span className="text-purple-400">+</span></div>
              <div className="text-xs text-gray-500 mt-1">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98<span className="text-purple-400">%</span></div>
              <div className="text-xs text-gray-500 mt-1">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5<span className="text-purple-400">+</span></div>
              <div className="text-xs text-gray-500 mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent z-10" />
    </section>
  );
}
