import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
  Errors,
} from "./styled";
import { useState } from "react";
import { useContext } from "react";
import { ServicesContext } from "../../Providers/Services";


const ModalService = ({ setOpen, handleCloseModal}) => {
  const closeModal = () => {
    setOpen(false);
  };

  const { services } = useContext(ServicesContext);
  const {hireService} = useContext(ServicesContext);
  const {modifyService} = useContext(ServicesContext);

  
  const [openName, setOpenName] = useState(false);
  const[data, SetData] = useState(hireService.map((item) => ({name:item.name, title:item.title, price: item.price, desc:item.desc} 
    )));


  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    title: yup.string().max(20, "Número máximo de caracteres é 15").required("Serviço obrigatório"),
    price: yup.number().required("Valor obrigatório"),
    desc: yup.string().max(40, "Número máximo de caracteres é 50").required("Descrição obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }, } = useForm({
    resolver: yupResolver(formSchema),
  });

  const putApiServices = () => {
    modifyService(data)
  }

  const onSubmitFunction = (dataService) => {
        SetData([dataService])
        handleCloseModal()
        putApiServices()
  };

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
        </Carousel>
      </Figures>

      <Editing>
        <Desc>Nome: {data[0].name}</Desc>
        <Desc>Serviço: {data[0].title} </Desc>
        <Price>Valor: {data[0].price}</Price>
      </Editing>

      <Comments>
        <Carousel controls="selectors">
          <Comment>
            <div className="Data">
              <NameComment>Descrição: {data[0].desc}</NameComment>
              <Description></Description>
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
            onSubmit={handleSubmit(onSubmitFunction)}
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
              <TextInput {...register("name")} />
            </FormField>
            <FormField label="Serviço prestado">
              <TextInput {...register("title")} />  
            </FormField>
            <Errors>{errors.title?.message}</Errors>
            
            <FormField label="Valor Serviço prestado">
              <TextInput 
                {...register("price")}
                type="number"
                thousandsSeparatorSymbol=", "
                min={0}
                icon="R$"
              />
            </FormField>
            <FormField label="Descrição">
              <TextInput name="desc" {...register("desc")} />
            </FormField>
            <Errors>{errors.desc?.message}</Errors>

            <FormField label="Imagens">
              <TextInput name="images" {...register("images")} placeholder="Adicione sua url"/>
            </FormField>

            <Button type="submit" label="Submit" primary />
          </Box>
        </Layer>
      )}
    </Container>
  );
};

export default ModalService;