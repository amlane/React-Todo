import React from 'react';

function ToDoForm(props){
    return (
        <form onSubmit={props.handleClickEvent} className="to-do-form">
          <input 
            className="to-do-input"
            value={props.task}
            placeholder="...what do you need to do?"
            onChange={props.handleInputChange} 
          />

          <button>Add To Do</button>

          <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default ToDoForm;