import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const Application = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  // Provider链接store，Provider里面的组件都能够获取store中的内容
  Application,
  document.getElementById("root")
);
