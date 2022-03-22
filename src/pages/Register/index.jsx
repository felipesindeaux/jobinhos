import { useState } from "react";
import { FormContainer } from "./styled";
import { RegisterContainer } from "./styled";
import Header from "../../components/Header";
import img from "../../assets/Wavy_Tech-28_Single-10.jpg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [auth, setAuth] = useState(false);
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    type: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
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
      <Header page={"user"} />
      <RegisterContainer>
        <div className="welcome-container">
          <img src={img} alt="registerImage" />
          <h2 className="desktop">Seja seu próprio chefe</h2>
        </div>
        <FormContainer onSubmit={handleSubmit(submitData)}>
          <p>Nome</p>
          <input {...register("name")} />
          <p>Email</p>
          <input {...register("email")} />
          <p>Eu sou...</p>
          <select {...register("type")}>
            <option value="hirer">Consumidor</option>
            <option value="hired">Prestador de serviços</option>
          </select>
          <p>Senha</p>
          <input type="password" {...register("password")} />
          <p>Confirmar senha</p>
          <input type="password" {...register("password_confirm")} />

          <button type="submit">Registrar</button>
        </FormContainer>
      </RegisterContainer>
    </>
  );
};

export default Register;
