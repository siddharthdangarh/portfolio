import { useState, useEffect, useRef } from "react";

const facts = [
  // About your work and skills
  "Did you know? I specialize in building agentic AI platforms that automate and optimize real business processes.",
  "I’ve built projects that move between AWS and Azure—cloud migration is my jam.",
  "I love using Python, Node.js, and Next.js to turn ideas into reality.",
  "I believe every line of code should tell a story.",
  "I’m passionate about making tech more human, not just more efficient.",
  "I enjoy making even the most boring business processes fun with automation and AI.",
  "I’m a big fan of clean code and black coffee.",
  "I’ve debugged production issues at 3am and lived to tell the tale.",
  "I think a good API is like a good joke: if you have to explain it, it’s not that good.",
  "I love learning new frameworks and stacks—curiosity is my superpower.",
  "I believe in building software that’s both beautiful and robust.",
  "I’m always looking for ways to make my work more visually appealing and engaging.",
  "I enjoy adding playful touches to my projects—like animated dividers and interactive cards.",
  "I think a portfolio should tell a story, not just list skills.",
  "I’m not afraid to experiment with bold colors and creative UI/UX.",
  "I believe the best tech is the kind that feels like magic.",
  "I love collaborating with others to build things that matter.",
  "I’m always up for a challenge—especially if it involves AI or automation.",
  "I think every project is an opportunity to learn something new.",
  // Fun/quirky tech facts
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Did you know? Python was named after Monty Python, not the snake.",
  "The first computer bug was an actual moth found in a computer.",
  "In JavaScript, '[] + []' equals an empty string. Try it in your console!",
  "The original name for JavaScript was Mocha.",
  "The first website is still online: info.cern.ch",
  "The word 'algorithm' comes from the name of a Persian mathematician, al-Khwarizmi.",
  // Playful, personal, and creative
  "I believe a little bit of fun goes a long way in tech.",
  "I love making things that surprise and delight users.",
  "I think every website should have at least one Easter egg.",
  "I enjoy adding interactive elements that make people smile.",
  "I believe in lifelong learning—there’s always something new to discover.",
  "I’m always looking for ways to make my work stand out.",
  "I think the best ideas come from playfulness and curiosity.",
  "I love seeing how small details can make a big difference in UX.",
  "I believe technology should empower, not overwhelm.",
  "I’m always happy to connect with fellow builders and dreamers.",
];

export default function DidYouKnow() {
  const [fact, setFact] = useState(facts[0]);
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    if (!expanded) return;
    const interval = setInterval(() => {
      setFact(facts[Math.floor(Math.random() * facts.length)]);
    }, 15000);
    return () => clearInterval(interval);
  }, [expanded]);

  const handleClick = () => {
    setExpanded((v) => !v);
    if (!expanded) {
      setFact(facts[Math.floor(Math.random() * facts.length)]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <button
        onClick={handleClick}
        aria-label={expanded ? "Hide fun fact" : "Show fun fact"}
        className={`
          flex items-center justify-center
          bg-white/90 dark:bg-[#232946]/90
          border border-gray-200 dark:border-gray-700
          shadow-xl
          rounded-full
          transition-all duration-300
          ${expanded ? "rounded-2xl px-5 py-4" : "w-12 h-12 p-0"}
          overflow-hidden
          group
        `}
        style={{
          minWidth: expanded ? 220 : 48,
          maxWidth: 320,
          minHeight: 48,
          cursor: "pointer",
        }}
        ref={cardRef}
      >
        <span
          className={`text-2xl transition-transform duration-300 ${expanded ? "mr-3" : ""} group-hover:scale-110`}
          role="img"
          aria-label="lightbulb"
        >
          💡
        </span>
        <span className={`transition-all duration-300 text-xs font-semibold text-[#ff7e5f] dark:text-[#f9d423] tracking-wide ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>
          Did You Know?
        </span>
        {expanded && (
          <span className="ml-2 text-sm text-[#232946] dark:text-[#fff7e6] text-left font-medium transition-all duration-300">
            {fact}
          </span>
        )}
      </button>
    </div>
  );
}