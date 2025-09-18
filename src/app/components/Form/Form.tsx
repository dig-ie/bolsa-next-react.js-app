import React from "react";
import { FormProps } from "../Form/FormProps";

const Form: React.FC<FormProps> = ({ label, placeholder }) => {
  return (
    <form className="w-full flex flex-col items-center justify-center">
      <label className="font-medium mb-2 text-base sm:text-lg md:text-xl lg:text-2xl text-center w-full mr-60">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 rounded-2xl border border-textClaro bg-backgroundClaro text-sm mt-2 w-full max-w-xs"
      />
    </form>
  );
};

export default Form;