import React,{useState, useContext, useEffect} from 'react'
import Note from './NoteItem'
import { DataContext } from '../context'
import axios from 'axios'
import '../Styles/NoteItem.css'

const Notes = () =>{

const theDate = new Date();
const CurrentDate = `${theDate.getDate()}.${(theDate.getMonth()+1)}.${theDate.getFullYear()}`
const [state, setState] = useContext(DataContext)
const { user_id } = state

const NotesState = {
      List:[]
}

const [notes,setnotes] = useState(NotesState)
const [open,setopen] = useState(false)
const [noteText, setnoteText] = useState('')
const [editText, seteditText] = useState('')
const [delid, setDelid] = useState('')


useEffect(()=>{

    axios.post('https://myappcustomers.herokuapp.com/getnotes', {userid:user_id})
    .then((res)=>{setnotes((prevState) => ({...prevState, List: res.data}) )})
    .catch((err)=>console.log(err))

},[delid])


const addnote =()=> {
      axios.post('http://localhost:4000/addnote', {userid:user_id, noteText:noteText, date: CurrentDate})
      .then((res)=>{setnotes((currState) => ({...currState, List: res.data}) );setDelid(()=>noteText)})
      .catch((err)=>console.log(err))
      
}

useEffect(()=>{

   


},[noteText])




const deletenote =(id) => {

    
    axios.post('http://localhost:4000/deletenote', {userid:user_id, id:id})
    .then((res)=>setnotes((prevState) => ({...prevState, List: res.data}) ))
    .catch((err)=>console.log(err))

}


const updatenote =() => {

    axios.post('http://localhost:4000/updatenote', {userid:user_id, noteText:noteText})
    .then((res)=>{setnotes((prevState) => ({...prevState, List: res.data }) );
                 setopen(!open)})
    .catch((err)=>console.log(err))

}


const showmodal = (id,text)=> {

    seteditText(text)
    setopen(!open)

}




return(

<>

<div className='notes-main mx-auto overflow-auto'>

        {open?
            <div className='modal bg-black flex absolute w-full h-screen sticky-top-0 z-10 bg-black bg-opacity-50 right-0'>
                <div className='modal-input relative rounded-md text-center mx-auto bg-gray-200 opacity-100 mt-48 flex flex-col items-end h-52'>
                <button onClick={showmodal} className='mt-2 flex rounded-md bg-blue-200 ml-2 text-blue-800 absolute flex justify-end px-2 '>X</button>
                    <h1 className='mt-5  mx-auto'>Edit Note</h1>
                <textarea onChange={e=>setnoteText(e.target.value)} name="Text1" className='rounded-md px-3 mx-10 py-2' cols="40" rows="3">{editText}</textarea>
                <button onClick={()=>updatenote} className='rounded-md mt-3 bg-blue-200 text-blue-800  block mx-auto p-2'>Update Note</button>
                </div>
            </div>
        :null}


            <h1 className="text-3xl  pt-11 pb-5  text-center">Notes</h1>
            <h2 className='text-center mb-1 mt-5 mx-auto'>Add New Note</h2>

        <div className='bg-blue-100 p-2 rounded-md flex mx-5 w-80 max-w-full mx-auto'>
            <textarea onChange={e=>setnoteText(e.target.value)} name="Text1" className='px-3 py-2' cols="40" rows="3"></textarea>
            <button onClick={addnote} className="pb-1 text-3xl text-blue-900 text-center bg-white px-4 mr-2 hover:bg-gray-100 focus:outline-none hover:bg-green-50 transition duration-200 ease-in-out "> + </button>
        </div>

<div className='px-4 mt-10 mb-8'>
    <div className='z-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-auto gap-4 '>

    {notes.List.map((item,index)=>
        <Note date={item.date} text={item.noteText} id={item._id} key={index} setid={deletenote} edit={showmodal} />)}

    </div>
    </div>
</div>




</>
)



}


export default Notes;
