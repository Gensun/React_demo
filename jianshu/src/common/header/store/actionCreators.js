import * as constants from "./actionTypes";
import axios from "axios";
import { fromJS } from "immutable";

const changeLists = (data) => ({
  type: constants.CHANGE_LISTS,
  data: fromJS(data),
  page: 1,
  totalPage: Math.ceil(data.length / 10),
});

export const searchFouced = () => ({
  type: constants.SEARCH_FOUCED,
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});

export const mouseIn = () => ({
  type: constants.MOUSE_IN,
});

export const mouseOut = () => ({
  type: constants.MOUSE_OUT,
});

export const changePageNumber = (page) => ({
  type: constants.CHANGEPAGENUMBER,
  page
});

export const getLists = () => {
  return (dispatch) => {
    axios
      .get("api/headerLists.json")
      .then(function (response) {
        console.log(response.data);
        if (response.data.succeed === true) {
          const action = changeLists(response.data.data);
          dispatch(action);
        }
      })
      .catch(function (error) {
        console.log("error" + error);
      });
  };
};
