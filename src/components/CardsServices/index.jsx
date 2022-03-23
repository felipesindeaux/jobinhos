import {
  Card,
  Desc,
  UserInfo,
  Title,
  Price,
  UserInfoContainer,
  SpanDiv,
  Button,
} from "./styled";
import { ServicesContext } from "../../Providers/Services";
import { useContext } from "react";
import { PendingsContext } from "../../Providers/Pendings";
import { MdAdd } from "react-icons/md";
import { FiEdit, FiCheck, FiCheckSquare } from "react-icons/fi";
import { HiOutlineChatAlt } from "react-icons/hi";

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
  editIcon,
  pending,
  accepted,
  comment,
  alt,
  noButton,
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

  const Icon = comment
    ? HiOutlineChatAlt
    : pending
    ? FiCheck
    : accepted
    ? FiCheckSquare
    : editIcon
    ? FiEdit
    : MdAdd;

  const showModal = () => {
    setOpen(true);
    setIdService(id);
    setHireService(services.filter((service) => service.id === id));
    setServiceID && setServiceID(id);
  };

  return (
    <Card>
      <img src={images[0]} />

      <SpanDiv>
        {tag.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </SpanDiv>

      <Title>{title}</Title>

      {!alternative && <Desc>{desc}</Desc>}
      <Price>R$ {price.toFixed(2)}</Price>

      <UserInfoContainer>
        <UserInfo>
          <img src={userImage} alt={name} />
          <h5>{name}</h5>
        </UserInfo>

        {!noButton && (
          <Button alt={alt}>
            <Icon
              onClick={
                (alt && accepted) || (alt && pending)
                  ? () => acceptPending(pendingId)
                  : showModal
              }
            />
          </Button>
        )}
      </UserInfoContainer>
    </Card>
  );
};

export default CardsServices;
