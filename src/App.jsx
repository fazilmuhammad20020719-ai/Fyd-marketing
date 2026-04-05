import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroPage from './pages/HeroPage';
import BrandsSection from './pages/herofolder/BrandsSection';
import ExpertiseSection from './pages/herofolder/ExpertiseSection';

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
      </main>
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
