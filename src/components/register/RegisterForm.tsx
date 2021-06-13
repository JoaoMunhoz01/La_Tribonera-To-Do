import PurpleButton from "../PurpleButton";
import Input from "../Input";
import LoginText from "./LoginText";

const RegisterForm = () => {
  return (
    <form>
      <Input nome="Nome" />
      <Input nome="Sobrenome" />
      <Input type="email" nome="Email" />
      <Input type="password" nome="Senha" />

      <PurpleButton texto="Registrar" />

      <LoginText />
    </form>
  );
};

export default RegisterForm;
