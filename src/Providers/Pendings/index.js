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

  const hireService = () => {
    userInfo ? console.log("Aqui vai contratar") : history.push("/login");
  };

  return (
    <PendingsContext.Provider value={{ pendings, updatePendings, hireService }}>
      {children}
    </PendingsContext.Provider>
  );
};
