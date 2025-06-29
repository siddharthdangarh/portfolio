import { EnvelopeIcon, GlobeAltIcon, WindowIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between py-8 border-t border-[#ffe0ec] dark:border-[#f9d423] text-[#1a1a1a] dark:text-[#fff7e6]">
      <div className="flex gap-6">
        <a href="mailto:siddharthdangarh872@gmail.com" className="flex items-center gap-2 hover:underline">
          <EnvelopeIcon className="w-5 h-5 text-[#ff7e5f]" /> Email
        </a>
        <a href="https://in.linkedin.com/in/siddharth-dangarh-a896b61a7" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
          <GlobeAltIcon className="w-5 h-5 text-[#f9d423]" /> LinkedIn
        </a>
      </div>
      <div className="text-sm text-[#ff7e5f] dark:text-[#f9d423]">&copy; {new Date().getFullYear()} Siddharth Dangarh</div>
      <span className="hidden sm:block text-sm text-[#ff7e5f] dark:text-[#f9d423]">Let’s build something amazing together.</span>
    </footer>
  );
}