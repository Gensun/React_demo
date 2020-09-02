import React from "react";
import { Globalstyle } from "./style";
import { IconfontGlobalstyle } from "./statics/iconfont/iconfont.js";
import Header from "./common/header";

function App() {
  return (
    <div>
      <Globalstyle />
      <IconfontGlobalstyle />
      <Header />
    </div>
  );
}

export default App;
