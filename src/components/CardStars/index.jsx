import { Container } from "./styled";

const CardStars = ({ serviceStars }) => {
  return (
    <>
      <Container alt={serviceStars ? true : false}>
        <div>
          <div>
            <div>
              <div>
                <form>
                  {" "}
                  <input
                    type="radio"
                    name="star"
                    checked={serviceStars == 5}
                  />{" "}
                  <label></label>{" "}
                  <input type="radio" name="star" checked={serviceStars == 4} />{" "}
                  <label></label>{" "}
                  <input type="radio" name="star" checked={serviceStars == 3} />{" "}
                  <label></label>{" "}
                  <input type="radio" name="star" checked={serviceStars == 2} />{" "}
                  <label></label>{" "}
                  <input type="radio" name="star" checked={serviceStars == 1} />{" "}
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
