import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
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
    images: [
      {
        url: "https://devangad.me/devangad.png",
        width: 1200,
        height: 630,
        alt: "Angad Srivastav | Software Engineer",
      },
    ],
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
      <body className={`${sora.className} antialiased`}>{children}</body>
    </html>
  );
}
