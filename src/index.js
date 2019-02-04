import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/PageHome";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Catalog from "./components/Catalog";
import MyInput from "./components/MyInput";
import { Provider } from "react-redux";
import store from "./store/index";
// import { Provider } from "react-redux";
// import store from "./components/store";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidUpdate(_, oldState) {
    // console.log(oldState);
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={LoginPage} />
            <Route path="/home" component={Home} />
            <Route path="/catalog" component={Catalog} />
          </div>
        </Router>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
