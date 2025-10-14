"use client";

import Button from "../../../components/Button/Button";
import LoginForm from "../../../components/LoginForm/LoginForm";
import Text from "../../../components/Text/Text";
import Link from "../../../components/CustomLink/CustomLink";
import Submit from "../../../components/Submit/Submit";

interface LoginContentProps {
  facebookTitle: string;
  googleTitle: string;
}

export default function LoginContent({ facebookTitle, googleTitle }: LoginContentProps) {
  return (
    <div className="bg-primaryGreen">

      <div className="flex flex-col items-center justify-center relative h-40">
        <Text className="lg:hidden" h1="Faça seu Login." h2="" p="" />
      </div>

      <div className="bg-white rounded-t-4xl py-25 flex flex-col gap-5 items-center justify-center">
        <LoginForm />
        <Link text="Esqueceu a senha?" />

        <div className="flex flex-row items-center justify-center gap-4 mt-4 md:flex md:items-center md:justify-center md:gap-4 md:mt-4">
          <Button
            title={facebookTitle}
            href="https://pt-br.facebook.com/login/"
          />
          <Button
            imageSrc="/images/google_icon.png"
            title={googleTitle}
            href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=pt_BR&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-687016799%3A1747074790770482"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <Submit title="Entrar" type="submit" href="" className="w-[320px] h-[58px] border rounded-xl bg-secondaryColor mt-6 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}
