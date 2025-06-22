import Image from "next/image";
import type { IProject } from "@/data/types";

export function ProjectCard({
  emoji,
  title,
  links,
  description,
  skills,
  imageSrc,
  imageAlt,
  isLast = false,
}: IProject) {
  return (
    <div
      className={`${!isLast ? "border-muted mb-12 border-b pb-12" : "mb-12"}`}
    >
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-primary mb-4 flex items-center gap-2 text-2xl font-bold">
            {emoji} {title}
          </h3>
          <div className="mb-4 flex flex-wrap gap-1.5 text-sm">
            {links.map((link, index) => (
              <div key={index} className="flex items-center">
                <a
                  href={link.url}
                  className="text-foreground transition-colors hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
                {index < links.length - 1 && (
                  <span className="text-muted-foreground ml-1.5">•</span>
                )}
              </div>
            ))}
          </div>
          <div className="text-muted-foreground space-y-4">
            <p>{description}</p>
            <p>
              <span className="font-semibold">Skills:</span> {skills}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href={links[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block transition-transform hover:scale-105"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={300}
              className="border-border rounded-lg border"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
