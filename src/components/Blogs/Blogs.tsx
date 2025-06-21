/** Library */
import React from "react";

/**  Component */
import Link from "next/link";

/** Utility */
import { TBlogList } from "@/types/LandingPage";

export interface IBlogs {
  cmsData: TBlogList;
}

const Blogs: React.FC<IBlogs> = ({ cmsData }) => {
  const { blogs, title } = cmsData || {};

  const colorsStyle = {
    even: `bg-gradient-to-l from-[#B3DFF9] via-[#C9C9E0] to-[#EFCDFD]`,
    odd: `bg-gradient-to-t from-[#ffd66e] via-[#FFFCB5] to-[#FFF1AD]`,
  };

  return (
    <div>
      <h3 className="text-white text-2xl font-bold md:text-3xl">{title}</h3>
      <div className="flex gap-4 lg:gap-8">
        {blogs.map((blog, index) => (
          <Link
            aria-label={blog.title}
            target="_blank"
            key={index}
            href={blog.url}
          >
            <div className="mt-4">
              <div
                className={`flex pt-[15%] pb-[15%] md:pt-[30%] md:pb-[30%] pl-4 pr-4 h-40 w-40 md:h-60 md:w-60 rounded-2xl font-bold text-black ${
                  colorsStyle[index % 2 === 0 ? "even" : "odd"]
                }`}
              >
                <h3 className="text-base font-bold md:font-semibold md:text-xl">
                  {blog.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
