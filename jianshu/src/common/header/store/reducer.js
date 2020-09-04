import * as constants from "./actionTypes";
import { fromJS } from "immutable";

// const defaultState = {
//   isFous: false,
// };

const defaultState = fromJS({
  isFous: false,
  list: [],
  isMouseIn: false,
  page: 1,
  totalPage: 1,
});

/**
export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOUCED) {
    // return {
    //   isFous: true,
    // };
    return state.set("isFous", true);
  }

  if (action.type === constants.SEARCH_BLUR) {
    // const newState = JSON.parse(JSON.stringify(state));
    // newState.isFous = false;
    // return newState;
    return state.set("isFous", false);
  }
  if(action.type === constants.CHANGE_LISTS) {
    return state.set('list', action.data)
  }
  return state;
};
 */

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOUCED:
      return state.set("isFous", true);
    case constants.SEARCH_BLUR:
      return state.set("isFous", false);
    case constants.CHANGE_LISTS:
      // return state
      //   .merge({
      //     list: action.list,
      //     page: action.page,
      //     totalPage: action.totalPage,
      //   });
      return state
        .set("list", action.data)
        .set("totalPage", action.totalPage)
        .set("page", action.page);
    case constants.MOUSE_IN:
      return state.set("isMouseIn", true);
    case constants.MOUSE_OUT:
      return state.set("isMouseIn", false);
    case constants.CHANGEPAGENUMBER:
      return state.set("page", action.page);
    default:
      return state;
  }
};
