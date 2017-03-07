import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAsync } from './redux/actions/todo';

import './App.css';

class App extends Component {
  handleClick = () => {
    this.props.addTodoAsync('Hi');
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
  addTodoAsync,
}

export default connect(null, mapDispatchToProps)(App);
