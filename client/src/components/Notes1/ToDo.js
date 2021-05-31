import React from 'react'
/* import './Styles/ToDo.css' */
import Todolist from './Todolist'


const Todo = () => {

return (
  <React.Fragment>

    <div className="main-div-todo flex flex-col mx-auto">
    <h1 className="text-3xl  pt-11 pb-5  text-center">Notes</h1>
      <div id="notes" className='sm:flex-col flex mx-auto'>
      <Todolist title={''} />

      </div >
    </div>
    
  </React.Fragment>
);

}
    
export default Todo;