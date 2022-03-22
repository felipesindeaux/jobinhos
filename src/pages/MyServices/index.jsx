import { Button } from "grommet";
import { useState } from "react";
import { Card, Name, Desc, Tittle, Container } from "./styled";
import { Layer } from "grommet";
import ModalService from "../../components/ModalService";
import { ServicesContext } from "../../Providers/Services";
import { useContext } from "react";
import MainCards from "../../components/MainCards/index"
import ModalPendings from "../../components/ModalService";
import Header from "../../components/Header";
import { UserContext } from "../../Providers/User";
import { Redirect } from "react-router-dom";

const MyServices = () => {
  const { userInfo } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  const handleCliclModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const { services } = useContext(ServicesContext);

  return (
    <Container>
      <Tittle>Serviços</Tittle>
       <MainCards arrayToRender={services} setOpen={handleCliclModal} />
      {/* {services &&
        services.map((item, index) => (
          <Card>
            <img src={item.images[0]} alt="" />
            <Name>{item.name}</Name>
            <div>
              <p>{item.title}</p>
              <p className="price">R$ {item.price}</p>
            </div>
            <Desc>{item.desc}</Desc>
            <Button
              onClick={handleCliclModal}
              className="button button--hyperion"
            >
              <span>
                <span>Editar</span>
              </span>
            </Button>
          </Card>
        ))} */}

      {showModal && (
        <Layer
          onClickOutside={() => setShowModal(false)}
          onEsc={() => setShowModal(false)}
        >
          <ModalService handleCloseModal={handleCloseModal} />
        </Layer>
      )}
    </Container>
  );
};

export default MyServices;