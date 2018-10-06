import * as types from "./types";

const initalState = {
  isFetching: false,
  list: [],
  item: null
};

export default function reducer(state = initalState, action = {}) {
  switch (action.type) {
    case types.CHARACTER_UPDATE_LIST:
      return {
        ...state,
        list: action.value
      };

    case types.CHARACTER_SET_FETCHING:
      return {
        ...state,
        isFetching: action.value
      };

    case types.CHARACTER_SET_ITEM:
      console.log("reducer: ", action.value);
      return {
        ...state,
        item: action.value
      };

    default:
      return state;
  }
}
