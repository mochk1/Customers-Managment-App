import React,{useContext} from 'react'
/* import './Styles/Menu.css' */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faList,faCog, faChartLine, faUser } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Todo from './ToDo';
import Customers from './Customers'
import Dashboard from './Dashboard';
import Finance from './Finance'
import Settings from './Settings'
import CustomerPage from './CustomerPage'
import AddProject from './AddProject'
import AddCustomer from './AddCustomer'
import {DataContext} from './context'

const Menu = () => {
const [state] = useContext(DataContext)
const {Customerid} = state



  return (
    <Router>
    <div className="bar-right bg-blue-900 text-white  flex-shrink-0  ">
        <div className="menu border-none ">

        <Link to="/">
          <div className=" flex flex-col items-center px-7 hover:bg-blue-800 focus:outline-none ">
            <p id="Customers" className="menutext p-3" > 
              <FontAwesomeIcon className="i" icon={faUser} />
             
            </p>
              <span className="mb-5">לקוחות</span> 
            </div>
            </Link>

          <hr className="solid opacity-50"></hr>


          <Link to="/Notes">
          <div className=" flex flex-col items-center hover:bg-blue-800 ">
          <p id="Todo" className="menutext p-3" >
              <FontAwesomeIcon className="i" icon={faList} />
              
          </p>
          <span className="mb-5">Notes</span> 
           </div>
            </Link>


          <hr className="solid opacity-50"></hr>


          <Link to="/Dashboard">
          <div className=" flex flex-col items-center shrink-0 hover:bg-blue-800 ">
          <p id="Dashboard" className="menutext p-3" > 
            <FontAwesomeIcon className="i" icon={faTachometerAlt} />
            
           
          </p>
          <span className="mb-5"  >לוח בקרה</span> 
          </div>
          </Link>


          <hr className="solid opacity-50"></hr>


          <Link to="/Finance">
          <div className=" flex flex-col items-center hover:bg-blue-800 ">
          <p id="Finance" className="menutext p-3" > 
            <FontAwesomeIcon className="i" icon={faChartLine} />
           
            
          </p>
          <span className="mb-5">דוח שנתי</span> 
          </div>
          </Link>

          <hr className="solid opacity-50"></hr>


          <Link to="/Settings">
          <div className=" flex flex-col items-center hover:bg-blue-800 ">
          <p id="Settings" className="menutext p-3" > 
            <FontAwesomeIcon className="i" icon={faCog} />
          </p>
          <span className="mb-5">הגדרות</span> 
          </div>
            </Link>

        </div>
        
    </div>
          <Switch>
          <Route exact path="/Notes" component={Todo}></Route>
          <Route exact path="/Dashboard" component={Dashboard}></Route>
          <Route exact path="/Finance" component={Finance}></Route>
          <Route exact path="/Settings" component={Settings}></Route>
          <Route exact path={`/CustomerPage/${Customerid}`} component={CustomerPage}></Route>
          <Route exact path="/AddInvoice" component={AddProject}></Route>
          <Route exact path="/AddCustomer" component={AddCustomer}></Route>
          <Route exact path="/" component={Customers} ></Route>
          </Switch>

    </Router>
  );


  
};


export default Menu;