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
  title: "Portfolio",
  description: "Siddharth Dangarh's Portfolio",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Portfolio",
    description: "Siddharth Dangarh's Portfolio",
    // images: [{
    //   url: "https://siddharthdangarh.com/images/portfolio/preview.jpeg",
    //   width: 1200,
    //   height: 630,
    //   alt: "Portfolio Preview"
    // }]
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
