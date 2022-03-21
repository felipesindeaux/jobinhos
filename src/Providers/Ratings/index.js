import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const RatingsContext = createContext();

export const RatingsProvider = ({ children }) => {
  const [ratings, setRatings] = useState();

  useEffect(() => {
    api.get("/ratings").then((response) => setRatings(response.data));
  }, []);

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
      })
      .catch((err) => console.log(err));
  };

  return (
    <RatingsContext.Provider value={{ ratings, updateRatings, postRatings }}>
      {children}
    </RatingsContext.Provider>
  );
};
