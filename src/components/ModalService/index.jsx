import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Layer, Box, FormField, TextInput, Heading } from "grommet";
import { Close } from "grommet-icons";
import { Errors, Container } from "./styled";
import { useState } from "react";
import { useContext } from "react";
import { ServicesContext } from "../../Providers/Services";

const ModalService = ({
  setOpen,
  handleCloseModal,
  setShowModal,
  isCreateService,
}) => {
  const { hireService } = useContext(ServicesContext);
  const { modifyService, createService } = useContext(ServicesContext);
  const [openName, setOpenName] = useState(false);

  const formSchema = isCreateService
    ? yup.object().shape({
        title: yup
          .string()
          .max(20, "Número máximo de caracteres é 20")
          .required("Campo obrigatório"),
        price: yup.number().required("Campo obrigatório"),
        desc: yup
          .string()
          .max(100, "Número máximo de caracteres é 100")
          .required("Campo obrigatório"),
        images: yup.string().required("Campo obrigatório"),
        tags: yup.string().required("Campo obrigatório"),
      })
    : yup.object().shape({
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
    if (isCreateService) {
      dataService.images = dataService.images.split(" ");
      dataService.tags = dataService.tags.split(" ");
      createService(dataService);
      handleCloseModal();
    } else {
      if (dataService.images === "") {
        delete dataService.images;
      } else {
        dataService.images = dataService.images.split(" ");
      }
      if (dataService.title === "") {
        delete dataService.title;
      }
      if (dataService.desc === "") {
        delete dataService.desc;
      }
      handleCloseModal();
      putApiServices({ ...hireService[0], ...dataService });
    }
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
          <FormField label="Título">
            <TextInput name="title" {...register("title")} />
          </FormField>
          <Errors>{errors.title?.message}</Errors>

          <FormField label="Valor">
            <TextInput {...register("price")} type="number" min={0} icon="R$" />
          </FormField>
          <FormField label="Descrição">
            <TextInput name="desc" {...register("desc")} />
          </FormField>
          <Errors>{errors.desc?.message}</Errors>

          {isCreateService && (
            <>
              <FormField label="Tags (Separadas por espaços)">
                <TextInput
                  name="tags"
                  {...register("tags")}
                  placeholder="Adicione sua url"
                />
              </FormField>
              <Errors>{errors.tags?.message}</Errors>
            </>
          )}

          <FormField label="Imagens (Separadas por espaços)">
            <TextInput
              name="images"
              type="url"
              {...register("images")}
              placeholder="Adicione sua url"
            />
          </FormField>
          <Errors>{errors.images?.message}</Errors>

          <Button type="submit" label="Submit" primary />
        </Box>
      </Layer>
    </Container>
  );
};

export default ModalService;
