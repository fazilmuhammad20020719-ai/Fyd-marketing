import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import lightLogo from '../assets/lightLogo.svg.svg';
import darkLogo from '../assets/darkLogo.svg';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Service', href: '/services' },
      { label: 'Single Services', href: '/services/single' },
    ],
  },
  {
    label: 'Pages',
    href: '/#pages',
    children: [
      { label: 'Case Studies', href: '/#cases' },
      { label: 'Our Team', href: '/#team' },
      { label: 'Partnership', href: '/#partnership' },
      { label: 'Pricing Plan', href: '/#pricing' },
      { label: 'Testimonial', href: '/#testimonial' },
      { label: 'FAQs', href: '/#faqs' },
      { label: 'Error 404', href: '/#404' },
    ],
  },
  {
    label: 'Archive',
    href: '/#archive',
    children: [
      { label: 'Blog', href: '/#blog' },
      { label: 'Single Post', href: '/#single-post' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];

/* ── Sun / Moon toggle ── */
function ThemeToggleIcon() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${isDark
        ? 'bg-white/10 hover:bg-white/20 text-yellow-300'
        : 'bg-gray-100 hover:bg-gray-200 text-indigo-500'
        }`}
    >
      {/* Sun */}
      <svg
        className="absolute transition-all duration-500 ease-in-out"
        style={{
          width: 18, height: 18,
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'rotate(-90deg) scale(0.4)' : 'rotate(0) scale(1)',
        }}
        fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>

      {/* Moon */}
      <svg
        className="absolute transition-all duration-500 ease-in-out"
        style={{
          width: 16, height: 16,
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'rotate(0) scale(1)' : 'rotate(90deg) scale(0.4)',
        }}
        fill="currentColor" viewBox="0 0 24 24"
      >
        <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    </button>
  );
}

/* ── Navbar ── */
export default function Navbar() {
  const { isDark } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('/#')) {
      const hash = href.substring(1);
      return location.pathname === '/' && location.hash === hash;
    }
    return location.pathname === href;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 pt-4 transition-all duration-500">
      <div
        className={`w-full px-4 flex items-center justify-between rounded-2xl border transition-all duration-500 ${isDark
          ? scrolled
            ? 'py-1.5 bg-[#151515]/90 backdrop-blur-xl shadow-lg shadow-purple-500/20 border-[#c82aef]/40'
            : 'py-2 bg-[#1a1a2e]/70 backdrop-blur-md border-[#c82aef]/25'
          : scrolled
            ? 'py-1.5 bg-white/95 backdrop-blur-xl shadow-xl shadow-purple-300/15 border-[#c82aef]/30'
            : 'py-2 bg-white/90 backdrop-blur-md border-[#c82aef]/20 shadow-lg shadow-purple-200/10'
          }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center group pl-2 py-1">
          <img
            src={isDark ? darkLogo : lightLogo}
            alt="Fyd Squad"
            className="h-10 w-auto scale-[2.8] origin-left mt-1 transition-all duration-300 group-hover:scale-[3.1]"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-1 ${isActive(link.href)
                  ? isDark
                    ? 'text-purple-400 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                    : 'text-purple-600 bg-purple-50 shadow-sm'
                  : isDark
                    ? 'text-gray-300 hover:text-white hover:bg-white/5'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
                  }`}
              >
                {link.label}
                {link.children && (
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {link.children && (
                <div
                  className={`absolute top-full left-0 mt-2 min-w-[220px] rounded-xl border backdrop-blur-xl shadow-2xl transition-all duration-300 origin-top ${isDark
                    ? 'border-white/10 bg-[#1a1a2e]/95 shadow-purple-900/20'
                    : 'border-gray-200 bg-white/95 shadow-black/10'
                    } ${openDropdown === link.label
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}
                >
                  <div className="p-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className={`block px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${isActive(child.href)
                          ? isDark
                            ? 'text-purple-400 bg-purple-500/10'
                            : 'text-purple-700 bg-purple-100/50'
                          : isDark
                            ? 'text-gray-300 hover:text-white hover:bg-purple-500/15'
                            : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50'
                          }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side — Toggle + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggleIcon />

          <a
            href="tel:+94771234567"
            className="flex items-center gap-2.5 pl-4 pr-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </span>
            +94 77 123 4567
          </a>
        </div>

        {/* Mobile — Toggle + Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggleIcon />
          <button
            className={`p-2 rounded-lg transition-colors ${isDark
              ? 'text-gray-300 hover:text-white hover:bg-white/10'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div
          className={`mx-4 mt-3 p-4 rounded-2xl backdrop-blur-xl border ${isDark
            ? 'bg-[#1a1a2e]/95 border-white/10'
            : 'bg-white/95 border-gray-200'
            }`}
        >
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.href}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${isActive(link.href)
                  ? isDark
                    ? 'text-purple-400 bg-purple-500/10'
                    : 'text-purple-600 bg-purple-50'
                  : isDark
                    ? 'text-gray-300 hover:text-white hover:bg-white/5'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                onClick={() => !link.children && setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className={`ml-4 border-l pl-4 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className={`block px-4 py-2 text-sm transition-all ${isActive(child.href)
                        ? isDark ? 'text-purple-400 font-bold' : 'text-purple-600 font-bold'
                        : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                        }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className={`mt-4 pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
            <a
              href="tel:+94771234567"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              +94 77 123 4567
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
