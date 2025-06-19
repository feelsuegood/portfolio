import { FlipText } from "@/components/ui/flip-text";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl space-y-10 bg-background text-foreground md:space-y-20">
      {/* Header with Joystick Icon */}
      <header className="flex gap-1 text-2xl font-bold text-primary md:gap-2 md:text-5xl">
        <span>🕹️</span>
        <FlipText>Welcome to my Portfolio</FlipText>
      </header>

      <div className="mx-auto max-w-7xl">
        {/* About Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 space-y-10 lg:grid-cols-2 lg:gap-10">
            <div className="flex h-full flex-col gap-5 lg:justify-between">
              <h2 className="text-xl font-bold text-foreground md:text-3xl">
                Hello, I&apos;m @feelsuegood.
              </h2>
              <div className="text-md space-y-4 text-muted-foreground md:text-lg">
                <p>
                  I&apos;m a full-stack software developer with a deep interest
                  in AI-powered applications.
                </p>
                <p>
                  I&apos;ve built real-world projects that connect frontend,
                  backend, and cloud services with AI using tools like
                  TypeScript, React, Django, Node.js, LangChain, and OpenAI.
                </p>
                <p>
                  I&apos;m committed to writing clean, maintainable code and
                  growing as part of a collaborative team. I love building
                  software that delivers real value to users.
                </p>
              </div>

              {/* Contact and Links */}
              <div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary/80">
                    Get in touch ✉️{" "}
                  </span>
                  <a
                    href="mailto:feelsuegood@gmail.com"
                    className="text-primary/80 hover:underline"
                  >
                    feelsuegood@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Avatar */}
            <div className="flex flex-col items-center justify-center gap-10 lg:justify-start">
              <div className="h-80 w-80 overflow-hidden rounded-full border-1 border-border">
                <Image
                  src="/images/avatar.png"
                  alt="Profile Avatar"
                  width={320}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex gap-1 text-primary">
                <a
                  href="https://github.com/feelsuegood"
                  className="transition-colors hover:text-primary"
                >
                  👩🏻‍💻 Github
                </a>
                <span>•</span>
                <a
                  href="https://www.linkedin.com/in/feelsuegood"
                  className="transition-colors hover:text-primary"
                >
                  👤 LinkedIn
                </a>
                <span>•</span>
                <a
                  href="https://www.seek.com.au/profile/sue-jeong-XGD5RSYYyc"
                  className="transition-colors hover:text-primary"
                >
                  ➡️ Seek
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="mb-8 border-b border-border pb-4 text-3xl font-bold text-foreground">
            Skills
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Programming Languages */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-primary">
                Programming Languages
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Python</li>
                <li>• TypeScript</li>
                <li>• JavaScript</li>
                <li>• Dart</li>
                <li>• PHP</li>
                <li>• SQL</li>
                <li>• C#</li>
                <li>• HTML5</li>
                <li>• CSS3</li>
              </ul>
            </div>

            {/* Front End */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-primary">
                Front End
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• React</li>
                <li>• Next.js</li>
                <li>• Remix</li>
                <li>• Tailwind CSS</li>
                <li>• Chakra UI</li>
              </ul>

              <h4 className="mt-6 mb-3 text-lg font-semibold text-primary">
                Mobile
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• React Native</li>
                <li>• Flutter</li>
              </ul>
            </div>

            {/* Back End */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-primary">
                Back End
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Node.js</li>
                <li>• Express</li>
                <li>• Django</li>
                <li>• NestJS</li>
                <li>• GraphQL</li>
                <li>• Flask</li>
                <li>• Apollo GraphQL</li>
              </ul>
            </div>

            {/* Databases */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-primary">
                Databases
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• PostgreSQL</li>
                <li>• MySQL</li>
                <li>• MongoDB</li>
                <li>• Firebase</li>
                <li>• Supabase</li>
                <li>• Pinecone</li>
                <li>• Redis</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-primary">
                Cloud & DevOps
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• AWS (EC2, S3, Lambda)</li>
                <li>• Azure (Function App, Web App)</li>
                <li>• Docker</li>
                <li>• GitHub Action</li>
                <li>• Git & GitHub</li>
              </ul>
            </div>

            {/* AI & Tools */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-primary">
                AI & Tools
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• OpenAI</li>
                <li>• Langchain</li>
                <li>• Azure AI Foundry</li>
                <li>• Amazon Bedrock</li>
                <li>• Ollama</li>
                <li>• Notion</li>
                <li>• JIRA</li>
                <li>• Confluence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="mb-8 border-b border-border pb-4 text-3xl font-bold text-foreground">
            Projects
          </h2>

          {/* Suemake Project */}
          <div className="mb-12 border-b border-muted pb-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                  🤩 Suemake
                </h3>
                <div className="mb-4 flex gap-4 text-sm">
                  <a
                    href="https://suemake.vercel.app/"
                    className="text-primary transition-colors hover:underline"
                  >
                    🔗 Live Demo
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://github.com/feelsuegood/suemake"
                    className="text-primary transition-colors hover:underline"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Build a full-stack web application with Remix, Supabase,
                    featuring pages for user authentication, community
                    interaction, product listings, and user management.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Skills:
                    </span>{" "}
                    Full-Stack Development • Remix • Supabase • React • REST
                    APIs • Tailwind CSS • TypeScript • JavaScript
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://suemake.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/suemake-thumb.png"
                    alt="Suemake Project"
                    width={400}
                    height={300}
                    className="rounded-lg border border-border"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* GPT Assistants Project */}
          <div className="mb-12 border-b border-muted pb-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                  🤖 GPT Assistants
                </h3>
                <div className="mb-4 flex flex-wrap gap-4 text-sm">
                  <a
                    href="https://feelsuegood-gpt-assistants-fullstack-home-deploy-pvpuhw.streamlit.app"
                    className="text-primary transition-colors hover:underline"
                  >
                    🔗 Live Demo
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://www.youtube.com/watch?v=IJ0SyFA99dw"
                    className="text-primary transition-colors hover:underline"
                  >
                    Demo Video
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://github.com/feelsuegood/gpt-assistants-fullstack"
                    className="text-primary transition-colors hover:underline"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Built a full-stack AI application using Streamlit,
                    integrating LangChain and OpenAI GPT models to develop a
                    suite of intelligent tools for document analysis, private
                    data management, content-based quizzes, customer support
                    automation, meeting transcription, financial research.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Skills:
                    </span>{" "}
                    Full-Stack Development • LangChain • OpenAI • Streamlit •
                    Whisper • Hugging Face • Pinecone • FastAPI • Azure AI
                    Foundry • Amazon Bedrock
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://feelsuegood-gpt-assistants-fullstack-home-deploy-pvpuhw.streamlit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/gpt-assistants-thumb.png"
                    alt="GPT Assistants Project"
                    width={400}
                    height={300}
                    className="rounded-lg border border-border"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Sueweetstay Project */}
          <div className="mb-12 border-b border-muted pb-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                  💌 Sueweetstay
                </h3>
                <div className="mb-4 flex gap-4 text-sm">
                  <a
                    href="https://www.sueweetstay.com/"
                    className="text-primary transition-colors hover:underline"
                  >
                    🔗 Live Demo
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://github.com/feelsuegood/sueweetstay-fullstack"
                    className="text-primary transition-colors hover:underline"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Developed a full-stack web application modelled after
                    Airbnb, featuring a Django REST API backend managed with
                    Poetry, and a React + TypeScript frontend using Chakra UI,
                    React Query, and React Router.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Skills:
                    </span>{" "}
                    Full-Stack Development • Django • Apollo GraphQL • React •
                    TypeScript • Docker • DevOps • REST APIs • GraphQL •
                    Object-Oriented Programming (OOP)
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.sueweetstay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/sueweetstay-thumb.png"
                    alt="Sueweetstay Project"
                    width={400}
                    height={300}
                    className="rounded-lg border border-border"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Switter Project */}
          <div className="mb-12 border-b border-muted pb-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                  🍭 Switter
                </h3>
                <div className="mb-4 flex flex-wrap gap-4 text-sm">
                  <a
                    href="https://letsue-firebase.web.app/"
                    className="text-primary transition-colors hover:underline"
                  >
                    🔗 Live Demo
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://www.youtube.com/watch?v=5TAbcZB03z4"
                    className="text-primary transition-colors hover:underline"
                  >
                    Demo Video
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://github.com/feelsuegood/letsue-firebase"
                    className="text-primary transition-colors hover:underline"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Developed a full-stack Twitter/X-inspired social media app
                    using React, TypeScript, and Firebase, featuring real-time
                    updates, user authentication, and image uploads.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Skills:
                    </span>{" "}
                    Firebase • React • Cloud Firestore • TypeScript • JavaScript
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://letsue-firebase.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/switter-thumb.png"
                    alt="Switter Project"
                    width={400}
                    height={300}
                    className="rounded-lg border border-border"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Let'Sue Watch Project */}
          <div className="mb-12 border-b border-muted pb-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                  📺 Let&apos;sue Watch
                </h3>
                <div className="mb-4 flex gap-4 text-sm">
                  <a
                    href="https://suetube.onrender.com/"
                    className="text-primary transition-colors hover:underline"
                  >
                    🔗 Live Demo
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://github.com/feelsuegood/letsuewatch"
                    className="text-primary transition-colors hover:underline"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Developed a full-stack server-rendered web application
                    inspired by YouTube, using Node.js, Express, MongoDB, and
                    Pug templates.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Skills:
                    </span>{" "}
                    Full-Stack Development • Express • Node.js • Babel.js •
                    MongoDB • SCSS • Pug • Docker • REST APIs • DevOps
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://suetube.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/letsuewatch-thumb.png"
                    alt="Let'sue Watch Project"
                    width={400}
                    height={300}
                    className="rounded-lg border border-border"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Suementum Project */}
          <div className="mb-12 border-b border-muted pb-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                  📣 Suementum
                </h3>
                <div className="mb-4 flex gap-4 text-sm">
                  <a
                    href="https://feelsuegood.github.io/letsue-vanillajs/"
                    className="text-primary transition-colors hover:underline"
                  >
                    🔗 Live Demo
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://github.com/feelsuegood/letsue-vanillajs"
                    className="text-primary transition-colors hover:underline"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Developed a Momentum-style personal dashboard with live
                    time, weather, to-do tracking, and daily quotes using HTML5,
                    CSS3, and Vanilla JavaScript.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Skills:
                    </span>{" "}
                    HTML5 • CSS3 • Vanilla JavaScript • AJAX
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://feelsuegood.github.io/letsue-vanillajs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/suementum-thumb.png"
                    alt="Suementum Project"
                    width={400}
                    height={300}
                    className="rounded-lg border border-border"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Messenger UI Project */}
          <div className="mb-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                  📮 Messenger UI
                </h3>
                <div className="mb-4 flex flex-wrap gap-4 text-sm">
                  <a
                    href="https://feelsuegood.github.io/letsue-html-css/"
                    className="text-primary transition-colors hover:underline"
                  >
                    🔗 Live Demo
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://www.youtube.com/watch?v=yXRKOXc_3xo"
                    className="text-primary transition-colors hover:underline"
                  >
                    Demo Video
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://github.com/feelsuegood/letsue-html-css"
                    className="text-primary transition-colors hover:underline"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Focused on implementing modern CSS features and responsive
                    design principles to create a pixel-perfect clone of the
                    popular messaging platform.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Skills:
                    </span>{" "}
                    HTML5 • CSS3
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://feelsuegood.github.io/letsue-html-css/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/cacao-thumb.png"
                    alt="Messenger UI Project"
                    width={400}
                    height={300}
                    className="rounded-lg border border-border"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 text-center md:grid-cols-2">
            <h2 className="mb-8 text-3xl font-bold text-foreground">
              If you&apos;d like to connect,
              <br />
              please get in touch →
            </h2>

            <div className="flex justify-center rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✉️</span>
                <a
                  href="mailto:feelsuegood@gmail.com"
                  className="text-xl text-primary transition-colors hover:underline"
                >
                  feelsuegood@gmail.com
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
