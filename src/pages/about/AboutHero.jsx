import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  const { isDark } = useTheme();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mb-16 text-center">
      <div
        className={`py-16 rounded-[40px] relative overflow-hidden transition-all duration-300 hover:border-purple-500/40 shadow-2xl ${
          isDark
            ? 'bg-gradient-to-br from-[#2a0d3a] via-[#1a1030] to-[#151522] border border-white/10 shadow-purple-900/20'
            : 'bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100 border border-[#ecd4ff] shadow-purple-500/10'
        }`}
      >
        {/* Glow blobs */}
        {isDark && (
          <>
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#c82aef]/20 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-purple-900/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#c82aef]/10 blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c82aef]/50 to-transparent pointer-events-none" />
          </>
        )}

        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 relative z-10 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          About Fyd Squad
        </h1>
        <p
          className={`text-sm md:text-base font-medium relative z-10 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          <Link to="/" className="text-purple-500 hover:text-purple-400 transition-colors">
            Home
          </Link>{' '}
          / About Us
        </p>
      </div>
    </div>
  );
}
