import "./app.scss";
import AboutMe from "./components/about-me/AboutMe";
import Github from "./components/github/Github";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="about me" />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="github">
        <Github />
      </section>
      <section>
        <Parallax type="projects" />
      </section>

      <Portfolio />

      <section>
        <Contact />
      </section>
    </div>
  );
};

export default App;
