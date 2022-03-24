import { createContext, useEffect, useState, useContext } from "react";
import { ServicesContext } from "../Services";
import { toast } from "react-toastify";
import api from "../../services/api";

export const RatingsContext = createContext();

export const RatingsProvider = ({ children }) => {
  const { updateServices } = useContext(ServicesContext);
  const [ratings, setRatings] = useState();
  const [currentStars, setCurrentStars] = useState();

  useEffect(() => {
    api.get("/ratings").then((response) => setRatings(response.data));
  }, []);

  const avarageStars = (serviceId) => {
    const serviceRatings = ratings.filter(
      (rating) => rating.serviceId === serviceId
    );

    return (
      serviceRatings.reduce((acc, curr) => acc + curr.stars, 0) /
      serviceRatings.length
    );
  };

  const updateRatings = () => {
    api.get("/ratings").then((response) => setRatings(response.data));
  };

  const postRatings = (data) => {
    const token = JSON.parse(localStorage.getItem("@Jobinhos:token"));

    api
      .post("/ratings", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Comentário Enviado Com Sucesso");
        updateRatings();
        updateServices();
      })
      .catch((err) => console.log(err));
  };

  return (
    <RatingsContext.Provider
      value={{
        ratings,
        updateRatings,
        postRatings,
        avarageStars,
        currentStars,
        setCurrentStars,
      }}
    >
      {children}
    </RatingsContext.Provider>
  );
};
