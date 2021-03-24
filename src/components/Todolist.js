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
        <div id="todos-main">
        <h1>{props.title}</h1>
        <div className="todos-container">
          <div>
            <div id="input">
              <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                placeholder="הוסף"
              ></input>
              <button className="btn" onClick={addvalue}>
                <FontAwesomeIcon className="i" icon={faPlus} />
              </button>
            </div>
          </div>
          {todos.map((item) => (
            <TodoItem
              key={Math.floor(Math.random() * 1852)}
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