import CardUsers from "../../components/CardUsers ";
import Header from "../../components/Header";
import ModalUser from "../../components/ModalUser";

import { useState } from "react";

import { Layer } from "grommet";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <CardUsers handleOpenModal={handleOpenModal} />
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
