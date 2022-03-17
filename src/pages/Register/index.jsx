import { useState } from "react";
import { FormContainer } from "./styled";
import { RegisterContainer } from "./styled";
import { RectangleDiv } from "./styled";
import { Body } from "../Login/styles";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [type, setType] = useState("");

  return (
    <Body>
    <RegisterContainer>
      <RectangleDiv>
        <div className="rectangle-1"></div>
        <div className="rectangle-2"></div>
      </RectangleDiv>
      <h2>
        Bem vindo ao <h2>Jobinhos!</h2>
      </h2>
      <FormContainer>
        <p>Nome</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Eu sou...</p>
        <select
          name=""
          id=""
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="consumidor">Consumidor</option>
          <option value="Prestador de serviços">Prestador de serviços</option>
        </select>
        <p>Senha</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>Confirmar senha</p>
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <button>Registrar</button>
      </FormContainer>
    </RegisterContainer>
    <div className="textBox">
      <h1>Seja seu proprio chefe</h1>
      <h3>Bem-vindo ao Jobinhos</h3>
    </div>
    </Body>
  );
};

export default Register;
