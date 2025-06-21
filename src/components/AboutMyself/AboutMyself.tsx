import { TAbout } from "@/types/LandingPage";
import React from "react";

interface IAboutMyself {
  cmsData: TAbout;
}

const AboutMyself: React.FC<IAboutMyself> = ({ cmsData }) => {
  const { description, title } = cmsData || {};

  return (
    <div className="mt-4 lg:mt-16 p-4 lg:p-0">
      <h3 className="text-white text-3xl w-[100%] lg:w-[50%]">{title}</h3>
      <p className="text-[#dee2e6] w-[100%] lg:w-[70%] mt-4">{description}</p>
    </div>
  );
};

export default AboutMyself;
