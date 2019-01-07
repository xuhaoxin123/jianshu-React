import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  mmouseIn:false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set("focused", true);
    case constants.SEARCH_BLUR:
      return state.set("focused", false);
    case constants.CHANGE_LIST:
      return state.merge({
          list:action.data,
          totalPage:action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set("mmouseIn", true);
    case constants.MOUSE_LEAVE:
      return state.set("mmouseIn", false);
    case constants.CHANGE_PAGE:
      return state.set("page", action.page);   
      default:
      return state;
  }
};
