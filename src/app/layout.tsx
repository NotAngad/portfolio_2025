import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Angad Srivastav | Software Engineer",
  description:
    "I'm a software engineer who builds clean, scalable web apps using MERN stack and much more.",
  keywords: [
    "Angad Srivastav",
    "Full Stack Developer",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "MERN",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Angad Srivastav", url: "https://devangad.me" }],
  creator: "Angad Srivastav",
  openGraph: {
    title: "Angad Srivastav | Software Engineer",
    description:
      "Hi, I’m Angad — a developer who loves crafting beautiful, functional apps using modern web technologies.",
    url: "https://devangad.me",
    siteName: "Angad Srivastav",
    type: "website",
  },
  metadataBase: new URL("https://devangad.me"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
