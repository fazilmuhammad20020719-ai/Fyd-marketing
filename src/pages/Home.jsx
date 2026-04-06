import HeroPage from './HeroPage';
import BrandsSection from './herofolder/BrandsSection';
import ExpertiseSection from './herofolder/ExpertiseSection';
import WhyChooseSection from './herofolder/WhyChooseSection';
import BannerSection from './herofolder/BannerSection';
import ServicesSection from './herofolder/ServicesSection';
import CaseStudiesSection from './herofolder/CaseStudiesSection';
import TestimonialsSection from './herofolder/TestimonialsSection';
import HowItWorksSection from './herofolder/HowItWorksSection';
import PricingSection from './herofolder/PricingSection';
import NewsletterSection from './herofolder/NewsletterSection';
import BlogSection from './herofolder/BlogSection';

export default function Home() {
  return (
    <>
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
    </>
  );
}
