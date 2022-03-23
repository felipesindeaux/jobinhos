import CardsServices from "../../components/CardsServices";
import { Container } from "./styled";
import { useContext } from "react";
import { PendingsContext } from "../../Providers/Pendings";
import { useState } from "react";

const MainCards = ({
  setOpen,
  alternative,
  arrayToRender,
  setServiceHired,
  setServiceID,
}) => {
 
  return (
    <Container>
      {
        arrayToRender.map((item, index) => {

          const name = alternative ? item.hirerName : item.name;

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
              alternative={alternative}
              setServiceHired={setServiceHired}
              setServiceID={setServiceID}
              pendingId={item.pendingId}
              pendingStatus={item.pendingStatus}
              tag = {item.tags}
              userImage={item.userImage}
            />
          );
        })}
    </Container>
  );
};

export default MainCards;
