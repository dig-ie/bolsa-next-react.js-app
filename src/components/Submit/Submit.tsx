import React from "react";
import { SubmitProps } from "./SubmitProps";

const Submit: React.FC <SubmitProps> =
({title, href}) => {
    return (
        <a href={href}>
        <button className="w-[320px] h-[58px] border rounded-xl bg-secondaryColor mt-6 cursor-pointer">
            <h1 className="font-bold text-white">
            {title}
            </h1>
        </button>
        </a>
    )
}

export default Submit;