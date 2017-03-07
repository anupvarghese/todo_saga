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
        <p className="App-intro">
          {this.props.todo}
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTodoAsync,
}

const mapStateToProps = (state, ownProps) => ({
  todo: state.todo.get('name'),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
