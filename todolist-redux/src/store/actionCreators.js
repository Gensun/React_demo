import {
  INIT_LIST_DATA,
  CHANGE_INPUT_VALUE,
  CLICK_BUTTON,
  DELETE_ITEM_CLICK,
} from "./actionTypes";
import axios from "axios";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const clickSubmitBtn = () => ({
  type: CLICK_BUTTON,
});

export const deleteItemByIndex = (index) => ({
  type: DELETE_ITEM_CLICK,
  index: index,
});

export const initListDataAction = (data) => ({
  type: INIT_LIST_DATA,
  data,
});

export const getTodoList = () => {
  return (dispatch) => {
    axios.get("/api/list.json").then((res) => {
      console.log(res.data);
      const action = initListDataAction(res.data);
      // store.dispatch(action);
      dispatch(action)
    });
  };
};
