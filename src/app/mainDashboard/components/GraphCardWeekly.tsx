import Image from "next/image";
import React from "react";

import { GraphCardWeeklyProps } from "./GraphCardWeeklyProps";

const GraphCardWeekly: React.FC<GraphCardWeeklyProps> = ({ titulo }) => {
    return (
        <div className="flex flex-col items-center">
            <h3>Gráfico Semanal {titulo}</h3>
            <Image
                src="/images/graph_switch.png"
                alt="graph"
                width={300}
                height={200}
                className="rounded-[12px] object-contain self-center"
                priority
            />
        </div>
    );
}

export default GraphCardWeekly;
