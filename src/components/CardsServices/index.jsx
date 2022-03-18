import { Card, Name, Desc } from "./styled";
import { Button } from "grommet";

const CardsServices = ({
  textContent,
  images,
  name,
  title,
  price,
  desc,
  setOpen,
  alternativeButton,
}) => {
  const showModal = () => {
    setOpen(true);
  };

  return (
    <Card>
      <img src={images} alt={name} />
      <Name>{name}</Name>
      {!alternativeButton && (
        <div>
          <p>{title}</p>
          <p>R$ {price}</p>
        </div>
      )}
      <Desc>{desc}</Desc>
      {!alternativeButton && <Button onClick={showModal}>{textContent}</Button>}
    </Card>
  );
};

export default CardsServices;
