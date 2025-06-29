import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Siddharth Dangarh",
  description: "Siddharth Dangarh's Portfolio - Senior Software Developer & Tech Enthusiast",
  keywords: [
    "Siddharth Dangarh",
    "Siddharth",
    "Dangarh",
    "Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Frontend",
    "Backend",
    "Problem Solver",
    "Software Architect",
    "Solutions Architect",
    "AI Developer",
    "AI Designer"
  ],
  authors: [{ name: "Siddharth Dangarh", url: "https://portfolio.siddharthdangarh.com" }],
  creator: "Siddharth Dangarh",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Portfolio | Siddharth Dangarh",
    description: "Explore the work and projects of Siddharth Dangarh, a passionate Software Developer.",
    url: "https://portfolio.siddharthdangarh.com",
    siteName: "Siddharth Dangarh Portfolio",
    images: [
      {
        url: "https://portfolio.siddharthdangarh.com/images/preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
