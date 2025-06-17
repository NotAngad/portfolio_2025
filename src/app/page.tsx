/** Library */
import React from "react";

/** Components */
import Blogs from "@/components/Blogs/Blogs";
import Footer from "@/components/Footer/Footer";
import Socials from "@/components/Socials/Socials";
import TechStack from "@/components/TechStack/TechStack";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutMyself from "@/components/AboutMyself/AboutMyself";

export default function Home() {
  return (
    <div className="pt-4 pb-4 md:pt-12 md:pb-12 bg-[#000814] font-mono">
      <div className="container mx-auto">
        <HeroSection />
        <AboutMyself />
        <TechStack />
        <Blogs />
        <Socials />
        <Footer />
      </div>
    </div>
  );
}
