import React from "react";

const AboutMyself = () => {
  return (
    <div className="mt-4 lg:mt-16 p-4 lg:p-0">
      <h3 className="text-white text-3xl w-[100%] lg:w-[50%]">
        About Myself 👨‍💻
      </h3>
      <p className="text-[#dee2e6] w-[100%] lg:w-[70%] mt-4">
        Full-stack developer who loves turning ideas into{" "}
        <span className="text-green-400 ">clean</span>,{" "}
        <span className="text-green-400 ">scalable</span> code. Skilled in{" "}
        <span className="text-green-400 ">MERN</span>,{" "}
        <span className="text-green-400 ">MySQL</span>, and{" "}
        <span className="text-green-400 ">NestJS</span>, with a passion for{" "}
        <span className="text-green-400 ">solving</span> real problems.
        Currently exploring <span className="text-green-400 ">AI</span>,
        leveling up daily — one commit at a time. I believe good code is like
        good design: invisible when it works. Whether it's front-end finesse or
        backend logic,{" "}
        <span className="text-green-400 ">
          I enjoy both sides of the stack.
        </span>
      </p>
    </div>
  );
};

export default AboutMyself;
