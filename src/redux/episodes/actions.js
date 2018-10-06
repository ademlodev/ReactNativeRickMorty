import * as types from "./types";

export function setFetching(value) {
  return {
    type: types.EPISODES_SET_FETCHING,
    value: value
  };
}

export function setList(value) {
  return {
    type: types.EPISODES_UPDATE_LIST,
    value: value
  };
}

export function setItem(value) {
  return {
    type: types.EPISODES_SET_ITEM,
    value: value
  };
}

export function fetchEpisodesList() {
  return (dispatch, getState, api) => {
    dispatch(setFetching(true));
    api
      .fetchEpisodesList()
      .then(data => {
        dispatch(setFetching(false));
        dispatch(setList(data.data.results));
      })
      .catch(err => {
        dispatch(setFetching(false));
      });
  };
}
