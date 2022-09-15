import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BackGroundDiv, CardDiv, FormLogin } from "./style";
import Button from "../../components/Button";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const history = useHistory();
  const { login } = useContext(UserContext);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Email invalido")
      .required("Campo obrigatório: Email"),
    password: yup
      .string()
      .min(6, "Senha mínima: 6 carateres")
      .required("Campo obrigatório: Senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const singIn = (data) => {
    login(data);
    history.push("/dashboard");
  };

  useEffect(() => {
    console.log("login");
  }, []);

  return (
    <BackGroundDiv>
      <CardDiv>
        <h3>Entrar em Campo</h3>
        <FormLogin onSubmit={handleSubmit(singIn)}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <input
            name="password"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <Button type="submit" primary titleButton="Enviar" />
        </FormLogin>
      </CardDiv>
    </BackGroundDiv>
  );
};

export default Login;
