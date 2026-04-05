import { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'SEO Optimization', href: '#seo' },
      { label: 'Social Media', href: '#social' },
      { label: 'Content Marketing', href: '#content' },
      { label: 'PPC Advertising', href: '#ppc' },
    ],
  },
  {
    label: 'Pages',
    href: '#pages',
    children: [
      { label: 'Case Studies', href: '#cases' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 pt-4 transition-all duration-500">
      <div
        className={`max-w-7xl mx-auto px-2 flex items-center justify-between rounded-2xl border transition-all duration-500 ${
          scrolled
            ? 'py-1.5 bg-white/95 backdrop-blur-xl shadow-xl shadow-black/8 border-gray-200/60'
            : 'py-2 bg-white/90 backdrop-blur-md border-gray-200/40 shadow-lg shadow-black/5'
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img
            src={Logo}
            alt="Fyd Marketing"
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-1 ${
                  link.label === 'Home'
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
                }`}
              >
                {link.label}
                {link.children && (
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDropdown === link.label ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>

              {/* Dropdown */}
              {link.children && (
                <div
                  className={`absolute top-full left-0 mt-2 min-w-[220px] rounded-xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 transition-all duration-300 origin-top ${
                    openDropdown === link.label
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="p-2">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 rounded-lg hover:text-purple-700 hover:bg-purple-50 transition-colors duration-200"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side — CTA */}
        <div className="hidden lg:flex items-center gap-3">
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

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mt-3 p-4 rounded-2xl bg-[#1a1a2e]/95 backdrop-blur-xl border border-white/10">
          {navLinks.map((link) => (
            <div key={link.label}>
              <a
                href={link.href}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  link.label === 'Home'
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => !link.children && setMobileOpen(false)}
              >
                {link.label}
              </a>
              {link.children && (
                <div className="ml-4 border-l border-white/10 pl-4">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-4 pt-4 border-t border-white/10">
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
