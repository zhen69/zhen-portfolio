import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SkillsSection from "./components/Skills";
import ExperienceSection from "./components/Experience";
import ProjectSection from "./components/Project";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <main className="scroll-pt-16">
        <div className="flex flex-col relative h-full">
          <Navbar />
          <Banner />
        </div>
        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
    </BrowserRouter>
  );
}
