import React, { Component } from 'react';
import './App.css';




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mein_todos: [
        "Einkaufen",
        "Programmieren lernen",
        "Wie funktioniert React"
      ]
    }
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>To-Do Liste</h2>
        </div>
        <ul className='App-Todo'>{this.state.mein_todos.map(function (todo) {
          return (<li className='App-Todo-li'>{todo}</li>)
        })}
        </ul>
      </div>
    );
  }
}

export default App;
