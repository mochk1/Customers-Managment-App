import React,{useContext} from 'react'
import './Styles/Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faList,faCog, faChartLine, faUser } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Todo from './ToDo';
import Customers from './Customers'
import Dashboard from './Dashboard';
import Finance from './Finance'
import Settings from './Settings'
import CustomerPage from './CustomerPage'
import AddInvoice from './AddInvoice'
import AddCustomer from './AddCustomer'
import {DataContext} from './context'

const Menu = () => {
const [state] = useContext(DataContext)
const {Customerid} = state



  return (
    <Router>
    <div className="bar-right">
        <div className="menu">
            <p id="Customers" className="menutext" > <Link to="/">
              <FontAwesomeIcon className="i" icon={faUser} />
              לקוחות
              </Link>
            </p>
          
          <hr className="solid"></hr>
        
          <p id="Todo" className="menutext" >
          <Link to="/Notes">
              <FontAwesomeIcon className="i" icon={faList} />
              Notes
            </Link>
          </p>
          
          <hr className="solid"></hr>

          <p id="Dashboard" className="menutext" > <Link to="/Dashboard">
            <FontAwesomeIcon className="i" icon={faTachometerAlt} />
            לוח בקרה
            </Link>
          </p>

          <hr className="solid"></hr>

          <p id="Finance" className="menutext" > <Link to="/Finance">
            <FontAwesomeIcon className="i" icon={faChartLine} />
            דוח שנתי
            </Link>
          </p>

          <p id="Settings" className="menutext" > <Link to="/Settings">
            <FontAwesomeIcon className="i" icon={faCog} />
            הגדרות
            </Link>
          </p>
        </div>
        
    </div>
          <Switch>
          <Route exact path="/Notes" component={Todo}></Route>
          <Route exact path="/Dashboard" component={Dashboard}></Route>
          <Route exact path="/Finance" component={Finance}></Route>
          <Route exact path="/Settings" component={Settings}></Route>
          <Route exact path={`/CustomerPage/${Customerid}`} component={CustomerPage}></Route>
          <Route exact path="/AddInvoice" component={AddInvoice}></Route>
          <Route exact path="/AddCustomer" component={AddCustomer}></Route>
          <Route exact path="/" component={Customers} ></Route>
          </Switch>

    </Router>
  );


  
};


export default Menu;