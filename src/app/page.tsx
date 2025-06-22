import { ConfettiCard } from "@/components/confetti-card";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";
import { aboutData } from "@/data/about";
import { skillsData } from "@/data/skills";
import { projectsData } from "@/data/projects";
import { contactData } from "@/data/contact";
import { footerData } from "@/data/footer";

export default async function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl space-y-10 md:space-y-20">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-40">
        <ThemeToggle />
      </div>
      {/* Header */}
      <header>
        <ConfettiCard message="Welcome to my Portfolio" />
      </header>
      {/* Main Content */}
      <div className="mx-auto max-w-7xl">
        <AboutSection {...aboutData} />
        <SkillsSection {...skillsData} />
        <ProjectsSection {...projectsData} />
        <ContactSection {...contactData} />
        <Footer {...footerData} />
      </div>
    </div>
  );
}
