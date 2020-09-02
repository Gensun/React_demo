import * as constants from "./actionTypes";
import axios from "axios";
import { fromJS } from "immutable";

const changeLists = (data) => ({
  type: constants.CHANGE_LISTS,
  data: fromJS(data),
});

export const searchFouced = () => ({
  type: constants.SEARCH_FOUCED,
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});

export const getLists = () => {
  return (dispatch) => {
    axios
      .get("api/headerLists.json")
      .then(function (response) {
        console.log(response.data);
        const action = changeLists(response.data.data);
        dispatch(action);
      })
      .catch(function (error) {
        console.log("error" + error);
      });
  };
};
