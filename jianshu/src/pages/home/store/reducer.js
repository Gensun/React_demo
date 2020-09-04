import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  page: 1,
  scollerTop: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
  });
};

const addHomeListMore = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.list),
    nextPage: action.nextPage,
  });
};

const showScollerTop = (state, action) => {
  return state.set("scollerTop", action.scollerTop);
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.LOAD_MORE_HOME_DATA:
      return addHomeListMore(state, action);
    case constants.SCOLLER_TOP:
      return showScollerTop(state, action);
    default:
      return state;
  }
};
