import React from "react";
import { connect } from "react-redux";
import {
  changeInputVauleAction,
  addItemAction,
  deleteItemAction,
} from "./store/actionCreators";

export class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.changeInputVaule}
          />
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  this.props.deleteItem(index);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeInputVaule(e) {
    const action = changeInputVauleAction(e.target.value);
    dispatch(action);
  },

  handleClick() {
    const action = addItemAction();
    dispatch(action);
  },

  deleteItem(index) {
    const action = deleteItemAction(index);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
