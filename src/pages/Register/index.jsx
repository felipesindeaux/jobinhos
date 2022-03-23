import { useState } from "react";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, FloatingLabel, Form, Left, Body } from "./styled";

const Register = () => {
  const [auth, setAuth] = useState(false);
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    type: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo obrigatório").min(6),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const submitData = (data) => {
    delete data.password_confirm;
    const newData = {
      ...data,
      img: "http://www.def.uem.br/arquivos/imagens/fotos-dos-docentes/semimagemavatar.png/image_preview",
    };
    api
      .post("/register", newData)
      .then((response) => {
        toast.success("Registrado com sucesso!");
        history.push("/login");
      })

      .catch((_) => {
        toast.error("Ops, algo deu errado!");
      });
  };

  return (
    <>
      <Body>
        <Header page="user" whiteTheme />
        <Container>
          <Form onSubmit={handleSubmit(submitData)}>
            <h4>Bem vindo de volta</h4>
            <p>Faça seu cadastro:</p>
            <FloatingLabel>
              <input placeholder="Nome" {...register("name")} />
              <label>Nome:</label>
            </FloatingLabel>
            <FloatingLabel>
              <input placeholder="Email" {...register("email")} />
              <label>Email:</label>
            </FloatingLabel>
            <FloatingLabel>
              <select {...register("type")}>
                <option value="hirer">Consumidor</option>
                <option value="hired">Prestador</option>
              </select>
            </FloatingLabel>
            <FloatingLabel>
              <input
                placeholder="Senha"
                type="password"
                {...register("password")}
              />
              <label>Senha:</label>
            </FloatingLabel>
            <FloatingLabel>
              <input
                placeholder="Confirmar Senha"
                type="password"
                {...register("password_confirm")}
              />
              <label>Confirmar Senha:</label>
            </FloatingLabel>
            <button disabled={!isValid}>Log in</button>
            <Link to="/login">Já tem uma conta? Entre aqui</Link>
          </Form>
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
        </Container>
      </Body>
    </>
  );
};

export default Register;
