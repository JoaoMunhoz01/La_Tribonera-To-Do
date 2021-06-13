import { Link } from "react-router-dom";

const LoginText = () => {
  return (
    <span className="register-text">
      Já é cadastrado?
      <Link to="/login" className="text-gradient">Clique aqui</Link>
    </span>
  );
};

export default LoginText;
