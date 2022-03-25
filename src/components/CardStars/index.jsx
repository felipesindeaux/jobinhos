import { Container } from "./styled";

const CardStars = ({ serviceStars }) => {
  return (
    <>
      <Container alti={serviceStars ? true : false}>
        <div>
          <div>
            <div>
              <div>
                <form>
                  {" "}
                  <input
                    type="radio"
                    name="star"
                    defaultChecked={serviceStars == 5}
                  />{" "}
                  <label></label>{" "}
                  <input
                    type="radio"
                    name="star"
                    defaultChecked={serviceStars == 4}
                  />{" "}
                  <label></label>{" "}
                  <input
                    type="radio"
                    name="star"
                    defaultChecked={serviceStars == 3}
                  />{" "}
                  <label></label>{" "}
                  <input
                    type="radio"
                    name="star"
                    defaultChecked={serviceStars == 2}
                  />{" "}
                  <label></label>{" "}
                  <input
                    type="radio"
                    name="star"
                    defaultChecked={serviceStars == 1}
                  />{" "}
                  <label></label>{" "}
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CardStars;
