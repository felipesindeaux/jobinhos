import { createContext, useState } from "react";
import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();

  const handleUserInfo = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };

  const updateUserInfo = () => {
    const token = JSON.parse(localStorage.getItem("@Jobinhos:token"));
    const { id } = userInfo;
    api
      .get(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUserInfo(response.data));
  };

  return (
    <UserContext.Provider value={{ userInfo, handleUserInfo, updateUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
