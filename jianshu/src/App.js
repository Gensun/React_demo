import React from "react";
import { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./common/header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
// <Route path="/detail" exact render={() => <div>detail</div>}></Route>;

export default App;
