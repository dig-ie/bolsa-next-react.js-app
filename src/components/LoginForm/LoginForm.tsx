import React from "react";
import { LoginFormProps } from "./LoginFormprops";

const LoginForm: React.FC<LoginFormProps> = ({ onlyEmail = false }) => {
  return (
    <form  className="w- flex flex-col items-center gap-4">
      <div className="w-[320px] flex flex-col ">
        <label
          htmlFor="email"
          className="font-medium mb-2 text-base sm:text-lg md:text-xl lg:text-2xl text-left"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu email"
          className="px-4 py-2 rounded-2xl border border-textClaro bg-backgroundClaro text-sm mt-2 w-full max-w-xs"
          autoComplete="email"
        />
      </div>
      {!onlyEmail && (
      <div className="w-[320px] flex flex-col">
        <label
          htmlFor="senha"
          className="font-medium mb-2 text-base sm:text-lg md:text-xl lg:text-2xl text-left"
        >
          Senha
        </label>
        <input
          id="senha"
          type="password"
          placeholder="Digite sua senha"
          className="px-4 py-2 rounded-2xl border border-textClaro bg-backgroundClaro text-sm mt-2 w-full max-w-xs"
          autoComplete="current-password"
        />
      </div>
      )}
    </form>
  );
};

export default LoginForm;
//por algum motivo apareceu alteração da mudança dos componetes de app para src
