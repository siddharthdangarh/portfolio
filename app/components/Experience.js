import { BriefcaseIcon } from "@heroicons/react/24/solid";

const experiences = [
  {
    company: "Saara Inc.",
    role: "Senior Software Developer",
    period: "May 2023 - Present",
    location: "Bengaluru",
    story: (
      <>
        <b>Challenge:</b> Build an AI platform from scratch, capable of scaling with the business.<br />
        <b>My Role:</b> I led the architecture and implementation, designing AI agents that now handle refunds, product analysis, and quality control—freeing up countless hours for our clients.<br />
        <b>Impact:</b> Our team’s work enabled seamless cloud migration, robust security, and the successful launch of flagship projects like <i>EcoShip</i> and <i>CoLoyalty</i>.
      </>
    ),
    color: "border-[#ff7e5f]",
  },
  {
    company: "Saara Inc.",
    role: "Software Developer",
    period: "July 2022 - April 2023",
    location: "Bengaluru",
    story: (
      <>
        <b>Challenge:</b> Modernize legacy systems and introduce AI-driven automation.<br />
        <b>My Role:</b> I created a ChatGPT-powered returns/exchange chatbot, revamped old codebases, and collaborated across the full software lifecycle.<br />
        <b>Impact:</b> Our solutions improved customer experience and set new standards for efficiency.
      </>
    ),
    color: "border-[#f9d423]",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-3xl mx-auto my-8 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <BriefcaseIcon className="w-7 h-7 text-[#ff7e5f]" />
        <h2 className="text-3xl font-bold text-[#1a1a1a] dark:text-[#fff7e6]">Experience</h2>
      </div>
      <ol className="relative border-l-4 border-[#ffe0ec] dark:border-[#f9d423]">
        {experiences.map((exp, idx) => (
          <li key={idx} className={`mb-12 ml-6`}>
            <span className={`absolute -left-5 flex items-center justify-center w-10 h-10 bg-white dark:bg-[#2d1a2d] rounded-full shadow-lg ${exp.color}`}>
              <BriefcaseIcon className="w-6 h-6 text-[#ff7e5f]" />
            </span>
            <div className={`bg-white/80 dark:bg-[#2d1a2d]/80 rounded-2xl p-8 shadow border-l-4 ${exp.color} backdrop-blur-md`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <span className="font-bold text-[#1a1a1a] dark:text-[#fff7e6]">{exp.company} <span className="font-normal">| {exp.role}</span></span>
                <span className="text-base text-[#ff7e5f] dark:text-[#f9d423]">{exp.location} | {exp.period}</span>
              </div>
              <div className="text-[#1a1a1a] dark:text-[#fff7e6] text-base pl-2">{exp.story}</div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}