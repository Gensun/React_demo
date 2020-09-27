import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem } from "../style";

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return list && list.size > 0 ? (
      <RecommendWrapper>
        {list.map((item) => {
          return (
            <RecommendItem key={item.get("id")}>
              <a
                href={item.get("link")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img" src={item.get("imageUrl")} alt="" />
              </a>
            </RecommendItem>
          );
        })}
      </RecommendWrapper>
    ) : (
      "Loading"
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(["home", "recommendList"]),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
