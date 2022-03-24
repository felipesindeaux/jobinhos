import { CommentSectionContainer, Container } from "./styled";
import { Chat } from "grommet-icons";
import { Button } from "grommet";
import { useState, useContext } from "react";
import { RatingsContext } from "../../Providers/Ratings";
import { UserContext } from "../../Providers/User";
import Stars from "../Stars";
import { toast } from "react-toastify";

const CommentSection = ({ setOpen, id }) => {
  const { postRatings, updateRatings, currentStars, setCurrentStars } =
    useContext(RatingsContext);
  const { userInfo } = useContext(UserContext);
  const [comments, setComments] = useState("");

  const dataRatings = {
    name: userInfo.name,
    stars: currentStars,
    comment: comments,
    serviceId: id,
    userId: userInfo.id,
  };

  const sendRarings = () => {
    if (currentStars) {
      postRatings(dataRatings);
      updateRatings();
      setOpen(false);
      setCurrentStars(undefined)
    } else {
      toast.error("Você deve avaliar as estrelas!");
    }
  };

  return (
    <Container>
      <h2>
        <Chat color="brand" />
        Adicione um Comentario
        <Button label="X" onClick={() => setOpen(false)} />
      </h2>
      <Stars />
      <CommentSectionContainer
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      ></CommentSectionContainer>

      <Button primary label="Salvar" onClick={sendRarings} />
    </Container>
  );
};

export default CommentSection;
