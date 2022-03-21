import { Button, Carousel } from "grommet";
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
} from "./styled";
import { useContext, useState } from "react";
import { PendingsContext } from "../../Providers/Pendings";

const Modal = ({ setOpen, name, title, price, imgs, id, userId }) => {
  const { ratings } = useContext(RatingsContext);
  const { hireService } = useContext(PendingsContext);
  const serviceRatings = ratings.filter((rating) => rating.serviceId === id);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Container>
      <header>
        <Button onClick={closeModal} secondary label="X" />
      </header>
      <Figures>
        <Carousel play={3000}>
          {imgs.map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </Carousel>
      </Figures>

      <div>
        <Name>{name}</Name>
        <Desc>{title}</Desc>
        <Price>R$ {price}</Price>
      </div>

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
        onClick={() => hireService(userId, id)}
        className="Aceppt"
        primary
        label="Contratar"
      />
    </Container>
  );
};

export default Modal;
