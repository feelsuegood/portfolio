import { ConfettiCard } from "@/components/confetti-card";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl space-y-10 md:space-y-20">
      {/* Header */}
      <header>
        <ConfettiCard message="Welcome to my Portfolio" />
      </header>

      <div className="mx-auto max-w-7xl">
        {/* About Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 space-y-10 lg:grid-cols-2 lg:gap-10">
            <div className="flex h-full flex-col gap-5 lg:justify-between">
              <h2 className="text-primary text-xl font-bold md:text-4xl">
                Hello, I&apos;m @feelsuegood.
              </h2>
              <div className="text-md text-muted-foreground space-y-4 md:text-lg">
                <p>
                  I&apos;m a software developer/engineer with a deep interest in
                  AI-powered applications.
                </p>
                <p>
                  I&apos;ve built real-world full-stack applications that
                  connect frontend, backend, and cloud services with AI using
                  tools like TypeScript, React, Django, Node.js, LangChain, and
                  OpenAI.
                </p>
                <p>
                  I am currently working on PHP, WordPress, Vue.js, and Laravel
                  to expand my development skills and gain flexibility in both
                  backend and CMS-based projects.
                </p>
                <p>
                  I&apos;m committed to writing clean, maintainable code and
                  growing as part of a collaborative team. I love building
                  software that delivers real value to users.
                </p>
              </div>

              {/* Contact and Links */}
              <div>
                <p className="text-foreground font-semibold">
                  <span>Get in touch ✉️ </span>
                  <a
                    href="mailto:feelsuegood@gmail.com"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    feelsuegood@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Avatar */}
            <div className="flex flex-col items-center justify-center gap-10 lg:justify-start">
              <div className="border-border h-80 w-80 overflow-hidden rounded-full border-1">
                <Image
                  src="/images/avatar.png"
                  alt="Profile Avatar"
                  width={320}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-foreground flex gap-2">
                <span>👩🏻‍💻 </span>
                <a
                  href="https://github.com/feelsuegood"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <span> • 👤 </span>
                <a
                  href="https://www.linkedin.com/in/feelsuegood"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <span> • 📸 </span>
                <a
                  href="https://www.instagram.com/feelsuegood"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="border-border text-foreground mb-8 border-b pb-4 text-3xl font-bold">
            Skills
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Programming Languages */}
            <div>
              <h3 className="text-primary mb-4 text-xl font-semibold">
                Programming Languages
              </h3>
              <ul className="text-muted-foreground space-y-2">
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
              <h3 className="text-primary mb-4 text-xl font-semibold">
                Front End
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• React</li>
                <li>• Next.js</li>
                <li>• Remix</li>
                <li>• Tailwind CSS</li>
                <li>• Chakra UI</li>
              </ul>

              <h4 className="text-primary mt-6 mb-3 text-lg font-semibold">
                Mobile
              </h4>
              <ul className="text-muted-foreground space-y-2">
                <li>• React Native</li>
                <li>• Flutter</li>
              </ul>
            </div>

            {/* Back End */}
            <div>
              <h3 className="text-primary mb-4 text-xl font-semibold">
                Back End
              </h3>
              <ul className="text-muted-foreground space-y-2">
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
              <h3 className="text-primary mb-4 text-xl font-semibold">
                Databases
              </h3>
              <ul className="text-muted-foreground space-y-2">
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
              <h3 className="text-primary mb-4 text-xl font-semibold">
                Cloud & DevOps
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• AWS (EC2, S3, Lambda)</li>
                <li>• Azure (Function App, Web App)</li>
                <li>• Docker</li>
                <li>• GitHub Action</li>
                <li>• Git & GitHub</li>
              </ul>
            </div>

            {/* AI & Tools */}
            <div>
              <h3 className="text-primary mb-4 text-xl font-semibold">
                AI & Tools
              </h3>
              <ul className="text-muted-foreground space-y-2">
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
          <h2 className="border-border text-foreground mb-8 border-b pb-4 text-3xl font-bold">
            Projects
          </h2>

          {/* Suemake Project */}
          <div className="border-muted mb-12 border-b pb-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-primary mb-4 flex items-center gap-2 text-2xl font-bold">
                  🤩 Suemake
                </h3>
                <div className="mb-4 flex gap-1.5 text-sm">
                  <a
                    href="https://suemake.vercel.app/"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 Live Demo
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://github.com/feelsuegood/suemake"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Build a full-stack web application with Remix, Supabase,
                    featuring pages for user authentication, community
                    interaction, product listings, and user management.
                  </p>
                  <p>
                    <span className="font-semibold">Skills:</span> Full-Stack
                    Development • Remix • Supabase • React • REST APIs •
                    Tailwind CSS • TypeScript • JavaScript
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
                    className="border-border rounded-lg border"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* GPT Assistants Project */}
          <div className="border-muted mb-12 border-b pb-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-primary mb-4 flex items-center gap-2 text-2xl font-bold">
                  🤖 GPT Assistants
                </h3>
                <div className="mb-4 flex flex-wrap gap-1.5 text-sm">
                  <a
                    href="https://feelsuegood-gpt-assistants-fullstack-home-deploy-pvpuhw.streamlit.app"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 Live Demo
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://www.youtube.com/watch?v=IJ0SyFA99dw"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo Video
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://github.com/feelsuegood/gpt-assistants-fullstack"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Built a full-stack AI application using Streamlit,
                    integrating LangChain and OpenAI GPT models to develop a
                    suite of intelligent tools for document analysis, private
                    data management, content-based quizzes, customer support
                    automation, meeting transcription, financial research.
                  </p>
                  <p>
                    <span className="font-semibold">Skills:</span> Full-Stack
                    Development • LangChain • OpenAI • Streamlit • Whisper •
                    Hugging Face • Pinecone • FastAPI • Azure AI Foundry •
                    Amazon Bedrock
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
                    className="border-border rounded-lg border"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Sueweetstay Project */}
          <div className="border-muted mb-12 border-b pb-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-primary mb-4 flex items-center gap-2 text-2xl font-bold">
                  💌 Sueweetstay
                </h3>
                <div className="mb-4 flex gap-1.5 text-sm">
                  <a
                    href="https://www.sueweetstay.com/"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 Live Demo
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://github.com/feelsuegood/sueweetstay-fullstack"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Developed a full-stack web application modelled after
                    Airbnb, featuring a Django REST API backend managed with
                    Poetry, and a React + TypeScript frontend using Chakra UI,
                    React Query, and React Router.
                  </p>
                  <p>
                    <span className="font-semibold">Skills:</span> Full-Stack
                    Development • Django • Apollo GraphQL • React • TypeScript •
                    Docker • DevOps • REST APIs • GraphQL • Object-Oriented
                    Programming (OOP)
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
                    className="border-border rounded-lg border"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Switter Project */}
          <div className="border-muted mb-12 border-b pb-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-primary mb-4 flex items-center gap-2 text-2xl font-bold">
                  🍭 Switter
                </h3>
                <div className="mb-4 flex flex-wrap gap-1.5 text-sm">
                  <a
                    href="https://letsue-firebase.web.app/"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 Live Demo
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://www.youtube.com/watch?v=5TAbcZB03z4"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo Video
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://github.com/feelsuegood/letsue-firebase"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Developed a full-stack Twitter/X-inspired social media app
                    using React, TypeScript, and Firebase, featuring real-time
                    updates, user authentication, and image uploads.
                  </p>
                  <p>
                    <span className="font-semibold">Skills:</span> Firebase •
                    React • Cloud Firestore • TypeScript • JavaScript
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
                    className="border-border rounded-lg border"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Let'Sue Watch Project */}
          <div className="border-muted mb-12 border-b pb-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-primary mb-4 flex items-center gap-2 text-2xl font-bold">
                  📺 Let&apos;Sue Watch
                </h3>
                <div className="mb-4 flex gap-1.5 text-sm">
                  <a
                    href="https://suetube.onrender.com/"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 Live Demo
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://github.com/feelsuegood/letsuewatch"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Developed a full-stack server-rendered web application
                    inspired by YouTube, using Node.js, Express, MongoDB, and
                    Pug templates.
                  </p>
                  <p>
                    <span className="font-semibold">Skills:</span> Full-Stack
                    Development • Express • Node.js • Babel.js • MongoDB • SCSS
                    • Pug • Docker • REST APIs • DevOps
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
                    className="border-border rounded-lg border"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Suementum Project */}
          <div className="border-muted mb-12 border-b pb-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-primary mb-4 flex items-center gap-2 text-2xl font-bold">
                  📣 Suementum
                </h3>
                <div className="mb-4 flex gap-1.5 text-sm">
                  <a
                    href="https://feelsuegood.github.io/letsue-vanillajs/"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 Live Demo
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://github.com/feelsuegood/letsue-vanillajs"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Developed a Momentum-style personal dashboard with live
                    time, weather, to-do tracking, and daily quotes using HTML5,
                    CSS3, and Vanilla JavaScript.
                  </p>
                  <p>
                    <span className="font-semibold">Skills:</span> HTML5 • CSS3
                    • Vanilla JavaScript • AJAX
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
                    className="border-border rounded-lg border"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Messenger UI Project */}
          <div className="mb-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-primary mb-4 flex items-center gap-2 text-2xl font-bold">
                  📮 Messenger UI
                </h3>
                <div className="mb-4 flex flex-wrap gap-1.5 text-sm">
                  <a
                    href="https://feelsuegood.github.io/letsue-html-css/"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 Live Demo
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://www.youtube.com/watch?v=yXRKOXc_3xo"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo Video
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://github.com/feelsuegood/letsue-html-css"
                    className="text-foreground transition-colors hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Focused on implementing modern CSS features and responsive
                    design principles to create a pixel-perfect clone of the
                    popular messaging platform.
                  </p>
                  <p>
                    <span className="font-semibold">Skills:</span> HTML5 • CSS3
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
                    className="border-border rounded-lg border"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 text-center md:grid-cols-2">
            <h2 className="text-foreground mb-8 text-lg sm:text-2xl font-bold">
              If you&apos;d like to connect,
              <br />
              please get in touch →
            </h2>

            <div className="border-border bg-card flex justify-center rounded-lg border p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✉️</span>
                <a
                  href="mailto:feelsuegood@gmail.com"
                  className="text-primary text-lg sm:text-xl transition-colors hover:underline"
                >
                  feelsuegood@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-border border-t py-8 text-center">
          <div className="bg-secondary text-secondary-foreground inline-block rounded-full px-4 py-2">
            ©2025 feelsuegood
          </div>
        </footer>
      </div>
    </div>
  );
}
