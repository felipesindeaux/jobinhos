import { createContext, useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { UserContext } from "../User";

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const { userInfo } = useContext(UserContext);
  const [services, setServices] = useState();
  const [backup, setBackup] = useState(services);
  const [hireService, setHireService] = useState();

  useEffect(() => {
    api.get("/services").then((response) => {
      setServices(response.data);
      setBackup(response.data);
    });
  }, []);

  const updateServices = () => {
    api.get("/services").then((response) => {
      setServices(response.data);
      setBackup(response.data);
    });
  };

  const getUserServices = () => {
    return services.filter((service) => service.userId === userInfo.id);
  };

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
        filterServices,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
