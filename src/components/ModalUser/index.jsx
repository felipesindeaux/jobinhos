import { Box, Heading, Button, FormField, TextInput } from "grommet";
import { Close, Hide, View } from "grommet-icons";
import { useState } from "react";

const ModalUser = ({ handleCloseModal }) => {
  const [reveal, setReveal] = useState(false);
  return (
    <Box
      as="form"
      fill="vertical"
      overflow="auto"
      width="medium"
      pad="medium"
      onSubmit={handleCloseModal}
    >
      <Box flex={false} direction="row" justify="between" align="center">
        <Heading level={4} margin="none">
          Editando meu Perfil
        </Heading>
        <Button icon={<Close />} onClick={handleCloseModal} />
      </Box>
      <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
        <FormField label="Url da Image">
          <TextInput />
        </FormField>
        <FormField label="Nome">
          <TextInput />
        </FormField>
        <FormField label="Senha">
          <Box justify="center" align="center" direction="row" width={"medium"}>
            <TextInput plain type={reveal ? "text" : "password"} />
            <Button
              icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
              onClick={() => setReveal(!reveal)}
            />
          </Box>
        </FormField>
        <FormField label="Confirmar Senhar">
          <Box justify="center" align="center" direction="row" width={"medium"}>
            <TextInput plain type={reveal ? "text" : "password"} />
            <Button
              icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
              onClick={() => setReveal(!reveal)}
            />
          </Box>
        </FormField>
      </Box>
      <Box flex={false} as="footer" align="start">
        <Button
          type="submit"
          label="Salvar"
          onClick={handleCloseModal}
          primary
        />
      </Box>
    </Box>
  );
};

export default ModalUser;
