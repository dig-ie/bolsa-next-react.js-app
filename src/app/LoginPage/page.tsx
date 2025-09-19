import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Text from "../../components/Text/Text";
import Link from "../../components/CustomLink/CustomLink";
import Submit from "../../components/Submit/Submit";
// import BackButton from "../components/BackButton/BackButton";

export default function Home() {
  return (
    <div className="bg-primaryGreen ">
      {/* FIXME: botão quebrando a página (imports)
      <BackButton href="./mainPage" /> */}
      <div className="flex flex-col items-center justify-center   relative  h-40">
        <Text h1="Faça seu Login." h2="" p="" />
      </div>
      <div className="bg-white rounded-t-4xl py-25 flex flex-col gap-5">
        <Form label="Email:" placeholder="usuário123@gmail.com" />
        <Form label="Senha:" placeholder="Senha do Usuario" />
        <Link text="Esqueceu a senha?" />
        <div className=" flex items-center justify-center gap-4 mt-4">
          <Button title="Facebook" href="https://pt-br.facebook.com/login/" />
          <Button
            title="Google"
            href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=pt_BR&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-687016799%3A1747074790770482"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Submit title="Entrar" type={"submit"} href="" />
        </div>
      </div>
    </div>
  );
}