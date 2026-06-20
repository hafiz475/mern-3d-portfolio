import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Journal } from './components/Journal';
import { Explorations } from './components/Explorations';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-text-primary selection:bg-text-primary/25 selection:text-text-primary md:cursor-none">
      {/* Custom smoothing cursor pointer */}
      <CustomCursor />

      <Hero />
      <About />
      <Features />
      <Journal />
      <Explorations />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
