import { Container } from "./styled";
import { useContext } from "react";
import { RatingsContext } from "../../Providers/Ratings";

const Stars = ({ serviceStars }) => {
  const { setCurrentStars } = useContext(RatingsContext);

  return (
    <>
      <Container alt={serviceStars ? true : false}>
        <div class="container d-flex justify-content-center mt-200">
          <div class="row">
            <div class="col-md-12">
              <div class="stars">
                <form action="">
                  {" "}
                  <input
                    class="star star-5"
                    id="star-5"
                    type="radio"
                    name="star"
                    checked={serviceStars ? serviceStars == 5 : undefined}
                  />{" "}
                  <label
                    onClick={() => setCurrentStars(5)}
                    class="star star-5"
                    for="star-5"
                  ></label>{" "}
                  <input
                    class="star star-4"
                    id="star-4"
                    type="radio"
                    name="star"
                    checked={serviceStars ? serviceStars == 4 : undefined}
                  />{" "}
                  <label
                    class="star star-4"
                    for="star-4"
                    onClick={() => setCurrentStars(4)}
                  ></label>{" "}
                  <input
                    class="star star-3"
                    id="star-3"
                    type="radio"
                    name="star"
                    checked={serviceStars ? serviceStars == 3 : undefined}
                  />{" "}
                  <label
                    class="star star-3"
                    for="star-3"
                    onClick={() => setCurrentStars(3)}
                  ></label>{" "}
                  <input
                    class="star star-2"
                    id="star-2"
                    type="radio"
                    name="star"
                    checked={serviceStars ? serviceStars == 2 : undefined}
                  />{" "}
                  <label
                    class="star star-2"
                    for="star-2"
                    onClick={() => setCurrentStars(2)}
                  ></label>{" "}
                  <input
                    class="star star-1"
                    id="star-1"
                    type="radio"
                    name="star"
                    checked={serviceStars ? serviceStars == 1 : undefined}
                  />{" "}
                  <label
                    class="star star-1"
                    for="star-1"
                    onClick={() => setCurrentStars(1)}
                  ></label>{" "}
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Stars;
