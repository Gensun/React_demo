import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content, test1 } = this.props;
    // return <div onClick={this.handleClick}>{this.props.content}</div>;
    return (
      <div onClick={this.handleClick}>
        {test1} - {content}
      </div>
    );
  }

  handleClick() {
    const { handleDelete, index } = this.props;
    handleDelete(index);
    // this.props.handleDelete(this.props.index);
    // console.log(this.props.index);
  }
}

TodoItem.propTypes = {
  test1: PropTypes.string.isRequired,
  context: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), //PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
};

TodoItem.defaultProps = {
  test1: "hello",
};
