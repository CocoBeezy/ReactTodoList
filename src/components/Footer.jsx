import React, { Component } from "react";
import PropTypes from "prop-types";

import "../styles/Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  getIsActive = type => {
    const { filter } = this.props;
    if (filter === type) return "is-active";
    return "";
  };

  setFilter = (event, filter) => {
    event.preventDefault();
    this.props.setFilter(filter);
  };

  render() {
    return (
      <div className="footer-comp">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              {this.props.itemsLeft}{" "}
              {`${this.props.itemsLeft === 1 ? "Item Left" : "Items Left"}`}
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <button
                className="button default-button"
                onClick={event => this.props.deleteCompletedTodos()}
              >
                Clear Completed
              </button>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="#"
            className={`card-footer-item ${this.getIsActive("all")}`}
            onClick={event => this.setFilter(event, "all")}
          >
            All
          </a>
          <a
            href="#"
            className={`card-footer-item ${this.getIsActive("active")}`}
            onClick={event => this.setFilter(event, "active")}
          >
            Active
          </a>
          <a
            href="#"
            className={`card-footer-item ${this.getIsActive("completed")}`}
            onClick={event => this.setFilter(event, "completed")}
          >
            Completed
          </a>
        </footer>
      </div>
    );
  }
}

Footer.propTypes = {};

export default Footer;
