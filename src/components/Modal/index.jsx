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

const Modal = ({ setOpen }) => {
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
          <img
            src="https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg"
            alt=""
          />
          <img
            src="https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg"
            alt=""
          />
          <img
            src="https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg"
            alt=""
          />
        </Carousel>
      </Figures>

      <div>
        <Name>Jeferson</Name>
        <Desc>Tatuador</Desc>
        <Price>R$ 100</Price>
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

      <Button className="Aceppt" primary label="Contratar" />
    </Container>
  );
};

export default Modal;
