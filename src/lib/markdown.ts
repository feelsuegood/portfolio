// // import fs from "fs";
// // import path from "path";
// // import matter from "gray-matter";
// // import { remark } from "remark";
// // import html from "remark-html";

// // const contentDirectory = path.join(process.cwd(), "src", "content");

// // export async function getPost(slug: string) {
// //   const filePath = path.join(contentDirectory, `${slug}.md`);
// //   const fileContents = fs.readFileSync(filePath, "utf8");

// //   const { data, content } = matter(fileContents);
// //   const processedContent = await remark().use(html).process(content);
// //   const contentHtml = processedContent.toString();
// //   return {
// //     slug,
// //     contentHtml,
// //     ...data,
// //   };
// // }

// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { remark } from "remark";
// import html from "remark-html";

// const contentDirectory = path.join(process.cwd(), "src", "content");

// export async function getPost(slug: string) {
//   const filePath = path.join(contentDirectory, `${slug}.md`);
//   const fileContents = fs.readFileSync(filePath, "utf8");

//   const { data, content } = matter(fileContents);
//   const processedContent = await remark().use(html).process(content);
//   const contentHtml = processedContent.toString();
//   return {
//     slug,
//     contentHtml,
//     ...data,
//   };
// }

// // Parse portfolio specific data
// export async function getPortfolioData(slug: string) {
//   const filePath = path.join(contentDirectory, `${slug}.md`);
//   const fileContents = fs.readFileSync(filePath, "utf8");
//   const { data, content } = matter(fileContents);

//   // Parse sections from markdown content
//   const sections = parsePortfolioSections(content);

//   return {
//     slug,
//     frontmatter: data,
//     ...sections,
//   };
// }

// function parsePortfolioSections(content: string) {
//   const lines = content.split("\n");
//   const result: any = {
//     intro: {},
//     contact: {},
//     skills: {
//       programmingLanguages: [],
//       frontEnd: [],
//       mobile: [],
//       backEnd: [],
//       databases: [],
//       cloudDevOps: [],
//       aiTools: [],
//     },
//     projects: [],
//   };

//   const currentSection = "";
//   let currentSkillCategory = "";
//   let currentProject: any = null;
//   let i = 0;

//   while (i < lines.length) {
//     const line = lines[i].trim();

//     // Parse intro section
//     if (line.startsWith("# Hello, I'm")) {
//       result.intro.title = line.replace("# ", "");
//       i++;
//       let introContent = "";
//       while (i < lines.length && !lines[i].startsWith("**Get in touch")) {
//         if (lines[i].trim() && !lines[i].startsWith("#")) {
//           introContent += lines[i] + "\n";
//         }
//         i++;
//       }
//       result.intro.description = introContent.trim();
//       continue;
//     }

//     // Parse contact info
//     if (line.includes("feelsuegood@gmail.com")) {
//       result.contact.email = "feelsuegood@gmail.com";
//     }

//     if (line.includes("![avatar.png]")) {
//       result.contact.avatar = line.match(/\(([^)]+)\)/)?.[1] || "";
//     }

//     if (line.includes("Github") && line.includes("LinkedIn")) {
//       const githubMatch = line.match(/\[Github\]\(([^)]+)\)/);
//       const linkedinMatch = line.match(/\[LinkedIn\]\(([^)]+)\)/);
//       const seekMatch = line.match(/\[Seek\]\(([^)]+)\)/);

//       result.contact.links = {
//         github: githubMatch?.[1] || "",
//         linkedin: linkedinMatch?.[1] || "",
//         seek: seekMatch?.[1] || "",
//       };
//     }

//     // Parse skills section
//     if (line === "**Programming Languages**") {
//       currentSkillCategory = "programmingLanguages";
//     } else if (line === "**Front End**") {
//       currentSkillCategory = "frontEnd";
//     } else if (line === "**Mobile**") {
//       currentSkillCategory = "mobile";
//     } else if (line === "**Back End**") {
//       currentSkillCategory = "backEnd";
//     } else if (line === "**Databases**") {
//       currentSkillCategory = "databases";
//     } else if (line === "**Cloud & DevOps**") {
//       currentSkillCategory = "cloudDevOps";
//     } else if (line === "**AI & Tools**") {
//       currentSkillCategory = "aiTools";
//     } else if (line.startsWith("- ") && currentSkillCategory) {
//       result.skills[currentSkillCategory].push(line.replace("- ", ""));
//     }

//     // Parse projects section
//     if (line.startsWith("### ")) {
//       if (currentProject) {
//         result.projects.push(currentProject);
//       }

//       currentProject = {
//         title: line.replace("### ", "").replace(/\*\*/g, ""),
//         links: {},
//         description: "",
//         skills: "",
//         image: "",
//       };
//     } else if (currentProject) {
//       // Parse project links
//       if (
//         line.includes("🔗 [Live Demo]") ||
//         line.includes("[Github Repo]") ||
//         line.includes("[Demo Video]")
//       ) {
//         const liveDemoMatch = line.match(/🔗 \[Live Demo\]\(([^)]+)\)/);
//         const githubMatch = line.match(/\[Github Repo\]\(([^)]+)\)/);
//         const demoVideoMatch = line.match(/\[Demo Video\]\(([^)]+)\)/);

//         if (liveDemoMatch) currentProject.links.liveDemo = liveDemoMatch[1];
//         if (githubMatch) currentProject.links.github = githubMatch[1];
//         if (demoVideoMatch) currentProject.links.demoVideo = demoVideoMatch[1];
//       }

//       // Parse project description
//       if (line.startsWith("- ") && !line.includes("**Skills:**")) {
//         currentProject.description += line.replace("- ", "") + " ";
//       }

//       // Parse project skills
//       if (line.includes("**Skills:**")) {
//         currentProject.skills = line.replace(/.*\*\*Skills:\*\*\s*/, "");
//       }

//       // Parse project image
//       if (line.includes("![") && line.includes(".png")) {
//         const imageMatch = line.match(/\(([^)]+)\)/);
//         if (imageMatch) currentProject.image = imageMatch[1];
//       }
//     }

//     i++;
//   }

//   // Add last project
//   if (currentProject) {
//     result.projects.push(currentProject);
//   }

//   return result;
// }
