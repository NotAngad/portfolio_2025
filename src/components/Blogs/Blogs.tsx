import Link from "next/link";
import React from "react";

const Blogs = () => {
  const blogs = [
    {
      url: "https://devangad.medium.com/react-google-login-and-node-js-implementation-32002d8d8d78",
      title: "React Google Login and Node.js implementation",
    },
    {
      url: "https://devangad.medium.com/qr-code-implementation-in-react-js-in-5-mins-82aebd994cad",
      title: "QR Code Implementation in React.js in 5 mins.",
    },
  ];

  const colorsStyle = {
    even: `bg-gradient-to-l from-[#B3DFF9] via-[#C9C9E0] to-[#EFCDFD]`,
    odd: `bg-gradient-to-t from-[#ffd66e] via-[#FFFCB5] to-[#FFF1AD]`,
  };

  return (
    <div className="mt-4 lg:mt-16 p-4 lg:p-0">
      <h3 className="text-white text-3xl">Read my blogs 📗</h3>
      <div className="flex gap-4 lg:gap-8">
        {blogs.map((blog, index) => (
          <Link target="_blank" key={index} href={blog.url}>
            <div className="mt-4">
              <div
                className={`flex items-center justify-center p-10 h-40 w-40 lg:h-70 lg:w-70 rounded-2xl font-bold text-black ${
                  colorsStyle[index % 2 === 0 ? "even" : "odd"]
                }`}
              >
                <h3 className="text-sm lg:text-lg">{blog.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
