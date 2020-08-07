import React, {useContext} from 'react'
import './Styles/CustomerCard.css'
import {DataContext} from './context'
import { Link} from "react-router-dom";


 function CustomerCard(props) {
    const [state,setState] = useContext(DataContext)

    const clicked = (e) => {
        const idnum = props.costumername
        const idd = props.idd
        setState(prevState => ({...prevState, CustomerName: idnum, Customerid: idd}))
    }

/* let projnum = props.projects.length;

if(projnum === undefined) projnum = 0 */

console.log(props)
    return (
       
        <div className="C-card"  dir = "rtl" id={props.idd} onClick={clicked} >
            <Link to ={`/CustomerPage/${props.idd}`}>
            <div className="Details" id={props.costumername}   >
            <p id={props.costumername} className="customer-name">{props.costumername}</p>    
            <p id="projects"> {`${props.projects.length} פרויקטים`} </p>
            </div>
            </Link>
        </div>
  
    )



}


export default CustomerCard