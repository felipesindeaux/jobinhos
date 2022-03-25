import { Greetings, Main, ButtonsContainer, CardsContainer } from "./styled";
import CommentSection from "../../components/CommentSection/CommentSection";
import { useState, useContext } from "react";
import { UserContext } from "../../Providers/User";
import { PendingsContext } from "../../Providers/Pendings";
import Header from "../../components/Header";
import { useEffect } from "react";
import { Layer } from "grommet";
import CardsServices from "../../components/CardsServices";

const Pendings = () => {
  const { userInfo } = useContext(UserContext);
  const { updatePendings, hiredPendings, acceptedPendings, donePendings } =
    useContext(PendingsContext);
  const [open, setOpen] = useState(false);
  const [serviceID, setServiceID] = useState();
  const [active, setActive] = useState(1);
  const [currentActive, setCurrentActive] = useState(hiredPendings);

  useEffect(() => {
    updatePendings();
  }, []);

  const [commentSection, setCommentSection] = useState(false);

  const isHired = userInfo.type === "hired" ? true : false;

  const handleActive = (value) => {
    setActive(value);
    value === 1
      ? setCurrentActive(hiredPendings)
      : value === 2
      ? setCurrentActive(acceptedPendings)
      : setCurrentActive(donePendings);
  };

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
        <ButtonsContainer>
          <button
            className={active === 1 ? "active" : 'non-active'}
            onClick={() => handleActive(1)}
          >
            Pendentes
          </button>
          <button
            className={active === 2 ? "active" : 'non-active'}
            onClick={() => handleActive(2)}
          >
            Aceitos
          </button>
          <button
            className={active === 3 ? "active" : 'non-active'}
            onClick={() => handleActive(3)}
          >
            Concluídos
          </button>
        </ButtonsContainer>
      </Main>

      {isHired ? (
        <CardsContainer>
          {active === 1 &&
            hiredPendings.map((item, index) => (
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
                pending
                alti
                noStars
              />
            ))}
          {active === 2 &&
            acceptedPendings.map((item, index) => (
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
                accepted
                alti
                noStars
              />
            ))}
          {active === 3 &&
            donePendings.map((item, index) => (
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
                noButton
                noStars
              />
            ))}
          {active === 1 && hiredPendings.length < 1 ? (
            <h2>Não possui serviços pendentes</h2>
          ) : active === 2 && acceptedPendings.length < 1 ? (
            <h2>Não possui serviços aceitos</h2>
          ) : active === 3 && donePendings.length < 1 ? (
            <h2>Não possui serviços concluídos</h2>
          ) : (
            ""
          )}
        </CardsContainer>
      ) : (
        <CardsContainer>
          {currentActive.map((item, index) => (
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
              comment
              alti
              noButton={active === 1}
            />
          ))}
        </CardsContainer>
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
