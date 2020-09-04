import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";
import { randomArrByOut } from "../../../utils/utils";

const changHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
});

const loadMoreHomeData = (result, nextPage) => ({
  type: constants.LOAD_MORE_HOME_DATA,
  list: fromJS(randomArrByOut(result.articleList)),
  nextPage,
});

export const toggleTopShow = (show) => ({
  type: constants.SCOLLER_TOP,
  scollerTop: show,
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios
      .get("/api/home.json")
      .then((res) => {
        const result = res.data.data;
        dispatch(changHomeData(result));
      })
      .catch(() => {
        console.log("error");
      });
  };
};

export const loadMore = (page) => {
  return (dispatch) => {
    axios
      .get("/api/homeList.json?page=" + page)
      .then((res) => {
        const result = res.data.data;
        dispatch(loadMoreHomeData(result, page + 1));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
