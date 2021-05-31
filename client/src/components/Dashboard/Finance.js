import React, { useState, useEffect,useContext } from "react";
import { DataContext } from '../context'
import axios from 'axios';
/* import "./Styles/Finance.css"; */
import InfoCard from './InfoCard';


const Finance = () => {

const [statistics, setStatistics] = useState('')
const [state] = useContext(DataContext);
const { customer_list } = state;
const numCustomers = customer_list.length;



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
        
  <div className="main-div-Finance mx-auto ">
    <div className="fcard-grid flex mx-auto justify-around">
       <InfoCard title={'סה"כ ב2020'} data={`${statistics.totalamount===undefined?'':statistics.totalamount} ₪`}/>
      <InfoCard title={'סה"כ פרויקטים'} data={statistics.allProjects}/>
      <InfoCard title={'סה"כ לקוחות'} data={numCustomers}/> 
     
      </div>
      </div>
  

      
    </>
  );
};

export default Finance;
