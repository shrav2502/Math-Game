import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Result from "./Components/Result";

class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={App} />
            <Route path="/result" component={Result} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Root;
