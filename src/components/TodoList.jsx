import React, { Component } from "react";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  renderItems = () => {
    return this.props.items.map(item => {
      return <TodoItem key={item.id} item={item} {...this.props} />;
    });
  };

  render() {
    return <div className="card-content">{this.renderItems()}</div>;
  }
}

TodoList.propTypes = {};

export default TodoList;
