import React from 'react'
/* import {Card} from 'react-bootstrap' */
/* import './Styles/TodoItem.css' */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const TodoItem = (props)  => {
    return (
        <div className="todoitem flex mx-auto ">
   <h2 id="edit" className="title">{props.item}</h2>
   <button className="delete" 
        onClick={()=> props.deleteitem(props.item)}>
        <FontAwesomeIcon className="i" icon={faMinusCircle } />
    </button>
   </div>
    
    )
}



export default TodoItem;