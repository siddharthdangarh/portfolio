import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full flex flex-col items-center justify-center py-28 mb-16 overflow-hidden min-h-[500px] scroll-mt-24">
      {/* Example: Add a mesh gradient or fun SVG here if you want */}
      <div className="flex items-center gap-3 justify-center mb-2">
        <SparklesIcon className="w-8 h-8 text-[#ff7e5f]" />
        <h1 className="text-6xl sm:text-7xl font-extrabold text-[#1a1a1a] dark:text-[#fff7e6] tracking-tight drop-shadow-lg">
          Building the future
        </h1>
        <SparklesIcon className="w-8 h-8 text-[#f9d423]" />
      </div>
      <p className="text-2xl sm:text-3xl text-[#ff7e5f] dark:text-[#f9d423] max-w-2xl mb-6 font-semibold">
        One AI solution at a time.
      </p>
      <p className="text-lg text-[#1a1a1a] dark:text-[#fff7e6] max-w-2xl mb-10 text-center">
        I turn complex challenges into elegant, scalable software—empowering businesses to move faster, think smarter, and do more with less.
      </p>
      <div className="flex gap-6">
        <a className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ff7e5f] to-[#f9d423] text-white font-bold text-lg shadow-lg hover:scale-105 transition" href="mailto:siddharthdangarh872@gmail.com">
          Get in Touch
        </a>
        <a className="px-8 py-3 rounded-full border-2 border-[#ff7e5f] text-[#ff7e5f] dark:text-[#f9d423] font-bold text-lg hover:bg-[#ff7e5f] hover:text-white transition" href="#projects">
          See My Work
        </a>
      </div>
    </section>
  );
}