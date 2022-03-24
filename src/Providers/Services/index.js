import { createContext, useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { UserContext } from "../User";

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const { userInfo } = useContext(UserContext);
  const [services, setServices] = useState([]);
  const [userServices, setUserServices] = useState([]);

  const [backup, setBackup] = useState(services);
  const [hireService, setHireService] = useState();
  const [idService, setIdService] = useState();

  useEffect(() => {
    updateServices();
  }, []);

  const updateServices = () => {
    api.get("/services").then((response) => {
      setServices(response.data);
      setBackup(response.data);
      api.get(`/services?userId=${userInfo.id}`).then((response) => {
        setUserServices(response.data);
      });
    });
  };

  const getUserServices = () => {};

  const modifyService = (data) => {
    const token = JSON.parse(localStorage.getItem("@Jobinhos:token"));

    api.put(`/services/${idService}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) =>  updateServices() )

  }

  const filterServices = (value) => {
    setServices(backup);

    const filteredServices = backup.filter(
      (service) =>
        service.name.toLowerCase().includes(value.toLowerCase()) ||
        service.title.toLowerCase().includes(value.toLowerCase()) ||
        service.tags.join().includes(value[0].toUpperCase() + value.substr(1))
    );

    if (value === "") {
      setServices(backup);
    } else {
      setServices(filteredServices);
    }
  };

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
        filterServices,
        userServices,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
