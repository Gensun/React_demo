import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
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

class Header extends Component {
  getSearchArea() {
    const {
      isFous,
      list,
      isMouseIn,
      page,
      totalPage,
      handleMouseIn,
      handleMouseOut,
      changePageNumber,
    } = this.props;

    const pageList = [];
    const newLists = list.toJS();
    if (newLists.length > 0) {
      // 最后一组
      let lastNumber = newLists.length;
      let startIndex = page - 1;
      for (
        let i = startIndex * 10;
        i < (startIndex < totalPage - 1 ? page * 10 : lastNumber);
        i++
      ) {
        pageList.push(
          <SearchInfoItem key={newLists[i]}>{newLists[i]}</SearchInfoItem>
        );
      }
    }

    if (isFous || isMouseIn) {
      return (
        <SearchArea onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
          <SearchTitle>
            标题
            <SearchSwitch
              onClick={() => {
                changePageNumber(page, totalPage, this.spinIcon);
              }}
            >
              <i
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#58935;
              </i>
              换一批
            </SearchSwitch>
          </SearchTitle>
          <SearchInfoList>
            {/* {list.map((item) => {
            return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
          })} */}
            {pageList}
          </SearchInfoList>
        </SearchArea>
      );
    } else {
      return null;
    }
  }
  render() {
    const {
      list,
      isFous,
      handleFocused,
      handleBlured,
      loginStatus,
      loginOut,
    } = this.props;

    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {!loginStatus ? (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          ) : (
            <NavItem onClick={loginOut} className="right">
              退出
            </NavItem>
          )}
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>

          <SearchWrapper>
            <CSSTransition in={isFous} timeout={2000} classNames="slide">
              <NavSearch
                className={isFous ? "focused" : " "}
                onFocus={() => {
                  handleFocused(list);
                }}
                onBlur={handleBlured}
              ></NavSearch>
            </CSSTransition>
            <i className={isFous ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe616;
            </i>

            {this.getSearchArea()}
          </SearchWrapper>
        </Nav>

        <Addition>
          <Link to="/writer">
            <Button className="writting">
              <i className="iconfont">&#xe67e;</i>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // isFous: state.header.isFous,
    // isFous: state.header.get("isFous"),
    // isFous: state.get("header").get("isFous"),
    isFous: state.getIn(["header", "isFous"]),
    isMouseIn: state.get("header").get("isMouseIn"),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    loginStatus: state.getIn(["login", "login"]),
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleFocused(list) {
    // console.log(list);
    list.size === 0 && dispatch(actionCreators.getLists());
    dispatch(actionCreators.searchFouced());
  },

  handleBlured() {
    dispatch(actionCreators.searchBlur());
  },

  handleMouseIn() {
    dispatch(actionCreators.mouseIn());
  },

  handleMouseOut() {
    dispatch(actionCreators.mouseOut());
  },

  changePageNumber(page, totalPage, spin) {
    let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    } else {
      originAngle = 0;
    }
    spin.style.transform = "rotate(" + (originAngle + 180) + "deg)";

    if (page < totalPage) {
      dispatch(actionCreators.changePageNumber(page + 1));
    } else {
      dispatch(actionCreators.changePageNumber(1));
    }
  },

  loginOut() {
    console.log("logout");
    dispatch(loginActionCreators.toLoginOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
