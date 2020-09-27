import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  title:'',
  info: ''
});

const updateDeatilPage = (state, action) => {
  return state.merge({
    title: action.title,
    info: action.info,
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.DEATIL_PAGE_DATA:
      return updateDeatilPage(state, action);
    default:
      return state;
  }
};
