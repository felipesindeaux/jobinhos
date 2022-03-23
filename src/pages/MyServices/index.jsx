import { Button } from "grommet";
import { useState, useContext, useEffect } from "react";
import { Card, Title, Price, Desc, ButtonContainer, Container } from "./styled";
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
  console.log(userServices);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { userInfo } = useContext(UserContext);

  return (
    <>
      <Header page="pendings"/>
      <Container>
        {userServices.map((item, index) => (
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
            alternative
            pendingId={item.pendingId}
            pendingStatus={item.pendingStatus}
            tag={item.tags}
            userImage={item.userImage}
          />
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
    </>
  );
};

export default MyServices;
