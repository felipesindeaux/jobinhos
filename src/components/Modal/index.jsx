import { Carousel } from "grommet";
import { Chat } from "grommet-icons";
import { RatingsContext } from "../../Providers/Ratings";
import {
  Container,
  Figures,
  Name,
  Desc,
  Price,
  Comments,
  NameComment,
  Comment,
  Commit,
  Title,
  Info,
  ContainerInfo,
  UserInfoContainer,
  UserInfo,
  SpanDiv,
  Button,
  CloseButton,
} from "./styled";
import { useContext, useState } from "react";
import { PendingsContext } from "../../Providers/Pendings";

const Modal = ({
  setOpen,
  name,
  title,
  price,
  imgs,
  id,
  userId,
  userImage,
  tag,
  desc,
}) => {
  const { ratings } = useContext(RatingsContext);
  const { hireService } = useContext(PendingsContext);
  const serviceRatings = ratings.filter((rating) => rating.serviceId === id);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Container>
      <header>
        <CloseButton onClick={closeModal} >X</CloseButton>
      </header>

      <ContainerInfo>
        <Figures>
          <Carousel play={3000}>
            {imgs.map((img, index) => (
              <img key={index} src={img} alt="" />
            ))}
          </Carousel>
        </Figures>

        <Info>
          <UserInfo>
            <img src={userImage} alt="" srcset="" />
            
            <div>
              <Name>{name}</Name>
              <Price>R$ {price.toFixed(2)}</Price>
            </div>
          </UserInfo>
         
          <SpanDiv>
            {tag.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </SpanDiv>

          <Title>{title}</Title>
        </Info>
      </ContainerInfo>

      {serviceRatings.length > 0 ? (
        <Comments>
          <Carousel controls="selectors">
            {serviceRatings.map((rating, index) => (
              <Comment key={index}>
                <Chat />
                <div className="Data">
                  <NameComment>{rating.name}</NameComment>
                  <Commit>{rating.comment}</Commit>
                </div>
              </Comment>
            ))}
          </Carousel>
        </Comments>
      ) : (
        <Comments>
          <Comment>
            <Chat />
            <div className="Data">
              <Commit>Ops, este serviço não possui avaliações</Commit>
            </div>
          </Comment>
        </Comments>
      )}

      <Button
        onClick={() => {
          hireService(userId, id);
          closeModal();
        }}
        className="Aceppt"
      >
        Contratar
      </Button>
    </Container>
  );
};

export default Modal;
