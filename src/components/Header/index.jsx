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
            label: "Contratações",
            onClick: () => history.push("/pendings"),
          },
          {
            label: "Início",
            onClick: () => history.push("/"),
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
          <MobileTitle whiteTheme={whiteTheme}>Jobinhos</MobileTitle>
        </MobileLeftContainer>
        <MobileRightButton>
          {/* <BiUser color={whiteTheme ? "#7D4CDB" : "#F8F8F8"} /> */}
        </MobileRightButton>
        <DesktopTitle>Jobinhos</DesktopTitle>
      </Container>
      <DesktopButtonsContainer>
        {/* {options[0] && (
          <DesktopButton onClick={options[0].onClick}>
            {options[0].label}
          </DesktopButton>
        )}
        {options[1] && (
          <DesktopButton onClick={options[0].onClick}>
            {options[1].label}
          </DesktopButton>
        )} */}
        {options && options.map((option) => (
          <DesktopButton onClick={option.onClick}>{option.label}</DesktopButton>
        ))}
      </DesktopButtonsContainer>
    </>
  );
};

export default Header;
