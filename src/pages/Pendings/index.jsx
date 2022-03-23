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
import CardsServices from "../../components/CardsServices";

const Pendings = () => {
  const { userInfo } = useContext(UserContext);
  const {
    updatePendings,
    hiredPendings,
    acceptedPendings,
    donePendings,
    allPendings,
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
        <>
          {hiredPendings.map((item, index) => (
            <CardsServices
              key={index}
              images={item.images}
              name={item.hirerName}
              title={item.title}
              price={item.price}
              id={item.id}
              desc={item.desc}
              setOpen={setOpen}
              alternative
              setServiceID={setServiceID}
              pendingId={item.pendingId}
              pendingStatus={item.pendingStatus}
              tag={item.tags}
              userImage={item.hirerImg}
            />
          ))}
          {acceptedPendings.map((item, index) => (
            <CardsServices
              key={index}
              images={item.images}
              name={item.hirerName}
              title={item.title}
              price={item.price}
              id={item.id}
              desc={item.desc}
              setOpen={setOpen}
              alternative
              setServiceID={setServiceID}
              pendingId={item.pendingId}
              pendingStatus={item.pendingStatus}
              tag={item.tags}
              userImage={item.hirerImg}
            />
          ))}
          {donePendings.map((item, index) => (
            <CardsServices
              key={index}
              images={item.images}
              name={item.hirerName}
              title={item.title}
              price={item.price}
              id={item.id}
              desc={item.desc}
              setOpen={setOpen}
              alternative
              setServiceID={setServiceID}
              pendingId={item.pendingId}
              pendingStatus={item.pendingStatus}
              tag={item.tags}
              userImage={item.hirerImg}
            />
          ))}
        </>
      ) : (
        allPendings.map((item, index) => (
          <CardsServices
            key={index}
            images={item.images}
            name={item.name}
            title={item.title}
            price={item.price}
            id={item.id}
            desc={item.desc}
            setOpen={setOpen}
            alternative
            setServiceID={setServiceID}
            pendingId={item.pendingId}
            pendingStatus={item.pendingStatus}
            tag={item.tags}
            userImage={item.userImage}
          />
        ))
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
