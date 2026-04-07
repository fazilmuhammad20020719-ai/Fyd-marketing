import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function OurTeam() {
  const { isDark } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
      <div className={`border rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden ${
        isDark 
          ? 'bg-[#0a0a0a] border-[#c82aef]/30 shadow-[0_0_50px_rgba(200,42,239,0.05)]' 
          : 'bg-white border-[#c82aef]/20 shadow-xl shadow-purple-500/5'
      }`}>
        {/* Eyebrow & Title */}
        <div className="text-center mb-16 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-5 h-5 rounded-full border-2 border-[#c82aef] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#c82aef]" />
            </div>
            <span className={`text-[13px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Our Team</span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Meet the Minds Behind Your Digital <br className="hidden md:block" /> Success
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              name: 'Jordan Lee',
              role: 'Head of Creative',
              image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
            },
            {
              name: 'Chloe Tan',
              role: 'Senior SEO Specialist',
              image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
            },
            {
              name: 'Daniel Cruz',
              role: 'Performance Marketing Lead',
              image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
            }
          ].map((member, idx) => (
            <div key={idx} className={`relative overflow-hidden border rounded-[32px] flex flex-col group transition-all duration-500 hover:-translate-y-2 ${
              isDark 
                ? 'bg-gradient-to-b from-[#151515] to-[#120f16] border-white/10' 
                : 'bg-gradient-to-b from-[#fdfdff] to-[#f4e6ff] border-[#ecd4ff]'
            }`}>
              {/* Pricing Box Color Effect (Glows & Highlights) */}
              {isDark && <>
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#c82aef]/20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-purple-800/25 blur-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c82aef]/40 to-transparent pointer-events-none" />
              </>}

              <div className="relative">
                <img src={member.image} alt={member.name} className="w-full h-[380px] object-cover rounded-t-[32px] object-top" />
                
                {/* Social Icons Overlay - Cutout Effect */}
                <div className={`absolute top-0 right-0 p-3 rounded-bl-[32px] ${isDark ? 'bg-transparent' : 'bg-white/40 backdrop-blur-sm'}`}>
                  {/* Inner inverted corners (approximated with border-radius & box-shadow trick) */}
                  <div className={`absolute top-0 -left-6 w-6 h-6 bg-transparent rounded-tr-[24px] ${
                    isDark ? 'shadow-[12px_-12px_0_12px_#141318]' : 'shadow-[12px_-12px_0_12px_#fcf9ff]'
                  }`} />
                  <div className={`absolute -bottom-6 right-0 w-6 h-6 bg-transparent rounded-tr-[24px] ${
                    isDark ? 'shadow-[12px_-12px_0_12px_#141318]' : 'shadow-[12px_-12px_0_12px_#fcf9ff]'
                  }`} />

                  <div className={`flex flex-col gap-2 relative z-10 p-1.5 rounded-[24px] border border-[#c82aef]/20 shadow-md ${isDark ? 'bg-black/60 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'}`}>
                    {['facebook', 'instagram', 'linkedin'].map((social) => (
                      <a key={social} href="#" className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors border ${
                        isDark 
                          ? 'bg-[#151515] border-[#c82aef]/30 text-[#c82aef] hover:bg-[#c82aef] hover:text-white' 
                          : 'bg-gray-50 border-[#c82aef]/30 text-[#c82aef] hover:bg-[#c82aef] hover:text-white'
                      }`}>
                        {social === 'facebook' && (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                        )}
                        {social === 'instagram' && (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        )}
                        {social === 'linkedin' && (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-8 text-center relative z-10 mt-auto">
                <h3 className={`text-[22px] font-extrabold tracking-tight mb-1.5 ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>{member.name}</h3>
                <p className="text-[#c82aef] text-[14px] font-bold tracking-wide">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
