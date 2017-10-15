import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAsync,  removeTodoAsync } from './redux/actions/todo';

const ToDo = ({ name, id , status, handleRemove }) => (
  <div>
    <p> {name} { name && (status ? 'Done' : 'Not Yet')} </p>
    <button onClick={handleRemove(name)}>Remove</button>
  </div>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
    }
  }

  handleRemove = (id) => () => {
    this.props.removeTodoAsync(id);
  }

  handleClick = () => {
    this.props.addTodoAsync(this.state.todo);
    this.setState({
      todo: ''
    });
  }

  handleChange = (e) => {
    const todo = e.target.value;
    if (todo) {
      this.setState({
        todo: e.target.value,
      });
    }
  }
  render() {
    return (
      <div>
        <div>
        </div>
        <p>
          <input onChange={this.handleChange} value={this.state.todo} />
          <button onClick={this.handleClick}> Add Todo </button>
        </p>
        <div> To Dos</div>
        <div>
          {
            this.props.todos.map(t => (
                <ToDo key={t.name} {...t} handleRemove={this.handleRemove}/>
              )
            )
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTodoAsync,
  removeTodoAsync,
}

const mapStateToProps = (state, ownProps) => ({
  todos: state.todo.get('items'),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
