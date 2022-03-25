import { Container } from "./styled";
import { useContext } from "react";
import { RatingsContext } from "../../Providers/Ratings";

const Stars = () => {
  const { setCurrentStars } = useContext(RatingsContext);

  return (
    <>
      <Container>
        <div className="container d-flex justify-content-center mt-200">
          <div className="row">
            <div className="col-md-12">
              <div className="stars">
                <form action="">
                  {" "}
                  <input
                    className="star star-5"
                    id="star-5"
                    type="radio"
                    name="star"
                  />{" "}
                  <label
                    onClick={() => setCurrentStars(5)}
                    className="star star-5"
                    htmlFor="star-5"
                  ></label>{" "}
                  <input
                    className="star star-4"
                    id="star-4"
                    type="radio"
                    name="star"
                  />{" "}
                  <label
                    className="star star-4"
                    htmlFor="star-4"
                    onClick={() => setCurrentStars(4)}
                  ></label>{" "}
                  <input
                    className="star star-3"
                    id="star-3"
                    type="radio"
                    name="star"
                  />{" "}
                  <label
                    className="star star-3"
                    htmlFor="star-3"
                    onClick={() => setCurrentStars(3)}
                  ></label>{" "}
                  <input
                    className="star star-2"
                    id="star-2"
                    type="radio"
                    name="star"
                  />{" "}
                  <label
                    className="star star-2"
                    htmlFor="star-2"
                    onClick={() => setCurrentStars(2)}
                  ></label>{" "}
                  <input
                    className="star star-1"
                    id="star-1"
                    type="radio"
                    name="star"
                  />{" "}
                  <label
                    className="star star-1"
                    htmlFor="star-1"
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
