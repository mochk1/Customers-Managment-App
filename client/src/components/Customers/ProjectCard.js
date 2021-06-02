import React, { useContext, useState } from 'react'
import { DataContext } from '../context'
import '../Styles/ProjectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { saveAs } from 'file-saver'

const ProjectCard = (props) => {
  const {id, projectId} = props;
  const [state, setState] = useContext(DataContext)
  const { CustomerName, Customerid, customer_list, customerIndex,user_id } = state
  const [descreption, setDescreption] = useState('')
  const [amount, setAmount] = useState('')
  const [clicked, setClicked] = useState(false)



  const updateDescription = (e) => {
    setDescreption(e.target.value)
  }

  const updateAmount = (e) => {
    setAmount(e.target.value)
  }


  const getinvoice = () => {
    axios.post('https://myappcustomers.herokuapp.com/createpdf', { id: CustomerName, descreption: descreption, amount: amount })
      .then(() => axios.get('https://myappcustomers.herokuapp.com/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
         saveAs(pdfBlob, 'newPdf.pdf');
      })

  }


  
const deleteproject = () => {
  axios.post('https://myappcustomers.herokuapp.com/deleteproject',
  {customerid:Customerid, projectid:projectId._id,userid:user_id} )
  .then((res)=>{setState((prevState) => ({...prevState, customer_list: res.data}) );})
  .catch((err)=> console.log(err))

}

const wasClicked = (e, index) => {
setClicked(!clicked)
}


  return (
    <>
    <div dir='rtl' 
         className={`mb-2 border-2 bg-gray-50 px-3 py-2 rounded ${clicked ? "h-full" : "h-12 "} transition-all ease-in-out duration-500 overflow-hidden
         cursor-pointer hover:bg-white trasition duration-200 easy-in-out`}  >

        <div className='flex justify-between  pb-3'  onClick={wasClicked}>
              <h2 ><FontAwesomeIcon className="icon" icon={faCaretSquareLeft} /> {props.name} </h2>
           
              <button  onClick={deleteproject}>X</button>
        </div>

        <div className=' flex justify-between mb-2 '>
        <div >
          
                 <input className=' ml-4 p-1 rounded border mt-2 w-48 ' name="descreption"  placeholder="תיאור" type="text"  onChange={updateDescription}></input>
                 <input className=' p-1 ml-3 rounded border mt-2 w-28'  name="amount" placeholder="סכום" type="text" onChange={updateAmount}></input>
        </div>
                 <button className=' mr-2 mt-2 bg-gray-200 p-1 rounded' onClick={getinvoice} id="invoice">חשבונית</button>
      
                
        </div>
    </div>
    </>
  );

};

export default ProjectCard
