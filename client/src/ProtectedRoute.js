import React,{useContext} from 'react';
import { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import Menu from "./components/Menu";
import {DataProvider} from './components/context'
import {DataContext} from './components/context'

export default function PrivateRoute({ component: Component, ...rest }) {



const [state,setState] = useContext(DataContext)
const {username} = state
const user = true;

  return (
    <DataProvider>
    <Route
      {...rest}
      render={props => {
        if(user){
        
        return (
        <>
       
       <Component {...props}/>
            
            </>
        )
        
      } else{
        
        return  <Redirect to="/" />
      }
    }}
    ></Route>
    </DataProvider>
  )
}


