import { Container } from "./styled";
import { Box, TextInput, Layer } from "grommet";
import { useState } from "react";
import { Search } from "grommet-icons";
import MainCards from "../../components/MainCards";
import Header from "../../components/Header";
import Modal from "../../components/Modal";

const InitialServices = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header whiteTheme />
      <Container>
        <Box fill align="center" justify="start" pad="large">
          <Box width="large" gap="medium">
            <TextInput
              color="brand"
              icon={<Search />}
              reverse
              placeholder="O que você procura? ..."
              plain={false}
              onChange={(event) => setSearch(event.target.value)}
            />
          </Box>
        </Box>
      </Container>
      <MainCards
        textContent={"Eu quero!"}
        open={open}
        setOpen={setOpen}
      ></MainCards>

      {open && (
        <Layer
          onClickOutside={() => setOpen(false)}
          onEsc={() => setOpen(false)}
        >
          <Modal setOpen={setOpen} />
        </Layer>
      )}
    </>
  );
};

export default InitialServices;
