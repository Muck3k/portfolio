import type { ReactNode } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Smartphone,
  Users,
  Code2,
  Database,
  ExternalLink,
} from "lucide-react";

type BasicProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = BasicProps & {
  href?: string;
};

function Card({ children, className = "" }: BasicProps) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }: BasicProps) {
  return <div className={className}>{children}</div>;
}

function Button({ children, className = "", href }: ButtonProps) {
  if (href) {
    return (
      <a
        className={className}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}

const projects = [
  {
    title: "Tenderly Eats",
    type: "Production Mobile Application",
    description:
      "A React Native mobile app that helps groups choose restaurants through shared swipe-based decision making. Built and shipped with authentication, group sessions, restaurant discovery, invite links, backend cloud functions, and release workflows for iOS and Android.",
    stack: ["React Native", "Expo", "TypeScript", "Firebase Auth", "Firestore", "Cloud Functions", "EAS Build", "Visual Studio Code", "Git"],
    highlights: [
      "Designed and implemented group-based matching logic using Firestore data structures",
      "Built invite-code and deep-link flows for joining shared restaurant sessions",
      "Integrated restaurant search, place details, photo handling, and backend API calls",
      "Managed mobile build, testing, and release workflows through App Store Connect and Android closed beta",
    ],
    link: "https://apps.apple.com/us/app/tenderly-eats/id6758745741",
  },
  {
    title: "Android BLE Data Application",
    type: "Student Software Engineering Project",
    description:
      "Contributed to an Android application involving Bluetooth Low Energy communication and time-series data integration. Worked in a team environment using software engineering practices to deliver working mobile functionality.",
    stack: ["Android", "BLE", "InfluxDB", "Mobile Development", "Agile"],
    highlights: [
      "Worked on mobile features involving device communication and data collection",
      "Collaborated with teammates through planning, implementation, and testing cycles",
      "Applied software engineering practices in a real project environment",
    ],
    link: null,
  },
];

const skillGroups = [
  {
    title: "Frontend & Mobile",
    items: ["React Native", "Expo", "React", "TypeScript", "JavaScript", "Mobile UI Development"],
  },
  {
    title: "Backend & Data",
    items: ["Firebase Auth", "Firestore", "Cloud Functions", "REST APIs"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "Android Studio", "EAS Build", "Docker", "Agile/Scrum", "Visual Studio Code"],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              Software Engineer • Mobile Developer
            </p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Matthew O&apos;Donnell
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Software engineer focused on mobile development, frontend engineering, and scalable application design. Experienced building production-ready React Native applications, leading technical teams, and delivering software from concept through release.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#contact" className="inline-flex items-center rounded-2xl bg-blue-500 px-6 py-4 text-base hover:bg-blue-600">
                <Mail className="mr-2 h-5 w-5" /> Contact Me
              </Button>
              <Button href="https://github.com/Muck3k" className="inline-flex items-center rounded-2xl border border-zinc-700 bg-zinc-900/60 px-6 py-4 text-base text-white hover:bg-zinc-800">
                GitHub
              </Button>
              <Button href="https://www.linkedin.com/in/matthewodonnell3/" className="inline-flex items-center rounded-2xl border border-zinc-700 bg-zinc-900/60 px-6 py-4 text-base text-white hover:bg-zinc-800">
                LinkedIn
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-[2rem] border-zinc-800 bg-zinc-900/80 shadow-2xl shadow-blue-950/20 backdrop-blur">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-teal-400">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Current Focus</h2>
                <p className="mt-3 text-zinc-300">
                  Building production-ready mobile applications with clean UI, scalable Firebase architecture, and reliable release workflows.
                </p>
                <div className="mt-6 grid gap-3">
                  {[
                    "React Native and Expo development",
                    "Firebase Auth, Firestore, and Cloud Functions",
                    "Mobile app testing and deployment",
                    "User-focused product development",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-300">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-14 sm:px-10 lg:px-20">
        <section className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Code2, title: "Mobile Development", text: "Experience building polished mobile interfaces, navigation flows, authentication, and production app features." },
            { icon: Database, title: "Backend Integration", text: "Hands-on Firebase experience with Firestore data modeling, authentication, storage, and cloud functions." },
            { icon: Users, title: "Team Collaboration", text: "Scrum Master and team leadership experience with planning, communication, and delivery coordination." },
          ].map(({ icon: Icon, title, text }) => (
            <Card key={title} className="rounded-3xl border-zinc-800 bg-zinc-900/70">
              <CardContent className="p-6">
                <Icon className="mb-4 h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section id="projects" className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-blue-300">Projects</p>
              <h2 className="mt-2 text-3xl font-bold">Selected Work</h2>
            </div>
          </div>
          <div className="grid gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="rounded-3xl border-zinc-800 bg-zinc-900/70">
                <CardContent className="p-7">
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-sm text-blue-300">{project.type}</p>
                      <h3 className="mt-1 text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-3 max-w-3xl leading-7 text-zinc-300">{project.description}</p>
                    </div>
                      {project.link ? (
                        <div className="flex justify-center">
                          <Button
                            href={project.link}
                            className="inline-flex items-center rounded-2xl bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
                          >
                            View App <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      ) : null}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 grid gap-2 text-sm text-zinc-400 sm:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="rounded-2xl bg-zinc-950/70 px-4 py-3">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-300">Skills</p>
          <h2 className="mt-2 text-3xl font-bold">Technical Skills</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => (
              <Card key={group.title} className="rounded-3xl border-zinc-800 bg-zinc-900/70">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-300">Contact</p>
          <h2 className="mt-3 text-3xl font-bold">Open to software engineering opportunities.</h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Interested in mobile development, frontend engineering, and product-focused software roles.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              href="https://mail.google.com/mail/?view=cm&fs=1&to=matthew.odonnell51@gmail.com"
              className="inline-flex items-center rounded-2xl bg-blue-500 px-6 py-4 hover:bg-blue-600"
            >
              <Mail className="mr-2 h-5 w-5" /> matthew.odonnell51@gmail.com
            </Button>
            <Button
              href="/resume.pdf"
              className="inline-flex items-center rounded-2xl border border-zinc-700 bg-zinc-900/60 px-6 py-4 text-white hover:bg-zinc-800"
            >
              Resume
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
