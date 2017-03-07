import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './redux/actions/todo';

import './App.css';

class App extends Component {
  handleClick = () => {
    this.props.addTodo('Hi');
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <p className="App-intro">
          <button onClick={this.handleClick}> Hi </button>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTodo,
}

export default connect(null, mapDispatchToProps)(App);
