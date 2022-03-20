import { CommentSectionContainer } from "./styled";
import baloon from "../../img/Vector.png";

const CommentSection = ({ service, setCommentSection }) => {
  return (
    <CommentSectionContainer>
      <img src="https://www.giromarilia.com.br/img/news/tattoo_1445892156.jpg" />
      <button onClick={() => setCommentSection(false)}>X</button>
      <div>
        <h3>{service.name}</h3>
        <span>{service.type}</span>
        <span>{service.price}</span>
      </div>
      <div className="text">
        <div>
          <textarea name="" id="" cols="19" rows="5"></textarea>
          <img src={baloon} alt="" />
        </div>
        <button>Adicionar Comentário</button>
      </div>
    </CommentSectionContainer>
  );
};

export default CommentSection;
