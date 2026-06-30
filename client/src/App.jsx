import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import HowItWorks from "./components/home/HowItWorks";
import Stats from "./components/home/Stats";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
    </div>
  );
}

export default App;