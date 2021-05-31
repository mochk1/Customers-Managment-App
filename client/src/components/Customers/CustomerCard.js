import React, {useContext} from 'react'
/* import './Styles/CustomerCard.css' */
import {DataContext} from '../context'
import { Link} from "react-router-dom";




 function CustomerCard(props) {
    const [state,setState] = useContext(DataContext)
    const {idd, costumername, projects, customerIndex} = props;



    const clicked = (e) => {
        setState((prevState) => ({...prevState, customerIndex: customerIndex}) );
        const idnum = costumername
        setState(prevState => ({...prevState, CustomerName: idnum, Customerid: idd}))
    }


    const numprojects = () => {

        if (projects === undefined) {
            return 0;
        } else {
            return projects.length
        }   
    }


    return (
       
        <div className="C-card p-3 bg-white hover:bg-gray-50 "  dir = "rtl" id={idd} onClick={clicked} >
            <Link to ={`/CustomerPage/${idd}`}>
            <div className="Details mb-3 ml-12 flex flex-col w-full overflow-hidden break-all " id={costumername}   >
            <p id={costumername} className="customer-name flex-shrink-0 text-lg text-blue-900">{costumername}</p>    
            <p className="text-sm pt-1 flex-shrink-0 text-blue-900 " id="projects"> {`${numprojects()} פרויקטים`} </p>
            </div>
            </Link>
        </div>
    )
}


export default CustomerCard