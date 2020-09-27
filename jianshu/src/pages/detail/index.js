import React, { PureComponent } from "react";
import { DeatilWrapper, Header, DetailInfo } from "./style";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreators } from "./store";

class Detail extends PureComponent {
  render() {
    const { title, info } = this.props;
    return (
      <DeatilWrapper>
        <Header>{title}</Header>
        <DetailInfo dangerouslySetInnerHTML={{ __html: info }} />
      </DeatilWrapper>
    );
  }
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.getDeatil(this.props.match.params.id);
  }
}
const mapStateToProps = (state) => ({
  title: state.getIn(["detail", "title"]),
  info: state.getIn(["detail", "info"]),
});

const mapDispatchToProps = (dispatch) => ({
  getDeatil(id) {
    dispatch(actionCreators.getDetailInfo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
