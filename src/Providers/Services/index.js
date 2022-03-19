import { createContext, useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { UserContext } from "../User";

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const { userInfo } = useContext(UserContext);
  const [services, setServices] = useState();

  useEffect(() => {
    api.get("/services").then((response) => setServices(response.data));
  }, []);

  const updateServices = () => {
    api.get("/services").then((response) => setServices(response.data));
  };

  const getUserServices = () => {
    return services.filter((service) => service.userId === userInfo.id);
  };

  return (
    <ServicesContext.Provider
      value={{ services, updateServices, getUserServices }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
