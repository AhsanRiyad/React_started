import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class Ninjas extends Component {

  state = {
    name: 'Riyad',
    id: '15-29804-2',
  }

  handleClick = (e) => {
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    const { ninjas } = this.props;
    /* const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>Belt: { ninja.belt }</div>
        <div>First Name: { this.state.name }</div>
        </div>
        )
      }); */

    const ninjaList = () => {
      console.log('printing ninjalist');
      console.log(this.props);

      /* return (
        <div>
          <h1>
            hellow world
          </h1>
        </div>
      ) */
    };

    return (
      <div className="ninja-list">
        { ninjaList() }        
        <Button onClick={this.handleClick} variant="contained" color="primary">
          Hello World
          </Button>

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" />
        </form>

      </div>
    )
  }
}

export default Ninjas