import { TFooterText } from "@/types/LandingPage";
import React from "react";

interface IFooter {
  cmsData: TFooterText;
}

const Footer: React.FC<IFooter> = ({ cmsData }) => {
  const footerText = cmsData;

  return (
    <div className="mt-4 lg:mt-16 p-4 lg:p-0 flex items-center justify-center">
      {footerText}
    </div>
  );
};

export default Footer;
