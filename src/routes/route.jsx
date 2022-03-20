import { useContext } from "react";
import { UserContext } from "../Providers/User";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const userInfo = useContext(UserContext);

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!userInfo.id ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? '/login' : 'profile'} />
        );
      }}
    />
  );
};

export default Route;