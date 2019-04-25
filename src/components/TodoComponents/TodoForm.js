import React from 'react';

function ToDoForm(props){
    return (

        <form> 
          <input 
            placeholder="...to do"
            name="task"
            onChange={props.onChange}
           />
          <button newToDo={props.newToDo.task} onClick={props.newToDo.task}>Add To Do</button>
          <button>Clear Completed</button>
          {console.log(props)}
        </form>
    )
}


export default ToDoForm;