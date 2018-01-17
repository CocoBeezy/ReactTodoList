import React, { Component } from "react";
import PropTypes from "prop-types";

import "../styles/SearchBar.scss";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = event => {
    const value = event.target.value;
    this.props.handleChange(value);
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.props.addTodo(this.props.search);
      this.props.handleChange("");
    }
  };

  toggleAllTodos = event => {
    event.preventDefault();
    this.props.toggleAllTodos();
  };

  render() {
    return (
      <header className="card-header search-bar-comp">
        <a href="#" className="card-header-icon" onClick={this.toggleAllTodos}>
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </a>
        <div className="field">
          <div className="control search-bar">
            <input
              className="input"
              type="text"
              placeholder="Search..."
              value={this.props.search}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        </div>
      </header>
    );
  }
}

SearchBar.propTypes = {};

export default SearchBar;
