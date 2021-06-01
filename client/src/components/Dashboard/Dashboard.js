import React, {useContext} from 'react'
import '../Styles/Dashboard.css'
import {DataContext} from '../context'
import { Line } from 'react-chartjs-2'
import Finance from './Finance'
import {data} from './ChartsData'


const Dashboard = () => {

    const [state] = useContext(DataContext)
    


    
const Selected = (e)=> {



}



return (

  <div className="dashboard-main mx-auto overflow-auto">
<h1 className="text-3xl  pt-11 pb-5  text-center">לוח בקרה</h1>
    <Finance />
    <div className="data-container  ">
      <Line data={data} />
    </div>
    <div className='flex mt-10  '>
    <div className='flex mx-auto mb-10'>
    <button className="bg-blue-900 rounded text-white px-5 py-2  text-grey text-lg hover:bg-blue-800">
      דוח שנתי
    </button>
    <select onChange={Selected} name="year" id="year" className='text-lg hover:bg-blue-800 rounded bg-blue-900 text-white mr-3 px-3 '>
      <option  className='py-5' value="2021">2021</option>
      <option className='py-5' value="2020">2020</option>
    </select>
    </div>
    </div> 
  </div>
);
}


export default Dashboard;