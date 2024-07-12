import { Link } from "react-router-dom";
import { StyledRegister } from "../styles/styles";

const Register = () => {
  return (
    <>
      <StyledRegister>
        <form>
          <label>Nome</label>
          <input type="name" />

          <label>Email</label>
          <input type="email" />

          <label>Senha</label>
          <input type="password" />

          <label>Confirmar Senha</label>
          <input type="password" />

          <button type="submit">Cadastrar</button>
        </form>
      </StyledRegister>

      <Link to="/">Login</Link>
    </>
  );
};

export default Register;
