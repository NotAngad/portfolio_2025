import React from "react";

const TechStack = () => {
  const skills = [
    "Html",
    "Css",
    "Git",
    "Typescript",
    "Javascript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Nest.js",
    "Mongo DB",
    "MySql",
    "Tailwind css",
    "Framer Motion",
    "Micro Frontends",
  ];

  return (
    <div className="p-4 lg:p-0 mt-4 lg:mt-16 w-[100%] lg:w-[70%]">
      <h3 className="text-white text-3xl w-[100%] lg:w-[50%]">
        My Tech Stack 🧑‍💻
      </h3>
      <div className="flex gap-4 mt-4 flex-wrap">
        {skills?.map((skill) => (
          <div
            key={skill}
            className="pl-4 pr-4 lg:pl-8 lg:pr-8 pt-2 pb-2 bg-[#dee2e6] rounded-xl flex items-center justify-center"
          >
            <p className="text-black">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
