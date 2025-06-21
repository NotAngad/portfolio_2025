/** Library */
import React from "react";

/** Component */
import GridPattern from "../GridPattern/GridPattern";

/** Utility */
import { THeroSection } from "@/types/LandingPage";

interface IHeroSeection {
  cmsData: THeroSection;
}

const HeroSection: React.FC<IHeroSeection> = ({ cmsData }) => {
  const { developerInto, developerName, hiText } = cmsData;

  return (
    <div className="p-4 lg:p-0 relative">
      <div className="absolute inset-[0px] left-[-8px]  md:inset-[-20px] opacity-30 z-0">
        <GridPattern />
      </div>

      <div className="relative z-10">
        <div>
          <p className="text-green-400 text-xl lg:text-3xl">{hiText}</p>
          <h1 className="text-white lg:text-7xl text-5xl font-bold ml-2">
            {developerName}
          </h1>
        </div>
        <div className="pt-8">
          <h2 className="text-[#dee2e6] text-xl lg:text-3xl lg:w-[50%] w-[100%]">
            {developerInto}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
