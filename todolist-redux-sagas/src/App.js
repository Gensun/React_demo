import React, { Component } from "react";
import "antd/dist/antd.css";
// import { Input, Button, List } from "antd";
import store from "./store";
import {
  getInitList,
  getInputChangeAction,
  clickSubmitBtn,
  deleteItemByIndex,
} from "./store/actionCreators";
import TodoListComponent from "./Component/TodoListComponent";

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
  }
  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
  }

  handleinputValue(e) {
    const inputValue = e.target.value;
    const action = getInputChangeAction(inputValue);
    store.dispatch(action);
  }

  handleStoreChange() {
    console.log("store change");
    this.setState(store.getState());
  }

  handleSaveClick() {
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
