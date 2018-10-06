import * as types from "./types";

const initalState = {
  isFetching: false,
  list: [],
  item: null
};

export default function reducer(state = initalState, action = {}) {
  switch (action.type) {
    case types.EPISODES_UPDATE_LIST:
      return {
        ...state,
        list: action.value
      };

    case types.EPISODES_SET_FETCHING:
      return {
        ...state,
        isFetching: action.value
      };

    case types.EPISODES_SET_ITEM:
      return {
        ...state,
        item: action.value
      };

    default:
      return state;
  }
}
