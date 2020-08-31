import React, { Component, Fragment } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import Axios from "axios";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intputValue: "",
      list: [],
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          {/** 注释1 */}
          {
            //注释2
          }
          <label htmlFor="insertInput">输入内容</label>
          <input
            id="insertInput"
            className="input"
            value={this.state.intputValue}
            onChange={this.handleChangeInput}
            ref={(input) => {
              this.input = input;
            }}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul
          ref={(ul) => {
            this.ul = ul;
          }}
        >
          {this.handleItem()}
        </ul>
      </Fragment>
    );
  }

  handleItem() {
    return this.state.list.map((item, ind) => {
      return (
        <div key={ind}>
          <TodoItem content={item} index={ind} handleDelete={this.deleteItem} />
        </div>
      );
      //   <li
      //     key={index}
      //     onClick={this.deleteItem.bind(this, index)}
      //     dangerouslySetInnerHTML={{ __html: item }}
      //   >
      //   </li>
    });
  }

  componentDidMount() {
    //ajax
    Axios.get("/api/todolist")
      .then((res) => {
        // alert('successed')
        // this.setState(() => {
        //   return {
        //     list: res.data,
        //   };
        // });
        this.setState(() => ({
          list: [...res.data],
        }));
      })
      .catch(() => {
        alert("error");
      });
  }

  handleChangeInput() {
    // const value = e.target.value;
    const value = this.input.value;
    this.setState(() => ({
      intputValue: value,
    }));
    // this.setState({
    //   intputValue: e.target.value,
    // });
  }

  handleBtnClick() {
    this.setState(
      (prevState) => ({
        list: [...prevState.list, prevState.intputValue],
        intputValue: "",
      }),
      () => {
        console.log(this.ul.querySelectorAll("div").length);
      }
    );
    // this.setState({
    //   list: [...this.state.list, this.state.intputValue],
    //   intputValue: "",
    // });
  }
  deleteItem(index) {
    console.log("click here" + index);
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list,
    // });
  }
}

export default TodoList;
