import Image from "next/image";

interface AboutSectionProps {
  title: string;
  description: string[];
  email: string;
  avatarSrc: string;
  avatarAlt: string;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
}

export function AboutSection({
  title,
  description,
  email,
  avatarSrc,
  avatarAlt,
  githubUrl,
  linkedinUrl,
  instagramUrl,
}: AboutSectionProps) {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 space-y-10 lg:grid-cols-2 lg:gap-10">
        <div className="flex h-full flex-col gap-5 lg:justify-between">
          <h2 className="text-primary text-xl font-bold md:text-4xl">
            {title}
          </h2>
          <div className="text-md text-muted-foreground space-y-4 md:text-lg">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Contact and Links */}
          <div>
            <p className="text-foreground font-semibold">
              <span>Get in touch ✉️ </span>
              <a
                href={`mailto:${email}`}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {email}
              </a>
            </p>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex flex-col items-center justify-center gap-10 lg:justify-start">
          <div className="border-border h-80 w-80 overflow-hidden rounded-full border-1">
            <Image
              src={avatarSrc}
              alt={avatarAlt}
              width={320}
              height={320}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-foreground flex text-sm">
            <a
              href={githubUrl}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              👩🏻‍💻 Github
            </a>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <a
              href={linkedinUrl}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              👤 LinkedIn
            </a>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <a
              href={instagramUrl}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
