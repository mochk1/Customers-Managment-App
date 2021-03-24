import React from 'react';
/* import './App.css';  */
import {DataProvider} from './components/context'
import TopBar from './components/TopBar'
import Menu from './components/Menu'



 const App = () => {

    return (
        <DataProvider>
      <div className=" bg-gray-200 flex h-screen   " dir="rtl" >
        <Menu />
        </div>
        </DataProvider>
    );
  
}


export default App;
