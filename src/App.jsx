import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
