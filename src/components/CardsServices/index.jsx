import {
  Card,
  Name,
  Desc,
  AlternativeButton,
  AlternativeButtonContainer,
  ButtonContainer,
} from "./styled";
import { Button } from "grommet";
import { ServicesContext } from "../../Providers/Services";
import { UserContext } from "../../Providers/User";
import { useContext } from "react";

const CardsServices = ({
  textContent,
  images,
  name,
  title,
  price,
  desc,
  id,
  setOpen,
  alternative,
  setServiceID,
}) => {
  const { services } = useContext(ServicesContext);
  const { setHireService } = useContext(ServicesContext);

  const showModal = () => {
    setOpen(true);
    setHireService(services.filter((service) => service.userId === id));
    setServiceID(id);
  };

  return (
    <Card>
      <img src={images[0]} alt={name} />
      <Name>{name}</Name>
      

      <div className="title">
        <p>{title}</p>
        <p>R$ {price}</p>
      </div>
      {!alternative && <Desc>{desc}</Desc>}
      {!alternative ? (
        <ButtonContainer>
          <Button onClick={showModal}>{textContent}</Button>
        </ButtonContainer>
      ) : (
        <AlternativeButtonContainer>
          <AlternativeButton>Aceitar</AlternativeButton>
          <AlternativeButton>Recusar</AlternativeButton>
        </AlternativeButtonContainer>
      )}
    </Card>
  );
};

export default CardsServices;
