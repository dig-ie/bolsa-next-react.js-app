import React from "react";
import { TextProps } from "./TextProps";

const Text: React.FC <TextProps> = ({h1, h2, p, className}) => {
    return(
        <div className={`flex flex-col items-center justify-center ${className}`}>
        <h1 className={`font-bold text-4xl lg:text-3xl mt-5 ${className}`}>{h1}</h1>
        <h2 className="font-bold text-2xl">{h2}</h2>
        <p className="font-bold mb-3 ml-8">{p}</p>
        </div>
    )
}


export default Text;