import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import BackgroundEffects from "./effects/BackgroundEffects";
import CursorGlow from "./effects/CursorGlow";
import MouseSpotlight from "./effects/MouseSpotlight";
import GridOverlay from "./effects/GridOverlay";
import ScrollProgress from "./effects/ScrollProgress";

import PageTransition from "./ux/PageTransition";
import SmoothScroll from "./ux/SmoothScroll";
import ScrollToTop from "./ux/ScrollToTop";

function App() {
  return (
    <>
      {/* Global Effects */}

      <ScrollProgress />
      <CursorGlow />
      <MouseSpotlight />
      <GridOverlay />
      <BackgroundEffects />

      <PageTransition>
        <SmoothScroll>

          <div className="bg-[#0C0C0C] text-white overflow-x-hidden">

            <Navbar />

            <main>

              <section id="home">
                <Hero />
              </section>

              <section id="marquee">
                <Marquee />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="services">
                <Services />
              </section>

              <section id="projects">
                <Projects />
              </section>

              <section id="education">
                <Education />
              </section>

              <section id="contact">
                <Contact />
              </section>

            </main>

            <Footer />

            <ScrollToTop />

          </div>

        </SmoothScroll>
      </PageTransition>
    </>
  );
}

export default App;