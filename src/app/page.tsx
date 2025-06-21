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
import {
  TAbout,
  TBlogList,
  TTechStack,
  TFooterText,
  THeroSection,
  TFindMeOnline,
} from "@/types/LandingPage";

const options = { next: { revalidate: 30 } };

const query = `
  *[_type == "landingPage"][0]{
    heroSection {
      hiText,
      developerName,
      developerInto
    },
    about {
      title,
      description,
      highlightText
    },
    techStack {
      title,
      skills[]{
        skill
      }
    },
    blogList {
      title,
      blogs[]{
        title,
        url
      }
    },
    findMeOnline {
      title,
      introText,
      socialLinks[]{
        text,
        icon,
        url
      }
    },
    footerText
  }
`;

type cmsData = {
  heroSection: THeroSection;
  about: TAbout;
  techStack: TTechStack;
  blogList: TBlogList;
  findMeOnline: TFindMeOnline;
  footerText: TFooterText;
};

export default async function Home() {
  const allData = await client.fetch<cmsData>(query, {}, options);

  return (
    <div className="pt-4 pb-4 md:pt-12 md:pb-12 bg-[#000814] font-mono">
      <div className="container mx-auto">
        <DownloadCV />
        <HeroSection cmsData={allData?.heroSection} />
        <AboutMyself cmsData={allData?.about} />
        <TechStack cmsData={allData?.techStack} />
        <Blogs cmsData={allData?.blogList} />
        <Socials cmsData={allData?.findMeOnline} />
        <Footer cmsData={allData?.footerText} />
      </div>
    </div>
  );
}
