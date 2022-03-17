import {
  Container,
  DesktopButton,
  DesktopButtonsContainer,
  DesktopTitle,
  MobileLeftContainer,
  MobileRightButton,
  MobileTitle,
} from "./styled";
import { List } from "grommet-icons";
import { Menu } from "grommet";
import { BiUser } from "react-icons/bi";

const Header = ({ whiteTheme = false, page }) => {
  const getOptions = () => {
    switch (page) {

      case 'pendings':
        return [
          {
            label: "Meu perfil",
            onClick: () => {},
          },
          {
            label: "Início",
            onClick: () => {},
          },
        ];

      case "profile":
        return [
          {
            label: "Contratações",
            onClick: () => {},
          },
          {
            label: "Início",
            onClick: () => {},
          },
        ];

      default:
        return [
          {
            label: "Meu perfil",
            onClick: () => {},
          },
        ];
    }
  };

  const options = getOptions();

  return (
    <>
      <Container whiteTheme={whiteTheme}>
        <MobileLeftContainer>
          <Menu
            icon={<List color={whiteTheme ? "brand" : "light-1"} />}
            items={options}
          />
          <MobileTitle whiteTheme={whiteTheme}>Jobinhos</MobileTitle>
        </MobileLeftContainer>
        <MobileRightButton>
          {/* <BiUser color={whiteTheme ? "#7D4CDB" : "#F8F8F8"} /> */}
        </MobileRightButton>
        <DesktopTitle>Jobinhos</DesktopTitle>
      </Container>
      <DesktopButtonsContainer>
      {options[0] && <DesktopButton>{options[0].label}</DesktopButton>}
        {options[1] && <DesktopButton>{options[1].label}</DesktopButton>}
      </DesktopButtonsContainer>
    </>
  );
};

export default Header;
