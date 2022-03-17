import { Card, Name, Desc } from "./styled";
import { Button } from "grommet";

const CardsServices = ({ images, name, title, price, desc }) => {
  return (
    <Card>
      <img src={images} alt="" />
      <Name>{name}</Name>
      <div>
        <p>{title}</p>
        <p>R$ {price}</p>
      </div>
      <Desc>{desc}</Desc>
      <Button>Eu Quero!</Button>
    </Card>
  );
};

export default CardsServices;
