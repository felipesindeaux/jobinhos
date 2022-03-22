import {
  Card,
  Name,
  Desc,
  AlternativeButton,
  AlternativeButtonContainer,
  ButtonContainer,
} from "./styled";
import { Button } from "grommet";
import { ServicesContext } from "../../Providers/Services";
import { UserContext } from "../../Providers/User";
import { useContext } from "react";
import { PendingsContext } from "../../Providers/Pendings";

const CardsServices = ({
  textContent,
  images,
  name,
  title,
  price,
  desc,
  id,
  setOpen,
  alternative,
  setServiceID,
  pending,
  accepted,
  pendingId,
  pendingStatus,
}) => {
  const { services } = useContext(ServicesContext);
  const { setHireService } = useContext(ServicesContext);
  const {setIdService} = useContext(ServicesContext);
  const {
    refusePending,
    acceptPending,
    doPending,
    updatePendings,
    filterPedingsServices,
  } = useContext(PendingsContext);

  const showModal = () => {
    setOpen(true);
    setIdService(id)
    setHireService(services.filter((service) => service.userId === id));
    setServiceID(id);
  };

  return (
    <Card>
      <img src={images[0]} alt={name} />
      <Name>{name}</Name>

      <div className="title">
        <p>{title}</p>
        <p>R$ {price}</p>
      </div>
      {!alternative && <Desc>{desc}</Desc>}
      {pendingStatus && <p>Status: {pendingStatus}</p>}
      {!alternative && (
        <ButtonContainer>
          <Button onClick={showModal}>{textContent}</Button>
        </ButtonContainer>
      )}
      {pending && (
        <AlternativeButtonContainer>
          <AlternativeButton
            onClick={() => {
              acceptPending(pendingId);
            }}
          >
            Aceitar
          </AlternativeButton>
          <AlternativeButton
            onClick={() => {
              refusePending(pendingId);
            }}
          >
            Recusar
          </AlternativeButton>
        </AlternativeButtonContainer>
      )}
      {accepted && (
        <AlternativeButtonContainer>
          <AlternativeButton
            onClick={() => {
              doPending(pendingId);
            }}
          >
            Concluir
          </AlternativeButton>
        </AlternativeButtonContainer>
      )}
    </Card>
  );
};

export default CardsServices;
