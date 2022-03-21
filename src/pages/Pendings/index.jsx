import { OpacityContainer, Greetings, Main } from "./styled";
import CommentSection from "../../components/CommentSection/CommentSection";
import { useState, useContext } from "react";
import { UserContext } from "../../Providers/User";
import { PendingsContext } from "../../Providers/Pendings";
import { ServicesContext } from "../../Providers/Services";
import Header from "../../components/Header";
import MainCards from "../../components/MainCards";
import { useEffect } from "react";
import { Layer } from "grommet";

const Pendings = () => {
  const { services } = useContext(ServicesContext);
  const { userInfo, getUserName } = useContext(UserContext);
  const { pendings, getHirerName, hirerName } = useContext(PendingsContext);
  const [pendingsToRender, setPendingsToRender] = useState([]);
  const [open, setOpen] = useState(false);
  const [serviceID, setServiceID] = useState();

  useEffect(() => {
    const servicesPendings = pendings.map((pending) => {
      const newService = services.find(
        (service) => pending.serviceId === service.id
      );
      if (newService) {
        return { ...newService, hirerId: pending.hirer };
      }
    });

    setPendingsToRender(servicesPendings);
  }, []);

  const [commentSection, setCommentSection] = useState(false);

  const isHired = userInfo.type === "hired" ? true : false;

  return (
    <>
      <Header page="pendings" />
      <Main>
        <Greetings>
          <h2>Bem Vindo, {userInfo.name}</h2>
          <h3>
            {isHired
              ? "Você foi contratado para estes serviços"
              : "Você contratou estes serviços"}
          </h3>
        </Greetings>
      </Main>

      {isHired ? (
        <MainCards alternative arrayToRender={pendingsToRender} />
      ) : (
        <MainCards
          textContent={"Comentar"}
          arrayToRender={pendingsToRender}
          setOpen={setOpen}
          setServiceID={setServiceID}
        />
      )}
      {commentSection && (
        <CommentSection service={[]} setCommentSection={setCommentSection} />
      )}

      {open && (
        <Layer onEsc={() => setOpen(false)} position="center">
          <CommentSection setOpen={setOpen} id={serviceID} />
        </Layer>
      )}
    </>
  );
};

export default Pendings;
