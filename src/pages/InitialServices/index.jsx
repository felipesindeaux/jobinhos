import { Container, Title } from "./styled";
import { Box, TextInput, Menu } from "grommet";
import { useState } from "react";
import { Search } from "grommet-icons";
import { User } from "grommet-icons";

const InitialServices = () => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <div>
        <Menu
          label="Menu"
          color="brand"
          items={[
            { label: "First Action", onClick: () => {} },
            { label: "Second Action", onClick: () => {} },
          ]}
        />
        <User />
      </div>

      <Title>Jobinhos</Title>

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
  );
};

export default InitialServices;
