import {
  Button,
  Carousel,
  Layer,
  Box,
  FormField,
  TextInput,
  Heading,
} from "grommet";
import { Close } from "grommet-icons";
import { NumberInput } from "grommet-controls";
import {
  Container,
  Figures,
  Desc,
  Price,
  Comments,
  NameComment,
  Comment,
  Description,
  Editing,
} from "./styled";
import { useState } from "react";

const ModalService = ({ setOpen, handleCloseModal }) => {
  const closeModal = () => {
    setOpen(false);
  };

  const [openName, setOpenName] = useState(false);
  const [number, setNumber] = useState("0");
  const [name, setName] = useState("")
  const [service, setService] = useState("")
  const [description, setDescription] = useState("");



  const onOpenName = () => setOpenName(true);
  const onCloseName = () => setOpenName(false);

  return (
    <Container>
      <header>
        <Desc></Desc>
        <Button icon={<Close />} onClick={handleCloseModal} />
      </header>
      <Figures>
        <Carousel play={3000}>
          <img
            src="https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg"
            alt=""
          />
          <img
            src="https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg"
            alt=""
          />
          <img
            src="https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg"
            alt=""
          />
        </Carousel>
      </Figures>

      <Editing >
        <div>Nome: {name}</div>
        <Desc>Serviço: {service}</Desc>
        <Price>Valor: {number}</Price>
      </Editing>

      <Comments>
        <Carousel controls="selectors">
          <Comment>
            <div className="Data">
              <NameComment>Descrição</NameComment>
              <Description>{description}</Description>
            </div>
          </Comment>
        </Carousel>
      </Comments>

      <Button className="Aceppt" primary label="Editar" onClick={onOpenName} />

      {openName && (
        <Layer
          full="vertical"
          position="right"
          onEsc={onCloseName}
          onClickOutside={onCloseName}
        >
          <Box
            as="form"
            fill="vertical"
            overflow="auto"
            width="medium"
            pad="medium"
          >
            <Box flex={false} direction="row" justify="between">
              <Heading level={2} margin="none"></Heading>
              <Button icon={<Close />} onClick={onCloseName} />
            </Box>

            <FormField label="Nome">
              <TextInput onChange={(e) => setName(e.target.value)} />
            </FormField>
            <FormField label="Serviço prestado">
              <TextInput onChange={(e) => setService(e.target.value)} />
            </FormField>
            <FormField label="Valor serviço prestado">
              <NumberInput
                name="valor"
                value={number}
                onChange={(value) => setNumber(value.target.value)}
                thousandsSeparatorSymbol=""
                min={0}
                icon="R$"
              />
            </FormField>
            <FormField label="Descrição" pad="large">
              <TextInput
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormField>
            <Button type="submit" label="Submit" primary />
          </Box>
        </Layer>
      )}
    </Container>
  );
};

export default ModalService;
