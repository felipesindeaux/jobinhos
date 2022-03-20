import {
  Container,
  DesktopButton,
  DesktopButtonsContainer,
  DesktopTitle,
  MobileLeftContainer,
  MobileTitle,
} from "./styled";
import { List } from "grommet-icons";
import { Menu } from "grommet";
import { useHistory } from "react-router-dom";

const Header = ({ whiteTheme = false, page }) => {
  const history = useHistory();
  const getOptions = () => {
    switch (page) {
      case "pendings":
        return [
          {
            label: "Meu perfil",
            onClick: () => history.push("/profile"),
          },
          {
            label: "Início",
            onClick: () => history.push("/"),
          },
        ];

      case "profile":
        return [
          {
            label: "Meus Serviços",
            onClick: () => history.push("/myServices"),
          },
          {
            label: "Contratações",
            onClick: () => history.push("/pendings"),
          },
          {
            label: "Início",
            onClick: () => history.push("/"),
          },
          
        ];

      case "user":
        return [
          {
            label: "Início",
            onClick: () => {history.push('/')},
          },
        ];

      default:
        return [
          {
            label: "Meu perfil",
            onClick: () => history.push("/profile"),
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
          {page === "user" ? (
            <MobileTitle whiteTheme={whiteTheme}>
              Bem vindo ao <span>Jobinhos!</span>
            </MobileTitle>
          ) : (
            <MobileTitle whiteTheme={whiteTheme}>Jobinhos</MobileTitle>
          )}
        </MobileLeftContainer>
        <DesktopTitle>Jobinhos</DesktopTitle>
      </Container>
      <DesktopButtonsContainer>
        {options &&
          options.map((option, index) => (
            <DesktopButton key={index} onClick={option.onClick}>
              {option.label}
            </DesktopButton>
          ))}
      </DesktopButtonsContainer>
    </>
  );
};

export default Header;
