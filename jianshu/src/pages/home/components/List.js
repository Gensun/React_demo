import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../style";
import { actionCreators } from "../store";

class List extends Component {
  render() {
    const { articleList, handleLoadMore, page } = this.props;
    return articleList && articleList.size > 0 ? (
      <Fragment>
        {articleList.map((item,index) => {
          return (
            <ListItem key={index}>
              <ListInfo>
                {this.setImage(item)}
                <h1 className="title">{item.get("title")}</h1>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          );
        })}
        <LoadMore onClick={() => handleLoadMore(page)}>阅读更多</LoadMore>
      </Fragment>
    ) : (
      "Loading"
    );
  }

  setImage(item) {
    if (item.get("imageUrl")) {
      return (
        <Fragment>
          <img className="img" src={item.get("imageUrl")} alt="" />
        </Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "nextPage"]),
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleLoadMore(page) {
    dispatch(actionCreators.loadMore(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
