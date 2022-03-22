import { Box, Heading, Button, FormField, TextInput } from "grommet";
import { Close, Hide, View } from "grommet-icons";
import { useState } from "react";
import api from "../../services/api";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InputContainer, P } from "./errors";

const ModalUser = ({ handleCloseModal }) => {
  const { userInfo, updateUserInfo } = useContext(UserContext);
  const [reveal, setReveal] = useState(false);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
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

  console.log(errors);

  const token = JSON.parse(localStorage.getItem("@Jobinhos:token"));

  const data = (img, name, password) => {
    if (img === undefined || img === "") {
      img = userInfo.img;
    }

    const result = {
      email: userInfo.email,
      password: password,
      name: name,
      age: 0,
      type: userInfo.type,
      img: img,
      userId: userInfo.id,
    };

    return result;
  };

  const submitData = (e) => {
    api
      .put(`/users/${userInfo.id}`, data(url, name, password), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => handleCloseModal())
      .then((res) => updateUserInfo());
  };

  return (
    <Box
      as="form"
      fill="vertical"
      overflow="auto"
      width="medium"
      pad="medium"
      onSubmit={handleSubmit(submitData)}
    >
      <Box flex={false} direction="row" justify="between" align="center">
        <Heading level={4} margin="none">
          Editando meu Perfil
        </Heading>
        <Button icon={<Close />} onClick={handleCloseModal} />
      </Box>
      <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
        <InputContainer>
          <FormField label="Url da Image">
            <TextInput
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </FormField>
        </InputContainer>
        <InputContainer>
          <FormField label={errors.name ? <P>Nome</P> : <p>Nome</p>}>
            <TextInput
              {...register("name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          {errors.name && <span>{errors.name.message}</span>}
        </InputContainer>

        <InputContainer>
          <FormField label={errors.password ? <P>Senha</P> : <p>Senha</p>}>
            <Box direction="row" width={"medium"} pad="xxsmall">
              <TextInput
                plain
                type={reveal ? "text" : "password"}
                {...register("password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
                onClick={() => setReveal(!reveal)}
              />
            </Box>
          </FormField>
          {errors.password && <span>{errors.password.message}</span>}
        </InputContainer>

        <InputContainer>
          <FormField
            label={
              errors.password_confirm ? (
                <P>Confirmar Senha</P>
              ) : (
                <p>Confirmar Senha</p>
              )
            }
          >
            <Box direction="row" width={"medium"} pad="xxsmall">
              <TextInput
                plain
                type={reveal ? "text" : "password"}
                {...register("password_confirm")}
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
              <Button
                icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
                onClick={() => setReveal(!reveal)}
              />
            </Box>
          </FormField>
          {errors.password_confirm && (
            <span>{errors.password_confirm.message}</span>
          )}
        </InputContainer>
      </Box>
      <Box flex={false} as="footer" align="start">
        <Button type="submit" label="Salvar" primary />
      </Box>
    </Box>
  );
};

export default ModalUser;
