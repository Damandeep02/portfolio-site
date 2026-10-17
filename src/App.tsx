import Nav from "./components/Nav";
import Starfield from "./components/Starfield";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Starfield />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Interests />
        <Contact />
      </main>
    </>
  );
}

export default App;
