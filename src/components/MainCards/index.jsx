import CardsServices from "../../components/CardsServices";
import { Container } from "./styled";
import { useContext } from "react";
import { PendingsContext } from "../../Providers/Pendings";

const MainCards = ({
  textContent,
  setOpen,
  alternative,
  arrayToRender,
  setServiceHired,
  setServiceID
}) => {
  const { hirerName, getHirerName } = useContext(PendingsContext);
  return (
    <Container>
      {arrayToRender &&
        arrayToRender.map((item, index) => {

          if (alternative) {
            getHirerName(item.hirerId)
          }
          
          const name = alternative ? hirerName : item.name

          return (
            <CardsServices
              key={index}
              images={item.images}
              name={name}
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
          );
        })}
    </Container>
  );
};

export default MainCards;
