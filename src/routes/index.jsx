import { Switch } from "react-router-dom";
import Route from "./route";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Pendings from "../pages/Pendings";
import Profile from "../pages/Profile";
import InitialServices from "../pages/InitialServices";
import MyServices from "../pages/MyServices";


const Routes = () => (
    <Switch>
        <Route exact path="/" component={InitialServices} />
        <Route path="/pendings" isPrivate component={Pendings}/>
        <Route path="/profile" isPrivate component={Profile}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/myServices" component={MyServices}/>
    </Switch>
)

export default Routes