import Tilt from "react-parallax-tilt";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const projects = [
  {
    name: "EcoReturns",
    description: "A returns management solution I work on daily—streamlining, automating, and optimizing the returns process for e-commerce brands.",
    link: "https://returns.saara.io/",
    image: "/vercel.svg",
    type: "Company",
  },
  {
    name: "EcoShip",
    description: "Shipping logistics are a mess—so I built EcoShip, a platform that uses AI to optimize routes and cut emissions. It’s now helping businesses save money and the planet.",
    link: "https://ecoship.saara.io/",
    image: "/vercel.svg",
    type: "Company",
  },
  {
    name: "SaaraAI",
    description: "An agentic AI-based platform powering automation, analytics, and intelligent decision-making for modern businesses.",
    link: "https://agents.saara.ai/",
    image: "/vercel.svg",
    type: "Company",
  },
  {
    name: "CoSell",
    description: "A collaborative selling platform designed to help businesses partner, share leads, and grow together.",
    link: "https://cosell.saara.io/",
    image: "/vercel.svg",
    type: "Company",
  },
  {
    name: "CoLoyalty",
    description: "Customer loyalty is more than points. CoLoyalty uses AI-driven segmentation to deliver rewards that matter, boosting engagement and retention.",
    link: "#",
    image: "/vercel.svg",
    type: "Company",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 w-full max-w-3xl mx-auto my-8 px-4 sm:px-6">
      <div className="flex items-center gap-3 mb-6">
        <RocketLaunchIcon className="w-7 h-7 text-[#f9d423]" />
        <h2 className="text-3xl font-bold text-[#1a1a1a] dark:text-[#fff7e6]">Featured Projects</h2>
      </div>
      <p className="mb-6 text-lg text-[#1a1a1a] dark:text-[#fff7e6]">
        Here are a few projects where I’ve turned vision into reality:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <Tilt
            key={idx}
            glareEnable={true}
            glareMaxOpacity={0.15}
            scale={1.04}
            transitionSpeed={1200}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            className="rounded-2xl"
          >
            <a
              href={project.link}
              className="group bg-white/80 dark:bg-[#2d1a2d]/80 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform border border-[#ffe0ec] dark:border-[#f9d423] backdrop-blur-md relative"
            >
              <span className="absolute top-4 right-4 bg-[#ff7e5f] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                {project.type === "Company" ? "Company Project" : "Personal Project"}
              </span>
              <img src={project.image} alt={project.name} className="w-16 h-16 mb-4 rounded-lg shadow" />
              <h3 className="text-xl font-semibold text-[#ff7e5f] dark:text-[#f9d423] mb-2">{project.name}</h3>
              <p className="text-base text-[#1a1a1a] dark:text-[#fff7e6] text-center">{project.description}</p>
            </a>
          </Tilt>
        ))}
      </div>
    </section>
  );
}