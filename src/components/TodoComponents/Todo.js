import React from 'react';

function ToDo(props){
    return (
        <div>
          <ul> {props.toDo.task} </ul>

        </div>
    )
}

export default ToDo;