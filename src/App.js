import React, { Component } from 'react';
import './App.css';
import MarktanalyseATRRegio from './MarktanalyseATRRegio';
import MarktanalyseVHLCO from './MarktanalyseVHCLO';




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
        <MarktanalyseATRRegio></MarktanalyseATRRegio>
        <MarktanalyseVHLCO></MarktanalyseVHLCO>
      </div>
    );
  }
}

export default App;
