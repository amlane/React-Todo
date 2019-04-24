 // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm'
// import ToDo from './components/TodoComponents/Todo'
import ToDoList from './components/TodoComponents/TodoList'

const toDos = [
  {
    task: 'Laundry',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  },  
  {
    task: 'Swiffer',
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      toDosOnState: toDos,
      toDos: {
        task: "",
        id: "",
        completed: ""
      }
    };
  }

  handleInputChange = event => {
    {
      this.setState({
          [event.target.name]: event.target.value
      });
    };
  }

  newToDo = event => {
    event.preventDefault();
    this.setState({
      toDosOnState: [
        ...this.state.toDosOnState,
        {task: this.state.toDo}
      ],     
      task: ""
    });
  };


  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
          
        <ToDoList bananaToDoList={this.state.toDosOnState}/>

        <ToDoForm 
            newToDo={this.newToDo} 
            onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
