import Navbar from "./ui/components/navbar";
import Hero from "./ui/sections/hero";
import About from "./ui/sections/about";
import Skills from "./ui/sections/skill";
import Experience from "./ui/sections/experience";
import Projects from "./ui/sections/projects";
import Footer from "./ui/sections/footer";

export default function App() {
  return (
    <div className="bg-black text-gray-300 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
