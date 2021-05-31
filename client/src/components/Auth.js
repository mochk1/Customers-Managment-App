import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'



export const AuthContext = React.createContext();

 export const AuthProvider = ({children}) => {
    const State = {
      username:localStorage.getItem('username'),
      isLoggedin:localStorage.getItem('isLoggedin')
    };

    const [Auth, setAuth] = useState(State)

    
    useEffect(() => {
  

      }, [State.isLoggedin]);
   
    return (
    <AuthContext.Provider value={[Auth, setAuth]}>
       {children}
   </AuthContext.Provider>

    )
}