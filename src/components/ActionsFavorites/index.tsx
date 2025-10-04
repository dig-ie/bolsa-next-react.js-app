import React from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";


const ActionsFavoritesMocks = [
    { actionName: "PETR4", actionValue: "+1,22%" },
    { actionName: "VALE3", actionValue: "-0,75%" },
    { actionName: "ITUB4", actionValue: "+0,65%" },
];

const ActionsFavorites: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-4 p-10 rounded-lg">
            <h2 className="self-start text-xl font-medium md:self-center ">Ações favoritas:</h2>
            <div className="flex flex-col gap-2 p-2 bg-[#FFFFFF] ">

                {ActionsFavoritesMocks.map((item, index) => {

                    //se o valor tiver o "+" ele vai se atribuir como positivo
                    const isPositive = item.actionValue.includes("+");


                    //caso o valor for positivo mostra o texto verde caso falso, vermelho
                    const valueColor = isPositive ? "text-green-600" : "text-red-600";
                    return (
                        <div key={index} className="flex items-center justify-between rounded md:flex w-72 md:mx-auto md:items-center md:text-center ">
                            <p className="text-lg font-semibold">{item.actionName}</p>
                            <p className={`text-lg flex text-center items-center font-semibold gap-1 ${valueColor}`}>
                                {/* caso for positivo ele vai mostrar o icone positivo caso falso, negativo */}
                                {item.actionValue} {isPositive ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                            </p>
                        </div>
                    );
                })}
            </div>
            <a href="#" className="mt-2 font-semibold text-black underline">
                Ver todas as ações
            </a>
        </div>
    );
};

export default ActionsFavorites;