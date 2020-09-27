import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../style";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { articleList, handleLoadMore, page } = this.props;
    return articleList && articleList.size > 0 ? (
      <Fragment>
        {articleList.map((item, index) => {
          return (
            <Link
              key={index}
              to={"/detail/" + item.get("id")}
              style={{ textDecoration: "none" }}
            >
              <ListItem>
                {this.setImage(item)}
                <ListInfo>
                  <h1 className="title">{item.get("title")}</h1>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
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
