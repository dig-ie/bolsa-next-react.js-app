import React from "react";
import {ButtonProps} from "../Button/ButtonProps"
import Image from "next/image";
const Button: React.FC <ButtonProps> = ({title, href, imageSrc="/images/facebook_icon.png"}) => {
    return (
        <a href={href}>
        <button className="flex justify-center items-center gap-2 w-[154px] h-[58px]  border rounded-xl bg-backgroundClaro hover:bg-gray-200 cursor-pointer">
            <Image className="object-contain" src={imageSrc} alt={""} width={24} height={24}/>
                <span className="font-bold text-xl">
                    {title}
                </span>
        </button>
        </a>
    )
}

export default Button;
//mudei o h1 para span