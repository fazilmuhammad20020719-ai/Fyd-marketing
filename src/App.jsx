import Navbar from './components/Navbar';
import HeroPage from './pages/HeroPage';

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0d0d0d]">
        <HeroPage />
      </main>
    </>
  );
}

export default App;
