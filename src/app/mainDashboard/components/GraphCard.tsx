"use client"
import React, { useState } from "react";
import { GraphCardProps } from './GraphCardProps.d';
import GraphCardDaily from "./GraphCardDaily";
import GraphCardWeekly from "./GraphCardWeekly";
import GraphCardMount from "./GraphCardMonth";
import GraphCardYear from "./GraphCardYear";

const GraphCard: React.FC<GraphCardProps> = ({ }) => {
    const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

    const handleClick = (period: string) => {
        setSelectedPeriod(period);
    };

    return (
        <div className="items-center justify-center text-center">
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", width: '100%' }}>
                <div className="flex gap-2 bg-[#C1E1C1]/70 rounded-[22px] p-2">

                    <button
                        onClick={() => handleClick('Diário')}
                        style={{ backgroundColor: selectedPeriod === 'Diário' ? '#2ECC71' : '', padding: '5px 10px', borderRadius: '8px', fontSize: '15px' }}
                    >
                        Diário
                    </button>
                    <button
                        onClick={() => handleClick('Semanal')}
                        style={{ backgroundColor: selectedPeriod === 'Semanal' ? '#2ECC71' : '', padding: '5px 10px', borderRadius: '8px', fontSize: '15px' }}
                    >
                        Semanal
                    </button>
                    <button
                        onClick={() => handleClick('Mensal')}
                        style={{ backgroundColor: selectedPeriod === 'Mensal' ? '#2ECC71' : '', padding: '5px 10px', borderRadius: '8px', fontSize: '15px' }}
                    >
                        Mensal
                    </button>
                    <button
                        onClick={() => handleClick('Anual')}
                        style={{ backgroundColor: selectedPeriod === 'Anual' ? '#2ECC71' : '', padding: '5px 10px', borderRadius: '8px', fontSize: '15px' }}
                    >
                        Anual
                    </button>
                </div>
            </div>

            {/* seleçao dos meses pelo botão */}
            {selectedPeriod === 'Diário' && (
                <div className="flex flex-col items-center">
                    <GraphCardDaily />
                </div>
            )}

            {selectedPeriod === 'Semanal' && (
                <div className="flex flex-col items-center">
                    <GraphCardWeekly />
                </div>
            )}

            {selectedPeriod === 'Mensal' && (
                <div className="flex flex-col items-center">
                    <GraphCardMount />
                </div>
            )}

            {selectedPeriod === 'Anual' && (
                <div>
                    <GraphCardYear />
                </div>
            )}
        </div>
    );
};

export default GraphCard;