import { CommentSectionContainer, Container } from "./styled";
import { Chat } from "grommet-icons";
import { Button } from "grommet";
import { useState, useContext } from "react";
import { RatingsContext } from "../../Providers/Ratings";
import { UserContext } from "../../Providers/User";

const CommentSection = ({ setOpen,id }) => {
  const { postRatings } = useContext(RatingsContext);
  const {userInfo} =useContext(UserContext)
  const [comments, setComments] = useState("");

  

  const dataRatings = [
    {
      name:userInfo.name,
      stars: 3,
      comment: comments,
      serviceId: id,
      userId: userInfo.id,
    },
  ];


  const sendRarings = () => {
    postRatings(dataRatings)
    setOpen(false)

  };

  return (
    <Container>
      <h2>
        <Chat color="brand" />
        Adicione um Comentario
        <Button label="X" onClick={() => setOpen(false)} />
      </h2>
      <CommentSectionContainer
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      ></CommentSectionContainer>

      <Button primary label="Salvar" onClick={sendRarings}/>
    </Container>
  );
};

export default CommentSection;
