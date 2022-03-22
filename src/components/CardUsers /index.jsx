import { Container, DivEmail, DivName } from "./styled";
import { Button } from "grommet";
const CardUsers = ({ handleOpenModal, name, email, img }) => {
  return (
    <Container>
      <img
        src={
          img === undefined || img === ""
            ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            : img
        }
        alt=""
      />
      <DivName>
        Nome:<p>{name}</p>
      </DivName>
      <DivEmail>
        Email: <p>{email}</p>
      </DivEmail>

      <Button primary label="Editar" onClick={handleOpenModal} />
    </Container>
  );
};

export default CardUsers;
