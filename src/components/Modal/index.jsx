import { Button, Carousel } from "grommet";
import { Chat } from "grommet-icons";
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

const Modal = ({ setOpen, name, title, price, imgs, id }) => {
  const { hireService } = useContext(PendingsContext);

  const closeModal = () => {
    setOpen(false);
  };

  const dataPendings = {
    serviceId:10,
    hirer:4,
    hired:10,
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

      <Comments>
        <Carousel controls="selectors">
          <Comment>
            <Chat />
            <div className="Data">
              <NameComment>Jeferson</NameComment>
              <Commit>
                Lorem ipsum dolor sit consectetur adipiscing do eiusmod tempor
              </Commit>
            </div>
          </Comment>

          <Comment>
            <Chat />
            <div className="Data">
              <NameComment>Jeferson</NameComment>
              <Commit>
                Lorem ipsum dolor sit consectetur adipiscing do eiusmod tempor
              </Commit>
            </div>
          </Comment>

          <Comment>
            <Chat />
            <div className="Data">
              <NameComment>Jeferson</NameComment>
              <Commit>
                Lorem ipsum dolor sit consectetur adipiscing do eiusmod tempor
              </Commit>
            </div>
          </Comment>

          <Comment>
            <Chat />
            <div className="Data">
              <NameComment>Jeferson</NameComment>
              <Commit>
                Lorem ipsum dolor sit consectetur adipiscing do eiusmod tempor
              </Commit>
            </div>
          </Comment>
        </Carousel>
      </Comments>

      <Button
        onClick={() => hireService(dataPendings)}
        className="Aceppt"
        primary
        label="Contratar"
      />
    </Container>
  );
};

export default Modal;
