import Image from "next/image";
import React from "react";

import { GraphCardDailyProps } from "./GraphCardDailyProps";

const GraphCardDaily: React.FC<GraphCardDailyProps> = ({ titulo }) => {
    return (
        <div className="flex flex-col items-center">
            <h3>Gráfico diário {titulo}</h3>
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

export default GraphCardDaily;
