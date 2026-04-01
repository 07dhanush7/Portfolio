import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar";
import ResumeModal from "./Components/ResumeModal";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import InternshipSection from "./sections/InternshipSection";
import ContactSection from "./sections/ContactSection";
import {
  aboutCards,
  contactDetails,
  internships,
  profile,
  projects,
  services,
} from "./data/portfolioData";

const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-[#020617] text-white">
      
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundColor: "#020617",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
        <div className="absolute -left-16 top-1/3 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-400/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main>
          <HeroSection profile={profile} onOpenResume={() => setIsResumeOpen(true)} />
          <AboutSection profile={profile} aboutCards={aboutCards} />
          <ServicesSection services={services} />
          <ProjectsSection projects={projects} />
          <InternshipSection internships={internships} />
          <ContactSection contactDetails={contactDetails} />
        </main>

        <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} {profile.name}. Crafted with React and a focus on polished UX.
          </p>
        </footer>
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "rgba(12, 10, 18, 0.92)",
            color: "#fff",
            border: "1px solid rgba(216, 180, 254, 0.22)",
            backdropFilter: "blur(12px)",
          },
        }}
      />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default App;

