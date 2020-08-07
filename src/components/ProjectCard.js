import React, { useContext, useState } from 'react'
import { DataContext } from './context'
import './Styles/ProjectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { saveAs } from 'file-saver'

const ProjectCard = (props) => {
  const [state, setState] = useContext(DataContext);
  const { CustomerId } = state
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')


  const descng = (e) => {
    setDesc(e.target.value)

  }

  const amountcng = (e) => {
    setAmount(e.target.value)
  }


  const getinvoice = () => {

    axios.post('http://localhost:4000/createpdf', { id: CustomerId, descreption: desc, amount: amount })
      .then(() => axios.get('http://localhost:4000/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        /*  saveAs(pdfBlob, 'newPdf.pdf'); */
      })

  }


  console.log(props)
  return (
    <>
      <main className="ProjectCard">
        <div dir="rtl" className="right-side">
          <p>
            <h2 className="projname"><FontAwesomeIcon className="icon" icon={faCaretSquareLeft} /> {props.name} </h2>
            <h4 className="price">1500 ₪</h4>
          </p>
          <button onClick={getinvoice} className="btnstyle" id="invoice">חשבונית</button>
        </div>
        <div className="left-side">
          <div className="buttons">
            <input className="p-input" name="descreption" placeholder="תיאור" type="text" onChange={descng}></input>
            <input className="p-input" name="amount" placeholder="סכום" type="text" onChange={amountcng}></input>

          </div>
        </div>

      </main>


    </>
  );

};

export default ProjectCard