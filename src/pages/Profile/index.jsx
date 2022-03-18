import { CardContainer, OpacityContainer } from "./styled";
import { Main } from "./styled";
import { Card } from "./styled";
import CommentSection from "../../components/CommentSection/CommentSection";
import { useState } from "react";
import Header from "../../components/Header";

const Profile = ({ name = "Ostopiromar" }) => {
  const test = {
    name: "Jefferson",
    type: "Tatuador",
    price: "R$100",
  };

  const [commentSection, setCommentSection] = useState(false);

  return (
    <>
      <OpacityContainer opacity={commentSection ? "50%" : "100%"}>
        <Header page="user" whiteTheme />
        <Main>
          <div>
            <h2>Bem Vindo, {name}</h2>
            <h3>Você contratou estes serviços</h3>
          </div>

          <CardContainer>
            <Card>
              <img src="https://www.giromarilia.com.br/img/news/tattoo_1445892156.jpg" />
              <h3>Jeferson</h3>
              <div>
                <span>Tatuador</span> <span>R$100</span>
              </div>
              <p>
                Sou tatuador a mais de 10 anos, expecialista em taguagens
                aquarela
              </p>
              <button onClick={() => setCommentSection(true)}>Comentar</button>
            </Card>

            <Card>
              <img src="https://cdn.mensagenscomamor.com/content/images/m000499867.jpg?v=1" />
              <h3>Jeferson</h3>
              <div>
                <span>Desenhista</span> <span>R$100</span>
              </div>
              <p>
                Sou Desenhista a mais de 5 anos, expecialista em desenhos
                aquarela
              </p>
              <button onClick={() => setCommentSection(true)}>Comentar</button>
            </Card>

            <Card>
              <img src="https://www.timesidiomas.com.br/blog/wp-content/uploads/do-you-speak-english.jpg" />
              <h3>Jeferson</h3>
              <div>
                <span>Professor</span> <span>R$100</span>
              </div>
              <p>Sou professor a mais de 15 anos, ensino crianças e adultos</p>
              <button onClick={() => setCommentSection(true)}>Comentar</button>
            </Card>

            <Card>
              <img src="https://blog.barbaderespeito.com.br/wp-content/uploads/2017/12/barba-estilo-lenhador-500x368.jpg" />
              <h3>Jeferson</h3>
              <div>
                <span>Lenhador</span> <span>R$100</span>
              </div>
              <p>
                Sou Lenhador a mais de 30 anos, se tiver uma árvore no jardim
                pode me chamar
              </p>
              <button onClick={() => setCommentSection(true)}>Comentar</button>
            </Card>
          </CardContainer>
        </Main>
      </OpacityContainer>
      {commentSection && (
        <CommentSection service={test} setCommentSection={setCommentSection} />
      )}
    </>
  );
};
export default Profile;
