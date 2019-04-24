import React from 'react';

const list = [
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
    id: 1,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();

  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
