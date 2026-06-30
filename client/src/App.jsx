import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;