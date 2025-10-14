import React from "react";
import { LoginFormProps } from "./LoginFormprops";

const LoginForm: React.FC<LoginFormProps> = ({ onlyEmail = false }) => {
  return (
    <form  className="flex flex-col items-center gap-4">
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="font-medium mb-2 text-base sm:text-lg md:text-xl lg:text-xl text-left lg:mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu email"
          className="px-4 py-2 rounded-2xl border border-textClaro bg-backgroundClaro text-sm mt-2 w-[320px] lg:w-[360px] max-w-md lg:mt-1 lg:rounded-[9px]"
          autoComplete="email"
        />
      </div>
      {!onlyEmail && (
      <div className="flex flex-col">
        <label
          htmlFor="senha"
          className="font-medium mb-2 text-base sm:text-lg md:text-xl lg:text-xl text-left lg:mb-1"
        >
          Senha
        </label>
        <input
          id="senha"
          type="password"
          placeholder="Digite sua senha"
          className="px-4 py-2 rounded-2xl border border-textClaro bg-backgroundClaro text-sm mt-2 w-[320px] lg:w-[360px] max-w-md lg:mt-1 lg:rounded-[9px]"
          autoComplete="current-password"
        />
      </div>
      )}
    </form>
  );
};

export default LoginForm;
//por algum motivo apareceu alteração da mudança dos componetes de app para src
