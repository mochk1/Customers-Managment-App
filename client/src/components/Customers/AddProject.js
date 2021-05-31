import React, { useContext, useState, useEffect } from 'react'
/* import '../Styles/AddCustomer.css' */
import { DataContext } from '../context'
import axios from 'axios'
/* import '../Styles/AddInvoice.css' */
import { useHistory } from "react-router-dom";



const AddProject = () => {
  const [state, setState] = useContext(DataContext)
  const { Customerid } = state;

  let year = new Date().getFullYear();

  const projectData = {

    id: Customerid,

    dbdata: {
      year: year,
      projectname: "",
      amount: ""
    }
  }

  let history = useHistory();
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [formdata, setFormData] = useState(projectData)


  const formclick = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({ ...prevState, dbdata: { ...prevState.dbdata, projectname: name, amount: amount } }));

  }


  const updateName = (e) => {
    setName(e.target.value)
  }

  const updateQuility = (e) => {
    setAmount(e.target.value)
  }


  useEffect(() => {
    if (name !== '') {
      axios.post(`http://localhost:4000/addproject`, formdata)
        .then(res => {
          console.log(res.data);
          history.goBack();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else console.log('init')
  }, [formdata]);





  return (
    <React.Fragment>
      <div dir="rtl" className="mx-auto mt-10">
        <form onSubmit={formclick}>
        <p className='text-2xl text-center'>פרויקט חדש</p>
          <div className="mt-10">
          

            <input  placeholder="שם פרויקט" name="name" className="mt-2 p-2" type="text"
              onChange={updateName} />
            <br />

          </div>
          <div className="flex justify-between mt-10">
            <button type="submit" className='bg-blue-800 text-white rounded py-2 px-4 hover:bg-blue-600'>אישור</button>
            <button onClick={() => history.goBack()} className='bg-blue-800 text-white rounded py-2 px-4 hover:bg-blue-600'>חזור</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );



}



export default AddProject;