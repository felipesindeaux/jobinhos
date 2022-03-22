import { createContext, useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { UserContext } from "../User";

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const { userInfo } = useContext(UserContext);
  const [services, setServices] = useState([]);
  const [hireService, setHireService] = useState();
  const [idService, setIdService] = useState();


  useEffect(() => {
    api.get("/services").then((response) => setServices(response.data));
  }, []);

  const updateServices = () => {
    api.get("/services").then((response) => setServices(response.data));
  };

  const getUserServices = () => {
    return services.filter((service) => service.userId === userInfo.id);
  };


  const modifyService = (data) => {
    const token = JSON.parse(localStorage.getItem("@Jobinhos:token"));
    api.put(`/services/${idService}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => console.log(response) )
  }

  return (
    <ServicesContext.Provider
      value={{
        services,
        hireService,
        setHireService,
        updateServices,
        getUserServices,
        setIdService,
        modifyService,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
