import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function About() {
  return (
    <section id="about" className="w-full max-w-3xl mx-auto bg-white/80 dark:bg-[#2d1a2d]/80 rounded-3xl shadow-2xl p-12 mb-16 border border-[#ffe0ec] dark:border-[#f9d423] backdrop-blur-md transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(255,126,95,0.15)] scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <UserCircleIcon className="w-7 h-7 text-[#ff7e5f]" />
        <h2 className="text-3xl font-bold text-[#1a1a1a] dark:text-[#fff7e6]">My Journey</h2>
      </div>
      <p className="text-lg text-[#1a1a1a] dark:text-[#fff7e6] leading-relaxed text-center">
        My fascination with technology began with a simple question: <b>“How can we make life easier with code?”</b>  
        From automating daily tasks to architecting AI-driven platforms, I’ve always been driven by curiosity and a desire to solve real-world problems.  
        <br /><br />
        Today, I specialize in building agentic AI solutions and cloud-native systems that help businesses unlock new possibilities. Every project is a new adventure—a chance to learn, create, and make an impact.
      </p>
      <div className="flex gap-8 mt-6 text-base text-[#ff7e5f] dark:text-[#f9d423] justify-center">
        <span>🌍 Bengaluru, India</span>
        <span>💼 3+ Years Experience</span>
      </div>
    </section>
  );
}