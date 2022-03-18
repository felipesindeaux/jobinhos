import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { FormBox } from "../../styles/form";
import { Body } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";

const Login = () => {
  const { handleUserInfo } = useContext(UserContext);
  const [auth, setAuth] = useState(false);
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitData = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        const { accessToken } = response.data;

        localStorage.setItem("@Jobinhos:token", JSON.stringify(accessToken));

        setAuth(true);
        handleUserInfo(response.data.user);
        toast.success("Login realizado");

        history.push(`/profile`);
      })

      .catch((_) => {
        toast.error("Email ou senha inválidos!");
      });
  };

  return (
    <>
      <Header page="user" whiteTheme />
      <Body>
        <Body>
          <FormBox onSubmit={handleSubmit(submitData)}>
            <img src={require("../../assets/lock.jpg")} alt="lock" />

            <label>E-mail</label>
            <input {...register("email")} />
            {errors.email?.message}

            <label>Senha</label>
            <input {...register("password")} />
            {errors.senha?.message}

            <Link to="/register">Ainda não é parceiro? Registre aqui!</Link>

            <button type="submit">Entrar</button>
          </FormBox>
          <div className="textBox">
            <h1>Bem vindo de volta!</h1>
          </div>
        </Body>
      </Body>
    </>
  );
};

export default Login;
