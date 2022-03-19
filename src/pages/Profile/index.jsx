import CardUsers from "../../components/CardUsers ";
import Header from "../../components/Header";
import ModalUser from "../../components/ModalUser";
import { PendingsContext } from "../../Providers/Pendings";

import { useState, useContext } from "react";

import { Layer } from "grommet";
import { useEffect } from "react";

const Profile = () => {
  const { updatePendings } = useContext(PendingsContext);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => updatePendings(), []);

  return (
    <>
      <Header page="profile" />
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
