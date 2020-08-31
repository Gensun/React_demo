import React, { Component } from "react";
import "antd/dist/antd.css";
// import { Input, Button, List } from "antd";
import store from "./store";
import {
  getTodoList,
  getInputChangeAction,
  clickSubmitBtn,
  deleteItemByIndex,
} from "./store/actionCreators";
import TodoListComponent from "./Component/TodoListComponent";

// const data = [
//   "Racing car sprays burning fuel into crowd.",
//   "Japanese princess to wed commoner.",
//   "Australian walks 100km after outback crash.",
//   "Man charged over missing wedding girl.",
//   "Los Angeles battles huge wildfires.",
// ];

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleinputValue = this.handleinputValue.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.deleteItemClick = this.deleteItemClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListComponent
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleinputValue={this.handleinputValue}
        handleStoreChange={this.handleStoreChange}
        handleSaveClick={this.handleSaveClick}
        deleteItemClick={this.deleteItemClick}
      />
    );
    //   <div style={{ marginTop: "10px", marginLeft: "20px" }}>
    //     <div>
    //       <Input
    //         onChange={this.handleinputValue}
    //         value={this.state.inputValue}
    //         placeholder="Basic usage"
    //         style={{ width: "300px", marginRight: "20px" }}
    //       />
    //       <Button onClick={this.handleSaveClick} type="primary">
    //         提交
    //       </Button>
    //     </div>

    //     <List
    //       style={{ width: "380px", marginTop: "20px" }}
    //       bordered
    //       dataSource={this.state.list}
    //       renderItem={(item, index) => (
    //         <List.Item
    //           onClick= {this.deleteItemClick.bind(this,index)}
    //         >
    //           {item}
    //         </List.Item>
    //       )}
    //     />
    //   </div>
    // );
  }
  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }

  handleinputValue(e) {
    // const action = {
    //   type: "change_input_value",
    //   value: e.target.value,
    // };

    const inputValue = e.target.value;
    const action = getInputChangeAction(inputValue);
    store.dispatch(action);
  }

  handleStoreChange() {
    console.log("store change");
    this.setState(store.getState());
  }

  handleSaveClick() {
    // const action = {
    //   type: CLICK_B UTTON,
    // };
    const action = clickSubmitBtn();
    store.dispatch(action);
  }

  deleteItemClick(index) {
    console.log("index" + index);
    const action = deleteItemByIndex(index);
    store.dispatch(action);
  }
}

export default App;
