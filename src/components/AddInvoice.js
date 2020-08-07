import React, {useContext, useState, useEffect} from 'react'
import './Styles/AddCustomer.css'
import {DataContext} from './context'
import axios from 'axios'
import './Styles/AddInvoice.css'
import {  useHistory } from "react-router-dom";




const AddInvoice = () => {
  const [state, setState] = useContext(DataContext)
  const {Customerid} = state;

  let year = new Date().getFullYear();
  
  const projectData = {
  
    id: Customerid,
    
    dbdata: {
          projectName: " ",
          videoqulity: "HD",
          projectYear: year,
          videofile:"pathtovideo.mov",
          contract: "pathtofile.pdf",
          invoice: "pathtofile.pdf"
          
          }
  }

  let history = useHistory();
 
  const [name,setName] = useState('')
  const [quility,setQuility] = useState('')
  const [formdata, setFormData] = useState(projectData)
  

const formclick = (e) => {
      e.preventDefault();
      setFormData((prevState) => ({...prevState, dbdata: { ...prevState.dbdata, projectName: name, videoqulity: quility }}));
   
    }


const updateName = (e) => {
  setName(e.target.value)
}

const updateQuility = (e) => {
  setQuility(e.target.value)
}

    
useEffect(() => {
  if(name !== ''){
      axios.post(`http://localhost:4000/addproject`, formdata)
      .then(res => {
       console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      history.push("/");
}else console.log('init')}, [formdata]);


 
  
   
return (
  <React.Fragment>
    <div dir="rtl" className="main-div-AddCustomer">
      <form onSubmit={formclick}>
        <p id="titlec"> פרויקט חדש </p>
        <div className="inputs">
          <label id="1Name">שם פרויקט</label>

          <input id="1Name" placeholder="שם פרויקט" name="name" className="newcustname" type="text"
            onChange={updateName} />
          <br />

          <label id="mail1">קובץ</label>

          <input id="mail1" placeholder="קובץ" name="quality" className="newcustname" type="text"
            onChange={updateQuility} />

          <br />

          <label id="mail1">איכות</label>
          <div className= "radios" >
            <div>
          <input type="radio" id="HD" name="QT" value="HD"/>
         HD
          </div>
          <div>
          <input type="radio" id="4K" name="QT" value="4K"/>
          4K
          </div>
          <div>
          <input type="radio" id="MOBILE" name="QT" value="MOBILE"/>
          MOBILE
          </div>
          </div>
       {/*    <input id="mail1" placeholder="קובץ" name="quality" className="newcustname" type="text"
           onChange={updateQuility} /> */}

          <br />

          <label id="mail1">חוזה</label>

          <input id="mail1" placeholder="חוזה" name="contract" className="newcustname" type="text"
          onChange={updateQuility} />




        </div>
        <div id="buttons-bottom">
          <button  onClick={()=> history.goBack()}>חזור</button>
          <button type="reset" >איפוס</button>
          <button type="submit">אישור</button>
        </div>
      </form>
    </div>
  </React.Fragment>
);



}



export default AddInvoice;