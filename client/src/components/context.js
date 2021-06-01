import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'



export const DataContext = React.createContext();

 export const DataProvider = ({children}) => {
    const State = {
      user_id:localStorage.getItem('userid'),
      customer_list: [],
      searchValue: '',
      Customerid: '',
      toaster:'',
      Loading:false,
      customerIndex:''
    };

    const [state, setState] = useState(State)

    useEffect(() => {
  
        axios.post('https://myappcustomers.herokuapp.com/customers',{userid:localStorage.getItem('userid')})
        .then(res => {
          setState((prevState) => ({...prevState, customer_list: res.data}) );
          })
        .catch(function (error) {
          console.log(error);
        });
      }, [state.searchValue,state.Customerid,state.user_id]);

    
   
    return (
    <DataContext.Provider value={[state,setState]}>
       {children}
   </DataContext.Provider>

    )
}

