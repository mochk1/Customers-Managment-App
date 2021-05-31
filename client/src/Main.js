import React, { useContext } from "react";
import Menu from "./components/Menu";
import LoginPage from "./LoginPage";
import { AuthContext } from './components/Auth'
import { BrowserRouter as Router,Route,Redirect} from "react-router-dom";
import Customers from './components/Customers/Customers'

const Main = () => {

  const [Auth] = useContext(AuthContext);
  const {isLoggedin} = Auth;

if(isLoggedin){ return (
  <Router>
    <Menu/>
  </Router>)}

{return <Router>
   <Route exact path="/Login" component={LoginPage}></Route>
   <Redirect to='/Login'/>
   </Router> } 


}

export default Main;
