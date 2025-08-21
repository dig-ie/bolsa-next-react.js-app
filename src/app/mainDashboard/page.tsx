// MainDashboard.tsx
import React from "react";
import BalanceCard from "./components/BalanceCard";
import GraphCard from "./components/GraphCard";

export default function MainDashboard() {
    return (
        <div>
            <BalanceCard balance="R$50.000" futureBalance="R$1500.00" />
            <GraphCard teste="teste" />
        </div>
    );
}
