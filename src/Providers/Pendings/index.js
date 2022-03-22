import { createContext, useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { UserContext, UserProvider } from "../User";
import { ServicesContext } from "../Services";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const PendingsContext = createContext();

export const PendingsProvider = ({ children }) => {
  const history = useHistory();
  const { services } = useContext(ServicesContext);
  const { userInfo } = useContext(UserContext);
  const [pendings, setPendings] = useState([]);
  const [hiredPendings, setHiredPendings] = useState([]);
  const [acceptedPendings, setAcceptedPendings] = useState([]);
  const [donePendings, setDonePendings] = useState([]);
  const [allPendings, setAllPendings] = useState([]);

  useEffect(() => {
    filterPedingsServices();
  }, [pendings]);

  const updatePendings = () => {
    const token = JSON.parse(localStorage.getItem("@Jobinhos:token"));
    const { id, type } = userInfo;
    api
      .get(`/pendings?${type}=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setPendings(response.data);
      })
      .catch((err) => console.log(err));
  };

  const filterPedingsServices = () => {
    const mapAllPendings = pendings.map((pending) => {
      const newService = services.find(
        (service) => pending.serviceId === service.id
      );
      if (newService) {
        return {
          ...newService,
          hirerName: pending.hirerName,
          pendingId: pending.id,
          pendingStatus: pending.status,
        };
      }
    });

    const getServicesAll = mapAllPendings.filter((element) => {
      if (element) {
        return element;
      }
    });

    const mapServicesPendings = pendings.map((pending) => {
      const newService = services.find(
        (service) =>
          pending.serviceId === service.id && pending.status === "pending"
      );
      if (newService) {
        return {
          ...newService,
          hirerName: pending.hirerName,
          pendingId: pending.id,
        };
      }
    });

    const getServicesPendings = mapServicesPendings.filter((element) => {
      if (element) {
        return element;
      }
    });

    const mapServicesAccepted = pendings.map((pending) => {
      const newService = services.find(
        (service) =>
          pending.serviceId === service.id && pending.status === "accepted"
      );
      if (newService) {
        return {
          ...newService,
          hirerName: pending.hirerName,
          pendingId: pending.id,
        };
      }
    });

    const getServicesAccepted = mapServicesAccepted.filter((element) => {
      if (element) {
        return element;
      }
    });

    const mapServicesDone = pendings.map((pending) => {
      const newService = services.find(
        (service) =>
          pending.serviceId === service.id && pending.status === "done"
      );
      if (newService) {
        return {
          ...newService,
          hirerName: pending.hirerName,
          pendingId: pending.id,
        };
      }
    });

    const getServicesDone = mapServicesDone.filter((element) => {
      if (element) {
        return element;
      }
    });

    setHiredPendings(getServicesPendings);
    setAcceptedPendings(getServicesAccepted);
    setDonePendings(getServicesDone);
    setAllPendings(getServicesAll);
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

  const refusePending = (pendingId) => {
    const token = JSON.parse(localStorage.getItem("@Jobinhos:token"));
    api
      .delete(`/pendings/${pendingId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => updatePendings());
  };

  const acceptPending = (pendingId) => {
    const token = JSON.parse(localStorage.getItem("@Jobinhos:token"));
    api
      .get(`/pendings/${pendingId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        api
          .put(
            `/pendings/${pendingId}`,
            { ...response.data, status: "accepted" },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((response) => updatePendings());
      });
  };

  const doPending = (pendingId) => {
    const token = JSON.parse(localStorage.getItem("@Jobinhos:token"));
    api
      .get(`/pendings/${pendingId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        api
          .put(
            `/pendings/${pendingId}`,
            { ...response.data, status: "done" },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((response) => updatePendings());
      });
  };

  return (
    <PendingsContext.Provider
      value={{
        pendings,
        updatePendings,
        hireService,
        hiredPendings,
        acceptedPendings,
        donePendings,
        setHiredPendings,
        setAcceptedPendings,
        setDonePendings,
        refusePending,
        acceptPending,
        doPending,
        filterPedingsServices,
        allPendings,
      }}
    >
      {children}
    </PendingsContext.Provider>
  );
};
