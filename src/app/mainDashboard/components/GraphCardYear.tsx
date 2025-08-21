import Image from "next/image";
import React from "react";

import { GraphCardYearProps } from "./GraphCardYearProps";

const GraphCardYear: React.FC<GraphCardYearProps> = ({ titulo }) => {
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

export default GraphCardYear;
