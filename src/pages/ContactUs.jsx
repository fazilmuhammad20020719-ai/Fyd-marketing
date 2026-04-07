import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ContactUs() {
  const { isDark } = useTheme();

  return (
    <div className="w-full flex-col min-h-screen pt-32 pb-20">
      {/* Header Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className={`py-16 rounded-[40px] relative overflow-hidden transition-all duration-300 hover:border-purple-500/40 shadow-2xl ${isDark ? 'bg-gradient-to-br from-[#2a0d3a] via-[#1a1030] to-[#151522] border border-white/10 shadow-purple-900/20' : 'bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100 border border-[#ecd4ff] shadow-purple-500/10'}`}>
          {/* Color blobs */}
          {isDark && (
            <>
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#c82aef]/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-purple-900/30 blur-3xl pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c82aef]/50 to-transparent pointer-events-none" />
            </>
          )}
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Us</h1>
          <p className={`text-sm md:text-base font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className="text-purple-500">Home</span> / Contact Us
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">

          {/* Left Column: Get in Touch */}
          <div className={`p-8 lg:p-12 rounded-[32px] border relative overflow-hidden transition-all duration-300 hover:border-purple-500/40 shadow-2xl ${isDark ? 'bg-gradient-to-b from-[#151515] to-[#120f16] border-white/10 shadow-[0_20px_50px_rgba(200,42,239,0.1)]' : 'bg-gradient-to-b from-[#fdfdff] to-[#f4e6ff] border-[#ecd4ff] shadow-purple-500/10'}`}>
            {/* Color blobs for Glow Effect */}
            {isDark && (
              <>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#c82aef]/15 blur-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c82aef]/30 to-transparent pointer-events-none" />
              </>
            )}

            {/* Tag */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 ${isDark ? 'bg-purple-500/10' : 'bg-purple-100/60'}`}>
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span className={`text-xs font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Reach out to us</span>
            </div>

            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h2>
            <p className={`mb-10 text-sm lg:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Reach out to us for tailored digital solutions that drive results sollicitudin nec.
            </p>

            <div className="space-y-6 lg:space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Phone Number</p>
                  <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>+1 (62) 987 7543</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Email Address</p>
                  <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>hello@fydmarketing.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Office Address</p>
                  <p className={`text-lg font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>Fyd Squad HQ – 902 Digital<br />Lane, San Francisco, CA<br />94110, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className={`p-8 lg:p-12 rounded-[32px] border relative overflow-hidden transition-all duration-300 hover:border-purple-500/40 shadow-2xl ${isDark ? 'bg-gradient-to-b from-[#151515] to-[#120f16] border-white/10 shadow-[0_20px_50px_rgba(200,42,239,0.1)]' : 'bg-gradient-to-b from-[#fdfdff] to-[#f4e6ff] border-[#ecd4ff] shadow-purple-500/10'}`}>
            {/* Color blobs for Glow Effect */}
            {isDark && (
              <>
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#c82aef]/15 blur-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c82aef]/30 to-transparent pointer-events-none" />
              </>
            )}
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Let's Talk About Your Next Project</h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className={`w-full px-6 py-4 rounded-full border outline-none transition-all ${isDark ? 'bg-[#151522] border-white/10 text-white focus:border-purple-500' : 'bg-white border-gray-200 text-gray-900 focus:border-purple-500 focus:shadow-[0_0_0_4px_rgba(168,85,247,0.1)]'}`}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className={`w-full px-6 py-4 rounded-full border outline-none transition-all ${isDark ? 'bg-[#151522] border-white/10 text-white focus:border-purple-500' : 'bg-white border-gray-200 text-gray-900 focus:border-purple-500 focus:shadow-[0_0_0_4px_rgba(168,85,247,0.1)]'}`}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full px-6 py-4 rounded-full border outline-none transition-all ${isDark ? 'bg-[#151522] border-white/10 text-white focus:border-purple-500' : 'bg-white border-gray-200 text-gray-900 focus:border-purple-500 focus:shadow-[0_0_0_4px_rgba(168,85,247,0.1)]'}`}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className={`w-full px-6 py-4 rounded-full border outline-none transition-all ${isDark ? 'bg-[#151522] border-white/10 text-white focus:border-purple-500' : 'bg-white border-gray-200 text-gray-900 focus:border-purple-500 focus:shadow-[0_0_0_4px_rgba(168,85,247,0.1)]'}`}
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="Message"
                  className={`w-full px-6 py-4 rounded-[28px] border outline-none resize-none transition-all ${isDark ? 'bg-[#151522] border-white/10 text-white focus:border-purple-500' : 'bg-white border-gray-200 text-gray-900 focus:border-purple-500 focus:shadow-[0_0_0_4px_rgba(168,85,247,0.1)]'}`}
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  className={`group inline-flex items-center pl-8 pr-1.5 py-1.5 rounded-full border transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#1e1136] border-[#c026d3] shadow-[0_0_20px_rgba(192,38,211,0.4)] hover:shadow-[0_0_30px_rgba(192,38,211,0.6)]' : 'bg-[#fdfaff] border-[#c026d3] shadow-[0_0_20px_rgba(192,38,211,0.4)] hover:shadow-[0_0_30px_rgba(192,38,211,0.6)]'}`}
                >
                  <span className={`font-semibold mr-6 ${isDark ? 'text-white' : 'text-[#151522]'}`}>Send a Message</span>
                  <span className="w-12 h-12 rounded-full flex items-center justify-center bg-[#c026d3] text-[#151522] transition-transform duration-300 group-hover:translate-x-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>

          </div>
        </div>

        {/* Map Section */}
        <div className={`w-full rounded-[32px] overflow-hidden border relative transition-all duration-300 hover:border-purple-500/40 shadow-2xl ${isDark ? 'border-white/10 bg-[#151515] shadow-[0_20px_50px_rgba(200,42,239,0.1)]' : 'border-[#ecd4ff] bg-white shadow-purple-500/10'} h-[400px]`}>
          {/* Subtle Glow Effect for Map */}
          {isDark && (
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#c82aef]/10 blur-3xl pointer-events-none" />
          )}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444492.8354784411!2d55.22748790000001!3d25.0760224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2slk!4v1743931847118!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="London Eye Map Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
