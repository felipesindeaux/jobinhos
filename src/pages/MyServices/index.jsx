import { Button } from "grommet";
import { useState } from "react";
import { Card, Name, Desc, Tittle, Container } from "./styled";
import { Layer } from "grommet";
import ModalPendings from "../../components/ModalService";

const MyServices = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCliclModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false)
  }
  return (
    <Container>
      <Tittle>Serviços</Tittle>
      <Card>
        <img
          src={
            "https://vinteconto.sfo2.cdn.digitaloceanspaces.com/listings/418420/09a3b7008f562804e64b7100799ce8cc.jpg"
          }
          alt=""
        />
        <Name>Jefferson</Name>
        <div>
          <p>Tatuador</p>
          <p>R$</p>
        </div>
        <Desc>Descrição</Desc>
        <Button onClick={handleCliclModal}>Editar</Button>
      </Card>

      {showModal && (
        <Layer
          onClickOutside={() => setShowModal(false)}
          onEsc={() => setShowModal(false)}
        >
          <ModalPendings handleCloseModal={handleCloseModal}/>
        </Layer>
      )}
    </Container>
  );
};

export default MyServices;
