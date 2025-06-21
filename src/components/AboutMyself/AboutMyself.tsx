/** Library */
import React from "react";

/** Utility */
import { TAbout } from "@/types/LandingPage";
import Highlight from "../Highlight/HighLight";

interface IAboutMyself {
  cmsData: TAbout;
}

const AboutMyself: React.FC<IAboutMyself> = ({ cmsData }) => {
  const { description, title, highlightText } = cmsData || {};

  return (
    <div>
      <h3 className="text-white text-2xl md:text-3xl w-[100%] lg:w-[50%] font-bold">
        {title}
      </h3>
      <p className="text-[#dee2e6] text-base md:text-xl w-[100%] lg:w-[70%] mt-4">
        <Highlight text={description} highlights={highlightText} />
      </p>
    </div>
  );
};

export default AboutMyself;
