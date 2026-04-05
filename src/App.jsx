import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroPage from './pages/HeroPage';
import BrandsSection from './pages/herofolder/BrandsSection';
import ExpertiseSection from './pages/herofolder/ExpertiseSection';
import WhyChooseSection from './pages/herofolder/WhyChooseSection';
import BannerSection from './pages/herofolder/BannerSection';
import ServicesSection from './pages/herofolder/ServicesSection';
import CaseStudiesSection from './pages/herofolder/CaseStudiesSection';
import TestimonialsSection from './pages/herofolder/TestimonialsSection';
import HowItWorksSection from './pages/herofolder/HowItWorksSection';
import PricingSection from './pages/herofolder/PricingSection';
import NewsletterSection from './pages/herofolder/NewsletterSection';
import BlogSection from './pages/herofolder/BlogSection';
import Footer from './pages/herofolder/Footer';

function MainLayout() {
  const { isDark } = useTheme();

  return (
    <div className="relative min-h-screen">
      {/* Global Background Grid Lines */}
      <div className="fixed inset-0 pointer-events-none flex justify-evenly z-0">
        <div className={`w-px h-full ${isDark ? 'bg-white-[0.04] bg-white/5' : 'bg-black/5'}`}></div>
        <div className={`w-px h-full ${isDark ? 'bg-white-[0.04] bg-white/5' : 'bg-black/5'}`}></div>
        <div className={`w-px h-full ${isDark ? 'bg-white-[0.04] bg-white/5' : 'bg-black/5'}`}></div>
        <div className={`w-px h-full ${isDark ? 'bg-white-[0.04] bg-white/5' : 'bg-black/5'}`}></div>
        <div className={`w-px h-full ${isDark ? 'bg-white-[0.04] bg-white/5' : 'bg-black/5'}`}></div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <HeroPage />
        <ExpertiseSection />
        <BrandsSection />
        <WhyChooseSection />
        <BannerSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <PricingSection />
        <NewsletterSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
