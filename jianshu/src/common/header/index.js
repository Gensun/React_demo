import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchArea,
  SearchTitle,
  SearchSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from "./style";

const getSearchArea = (props) => {
  const { isFous, list } = props;

  if (isFous) {
    return (
      <SearchArea>
        <SearchTitle>
          标题
          <SearchSwitch>换一批</SearchSwitch>
        </SearchTitle>
        <SearchInfoList>
          {list.map((item) => {
            return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
          })}
        </SearchInfoList>
      </SearchArea>
    );
  } else {
    return null;
  }
};

const Header = (props) => {
  const { isFous, handleFocused, handleBlured } = props;

  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>

        <SearchWrapper>
          <CSSTransition in={isFous} timeout={2000} classNames="slide">
            <NavSearch
              className={isFous ? "focused" : " "}
              onFocus={handleFocused}
              onBlur={handleBlured}
            ></NavSearch>
          </CSSTransition>
          <i className={isFous ? "focused iconfont" : "iconfont"}>&#xe616;</i>

          {getSearchArea(props)}
        </SearchWrapper>
      </Nav>

      <Addition>
        <Button className="writting">
          <i className="iconfont">&#xe67e;</i>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    // isFous: state.header.isFous,
    // isFous: state.header.get("isFous"),
    // isFous: state.get("header").get("isFous"),
    isFous: state.getIn(["header", "isFous"]),
    list: state.getIn(["header", "list"]),
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleFocused() {
    dispatch(actionCreators.getLists());
    dispatch(actionCreators.searchFouced());
  },

  handleBlured() {
    dispatch(actionCreators.searchBlur());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
