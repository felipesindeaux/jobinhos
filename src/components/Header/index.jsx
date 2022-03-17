import {
  Container,
  DesktopButton,
  DesktopButtonsContainer,
  DesktopTitle,
  MobileLeftContainer,
  MobileRightButton,
} from "./styled";
import { FiArrowLeft } from "react-icons/fi";

const Header = () => (
  <>
    <Container>
      <MobileLeftContainer>
        <div>
          <FiArrowLeft />
          <button>Voltar</button>
        </div>
        <h1>Jobinhos</h1>
      </MobileLeftContainer>
      <MobileRightButton>
        <button>Contratações</button>
      </MobileRightButton>
      <DesktopTitle>Jobinhos</DesktopTitle>
    </Container>
    <DesktopButtonsContainer>
      <DesktopButton>Contratações</DesktopButton>
      <DesktopButton>Voltar</DesktopButton>
    </DesktopButtonsContainer>
  </>
);

export default Header;
