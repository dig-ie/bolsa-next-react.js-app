import React from "react";
import {ButtonProps} from "./ButtonProps"

const Button: React.FC <ButtonProps> = ({title, href}) => {
    return (
        <a href={href}>
        <button className="w-[154px] h-[58px] border rounded-xl bg-backgroundClaro hover:bg-gray-200 cursor-pointer">
                <h1 className="font-bold text-xl">
                    {title}
                </h1>
        </button>
        </a>
    )
}

export default Button;