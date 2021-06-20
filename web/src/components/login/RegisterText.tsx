import { Link } from "react-router-dom";

const RegisterText = () => {
  return (
    <span className="register-text">
      Ainda não é registrado?
      <Link to="/registrar" className="text-gradient">
        Clique aqui
      </Link>
    </span>
  );
};

export default RegisterText;
