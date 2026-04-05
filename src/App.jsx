import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroPage from './pages/HeroPage';
import BrandsSection from './pages/herofolder/BrandsSection';
import ExpertiseSection from './pages/herofolder/ExpertiseSection';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <HeroPage />
        <ExpertiseSection />
        <BrandsSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
