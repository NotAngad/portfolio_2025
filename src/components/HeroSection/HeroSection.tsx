import React from "react";
import GridPattern from "../GridPattern/GridPattern";

const HeroSection = () => {
  return (
    <div className="p-4 lg:p-0 relative">
      <div className="absolute inset-[0px] left-[-8px]  md:inset-[-20px] opacity-30 z-0">
        <GridPattern />
      </div>

      <div className="relative z-10">
        <div>
          <p className="text-green-400 text-xl lg:text-3xl">
            Hi there 👋 , I&apos;m-
          </p>
          <h1 className="text-white lg:text-7xl text-5xl font-bold ml-2">
            angad
          </h1>
        </div>
        <div className="pt-8">
          <h3 className="text-[#dee2e6] text-xl lg:text-3xl lg:w-[50%] w-[100%]">
            <span className="text-white">Software Engineer.</span> I design and
            develop beautiful things
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
