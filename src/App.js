import React from 'react';
import './App.css'; 
import {DataProvider} from './components/context'
import TopBar from './components/TopBar'
import Menu from './components/Menu'



 const App = () => {

    return (
        <DataProvider>
      <div className="container" >
        <div className="menu" dir="rtl"> 
        <TopBar />
        <Menu />
        </div>

        </div>
        </DataProvider>
    );
  
}


export default App;
