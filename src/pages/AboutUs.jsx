import React from 'react';
import AboutHero from './about/AboutHero';
import WhoWeAre from './about/WhoWeAre';
import OurTeam from './about/OurTeam';
import HowItWorks from './about/HowItWorks';

export default function AboutUs() {
  return (
    <div className="w-full flex-col min-h-screen pt-32 pb-20">
      <AboutHero />
      <WhoWeAre />
      <OurTeam />
      <HowItWorks />
    </div>
  );
}
