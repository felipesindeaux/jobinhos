import { Card, Name, Desc } from "./styled";
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
}) => {
  const { services } = useContext(ServicesContext);
  const { setHireService } = useContext(ServicesContext);
  const {setIdService} = useContext(ServicesContext);

  const showModal = () => {
    setOpen(true);
    setIdService(id)
    setHireService(services.filter((service) => service.userId === id));
  };

  return (
    <Card>
      <img src={images[0]} alt={name} />
      <Name>{name}</Name>
      {!alternative && (
        <div>
          <p>{title}</p>
          <p>R$ {price}</p>
        </div>
      )}
      <Desc>{desc}</Desc>
      {!alternative && <Button onClick={showModal}>{textContent}</Button>}
    </Card>
  );
};

export default CardsServices;
