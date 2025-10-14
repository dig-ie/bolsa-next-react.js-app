import React from "react";

const CheckBox: React.FC = () => {
    return (
        <form>
            <label className=" whitespace-nowrap overflow-hidden">
                <input type="checkbox" 
                className="scale-100 mr-2 "
            />
            <span className="font-bold text-[13px]">
            Me mantenha conectado
            </span>
            </label>
        </form>

    );
 };

    export default CheckBox;