/** Library */
import React from "react";

/** Utility */
import { TTechStack } from "@/types/LandingPage";

interface ITechStack {
  cmsData: TTechStack;
}

const TechStack: React.FC<ITechStack> = ({ cmsData }) => {
  const { skills, title } = cmsData;

  return (
    <div className="w-[100%] lg:w-[70%]">
      <h3 className="text-white text-2xl md:text-3xl w-[100%] lg:w-[50%] font-bold">
        {title}
      </h3>
      <div className="flex gap-4 mt-4 flex-wrap">
        {skills?.map(({ skill }) => (
          <div
            key={skill}
            className="pl-4 pr-4 lg:pl-8 lg:pr-8 pt-2 pb-2 bg-[#dee2e6] rounded-xl flex items-center justify-center"
          >
            <p className="text-base md:text-xl font-semibold text-black">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
