import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from './components/Menu';
import routes from "./routes";

class App extends Component {

  render() {

    return (
      < Router >
        <div className="App">
          {/* Menu */}
          <Menu />
          {/* Content */}
          <Switch>
            {this.showContentMenu(routes)}
          </Switch>
        </div>
      </Router >

    );
  }

  showContentMenu(routes) {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((item, index) => {
        return (
          <Route key={index} exact={item.exact} path={item.path} component={item.main} />
        )
      })
    }
    return result;
  }

}

export default App;
