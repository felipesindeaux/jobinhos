import CardsServices from "../../components/CardsServices";
import { Container } from "./styled";
import { useContext } from "react";
import { ServicesContext } from "../../Providers/Services";

const MainCards = ({ textContent, setOpen, alternativeButton }) => {
  const { services } = useContext(ServicesContext);

  return (
    <Container>
      {services && services.map((item, index) => (
        <CardsServices
          key={index}
          images={item.images}
          name={item.name}
          title={item.title}
          price={item.price}
          desc={item.desc}
          setOpen={setOpen}
          textContent={textContent}
          alternativeButton={alternativeButton}
        />
      ))}
    </Container>
  );
};

export default MainCards;
