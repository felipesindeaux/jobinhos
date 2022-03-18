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
  alternative,
}) => {
  const showModal = () => {
    setOpen(true);
  };

  return (
    <Card>
      <img src={images} alt={name} />
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
