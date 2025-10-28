import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SummaryCards from './components/SummaryCards';
import FeaturesGrid from './components/FeaturesGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <HeroSection />
      <SummaryCards />
      <FeaturesGrid />
      <Footer />
    </div>
  );
}

export default App;
