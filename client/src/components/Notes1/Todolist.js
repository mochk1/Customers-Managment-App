import React, {useState} from 'react'
import TodoItem from './TodoItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
/* import './Styles/ToDo.css' */

const Todolist = (props) => {

    const [value,setValue] = useState('')
    const [todos,setTodos] = useState([])
    
    const addvalue = (e) => {
    if(value !== '')
    setTodos(prevState => [...prevState, value])
        else return null
       
    }
    
    const deleteitem = (item) => {
    setTodos(todos.filter((element)=>(element !== item)))
    }


    return (
      
        <div id="todos-main" className='m-4  flex flex-shrink-0 mx-auto'>
        <h1>{props.title}</h1>
        <div className="todos-container">
          <div>
            <div id="input">
              <textarea
                onChange={(e) => setValue(e.target.value)}
                placeholder="הוסף"
                className='p-2'
              ></textarea>
              
              <button className="btn mr-2" onClick={addvalue}>
                <FontAwesomeIcon className="i text-xl bg-blue-200" icon={faPlus} />
              </button>
            </div>
          </div>
          {todos.map((item,index) => (
            <TodoItem
              key={index}
              id={Math.floor(Math.random() * 1852)}
              item={item}
              deleteitem={deleteitem}
            />
          ))}
        </div>
      </div>
    )
}



export default  Todolist