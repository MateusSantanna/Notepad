import { Link } from "react-router-dom";
import { StyledInput, StyledRegister } from "../styles/styles";
import { useForm } from "react-hook-form";
import { createUserData, userSchema } from "../schema/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    return <Link to="/" />;
  };
  return (
    <>
      <StyledRegister>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Registre sua conta</h1>
          {errors.name && <span>{errors.name?.message}</span>}
          <div>
            <StyledInput
              {...register("name")}
              type="name"
              placeholder="Seu Nome Completo"
            />
          </div>
          {errors.email && <span>{errors.email?.message}</span>}
          <div>
            <StyledInput
              type="email"
              placeholder="Seu Email"
              {...register("email")}
            />
          </div>
          {errors.password && <span>{errors.password?.message}</span>}
          <div>
            <StyledInput
              type="password"
              placeholder="Sua Senha"
              {...register("password")}
            />
          </div>
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
          <div>
            <StyledInput
              type="password"
              placeholder="Confirme sua Senha"
              {...register("confirmPassword")}
            />
          </div>

          <div>
            <button type="submit">Cadastrar</button>
          </div>
          <div>
            <span>
              Já criou uma conta? então faça
              <Link to="/">LOGIN</Link>
            </span>
          </div>
        </form>
      </StyledRegister>
    </>
  );
};

export default Register;
