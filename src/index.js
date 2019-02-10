import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/PageHome";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Catalog from "./components/Catalog";
import { Provider } from "react-redux";
import store from "./store/index";
import PageEdit from "./components/PageEdit";

import "./styles.css";

class App extends React.Component {

  componentDidUpdate(_, oldState) {
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
            <Route path="/edit/:tobaccoId" component={PageEdit} />
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
