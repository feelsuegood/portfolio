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

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  // Check if this is the portfolio page
  if (slug === "portfolio") {
    const portfolioData = await getPortfolioData(slug);

    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header with Joystick Icon */}
        <header className="p-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="text-6xl">🕹️</div>
            <h1 className="text-4xl font-bold text-gray-200 md:text-5xl">
              {portfolioData.frontmatter.title}
            </h1>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-8">
          {/* About Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-purple-400">
                  {portfolioData.intro.title}
                </h2>
                <div className="space-y-4 text-lg text-gray-300">
                  {portfolioData.intro.description
                    .split("\n")
                    .map(
                      (paragraph: string, index: number) =>
                        paragraph.trim() && (
                          <p key={index}>{paragraph.trim()}</p>
                        ),
                    )}
                </div>

                {/* Contact and Links */}
                <div className="mt-8">
                  <p className="mb-4 text-gray-300">
                    <span className="font-semibold text-white">
                      Get in touch ✉️{" "}
                    </span>
                    <a
                      href={`mailto:${portfolioData.contact.email}`}
                      className="text-purple-400 hover:underline"
                    >
                      {portfolioData.contact.email}
                    </a>
                  </p>
                  <div className="flex gap-4 text-gray-400">
                    <a
                      href={portfolioData.contact.links.github}
                      className="hover:text-purple-400"
                    >
                      🔒 Github
                    </a>
                    <span>•</span>
                    <a
                      href={portfolioData.contact.links.linkedin}
                      className="hover:text-purple-400"
                    >
                      👤 LinkedIn
                    </a>
                    <span>•</span>
                    <a
                      href={portfolioData.contact.links.seek}
                      className="hover:text-purple-400"
                    >
                      ➡️ Seek
                    </a>
                  </div>
                </div>
              </div>

              {/* Avatar */}
              <div className="flex justify-center lg:justify-end">
                <div className="h-80 w-80 overflow-hidden rounded-full border-4 border-gray-700">
                  <Image
                    src={`/${portfolioData.contact.avatar}`}
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
            <h2 className="mb-8 border-b border-gray-700 pb-4 text-3xl font-bold text-white">
              Skills
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Programming Languages */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-purple-400">
                  Programming Languages
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {portfolioData.skills.programmingLanguages.map(
                    (skill: string, index: number) => (
                      <li key={index}>• {skill}</li>
                    ),
                  )}
                </ul>
              </div>

              {/* Front End */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-purple-400">
                  Front End
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {portfolioData.skills.frontEnd.map(
                    (skill: string, index: number) => (
                      <li key={index}>• {skill}</li>
                    ),
                  )}
                </ul>

                <h4 className="mt-6 mb-3 text-lg font-semibold text-purple-400 underline">
                  Mobile
                </h4>
                <ul className="space-y-2 text-gray-300">
                  {portfolioData.skills.mobile.map(
                    (skill: string, index: number) => (
                      <li key={index}>• {skill}</li>
                    ),
                  )}
                </ul>
              </div>

              {/* Back End */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-purple-400">
                  Back End
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {portfolioData.skills.backEnd.map(
                    (skill: string, index: number) => (
                      <li key={index}>• {skill}</li>
                    ),
                  )}
                </ul>
              </div>

              {/* Databases */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-purple-400">
                  Databases
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {portfolioData.skills.databases.map(
                    (skill: string, index: number) => (
                      <li key={index}>• {skill}</li>
                    ),
                  )}
                </ul>
              </div>

              {/* Cloud & DevOps */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-purple-400">
                  Cloud & DevOps
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {portfolioData.skills.cloudDevOps.map(
                    (skill: string, index: number) => (
                      <li key={index}>• {skill}</li>
                    ),
                  )}
                </ul>
              </div>

              {/* AI & Tools */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-purple-400">
                  AI & Tools
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {portfolioData.skills.aiTools.map(
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
            <h2 className="mb-8 border-b border-gray-700 pb-4 text-3xl font-bold text-white">
              Projects
            </h2>

            {portfolioData.projects.map((project: any, index: number) => (
              <div
                key={index}
                className={`mb-12 ${index < portfolioData.projects.length - 1 ? "border-b border-gray-800 pb-12" : ""}`}
              >
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="mb-4 flex flex-wrap gap-4 text-sm">
                      {project.links.liveDemo && (
                        <>
                          <a
                            href={project.links.liveDemo}
                            className="text-purple-400 hover:underline"
                          >
                            🔗 Live Demo
                          </a>
                          <span className="text-gray-500">•</span>
                        </>
                      )}
                      {project.links.demoVideo && (
                        <>
                          <a
                            href={project.links.demoVideo}
                            className="text-purple-400 hover:underline"
                          >
                            Demo Video
                          </a>
                          <span className="text-gray-500">•</span>
                        </>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="text-purple-400 hover:underline"
                        >
                          Github Repo
                        </a>
                      )}
                    </div>
                    <div className="space-y-4 text-gray-300">
                      <p>{project.description.trim()}</p>
                      {project.skills && (
                        <p>
                          <span className="font-semibold">Skills:</span>{" "}
                          {project.skills}
                        </p>
                      )}
                    </div>
                  </div>
                  {project.image && (
                    <div className="flex justify-center">
                      <Image
                        src={`/${project.image}`}
                        alt={`${project.title} Project`}
                        width={400}
                        height={300}
                        className="rounded-lg border border-gray-700"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="text-center">
              <h2 className="mb-8 text-3xl font-bold text-white">
                If you&apos;d like to connect,
                <br />
                please get in touch →
              </h2>

              <div className="inline-block rounded-lg border border-gray-700 bg-gray-800 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="text-xl text-purple-400 hover:underline"
                  >
                    {portfolioData.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-gray-800 py-8 text-center">
            <div className="inline-block rounded-full bg-purple-900/50 px-4 py-2 text-purple-300">
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
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  );
}
