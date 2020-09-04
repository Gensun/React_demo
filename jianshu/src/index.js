import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Globalstyle } from "./style.js";
import { IconfontGlobalstyle } from "./statics/iconfont/iconfont";

ReactDOM.render(
  <Fragment>
    <Globalstyle />
    <IconfontGlobalstyle />
    <App />
  </Fragment>,
  document.getElementById("root")
);
