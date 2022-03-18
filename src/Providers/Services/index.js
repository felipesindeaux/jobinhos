import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState();

  useEffect(() => {
    api.get("/services").then((response) => setServices(response.data));
  }, []);

  const updateServices = () => {
    api.get("/services").then((response) => setServices(response.data));
  };

  return (
    <ServicesContext.Provider value={{ services, updateServices }}>
      {children}
    </ServicesContext.Provider>
  );
};
