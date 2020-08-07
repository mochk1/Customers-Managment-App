import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'



export const CustomersContext = React.createContext();

 export const CustomersProvider = ({children}) => {

    let CustomerState = {
      Clicked: "Customers",
      Customerid: '',
      CustomerName:''
    };

    const [Customerstate, setCustomerState] = useState(CustomerState)

    useEffect(() => {

    console.log('customers context ran')
    
      }, [CustomerState.Clicked, CustomerState.Customerid, CustomerState.CustomerName ]);
      
   
    return (
    <CustomersContext.Provider value={[Customerstate,setCustomerState]}>
       {children}
   </CustomersContext.Provider>

    )
}
