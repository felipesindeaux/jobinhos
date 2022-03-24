import { Button } from "grommet";
import { useState, useContext, useEffect } from "react";
import {
  Card,
  Title,
  Price,
  Desc,
  ButtonContainer,
  Container,
  NoServices,
} from "./styled";
import { Layer } from "grommet";
import ModalService from "../../components/ModalService";
import { ServicesContext } from "../../Providers/Services";
import MainCards from "../../components/MainCards/index";
import ModalPendings from "../../components/ModalService";
import Header from "../../components/Header";
import { UserContext } from "../../Providers/User";
import { Redirect } from "react-router-dom";
import CardsServices from "../../components/CardsServices";

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

  const isCreateService = userServices.length < 1;

  return (
    <>
      <Header page="pendings" />
      <Container>
        {userServices.length > 0 ? (
          userServices.map((item, index) => (
            <CardsServices
              key={index}
              images={item.images}
              name={item.name}
              title={item.title}
              price={item.price}
              id={item.id}
              desc={item.desc}
              setOpen={setShowModal}
              editIcon
              alt
              pendingId={item.pendingId}
              pendingStatus={item.pendingStatus}
              tag={item.tags}
              userImage={item.userImage}
            />
          ))
        ) : (
          <NoServices>
            <h1>
              Ops, parece que você não possui nenhum serviço, que tal criar um?
            </h1>
            <button onClick={() => setShowModal(true)}>Criar serviço</button>
          </NoServices>
        )}

        {showModal && (
          <Layer
            onClickOutside={() => setShowModal(false)}
            onEsc={() => setShowModal(false)}
          >
            <ModalService
              handleCloseModal={handleCloseModal}
              setShowModal={setShowModal}
              isCreateService={isCreateService}
            />
          </Layer>
        )}
      </Container>
    </>
  );
};

export default MyServices;
