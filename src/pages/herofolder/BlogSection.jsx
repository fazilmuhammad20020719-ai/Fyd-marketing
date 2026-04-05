import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const POSTS = [
  {
    date: 'April 14, 2025',
    category: 'Social Media',
    title: 'Mastering Instagram and Facebook Ads',
    excerpt: 'Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.',
    image: 'https://picsum.photos/800/500?random=50',
  },
  {
    date: 'April 14, 2025',
    category: 'SEO',
    title: 'Growth Strategies for Digital Business',
    excerpt: 'Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.',
    image: 'https://picsum.photos/800/500?random=51',
  },
];

const CalendarIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#c82aef] shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
  </svg>
);

const TagIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#c82aef] shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
  </svg>
);

export default function BlogSection() {
  const { isDark } = useTheme();

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-14 items-end">

          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-5 h-5 rounded-full border-2 border-[#c82aef] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#c82aef]" />
              </div>
              <span className={`text-[12px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-300' : 'text-[#0a0a1a]'}`}>
                Insights & Trends
              </span>
            </div>
            <h2 className={`text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.05] tracking-tight ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
              Latest Digital Marketing<br />
              Strategies & Tips
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-5">
            <p className={`text-[14.5px] sm:text-[15.5px] leading-[1.65] font-medium max-w-md ${isDark ? 'text-[#8a8a8a]' : 'text-[#5a5a6e]'}`}>
              Explore our latest blog articles covering industry trends, expert insights, and actionable strategies to elevate your digital marketing game.
            </p>
            <a href="#articles" className="text-[14px] font-bold text-[#c82aef] hover:text-[#ae15d4] flex items-center gap-2 group w-max transition-colors">
              View All Articles
              <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#c82aef] text-white transition-transform group-hover:translate-x-1 shadow-md shadow-purple-500/30">
                <svg className="w-3.5 h-3.5 ml-[1px]" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </a>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {POSTS.map((post, idx) => (
            <div key={idx} className={`group rounded-[2rem] border overflow-hidden flex flex-col transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-b from-[#151515] to-[#120f16] border-white/10 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(200,42,239,0.1)]'
                : 'bg-gradient-to-b from-[#fdfdff] to-[#f4e6ff] border-[#ecd4ff] hover:shadow-[0_20px_50px_rgba(200,42,239,0.1)]'
            }`}>

              {/* Image */}
              <div className="w-full h-[260px] sm:h-[300px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-4 flex-1">

                {/* Meta row */}
                <div className="flex items-center gap-5 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon />
                    <span className={`text-[12.5px] font-semibold ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TagIcon />
                    <span className={`text-[12.5px] font-semibold ${isDark ? 'text-gray-400' : 'text-[#5a5a6e]'}`}>{post.category}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight leading-[1.25] ${isDark ? 'text-white' : 'text-[#0a0a1a]'}`}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className={`text-[14px] sm:text-[14.5px] leading-[1.65] font-medium ${isDark ? 'text-[#8a8a8a]' : 'text-[#5a5a6e]'}`}>
                  {post.excerpt}
                </p>

                {/* Read More */}
                <a href="#post" className="text-[14px] font-bold text-[#c82aef] hover:text-[#ae15d4] flex items-center gap-1.5 w-max transition-colors mt-auto pt-2 group/link">
                  Read More
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
