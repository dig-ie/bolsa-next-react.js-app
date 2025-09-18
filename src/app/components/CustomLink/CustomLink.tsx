import React from "react";
import Link from "next/link";
import { CustomLinkProps } from "../CustomLink/CustomLinkProps";

const CustomLink: React.FC<CustomLinkProps> = ({ text }) => {
  return (
    <Link
      className="text-customBlue font-bold text-[15px] sm:text-[16px] md:text-[18px] mt-3 flex flex-col items-center justify-center mr-40 text-[#225991]"
      href="/ForgetPassword"
    >
      {text}
    </Link>
  );
};

export default CustomLink;