import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import DevTools from "../containers/DevTools";

/**
 * This variable is "true" if the application
 * is running in production.
 */
const isProduction = process.env.NODE_ENV === "production";
// Create material-ui theme
const theme = createMuiTheme();
// Components
import Main from "./main";

const Root = props => {
  return (
    <Provider store={props.store}>
      <MuiThemeProvider theme={theme}>
        <div>
          <Router>
            <Route path="/" component={Main} />
          </Router>
          {/**
           * Embed the DevTools component only
           * when in development.
           */}
          {!isProduction && <DevTools />}
        </div>
      </MuiThemeProvider>
    </Provider>
  );
};

export default Root;
