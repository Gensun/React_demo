import React, { PureComponent } from "react";
import { connect } from "react-redux";
//通过export方式导出，在导入时要加{ }，export default则不需要
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";

import { actionCreators } from "./store";

import { HomeWrapper, HomeLeft, HomeRight, ScollViewTop } from "./style";

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    const { topShow } = this.props;
    console.log(topShow);
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://www.floatingraft.com/img/home-bg.jpg"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {topShow ? (
          <ScollViewTop onClick={this.handleScrollTop}>回到顶部</ScollViewTop>
        ) : (
          ""
        )}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvent();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvent() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapStateToProps = (state) => ({
  topShow: state.getIn(["home", "scollerTop"]),
});

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
