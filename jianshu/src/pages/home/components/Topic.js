import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem, TopicItemMore } from "../style";

class Topic extends PureComponent {
  render() {
    const { list } = this.props;
    return list && list.size > 0 ? (
      <TopicWrapper>
        {list.map((item) => (
          <TopicItem key={item.get("id")}>
            <img className="topic-img" src={item.get("imgUrl")} alt="" />
            {item.get("title")}
          </TopicItem>
        ))}
        <TopicItemMore>更多热门专题&nbsp;&nbsp;{'>'}</TopicItemMore>
      </TopicWrapper>
    ) : (
      "Loading"
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "topicList"]),
  };
};

export default connect(mapStateToProps, null)(Topic);
