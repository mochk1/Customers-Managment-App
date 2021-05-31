import React from "react";
import './App.css'; 
import Main from './Main'
import {AuthProvider} from './components/Auth'
import {DataProvider} from './components/context'

 const App = () => {


    return (
        <AuthProvider>
        <DataProvider>
            <Main/>
        </DataProvider>
        </AuthProvider>
    );
  
}


export default App;
