import { Button } from "grommet";
import { useState } from "react";
import { Card, Name, Desc, Tittle, Container } from "./styled";
import { Layer } from "grommet";
import ModalService from "../../components/ModalService";
import { ServicesContext } from "../../Providers/Services";
import { useContext } from "react";
import ModalPendings from "../../components/ModalService";
import Header from "../../components/Header";
import { UserContext } from "../../Providers/User";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";

const MyServices = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    setIdService,
    setHireService,
    services,
    userServices,
    updateServices,
  } = useContext(ServicesContext);

  useEffect(() => {
    updateServices();
  }, []);

  const handleCliclModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { userInfo } = useContext(UserContext);

  return (
    <Container>
      <Tittle>Serviços</Tittle>
      {userServices.map((item, index) => (
        <Card>
          <img src={item.images[0]} alt="" />
          <Name>{item.name}</Name>
          <div>
            <p>{item.title}</p>
            <p className="price">R$ {item.price}</p>
          </div>
          <Desc>{item.desc}</Desc>
          <Button
            onClick={() => {
              setIdService(item.id);
              setHireService(
                services.filter((service) => service.id === item.id)
              );
              setShowModal(true);
            }}
            className="button button--hyperion"
          >
            <span>
              <span>Editar</span>
            </span>
          </Button>
        </Card>
      ))}

      {showModal && (
        <Layer
          onClickOutside={() => setShowModal(false)}
          onEsc={() => setShowModal(false)}
        >
          <ModalService
            handleCloseModal={handleCloseModal}
            setShowModal={setShowModal}
          />
        </Layer>
      )}
    </Container>
  );
};

export default MyServices;
