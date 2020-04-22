import React, { Component } from 'react';
import Calculator from './Calculator'

class App extends Component {
  state = {
    Calculator: [
    { name: 'Ryu', age: 30, belt: 'black', id: 1 },
    { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
    { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
      <Calculator />
      </div>
      );
  }
}

export default App;