import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Layer, Box, FormField, TextInput, Heading } from "grommet";
import { Close } from "grommet-icons";
import { Container, Errors } from "./styled";
import { useState } from "react";
import { useContext } from "react";
import { ServicesContext } from "../../Providers/Services";

const ModalService = ({ setOpen, handleCloseModal, setShowModal }) => {
  const closeModal = () => {
    setOpen(false);
  };

  const { services } = useContext(ServicesContext);
  const { hireService } = useContext(ServicesContext);
  const { modifyService } = useContext(ServicesContext);
  const [openName, setOpenName] = useState(false);

  const formSchema = yup.object().shape({
    title: yup.string().max(20, "Número máximo de caracteres é 20"),
    price: yup.number(),
    desc: yup.string().max(100, "Número máximo de caracteres é 100"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const putApiServices = (data) => {
    modifyService(data);
  };

  const onSubmitFunction = (dataService) => {
    if (dataService.images === "") {
      delete dataService.images;
    } else {
      dataService.images = [dataService.images];
    }
    handleCloseModal();
    putApiServices({ ...hireService[0], ...dataService });
  };

  const onOpenName = () => setOpenName(true);
  const onCloseName = () => setOpenName(false);

  return (
    <Container>
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
            <Button icon={<Close />} onClick={() => setShowModal(false)} />
          </Box>
          <FormField label="Serviço prestado">
            <TextInput {...register("title")} />
          </FormField>
          <Errors>{errors.title?.message}</Errors>

          <FormField label="Valor Serviço prestado">
            <TextInput {...register("price")} type="number" min={0} icon="R$" />
          </FormField>
          <FormField label="Descrição">
            <TextInput name="desc" {...register("desc")} />
          </FormField>
          <Errors>{errors.desc?.message}</Errors>

          <FormField label="Imagens">
            <TextInput
              name="images"
              type="url"
              {...register("images")}
              placeholder="Adicione sua url"
            />
          </FormField>

          <Button type="submit" label="Submit" primary />
        </Box>
      </Layer>
    </Container>
  );
};

export default ModalService;
