import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Research />
        <Skills />
        <Stats />
        <Interests />
        <Contact />
      </main>
    </>
  );
}

export default App;
