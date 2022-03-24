import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import { Container, FloatingLabel, Form, Left, Body } from "./styled";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleUserInfo } = useContext(UserContext);
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const submitData = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        const { accessToken } = response.data;

        localStorage.setItem("@Jobinhos:token", JSON.stringify(accessToken));

        handleUserInfo(response.data.user);
        toast.success("Login realizado");
        history.push(`/profile`);
      })

      .catch((err) => {
        console.log(err);
        toast.error("Email ou senha inválidos!");
      });
  };

  return (
    <>
      <Body>
        <Header page="user" whiteTheme />
        <Container>
          <Left>
            <svg
              enableBackground="new 0 0 300 302.5"
              version="1.1"
              viewBox="0 0 300 302.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zm63.4-102.7c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z" />
            </svg>
          </Left>
          <Form onSubmit={handleSubmit(submitData)}>
            <h4>Bem vindo de volta</h4>
            <p>Faça seu login:</p>
            <FloatingLabel>
              <input placeholder="Email" {...register("email")} />
              <label>Email:</label>
            </FloatingLabel>
            <FloatingLabel>
              <input
                placeholder="Password"
                type="password"
                {...register("password")}
              />
              <label>Password:</label>
            </FloatingLabel>
            <button disabled={!isValid}>Log in</button>
            <Link to="/register">Ainda não é parceiro? Registre aqui!</Link>
          </Form>
        </Container>
      </Body>
    </>
  );
};

export default Login;
