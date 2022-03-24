import CardUsers from "../../components/CardUsers ";
import Header from "../../components/Header";
import ModalUser from "../../components/ModalUser";
import { UserContext } from "../../Providers/User";
import { PendingsContext } from "../../Providers/Pendings";
import { Body, Card } from "./styled";

import { useState, useContext } from "react";

import { Layer } from "grommet";
import { useEffect } from "react";

const Profile = () => {
  const { updatePendings } = useContext(PendingsContext);
  const [showModal, setShowModal] = useState(false);
  const { userInfo, updateUserInfo } = useContext(UserContext);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => updatePendings(), []);

  return (
    <>
      <Body>
        <Header page="profile" />
        <CardUsers
          className="card"
          handleOpenModal={handleOpenModal}
          name={userInfo.name}
          email={userInfo.email}
          img={userInfo.img}
        />
      </Body>
      {showModal && (
        <Layer
          position="right"
          full="vertical"
          modal
          onClickOutside={handleCloseModal}
          onEsc={handleCloseModal}
        >
          <ModalUser handleCloseModal={handleCloseModal} />
        </Layer>
      )}
    </>
  );
};

export default Profile;
