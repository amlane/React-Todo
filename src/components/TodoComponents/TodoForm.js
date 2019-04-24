import React from 'react';

function ToDoForm(props){
    return (
        <form> 
          <input 
            placeholder="...to do"
            name="task"
            onChange={props.onChange}
           />
          <button>Add Todo</button>
          <button>Clear Completed</button>
        </form>
    )
}


export default ToDoForm;