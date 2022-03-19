import { createContext, useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { UserContext, UserProvider } from "../User";
import { useHistory } from "react-router-dom";

export const PendingsContext = createContext();

export const PendingsProvider = ({ children }) => {
  const history = useHistory();
  const { userInfo } = useContext(UserContext);
  const [pendings, setPendings] = useState();

  const updatePendings = () => {
    const token = JSON.parse(localStorage.getItem("@Jobinhos:token"));
    const { id, type } = userInfo;
    api
      .get(`/pendings?${type}=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setPendings(response.data))
      .catch((err) => console.log(err));
  };

  const hireService = (serviceId, hired, hirer = userInfo.id) => {
    const token = localStorage.getItem("@Jobinhos:token");
    userInfo
      ? api.post(
          "/pendings",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
          { serviceId, hirer, hired }
        )
      : history.push("/login");
  };

  return (
    <PendingsContext.Provider value={{ pendings, updatePendings, hireService }}>
      {children}
    </PendingsContext.Provider>
  );
};
