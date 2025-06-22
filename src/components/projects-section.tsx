import { ProjectCard } from "./project-card";

interface ProjectLink {
  url: string;
  label: string;
}

interface Project {
  emoji: string;
  title: string;
  links: ProjectLink[];
  description: string;
  skills: string;
  imageSrc: string;
  imageAlt: string;
}

interface ProjectsSectionProps {
  title: string;
  projects: Project[];
}

export function ProjectsSection({ title, projects }: ProjectsSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="border-border text-foreground mb-8 border-b pb-4 text-3xl font-bold">
        {title}
      </h2>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          isLast={index === projects.length - 1}
        />
      ))}
    </section>
  );
}
