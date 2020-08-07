import React, {useContext, useState, useEffect} from 'react'
import './Styles/AddCustomer.css'
import {DataContext} from './context'
import axios from 'axios'
import {  useHistory } from "react-router-dom";

const AddCustomer = () => {


 
  
  const addcustomer = 
{
  name: " ",
  email: " ",
  projects: [
    {
      projectName: "",
      videoqulity: "",
      videofile:"",
      contract: "",
      invoice: ""
    }
  ]
  
}


let history = useHistory();
const [state, setState] = useContext(DataContext)
const {customer_list} = state
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [formdata, setFormData] = useState(addcustomer)




const formclick = (e) => {
      e.preventDefault();
      setFormData((prevState) => ({...prevState, name: name, email: email}));
      
    }


const updateName = (e) => {
  setName(e.target.value)
}

const updateMail = (e) => {
  setEmail(e.target.value)
}

    
useEffect(() => {
  if(name !== ''){
      axios.post('http://localhost:4000/addcustomer', formdata)
      .then(res => {
       console.log(res.data);
       setState((prevState) => ({...prevState, customer_list: res.data}));
      })
      .catch(function (error) {
        console.log(error);
        
      });
      history.push("/")
    }

else console.log('init')

}, [formdata]);


return (
  <React.Fragment>
    <div dir="rtl" className="main-div-AddCustomer">
      <form onSubmit={formclick}>
        <p id="titlec">הוספת לקוח</p>
        <div className="inputs">
          <label id="1Name">שם לקוח</label>

          <input
            id="1Name"
            placeholder="שם לקוח"
            name="name"
            className="newcustname"
            type="text"
            onChange={updateName}
          />
          <br />

          <label id="mail1">מייל</label>
          <input
            id="mail1"
            placeholder="אימייל"
            name="email"
            className="newcustname"
            type="text"
            onChange={updateMail}
          />

          <br />
        </div>
        <div id="buttons-bottom">
          <button type="reset" onClick={()=> history.goBack()}>חזור</button>
          <button type="submit">אישור</button>
        </div>
      </form>
    </div>
  </React.Fragment>
);

    }




export default AddCustomer;