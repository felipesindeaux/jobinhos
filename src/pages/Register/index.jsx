import { useState } from "react";
import { FormContainer } from "./styled";
import { RegisterContainer } from "./styled";
import Header from "../../components/Header";
import img from "../../assets/img2.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [type, setType] = useState("");

  return (
    <>
      <Header page={'user'} />
      <RegisterContainer>
        <div className="welcome-container">
          <img src={img} alt='' />
          <h2 className="desktop">Seja seu próprio chefe</h2>
        </div>
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
    </>
  );
};

export default Register;
