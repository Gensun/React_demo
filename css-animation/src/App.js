import React, { Component, Fragment } from "react";
// import './App.css'
import "./App1.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    toggle: true,
    list: [],
  };
  render() {
    return (
      <Fragment>
        <TransitionGroup>{this.addItem()}</TransitionGroup>
        {/* <div className={this.state.toggle ? "show" : "hide"}>Hello</div> */}
        <button onClick={this.handleClick}>toggle</button>
      </Fragment>
    );
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        toggle: prevState.toggle ? false : true,
        list: [...prevState.list, "item"],
      };
    });
  }

  deleteItem() {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(this.props.index, 1);
      return {list};
    });
  }

  addItem() {
    return this.state.list.map((item, index) => {
      return (
        <CSSTransition
          in={this.state.toggle}
          timeout={1000}
          unmountOnExit
          onEntered={(el) => {
            el.style.color = "blue";
          }}
          onExiting={(el) => {
            el.style.color = "red";
          }}
          key={index}
          appear={true}
          classNames="fade"
        >
          <div onClick={this.deleteItem.bind(this)} index={index}>
            {item}
          </div>
        </CSSTransition>
      );
    });
  }
}

export default App;
