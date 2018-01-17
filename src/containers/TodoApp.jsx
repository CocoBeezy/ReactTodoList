import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";

import SearchBar from "../components/SearchBar";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  handleChange = value => {
    this.setState({ search: value });
  };

  filteredTodos = () => {
    let { items } = this.props.todos;
    const { filter } = this.props.todos;

    if (filter === "active") {
      items = items.filter(item => !item.completed);
    }

    if (filter === "completed") {
      items = items.filter(item => item.completed);
    }

    return items.filter(item => {
      return (
        item.text.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0
      );
    });
  };

  getItemsLeft = () => {
    return this.props.todos.items.reduce((acc, curr) => {
      if (!curr.completed) return acc + 1;
      else return acc;
    }, 0);
  };

  render() {
    return (
      <div className="card todo-comp">
        <SearchBar
          search={this.state.search}
          addTodo={this.props.addTodo}
          toggleAllTodos={this.props.toggleAllTodos}
          handleChange={this.handleChange}
        />
        <TodoList items={this.filteredTodos()} {...this.props} />
        <Footer
          filter={this.props.todos.filter}
          setFilter={this.props.setFilter}
          itemsLeft={this.getItemsLeft()}
          deleteCompletedTodos={this.props.deleteCompletedTodos}
        />
      </div>
    );
  }
}

TodoApp.propTypes = {};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, actions)(TodoApp);
