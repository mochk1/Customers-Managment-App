import React, {useContext} from 'react'
import '../Styles/Settings.css'
import {DataContext} from '../context'



const Settings = () => {

    const [state] = useContext(DataContext)
   




return (
  <div dir="rtl" className="settings-main flex flex-col mx-auto">
    <h1 className="text-3xl  pt-11 pb-5  text-center">הגדרות</h1>

    <div className="flex items-center mx-auto ">
      <span className='pl-3'>חשבונית מספר</span>
      <input className='p-1 w-20 rounded focus:outline-none' type="text" placeholder="54" />
      <button className='px-3 py-1 rounded m-2 bg-blue-200 focus:outline-none'>עדכן</button>
    </div>
  </div>
);

    }




export default Settings;