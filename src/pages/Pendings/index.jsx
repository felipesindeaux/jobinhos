import { OpacityContainer, Greetings, Main } from "./styled";
import CommentSection from "../../components/CommentSection/CommentSection";
import { useState, useContext } from "react";
import { UserContext } from "../../Providers/User";
import Header from "../../components/Header";
import MainCards from "../../components/MainCards";

const Pendings = () => {
  const { userInfo, updateUserInfo } = useContext(UserContext);

  const [commentSection, setCommentSection] = useState(false);

  //   const isHired = userInfo.type === 'Prestador' ? true : false
  const isHired = true;

  return (
    <>
      <OpacityContainer opacity={commentSection ? "50%" : "100%"}>
        <Header page="profile" />
        <Main>
          <Greetings>
            <h2>Bem Vindo, {/* userInfo.name */}Nome</h2>
            <h3>
              {isHired
                ? "Você foi contratado para estes serviços"
                : "Você contratou estes serviços"}
            </h3>
          </Greetings>
          {isHired ? (
            <MainCards alternative />
          ) : (
            <MainCards textContent={"Comentar"} />
          )}
        </Main>
      </OpacityContainer>
      {commentSection && (
        <CommentSection service={[]} setCommentSection={setCommentSection} />
      )}
    </>
  );
};
export default Pendings;
