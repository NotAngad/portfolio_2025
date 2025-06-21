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
    <div className="relative">
      <div className="absolute inset-[0px] left-[-10px] top-[-16px] md:left-[-18px] md:top-[-56px] opacity-10 z-0">
        <GridPattern />
      </div>

      <div className="relative z-10">
        <div>
          <p className="text-green-400 text-xl lg:text-2xl font-bold md:font-semibold">
            {hiText}
          </p>
          <h1 className="text-white lg:text-7xl text-4xl font-bold ml-2">
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
