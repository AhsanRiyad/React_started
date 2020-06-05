import React, { Component } from 'react';
import Ninjas from 'components/Ninjas'
import Appbar from 'nav/Appbar'
import About from './About'
import Post from "./components/Post"
import { BrowserRouter, Route, Switch } from 'react-router-dom'



class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }

  componentDidMount() {
    console.log('component mounted');
  }

  componentDidUpdate() {
    console.log('component updated');
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Appbar></Appbar>
          <Switch>
            <Route path="/login" component={Ninjas} />
            <Route path="/about" component={About} />
            <Route path="/:id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;