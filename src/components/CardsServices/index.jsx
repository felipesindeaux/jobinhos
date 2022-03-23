import {
  Card,
  CardBody,
  Name,
  Desc,
  AlternativeButton,
  AlternativeButtonContainer,
  ButtonContainer,
  UserInfo,
  Title,
  Price,
  UserInfoContainer,
  SpanDiv,
} from "./styled";
import { Button } from "grommet";
import { ServicesContext } from "../../Providers/Services";
import { UserContext } from "../../Providers/User";
import { useContext } from "react";
import { PendingsContext } from "../../Providers/Pendings";
import { Add } from "grommet-icons";
import { MdAdd } from "react-icons/md";

const CardsServices = ({
  images,
  name,
  title,
  price,
  desc,
  id,
  setOpen,
  alternative,
  setServiceID,
  pendingId,
  pendingStatus,
  tag,
  userImage,
}) => {
  const { services } = useContext(ServicesContext);
  const { setHireService } = useContext(ServicesContext);
  const { setIdService } = useContext(ServicesContext);
  const {
    refusePending,
    acceptPending,
    doPending,
    updatePendings,
    filterPedingsServices,
  } = useContext(PendingsContext);

  const showModal = () => {
    setOpen(true);
    setIdService(id);
    setHireService(services.filter((service) => service.id === id));
    setServiceID(id)
  };

  return (
    <Card>
      <img src={images[0]} alt={name} />

      <SpanDiv>
        {tag.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </SpanDiv>

      <Title>{title}</Title>

      {!alternative && <Desc>{desc}</Desc>}
      <Price>R$ {price.toFixed(2)}</Price>

      {pendingStatus && <p>Status: {pendingStatus}</p>}

      <UserInfoContainer>
        <UserInfo>
          <img src={userImage} alt="" srcset="" />
          <h5>{name}</h5>
        </UserInfo>

        <ButtonContainer>
          <MdAdd onClick={showModal} />
        </ButtonContainer>
      </UserInfoContainer>
    </Card>
  );
};

export default CardsServices;
