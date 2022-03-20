import CardsServices from "../../components/CardsServices";
import { Container } from "./styled";

const MainCards = ({ textContent, setOpen, alternative, arrayToRender,setServiceHired,setServiceID }) => {
  
  return (
    <Container>
      {arrayToRender &&
        arrayToRender.map((item, index) => (
          <CardsServices
            key={index}
            images={item.images}
            name={item.name}
            title={item.title}
            price={item.price}
            id={item.id}
            desc={item.desc}
            setOpen={setOpen}
            textContent={textContent}
            alternative={alternative}
            setServiceHired={setServiceHired}
            setServiceID={setServiceID}
          />
        ))}
    </Container>
  );
};

export default MainCards;
