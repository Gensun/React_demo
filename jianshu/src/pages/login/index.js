import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { actionCreators } from "./store";
import { Redirect } from "react-router-dom";

class Login extends PureComponent {
  render() {
    const { loginStatus, login } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="用户名"
              ref={(input) => {
                this.account = input;
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              ref={(input) => {
                this.password = input;
              }}
            />
            <Button onClick={() => login(this.account, this.password)}>
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(["login", "login"]),
});

const mapDispatchToProps = (dispatch) => ({
  login(accoutElem, passwordElem) {
    console.log(accoutElem, passwordElem);
    if (accoutElem.value && passwordElem.value) {
      dispatch(actionCreators.toLogin(accoutElem.value, passwordElem.value));
    } else {
      alert("输入框内容不正确");
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
