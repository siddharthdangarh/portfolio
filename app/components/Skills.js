import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

const skillGroups = [
  {
    title: "Languages & Frameworks",
    skills: ["Django", "Python", "Next.js", "Node.js", "JavaScript"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure", "AWS", "Google Cloud", "Docker", "Nginx", "Gunicorn"],
  },
  {
    title: "Databases & Tools",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Celery", "Git", "GitHub"],
  },
  {
    title: "APIs & AI",
    skills: ["REST API", "GraphQL", "Prompt Engineering", "Codeium", "Phidata"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-3xl mx-auto my-8 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <WrenchScrewdriverIcon className="w-7 h-7 text-[#f9d423]" />
        <h2 className="text-3xl font-bold text-[#1a1a1a] dark:text-[#fff7e6]">My Toolbox</h2>
      </div>
      <p className="mb-6 text-lg text-[#1a1a1a] dark:text-[#fff7e6]">
        Over the years, I’ve collected a set of tools and technologies that help me turn ideas into reality. Here are some of my favorites:
      </p>
      <div className="flex flex-wrap gap-8 justify-center sm:justify-center">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-[#ff7e5f] dark:text-[#f9d423] mb-2">{group.title}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {group.skills.map(skill => (
                <span key={skill} className="bg-[#ff7e5f]/10 dark:bg-[#f9d423]/10 text-[#1a1a1a] dark:text-[#fff7e6] px-4 py-2 rounded-full text-sm font-medium border border-[#ff7e5f]/20 dark:border-[#f9d423]/20 hover:scale-110 transition-transform cursor-pointer">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}