import Text from "../../components/Text/Text";
import Submit from "../../components/Submit/Submit";
import BackButton from "../../components/BackButton/BackButton";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function ForgetPassword() {
  return (
    <div className="bg-primaryGreen">
      <BackButton href="./LoginPage" />
      <div className="flex flex-col items-center justify-center   relative  h-40">
        <Text h1="Recuperar Senha" h2="" p="" />
      </div>
      <div className="bg-white rounded-t-4xl py-25 flex flex-col gap-5">
        <Text
          h1=""
          h2="Esqueceu a Senha?"
          p="Digite seu e-mail para que possamos te enviar um acesso para fazer uma nova senha."
        />
        <div className="flex flex-col items-center justify-center">
          <LoginForm onlyEmail={true}/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Submit title="Entrar" type={"submit"} href="" />
        </div>
      </div>
    </div>
  );
}
