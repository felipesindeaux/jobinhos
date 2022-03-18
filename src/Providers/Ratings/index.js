import { createContext, useEffect, useState } from "react";
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

  return (
    <RatingsContext.Provider value={{ ratings, updateRatings }}>
      {children}
    </RatingsContext.Provider>
  );
};
