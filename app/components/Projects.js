import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const projects = [
  {
    name: "EcoShip",
    description: "Shipping logistics are a mess—so I built EcoShip, a platform that uses AI to optimize routes and cut emissions. It’s now helping businesses save money and the planet.",
    link: "#",
    image: "/vercel.svg",
  },
  {
    name: "CoLoyalty",
    description: "Customer loyalty is more than points. CoLoyalty uses AI-driven segmentation to deliver rewards that matter, boosting engagement and retention.",
    link: "#",
    image: "/vercel.svg",
  },
];

export default function Projects() {
  return (
    <section className="w-full max-w-3xl mx-auto mb-16">
      <div className="flex items-center gap-3 mb-6">
        <RocketLaunchIcon className="w-7 h-7 text-[#f9d423]" />
        <h2 className="text-3xl font-bold text-[#1a1a1a] dark:text-[#fff7e6]">Featured Projects</h2>
      </div>
      <p className="mb-6 text-lg text-[#1a1a1a] dark:text-[#fff7e6]">
        Here are a few projects where I’ve turned vision into reality:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <a key={idx} href={project.link} className="group bg-white/80 dark:bg-[#2d1a2d]/80 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform border border-[#ffe0ec] dark:border-[#f9d423] backdrop-blur-md">
            <img src={project.image} alt={project.name} className="w-16 h-16 mb-4 rounded-lg shadow" />
            <h3 className="text-xl font-semibold text-[#ff7e5f] dark:text-[#f9d423] mb-2">{project.name}</h3>
            <p className="text-base text-[#1a1a1a] dark:text-[#fff7e6] text-center">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}