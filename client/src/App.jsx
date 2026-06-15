import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import FreelancingWorks from "./components/FreelancingWorks";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

function App() {
  return (
    /* 
       1. Changed <> to a <div> 
       2. Added 'bg-white text-black' for light mode
       3. Added 'dark:bg-[#050816] dark:text-white' for dark mode
    */
 
       <div className="min-h-screen transition-colors duration-500 bg-slate-50 dark:bg-[#050816] text-slate-900 dark:text-white">
      
      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />
        <Journey />
        <Projects />
        <FreelancingWorks />
        <Interests />
        <Contact />
      </main>
      
    </div>
  );
}

export default App;
