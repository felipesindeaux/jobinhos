import { Card, Name, Desc } from "./styled";
import { Button } from "grommet";

const CardsServices = ({ content,images, name, title, price, desc, setOpen }) => {
  
const showModal = () =>{
  setOpen(true)
}
  
  
  return (
    <Card>
      <img src={images} alt="" />
      <Name>{name}</Name>
      <div>
        <p>{title}</p>
        <p>R$ {price}</p>
      </div>
      <Desc>{desc}</Desc>
      <Button onClick={showModal}>{content}</Button>
    </Card>
  );
};

export default CardsServices;
