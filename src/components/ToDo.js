import React, {useState} from 'react'
/* import './Styles/ToDo.css' */
import Todolist from './Todolist'


const Todo = () => {

return (
  <React.Fragment>
    <div className="main-div-todo">
      <div className="title">Notes</div>
      <br />
      <div id="notes">
      <Todolist title={''} />
      <Todolist title={''} />
      </div>
      <Todolist title={'!Todos'} />
    </div>
  </React.Fragment>
);

}
    
export default Todo;