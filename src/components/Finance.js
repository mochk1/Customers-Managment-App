import React, { useState, useEffect } from "react";
import axios from 'axios';
/* import "./Styles/Finance.css"; */
import InfoCard from './InfoCard';


const Finance = () => {

const [statistics, setStatistics] = useState('')


    useEffect(() => {
        axios.get('http://localhost:4000/test')
        .then(res => {
            setStatistics(() =>res.data);
        })
        .catch(function (error) {
          console.log(error);
        });console.log('finance effect ran')
      }, []);


      

  return (
    <>
        
  <div className="main-div-Finance">
    <div className="fcard-grid">
       <InfoCard title={'סה"כ ב2020'} data={`₪${statistics.totalamount===undefined?'':statistics.totalamount}`}/>
      <InfoCard title={'סה"כ פרויקטים'} data={statistics.allProjects}/>
      <InfoCard title={'סה"כ לקוחות'} data={statistics.allProjects}/> 
     
      </div>
      </div>
  

      
    </>
  );
};

export default Finance;
