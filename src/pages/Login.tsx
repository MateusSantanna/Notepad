import { Link } from "react-router-dom";
import { StyledInput, StyledLogin } from "../styles/styles";

const Login = () => {
  return (
    <>
      <StyledLogin>
        <form>
          <h1>Seja bem vindo</h1>

          <div>
            <StyledInput type="email" placeholder="Seu Email" />
          </div>
          <div>
            <StyledInput type="password" placeholder="Sua Senha" />
          </div>
          <div>
            <button type="submit">Entrar</button>
          </div>
          <div>
            <span>
              Não tem uma conta? Faça seu
              <Link to="/register">CADASTRO</Link>
            </span>
          </div>
          <div>
            <Link to="/home">Ver Dashboard</Link>
          </div>
        </form>
      </StyledLogin>
    </>
  );
};

export default Login;
