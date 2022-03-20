import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Pendings from "../pages/Pendings";
import InitialServices from "../pages/InitialServices";
import MyServices from "../pages/MyServices";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={InitialServices} />
        <Route path="/pendings" component={Pendings}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/MyServices" component={MyServices}/>
    </Switch>    
)

export default Routes