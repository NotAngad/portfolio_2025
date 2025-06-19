/** Library */
import React from "react";
import { client } from "@/sanity/client";

/** Components */
import Blogs from "@/components/Blogs/Blogs";
import Footer from "@/components/Footer/Footer";
import Socials from "@/components/Socials/Socials";
import TechStack from "@/components/TechStack/TechStack";
import DownloadCV from "@/components/DownloadCV/DownloadCV";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutMyself from "@/components/AboutMyself/AboutMyself";

/** Utility */
import { Blog } from "@/types/Blogs";

const options = { next: { revalidate: 30 } };
const BLOGS_QUERY = `*[_type == "blogs"][0].blogList[]{
  title,
  url
}`;

export default async function Home() {
  const blogs = await client.fetch<Blog[]>(BLOGS_QUERY, {}, options);

  return (
    <div className="pt-4 pb-4 md:pt-12 md:pb-12 bg-[#000814] font-mono">
      <div className="container mx-auto">
        <DownloadCV />
        <HeroSection />
        <AboutMyself />
        <TechStack />
        <Blogs blogs={blogs} />
        <Socials />
        <Footer />
      </div>
    </div>
  );
}
