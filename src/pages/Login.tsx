import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <form>
        <label>Email</label>
        <input type="email" />

        <label>Senha</label>
        <input type="password" />

        <button type="submit">Entrar</button>
      </form>

      <Link to="/register">Cadastro</Link>
    </>
  );
};

export default Login;
