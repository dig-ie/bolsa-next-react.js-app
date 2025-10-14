import React from "react";
import Link from "next/link";
import { CustomLinkProps } from "../CustomLink/CustomLinkProps";

const CustomLink: React.FC<CustomLinkProps> = ({ text }) => {
  return (
    <Link
      className="text-customBlue font-bold lg:text-[13px] sm:text-[16px] md:text-[18px] items-center justify-center lg:underline  text-[#225991] mr-[170px] md:mr-[150px] lg:mr-0"
      href="/ForgetPassword"
    >
      {text}
    </Link>
  );
};

export default CustomLink;
//por algum motivo apareceu alteração da mudança dos componetes de app para src