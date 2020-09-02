import {
  GET_INIT_LIST,
  INIT_LIST_DATA,
  CHANGE_INPUT_VALUE,
  CLICK_BUTTON,
  DELETE_ITEM_CLICK,
} from "./actionTypes";

const defaultStatus = {
  inputValue: "123",
  list: [],
};

export default (state = defaultStatus, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === INIT_LIST_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }

  if (action.type === CLICK_BUTTON) {
    const newState = JSON.parse(JSON.stringify(state));
    if (newState.inputValue === "") {
      return newState;
    }
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }

  if (action.type === DELETE_ITEM_CLICK) {
    const newState = JSON.parse(JSON.stringify(state));
    console.log(action.index);
    newState.list.splice(action.index, 1);
    return newState;
  }

  console.log(state, action);
  return state;
};
