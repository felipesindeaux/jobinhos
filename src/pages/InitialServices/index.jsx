import { Container, Title } from "./styled";
import { Box, TextInput, Menu } from "grommet";
import { useState } from "react";
import { Search, List, User } from "grommet-icons";
import MainCards from "../../components/MainCards";
import Header from "../../components/Header";

const InitialServices = () => {
  const [search, setSearch] = useState("");

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
      <MainCards></MainCards>
    </>
  );
};

export default InitialServices;
