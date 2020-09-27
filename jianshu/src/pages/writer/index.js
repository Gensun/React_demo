import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Writer extends PureComponent {
  render() {
    const { login } = this.props;
    if (login) {
      return <div>Writer</div>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = (state) => ({
  login: state.getIn(["login", "login"]),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Writer);
