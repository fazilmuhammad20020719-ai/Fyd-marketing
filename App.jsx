import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroPage from './pages/HeroPage';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <HeroPage />
      </main>
    </ThemeProvider>
  );
}

export default App;
