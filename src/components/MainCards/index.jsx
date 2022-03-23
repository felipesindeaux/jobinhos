import CardsServices from "../../components/CardsServices";
import { Container } from "./styled";
import { useContext } from "react";
import { PendingsContext } from "../../Providers/Pendings";
import { useState } from "react";

const MainCards = ({
  textContent,
  setOpen,
  alternative,
  arrayToRender,
  setServiceHired,
  setServiceID,
  pending,
  accepted,
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
              textContent={textContent}
              alternative={alternative}
              setServiceHired={setServiceHired}
              setServiceID={setServiceID}
              pending={pending}
              accepted={accepted}
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