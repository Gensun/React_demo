import React from "react";
import { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./common/header";
import Home from "./pages/home";
// import Detail from "./pages/detail";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Writer from "./pages/writer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/writer" exact component={Writer}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
// <Route path="/detail" exact render={() => <div>detail</div>}></Route>;

export default App;
