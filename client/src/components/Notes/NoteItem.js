import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'


const Note = (props) => {

    const {date,text,setid,id,edit} = props


const sendid =(id)=>{

    setid (id)

}




return(
    <>

<div className='noteitem flex flex-col bg-blue-100 h-28 h-full w-80 mx-auto overflow-auto transition duration-300 ease-in-out transform hover:bg-blue-50 cursor-default'>
    <div className='bg-blue-200 p-2 flex justify-between'>
        <p className='font-semibold'>{date}</p>
            <div className='btns'>
                <button onClick={()=>edit(id,text)} title='Edit' className=' px-2'> <FontAwesomeIcon className="i hover:text-blue-800" icon={faEdit} /></button>
                <button onClick={()=>sendid(id)} title='Delete' className=' px-2'> <FontAwesomeIcon className="i hover:text-blue-800" icon={faTrash} /></button>
            </div>
        </div>
    <p className='px-2 py-3' >{text}</p>

</div>
</>

)

}
export default Note;