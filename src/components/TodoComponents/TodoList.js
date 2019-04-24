// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
 
import React from 'react';
import ToDo from "../TodoComponents/Todo"

function ToDoList(props){
    return (
        <div>
            {props.bananaToDoList.map(toDo => {
             
                return (
                    <ToDo toDo={toDo} />
                )
            })}
        </div>
    )
}

export default ToDoList;