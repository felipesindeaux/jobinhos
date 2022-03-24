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
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import { AiOutlineHome } from "react-icons/ai";
import { BiBriefcaseAlt } from "react-icons/bi";
import {
  HiOutlineUserAdd,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import NavBar from "../MobileNav";

const Header = ({ whiteTheme = false, page }) => {
  const { userInfo, handleUserInfo } = useContext(UserContext);
  const history = useHistory();
  const getOptions = () => {
    switch (page) {
      case "pendings":
        return [
          {
            label: "Meu perfil",
            onClick: () => history.push("/profile"),
            Icon: HiOutlineUser,
          },
          {
            label: "Início",
            onClick: () => history.push("/"),
            Icon: AiOutlineHome,
          },
          {
            label: "Sair",
            onClick: () => {
              localStorage.clear();
              handleUserInfo(undefined);
            },
            Icon: MdLogout,
          },
        ];

      case "profile":
        if (userInfo.type === "hired") {
          return [
            {
              label: "Meus Serviços",
              onClick: () => history.push("/myServices"),
              Icon: BiBriefcaseAlt,
            },
            {
              label: "Contratações",
              onClick: () => history.push("/pendings"),
              Icon: HiOutlineUserAdd,
            },
            {
              label: "Início",
              onClick: () => history.push("/"),
              Icon: AiOutlineHome,
            },
            {
              label: "Sair",
              onClick: () => {
                localStorage.clear();
                handleUserInfo(undefined);
              },
              Icon: MdLogout,
            },
          ];
        } else {
          return [
            {
              label: "Contratações",
              onClick: () => history.push("/pendings"),
              Icon: HiOutlineUserAdd,
            },
            {
              label: "Início",
              onClick: () => history.push("/"),
              Icon: AiOutlineHome,
            },
            {
              label: "Sair",
              onClick: () => {
                localStorage.clear();
                handleUserInfo(undefined);
              },
              Icon: MdLogout,
            },
          ];
        }

      case "user":
        return [
          {
            label: "Início",
            onClick: () => {
              history.push("/");
            },
            Icon: AiOutlineHome,
          },
        ];

      default:
        if (userInfo) {
          return [
            {
              label: "Meu perfil",
              onClick: () => history.push("/profile"),
              Icon: HiOutlineUser,
            },
            {
              label: "Equipe",
              onClick: () => {
                history.push("/infoTeam");
              },
              Icon: HiOutlineUserGroup,
            },
            {
              label: "Sair",
              onClick: () => {
                localStorage.clear();
                handleUserInfo(undefined);
                history.push("/login");
              },
              Icon: MdLogout,
            },
          ];
        } else {
          return [
            {
              label: "Meu perfil",
              onClick: () => history.push("/profile"),
              Icon: HiOutlineUser,
            },
            {
              label: "Equipe",
              onClick: () => {
                history.push("/infoTeam");
              },
              Icon: HiOutlineUserGroup,
            },
          ];
        }
    }
  };

  const options = getOptions();

  return (
    <>
      <Container whiteTheme={whiteTheme}>
        <MobileLeftContainer>
          <NavBar options={options} />
          {page === "user" ? (
            <MobileTitle whiteTheme={whiteTheme}>
              Bem vindo ao <span>Jobinhos!</span>
            </MobileTitle>
          ) : (
            <MobileTitle whiteTheme={whiteTheme}>Jobinhos</MobileTitle>
          )}
        </MobileLeftContainer>
        <DesktopTitle onClick={() => history.push("/")}>
          <span>Job</span>inhos
        </DesktopTitle>
        <DesktopButtonsContainer>
          {options &&
            options.map((option) => {
              const { Icon } = option;

              return (
                <>
                  <Icon size={30} />
                  <DesktopButton onClick={option.onClick}>
                    {option.label}
                  </DesktopButton>
                </>
              );
            })}
        </DesktopButtonsContainer>
      </Container>
    </>
  );
};

export default Header;
