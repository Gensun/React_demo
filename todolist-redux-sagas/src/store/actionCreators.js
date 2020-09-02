import {
  GET_INIT_LIST,
  INIT_LIST_DATA,
  CHANGE_INPUT_VALUE,
  CLICK_BUTTON,
  DELETE_ITEM_CLICK,
} from "./actionTypes";

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

export const initListAction = (data) => ({
  type: INIT_LIST_DATA,
  data,
});

export const getInitList = () => ({
  type: GET_INIT_LIST,
});
