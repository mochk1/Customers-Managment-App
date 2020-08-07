import React, {useContext} from 'react'
import './Styles/Finance.css'
import {DataContext} from './context'



const Finance = () => {

    const [state] = useContext(DataContext)



return(
<React.Fragment>
<div dir = "rtl" className="main-div-Finance">Finance !</div>



</React.Fragment>
)

    }




export default Finance;