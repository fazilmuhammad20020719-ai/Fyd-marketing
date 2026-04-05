import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const CASE_STUDIES = [
  {
    title: 'Local Business Digital Transformation',
    stats: '5x ROI on social media campaigns & 80% increase in engagement...',
    tags: ['Social', 'Influencer', 'Retargeting', 'Google', 'Video', 'Local', 'Community'],
    image: 'https://picsum.photos/800/600?random=40',
    layout: 'bottom-left',
  },
  {
    title: 'SaaS Lead Generation Success',
    stats: '150% increase in qualified leads & 70% lower customer acquisition cost.',
    tags: ['Content', 'LinkedIn Ads', 'Email', 'Webinar', 'Landing', 'CRM', 'Retargeting'],
    image: 'https://picsum.photos/800/600?random=41',
    layout: 'top-left',
  },
  {
    title: 'E-Commerce Growth Boost',
    stats: '3x increase in organic traffic & 2x revenue growth in 6 months...',
    tags: ['SEO', 'PPC Ads', 'CRO', 'Analytics', 'Influencer', 'A/B Testing', 'Email'],
    image: 'https://picsum.photos/800/600?random=42',
    layout: 'top-left',
  },
  {
    title: 'Startup Brand Awareness Expansion',
    stats: '200% increase in brand mentions & 60% higher engagement rates...',
    tags: ['Viral', 'Partnership', 'PR', 'Growth', 'UGC', 'Media', 'Branding'],
    image: 'https://picsum.photos/800/600?random=43',
    layout: 'bottom-left',
  }
];

export default function CaseStudiesSection() {
  const { isDark } = useTheme();

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-16 overflow-hidden">
      
      {/* Massive Outer Container */}
      <div className={`max-w-7xl mx-auto p-8 sm:p-12 lg:p-16 rounded-[2.5rem] border ${
        isDark 
          ? 'border-[#c82aef]/30 bg-[#07050a] shadow-[0_0_30px_rgba(200,42,239,0.05)]' 
          : 'border-[#ecd4ff] bg-gradient-to-b from-[#fdfbff] to-[#f7f0ff] shadow-[0_15px_40px_rgba(200,42,239,0.05)]'
      }`}>
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16 items-start lg:items-center justify-between">
          
          {/* Left: Titles */}
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#c82aef] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#c82aef]" />
              </div>
              <span className={`text-[12px] sm:text-[13px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-300' : 'text-[#0a0a1a]'}`}>
                Case Studies
              </span>
            </div>
            <h2 className={`text-4xl sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.05] tracking-tight ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
              See How We Help <br />
              Businesses Thrive
            </h2>
          </div>

          {/* Right: Text & Link */}
          <div className="flex-1 max-w-lg lg:ml-auto">
            <p className={`text-[15px] sm:text-[16px] leading-[1.65] font-medium mb-6 ${isDark ? 'text-[#8a8a8a]' : 'text-[#5a5a6e]'}`}>
              We don't just talk about results—we deliver them. Here are some
              of our most impactful case studies showcasing how our digital
              marketing strategies drive success.
            </p>
            <a href="#casestudies" className="text-[14px] font-bold text-[#c82aef] hover:text-[#ae15d4] flex items-center gap-2 group w-max transition-colors">
              More Case Studies
              <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#c82aef] text-white transition-transform group-hover:translate-x-1 shadow-md shadow-purple-500/30">
                <svg className="w-3.5 h-3.5 ml-[1px]" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </a>
          </div>

        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <div 
              key={idx} 
              className={`relative w-full h-[380px] sm:h-[420px] rounded-[2rem] overflow-hidden group border ${
                isDark ? 'border-white/10' : 'border-[#ecd4ff]'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>

              {/* Dynamic Gradients for optimal readability */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                isDark 
                  ? study.layout === 'bottom-left' 
                    ? 'bg-gradient-to-t from-black/90 via-black/40 to-black/50' 
                    : 'bg-gradient-to-b from-black/90 via-black/40 to-black/50'
                  : study.layout === 'bottom-left'
                    ? 'bg-gradient-to-t from-[#fdfdff]/95 via-[#fdfdff]/60 to-[#fdfdff]/40'
                    : 'bg-gradient-to-b from-[#fdfdff]/95 via-[#fdfdff]/60 to-[#fdfdff]/40'
              }`} />
              
              {/* Subtle overall wash */}
              <div className={`absolute inset-0 mix-blend-multiply ${isDark ? 'bg-purple-900/30' : 'bg-purple-200/20'}`}></div>

              {/* Internal Content Container */}
              <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col">
                
                {study.layout === 'bottom-left' ? (
                  <>
                    {/* Tags at top right */}
                    <div className="flex flex-wrap justify-end gap-2 mb-auto self-end w-full max-w-[85%] sm:max-w-[70%]">
                      {study.tags.map((tag, i) => (
                        <span key={i} className={`px-3 py-1 text-[11.5px] sm:text-[12.5px] font-bold rounded-full border transition-colors ${
                          isDark 
                            ? 'border-[#c82aef] text-white bg-black/40 backdrop-blur-md hover:bg-[#c82aef] hover:border-[#c82aef]' 
                            : 'border-[#c82aef] text-[#0a0a1a] bg-white/40 backdrop-blur-md hover:bg-[#c82aef] hover:text-white hover:border-[#c82aef]'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Text at bottom left */}
                    <div className="mt-8 max-w-[85%] sm:max-w-[80%]">
                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-3 leading-[1.25] ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
                        {study.title}
                      </h3>
                      <p className={`text-[14px] sm:text-[15px] font-medium leading-relaxed ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>
                        {study.stats}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text at top left */}
                    <div className="mb-8 max-w-[85%] sm:max-w-[80%]">
                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-3 leading-[1.25] ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
                        {study.title}
                      </h3>
                      <p className={`text-[14px] sm:text-[15px] font-medium leading-relaxed ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>
                        {study.stats}
                      </p>
                    </div>
                    {/* Tags at bottom right */}
                    <div className="flex flex-wrap justify-end gap-2 mt-auto self-end w-full max-w-[85%] sm:max-w-[70%]">
                      {study.tags.map((tag, i) => (
                        <span key={i} className={`px-3 py-1 text-[11.5px] sm:text-[12.5px] font-bold rounded-full border transition-colors ${
                          isDark 
                            ? 'border-[#c82aef] text-white bg-black/40 backdrop-blur-md hover:bg-[#c82aef] hover:border-[#c82aef]' 
                            : 'border-[#c82aef] text-[#0a0a1a] bg-white/40 backdrop-blur-md hover:bg-[#c82aef] hover:text-white hover:border-[#c82aef]'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
