import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'



export const DataContext = React.createContext();

 export const DataProvider = ({children}) => {
    let State = {
      customer_list: [],
      searchValue: '',
      Customerid: ''
    };

    const [state, setState] = useState(State)

    useEffect(() => {
        axios.get('http://localhost:4000/')
        .then(res => {
          setState((prevState) => ({...prevState, customer_list: res.data})
        );
        })
        .catch(function (error) {
          console.log(error);
        });console.log('context effect ran')
      }, [state.searchValue,state.Customerid]);
      
   
    return (
    <DataContext.Provider value={[state,setState]}>
       {children}
   </DataContext.Provider>

    )
}

