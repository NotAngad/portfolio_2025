import React from "react";

const HeroSection = () => {
  return (
    <div className="p-4 lg:p-0">
      <div>
        <h3 className="text-green-400 text-xl lg:text-3xl">
          Hi there 👋 , I’m-
        </h3>
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
  );
};

export default HeroSection;
