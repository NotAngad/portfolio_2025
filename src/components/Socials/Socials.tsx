/** Library */
import React from "react";

/** Components */
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

/** Utility */
import { TFindMeOnline } from "@/types/LandingPage";

interface ISocials {
  cmsData: TFindMeOnline;
}

const Socials: React.FC<ISocials> = ({ cmsData }) => {
  const { introText, socialLinks, title } = cmsData || {};

  return (
    <div className="lg:mt-16 mt-4 p-4 lg:p-0">
      <h3 className="text-white text-3xl">{title}</h3>
      <div className="mt-4 w-[100%] lg:w-[70%]">
        {introText}
        <div className="flex gap-4 mt-6">
          {socialLinks.map(({ icon, url, text }, index) => {
            const iconMap: Record<string, React.ElementType> = {
              FaLinkedin,
              FaGithub,
              FaMedium,
            };

            const Icon = iconMap[icon];

            return (
              <Link aria-label={text} key={index} href={url} target="_blank">
                <Icon size={35} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Socials;
