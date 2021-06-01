import React, {useContext, useState, useEffect} from 'react'
/* import './Styles/AddCustomer.css' */
import {DataContext} from '../context'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddCustomer = () => {


const theDate = new Date();
const CurrentDate = `${theDate.getDate()}.${(theDate.getMonth()+1)}.${theDate.getFullYear()}`

  
  const addcustomer = 
{
  userid:localStorage.getItem('userid'),
  name: "",
  email: "",
  projects: []  
}


let history = useHistory();
const [state, setState] = useContext(DataContext)
const {customer_list,Customerid} = state
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [text,setText] = useState(false)
const [formdata, setFormData] = useState(addcustomer)




const formclick = (e) => {
      e.preventDefault();
      setFormData((prevState) => ({...prevState, name: name, email: email}));
      
    }


const updateName = (e) => {
  setName(e.target.value)
}



useEffect(() => {
  if(name !== ''){
      axios.post('http://localhost:4000/addcustomer', formdata)
      .then(res => {
       console.log(res.data);
       setState((prevState) => ({...prevState, customer_list: res.data}));           
      })
      .then(()=>{setText(!text);history.push('/Customers')})
      .catch(function (error) {
        console.log(error);
        
      });
    }


}, [formdata]);


return (
  <>
    <div dir="rtl" className="mx-auto mt-10 flex flex-col">
      <form onSubmit={formclick}>
        <p className='text-2xl text-center'>הוספת לקוח</p>
        <div className="mt-10">
          <input  placeholder="שם לקוח"  name="name"  className='mt-2 p-2'  type="text"  onChange={updateName}></input>
          <br />
          <input  placeholder="אימייל"  name="name"  className='mt-4 p-2'  type="text"  onChange={updateName}></input>
        </div>
        <div className='mt-10 flex justify-between'>
          <button type="submit" className='bg-blue-800 text-white rounded py-2 px-4 hover:bg-blue-600'>אישור</button>
          <button type="reset" className='mr-10 bg-blue-800 text-white rounded py-2 px-4 hover:bg-blue-600' onClick={()=> history.goBack()}>חזור </button>
        </div>
      </form>
    </div>
  </>
);

    }




export default AddCustomer;