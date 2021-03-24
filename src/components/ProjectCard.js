import React, { useContext, useState } from 'react'
import { DataContext } from './context'
/* import './Styles/ProjectCard.css' */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { saveAs } from 'file-saver'

const ProjectCard = (props) => {
  const [state, setState] = useContext(DataContext);
  const { CustomerName } = state
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')


  const descng = (e) => {
    setDesc(e.target.value)

  }

  const amountcng = (e) => {
    setAmount(e.target.value)
  }


  const getinvoice = () => {

    axios.post('http://localhost:4000/createpdf', { id: CustomerName, descreption: desc, amount: amount })
      .then(() => axios.get('http://localhost:4000/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
         saveAs(pdfBlob, 'newPdf.pdf');
      })

  }


  console.log(props)


  return (
    <>
      <div className="ProjectCard  px-12 bg-gray-100 mt-8 rounded-md">
        <div dir="rtl" className="right-side">
          
            <h2 className="projname text-xl pt-3"><FontAwesomeIcon className="icon" icon={faCaretSquareLeft} /> {props.name} </h2>
  <h4 className="price">{props.amount}</h4>
         
        </div>
        <div className="left-side pt-6 pb-4">
          <div className="buttons flex justify-center ">

            <div className="px-1">
                <input
                      className="p-input p-2 rounded focus:outline-none"
                      name="descreption"
                      placeholder="תיאור"
                      type="text"
                      onChange={descng}>
                </input>
              </div>


            <div className="px-1 pl-4 ">
                 <input className="p-input p-2 rounded focus:outline-none" name="amount" placeholder="סכום" type="text" onChange={amountcng}>
                 </input> 
             </div>

            <button onClick={getinvoice} className="focus:outline-none bg-white rounded px-2 bg-gray-500 text-white hover:bg-gray-600" id="invoice">חשבונית</button>
          </div>
        </div>

      </div>


    </>
  );

};

export default ProjectCard