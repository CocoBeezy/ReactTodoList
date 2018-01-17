import React from "react";
import PropTypes from "prop-types";
import Checkbox from "material-ui/Checkbox";

import "../styles/TodoItem.scss";

const TodoItem = props => {
  return (
    <div className="level todo-item">
      <div className="level-left">
        <div className="level-item">
          <Checkbox
            checked={props.item.completed}
            onChange={(event, value) => props.toggleTodo(props.item.id)}
          />
        </div>
        <div className="level-item">{props.item.text}</div>
      </div>
      <div className="level-right">
        <div className="level-item delete-item">
          <a href="#" onClick={event => props.deleteTodo(props.item.id)}>
            <i className="fa fa-times" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
