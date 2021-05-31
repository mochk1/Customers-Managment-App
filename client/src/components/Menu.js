import React, { useContext,useEffect } from 'react'
import './Styles/Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faList, faCog, faUser } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import Notes from './Notes/Notes';
import Customers from './Customers/Customers'
import Dashboard from './Dashboard/Dashboard';
import Settings from './Settings/Settings'
import CustomerPage from './Customers/CustomerPage'
import AddProject from './Customers/AddProject'
import AddCustomer from './Customers/AddCustomer'
import { DataContext } from './context'
import { AuthContext } from './Auth'
import Spinner from './Styles/Spinner';



const Menu = () => {

  
  const [Auth, SetAuth] = useContext(AuthContext);
  const { username } = Auth
  const [state, setState] = useContext(DataContext)
  const { Customerid, Loading } = state
  const history = useHistory()



  const logout = () => {
    SetAuth((prevState) => ({ ...prevState, isLoggedin: false }));
    localStorage.clear()
    setState((prevState) => ({...prevState, customer_list: []}) );
    history.push('/Login')
 

  }


  return (
    <Router>
      <div className="sm:flex bg-gray-100 min-h-screen " dir="rtl">
        <div className="bar-right bg-blue-900 text-white flex-shrink-0 sticky-top-0 z-50 ">

          <div className='flex items-center sm:flex-col py-2 px-2 justify-between bg-blue-800 sm:border-b sm:border-white sm:border-opacity-50 '>
            <p className='text-blue-100 px-4 text-sm text-center '>{username} מחובר</p>
            <button onClick={logout} className='text-blue-300 sm:pt-2  hover:text-white  px-2 text-sm '>התנתק</button>
          </div>

       

          <div className='flex sm:flex-col content-evenly justify-around '>

                <Link to="/Customers">
                    <div className=" flex flex-col items-center px-5 sm:px-0 hover:bg-blue-800 focus:outline-none sm:border-opacity-50 sm:border-b sm:border-white sm:border-t-2:">
                        <p id="Customers" className="menutext p-3" >
                          <FontAwesomeIcon className="i" icon={faUser} />
                        </p>
                        <span className="mb-5">לקוחות</span>
                    </div>
                </Link>

               

                <Link to="/Notes">
                    <div className=" flex flex-col px-5 sm:px-0 items-center hover:bg-blue-800 focus:outline-none sm:border-b sm:border-white sm:border-opacity-50">
                      <p id="Todo" className="menutext p-3" >
                        <FontAwesomeIcon className="i" icon={faList} />

                      </p>
                      <span className="mb-5">Notes</span>
                    </div>
                </Link>

           

                <Link to="/Dashboard">
                    <div className=" flex flex-col items-center px-3 sm:px-0 hover:bg-blue-800 focus:outline-none flex-shrink-0 sm:border-b sm:border-white sm:border-opacity-50">
                      <p id="Dashboard" className="menutext p-3" >
                        <FontAwesomeIcon className="i" icon={faTachometerAlt} />
                      </p>
                      <span className="mb-5">לוח בקרה</span>
                    </div>
                </Link>

           

                <Link to="/Settings" >
                    <div className=" flex flex-col items-center px-5 sm:px-0 hover:bg-blue-800 focus:outline-none flex-shrink-0 sm:border-b sm:border-white sm:border-opacity-50">
                      <p id="Settings" className="menutext p-3" >
                        <FontAwesomeIcon className="i" icon={faCog} />
                      </p>
                      <span className="mb-5">הגדרות</span>
                    </div>
                </Link>

                {/* <hr className="solid opacity-50"></hr> */}

          </div>

        </div>

        <Switch>
          <Route exact path="/Notes" component={Notes}></Route>
          <Route exact path="/Dashboard" component={Dashboard}></Route>
          <Route exact path="/Settings" component={Settings}></Route>
          <Route exact path={`/CustomerPage/${Customerid}`} component={CustomerPage}></Route>
          <Route exact path="/AddInvoice" component={AddProject}></Route>
          <Route exact path="/AddCustomer" component={AddCustomer}></Route>
          <Route exact path="/Customers" component={Customers} ></Route>
          <Route exact path="/" component={Customers} ></Route>

        </Switch>


      </div>
    </Router>
  );



};


export default Menu;