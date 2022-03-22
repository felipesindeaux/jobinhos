import { Greetings, Main } from "./styled";
import CommentSection from "../../components/CommentSection/CommentSection";
import { useState, useContext } from "react";
import { UserContext } from "../../Providers/User";
import { PendingsContext } from "../../Providers/Pendings";
import Header from "../../components/Header";
import MainCards from "../../components/MainCards";
import { useEffect } from "react";
import { Layer } from "grommet";
import PendingsCards from "../../components/PendingsCards";

const Pendings = () => {
  const { userInfo } = useContext(UserContext);
  const {
    updatePendings,
    hiredPendings,
    acceptedPendings,
    donePendings,
    allPendings
  } = useContext(PendingsContext);
  const [open, setOpen] = useState(false);
  const [serviceID, setServiceID] = useState();

  useEffect(() => {
    updatePendings();
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
        <PendingsCards alternative />
      ) : (
        <MainCards
          textContent={"Comentar"}
          arrayToRender={allPendings}
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
