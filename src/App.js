import React from 'react';


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

  handleClickEvent = (event) => {
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

  render() {
    return (
      <div>
        <h2>Welcome to your To Do App!</h2>

        {this.state.toDoListState.map( toDo => {
          return (
            <ul><li 
            // className={this.state.toDo.completed ? "completed": ""} 
            onClick={() => this.toggleComplete (this.state.toDo.id)}>{toDo.task}</li></ul>
          )
        })}
        <form>
          <input 
            value={this.state.task}
            placeholder="...to do"
            onChange={this.handleInputChange} 
          />

          <button onClick={this.handleClickEvent}>Add To Do</button>
          <button>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default App;
