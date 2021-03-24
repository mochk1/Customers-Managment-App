import React, {useContext} from 'react'
/* import './Styles/CustomerCard.css' */
import {DataContext} from './context'
import { Link} from "react-router-dom";


 function CustomerCard(props) {
    const [state,setState] = useContext(DataContext)

    const clicked = (e) => {
        const idnum = props.costumername
        const idd = props.idd
        setState(prevState => ({...prevState, CustomerName: idnum, Customerid: idd}))
    }


console.log(props)
    return (
       
        <div className="C-card p-3 bg-white hover:bg-gray-50 pl-24"  dir = "rtl" id={props.idd} onClick={clicked} >
            <Link to ={`/CustomerPage/${props.idd}`}>
            <div className="Details mb-3 ml-4 " id={props.costumername}   >
            <p id={props.costumername} className="customer-name text-lg text-blue-900">{props.costumername}</p>    
            <p className="text-sm pt-1 flex-shrink-0 text-blue-900 " id="projects"> {`${props.projects.length} פרויקטים`} </p>
            </div>
            </Link>
        </div>
    )
}


export default CustomerCard