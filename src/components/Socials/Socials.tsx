import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const Socials = () => {
  const socials = [
    {
      url: "https://www.linkedin.com/in/angad-srivastav/",
      icon: FaLinkedin,
      label: "Devanga'd Linkedin",
    },
    {
      url: "https://github.com/NotAngad",
      icon: FaGithub,
      label: "Devangad's Github",
    },
    {
      url: "https://devangad.medium.com/",
      icon: FaMedium,
      label: "Devangad's Medium",
    },
  ];

  return (
    <div className="lg:mt-16 mt-4 p-4 lg:p-0">
      <h3 className="text-white text-3xl">Find me online 🌐</h3>
      <div className="mt-4 w-[100%] lg:w-[70%]">
        Let’s stay connected! Whether you want to chat code, collaborate on a
        project, or just say hi — you’ll find me hanging out here. Drop a
        message anytime!
        <div className="flex gap-4 mt-6">
          {socials.map(({ icon: Icon, url, label }, index) => (
            <Link aria-label={label} key={index} href={url} target="_blank">
              <Icon size={35} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
