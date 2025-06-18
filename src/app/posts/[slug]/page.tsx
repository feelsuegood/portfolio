// import { getPost } from "@/lib/markdown";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";
// import Image from "next/image";

// type Props = {
//   params: Promise<{ slug: string }>;
// };

// type Post = {
//   title: string;
//   date: string;
//   contentHtml: string;
//   slug: string;
// };

// export default function PostPage() {
//   return <div>PostPage</div>;
// }

// export default async function PostPage({ params }: Props) {
//   const { slug } = await params;
//   const post = (await getPost(slug)) as Post;

//   return (
//     <main className="prose mx-auto p-8">
//       {/* <h1>{post.title}</h1>
//       <article dangerouslySetInnerHTML={{ __html: post.contentHtml }} /> */}
//       <h1>{post.title}</h1>
//       <ReactMarkdown
//         remarkPlugins={[remarkGfm]}
//         rehypePlugins={[rehypeRaw]}
//         components={{
//           img: ({ src = "", alt = "" }) => (
//             <Image
//               src={`/${src}`}
//               alt={alt}
//               width={800}
//               height={400}
//               className="rounded-lg"
//             />
//           ),
//         }}
//       >
//         {post.contentHtml}
//       </ReactMarkdown>
//     </main>
//   );
// }

import { getPortfolioData } from "@/lib/markdown";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

type Project = {
  title: string;
  links?: {
    liveDemo?: string;
    github?: string;
    demoVideo?: string;
  };
  description?: string;
  skills?: string;
  image?: string;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  // Check if this is the portfolio page
  if (slug === "portfolio") {
    const portfolioData = await getPortfolioData(slug);

    return (
      <div className="min-h-screen bg-background text-foreground">
        {/* Header with Joystick Icon */}
        <header className="p-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="text-6xl">🕹️</div>
            {/* <h1 className="text-4xl font-bold text-muted-foreground md:text-5xl"> */}
            <h1 className="text-4xl font-bold text-muted-foreground md:text-5xl">
              {portfolioData.frontmatter?.title ||
                "Welcome to my Dev Playground 🎯"}
            </h1>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-8">
          {/* About Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-primary">
                  {portfolioData.intro?.title || "Hello, I'm @feelsuegood."}
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  {portfolioData.intro?.description ? (
                    portfolioData.intro.description
                      .split("\n")
                      .map(
                        (paragraph: string, index: number) =>
                          paragraph.trim() && (
                            <p key={index}>{paragraph.trim()}</p>
                          ),
                      )
                  ) : (
                    // Fallback content
                    <>
                      <p>
                        I&apos;m a full-stack software developer with a deep
                        interest in AI-powered applications.
                      </p>
                      <p>
                        I&apos;ve built real-world projects that connect
                        frontend, backend, and cloud services with AI using
                        tools like TypeScript, React, Django, Node.js,
                        LangChain, and OpenAI.
                      </p>
                      <p>
                        I&apos;m committed to writing clean, maintainable code
                        and growing as part of a collaborative team. I love
                        building software that delivers real value to users.
                      </p>
                    </>
                  )}
                </div>

                {/* Contact and Links */}
                <div className="mt-8">
                  <p className="mb-4 text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Get in touch ✉️{" "}
                    </span>
                    <a
                      href={`mailto:${portfolioData.contact?.email || "feelsuegood@gmail.com"}`}
                      className="text-primary transition-colors hover:underline"
                    >
                      {portfolioData.contact?.email || "feelsuegood@gmail.com"}
                    </a>
                  </p>
                  <div className="flex gap-4 text-muted-foreground">
                    <a
                      href={
                        portfolioData.contact?.links?.github ||
                        "https://github.com/feelsuegood"
                      }
                      className="transition-colors hover:text-primary"
                    >
                      🔒 Github
                    </a>
                    <span>•</span>
                    <a
                      href={
                        portfolioData.contact?.links?.linkedin ||
                        "https://www.linkedin.com/in/feelsuegood"
                      }
                      className="transition-colors hover:text-primary"
                    >
                      👤 LinkedIn
                    </a>
                    <span>•</span>
                    <a
                      href={
                        portfolioData.contact?.links?.seek ||
                        "https://www.seek.com.au/profile/sue-jeong-XGD5RSYYyc"
                      }
                      className="transition-colors hover:text-primary"
                    >
                      ➡️ Seek
                    </a>
                  </div>
                </div>
              </div>

              {/* Avatar */}
              <div className="flex justify-center lg:justify-end">
                <div className="h-80 w-80 overflow-hidden rounded-full border-4 border-border">
                  <Image
                    src={`/${portfolioData.contact?.avatar || "images/avatar.png"}`}
                    alt="Profile Avatar"
                    width={320}
                    height={320}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="mb-8 border-b border-border pb-4 text-3xl font-bold text-foreground">
              Skills
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Programming Languages */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-primary">
                  Programming Languages
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {(portfolioData.skills?.programmingLanguages || []).map(
                    (skill: string, index: number) => (
                      <li key={index}>• {skill}</li>
                    ),
                  )}
                </ul>
              </div>

              {/* Front End */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-primary">
                  Front End
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {(portfolioData.skills?.frontEnd || []).map(
                    (skill: string, index: number) => (
                      <li key={index}>• {skill}</li>
                    ),
                  )}
                </ul>

                <h4 className="mt-6 mb-3 text-lg font-semibold text-primary underline">
                  Mobile
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  {(portfolioData.skills?.mobile || []).map(
                    (skill: string, index: number) => (
                      <li key={index}>• {skill}</li>
                    ),
                  )}
                </ul>
              </div>

              {/* Back End */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-primary">
                  Back End
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {(portfolioData.skills?.backEnd || []).map(
                    (skill: string, index: number) => (
                      <li key={index}>• {skill}</li>
                    ),
                  )}
                </ul>
              </div>

              {/* Databases */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-primary">
                  Databases
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {(portfolioData.skills?.databases || []).map(
                    (skill: string, index: number) => (
                      <li key={index}>• {skill}</li>
                    ),
                  )}
                </ul>
              </div>

              {/* Cloud & DevOps */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-primary">
                  Cloud & DevOps
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {(portfolioData.skills?.cloudDevOps || []).map(
                    (skill: string, index: number) => (
                      <li key={index}>• {skill}</li>
                    ),
                  )}
                </ul>
              </div>

              {/* AI & Tools */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-primary">
                  AI & Tools
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {(portfolioData.skills?.aiTools || []).map(
                    (skill: string, index: number) => (
                      <li key={index}>• {skill}</li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-16">
            <h2 className="mb-8 border-b border-border pb-4 text-3xl font-bold text-foreground">
              Projects
            </h2>

            {(portfolioData.projects || []).map(
              (project: Project, index: number) => (
                <div
                  key={index}
                  className={`mb-12 ${index < (portfolioData.projects?.length || 0) - 1 ? "border-b border-muted pb-12" : ""}`}
                >
                  <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                    <div>
                      <h3 className="mb-4 text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <div className="mb-4 flex flex-wrap gap-4 text-sm">
                        {project.links?.liveDemo && (
                          <>
                            <a
                              href={project.links.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary transition-colors hover:underline"
                            >
                              🔗 Live Demo
                            </a>
                            <span className="text-muted-foreground">•</span>
                          </>
                        )}
                        {project.links?.demoVideo && (
                          <>
                            <a
                              href={project.links.demoVideo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary transition-colors hover:underline"
                            >
                              Demo Video
                            </a>
                            <span className="text-muted-foreground">•</span>
                          </>
                        )}
                        {project.links?.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary transition-colors hover:underline"
                          >
                            Github Repo
                          </a>
                        )}
                      </div>
                      <div className="space-y-4 text-muted-foreground">
                        {project.description && (
                          <p>{project.description.trim()}</p>
                        )}
                        {project.skills && (
                          <p>
                            <span className="font-semibold text-foreground">
                              Skills:
                            </span>{" "}
                            {project.skills}
                          </p>
                        )}
                      </div>
                    </div>
                    {project.image && (
                      <div className="flex justify-center">
                        <a
                          href={project.links?.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-transform hover:scale-105"
                        >
                          <Image
                            src={`/${project.image}`}
                            alt={`${project.title} Project`}
                            width={400}
                            height={300}
                            className="rounded-lg border border-border transition-colors hover:border-primary"
                          />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ),
            )}
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="text-center">
              <h2 className="mb-8 text-3xl font-bold text-foreground">
                If you&apos;d like to connect,
                <br />
                please get in touch →
              </h2>

              <div className="inline-block rounded-lg border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <a
                    href={`mailto:${portfolioData.contact?.email || "feelsuegood@gmail.com"}`}
                    className="text-xl text-primary transition-colors hover:underline"
                  >
                    {portfolioData.contact?.email || "feelsuegood@gmail.com"}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-border py-8 text-center">
            <div className="inline-block rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
              ©2025 feelsuegood
            </div>
          </footer>
        </div>
      </div>
    );
  }

  // For other posts, use the original markdown rendering
  const { getPost } = await import("@/lib/markdown");
  const post = await getPost(slug);

  return (
    <main className="prose mx-auto p-8">
      <h1>{post.slug}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  );
}
