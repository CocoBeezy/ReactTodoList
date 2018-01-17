import React, { Component } from "react";

import NavBar from "../components/NavBar";
import TodoApp from "../containers/TodoApp";

// Styles
import "../styles/index.scss";

const Main = props => {
  return (
    <div className="app-container">
      <NavBar />
      <TodoApp />
    </div>
  );
};

export default Main;
