import CardsServices from "../../components/CardsServices";
import { Container } from "./styled";
import { useContext } from "react";
import { PendingsContext } from "../../Providers/Pendings";

const PendingsCards = ({
  textContent,
  setOpen,
  alternative,
  setServiceHired,
  setServiceID,
  pending,
  accepted,
}) => {
  const { acceptedPendings, hiredPendings, donePendings } =
    useContext(PendingsContext);

  return (
    <>
      <Container>
        <h1>Pendentes:</h1>
        {hiredPendings.length > 0 ? (
          hiredPendings.map((item, index) => {
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
                tag={item.tags}
                userImage={item.userImage}
              />
            );
          })
        ) : (
          <p>Não possui serviços pendentes</p>
        )}
      </Container>
      <Container>
        <h1>Aceitos: </h1>
        {acceptedPendings.length > 0 ? (
          acceptedPendings.map((item, index) => {
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
                alternative
                setServiceHired={setServiceHired}
                setServiceID={setServiceID}
                accepted
                pendingId={item.pendingId}
              />
            );
          })
        ) : (
          <p>Não possui serviços aceitos</p>
        )}
      </Container>
      <Container>
        <h1>Concluidos</h1>
        {donePendings.length > 0 ? (
          donePendings.map((item, index) => {
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
                alternative
                setServiceHired={setServiceHired}
                setServiceID={setServiceID}
                pendingId={item.pendingId}
              />
            );
          })
        ) : (
          <p>Não possui serviços concluidos.</p>
        )}
      </Container>
    </>
  );
};

export default PendingsCards;
