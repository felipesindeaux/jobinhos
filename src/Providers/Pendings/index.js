import { createContext, useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { UserContext, UserProvider } from "../User";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const PendingsContext = createContext();

export const PendingsProvider = ({ children }) => {
  const history = useHistory();
  const { userInfo } = useContext(UserContext);
  const [pendings, setPendings] = useState();
  const [hirerName, setHirerName] = useState();

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

  const hireService = (hired, serviceId) => {
    const token = JSON.parse(localStorage.getItem("@Jobinhos:token"));

    if (userInfo) {
      if (userInfo.type === "hired") {
        toast.error("Apenas consumidores podem contratar um serviço!");
      } else {
        api
          .post(
            "/pendings",
            { hired, hirer: userInfo.id, serviceId },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => toast.success("Serviço contratado"))
          .catch((err) => console.log(err));
      }
    } else {
      history.push("/login");
    }
  };

  const getHirerName = (userId) => {
    const token = JSON.parse(localStorage.getItem("@Jobinhos:token"));
    api
      .get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHirerName(response.data.name));
  };

  return (
    <PendingsContext.Provider
      value={{ pendings, updatePendings, hireService, hirerName, getHirerName }}
    >
      {children}
    </PendingsContext.Provider>
  );
};
