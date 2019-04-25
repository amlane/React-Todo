import React from 'react';
import ToDo from './components/TodoComponents/Todo';
import ToDoForm from './components/TodoComponents/TodoForm';


const toDoList = [
  {
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      task: "",
      toDoListState: toDoList
    }
  }

  handleInputChange = event => {
    this.setState({ task: event.target.value })
  }

  handleClickEvent = (event) => {   //adds new to do on click
    event.preventDefault();
    const newToDo = {           //new To Do created
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({ 
      toDoListState: [...this.state.toDoListState, newToDo], //copy: this.state.toDoListState.push(newToDo)
      task: ""   //clears input after you've pressed return or clicked button
    })
  }

  toggleComplete = (id) => {
    const updatedList = this.state.toDoListState.map( item => {
      if (item.id === id) 
      return {...item, completed: !item.completed};
      return item;
    } )
    this.setState({ toDoListState: updatedList })
  }

  clearCompleted = (event) => {
    event.preventDefault();
    const updatedListAfterClear = this.state.toDoListState.filter( toDo => {
      return !toDo.completed;
    })
    this.setState({ toDoListState: updatedListAfterClear })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your To Do App!</h2>

        <ul>  {this.state.toDoListState.map( toDo => {
           return (
            <ToDo 
              toDo={toDo} 
              toggleComplete={this.toggleComplete} 
            />
          )
        })}   </ul>

        <ToDoForm 
          handleInputChange={this.handleInputChange} 
          handleClickEvent={this.handleClickEvent}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
