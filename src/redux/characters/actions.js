import * as types from "./types";

export function setFetching(value) {
  return {
    type: types.CHARACTER_SET_FETCHING,
    value: value
  };
}

export function setList(value) {
  return {
    type: types.CHARACTER_UPDATE_LIST,
    value: value
  };
}

export function setItem(value) {
  return {
    type: types.CHARACTER_SET_ITEM,
    value: value
  };
}

export function fetchEpisodeCharactersList() {
  return (dispatch, getState, api) => {
    const episode = getState().episodes.item;
    if (!episode) {
      return;
    }
    dispatch(setList([]));
    dispatch(setFetching(true));
    api
      .fetchEipisodeCharacters(episode.id)
      .then(result => {
        console.log("result.data.characters:", result);
        dispatch(setFetching(false));
        dispatch(setList(result));
      })
      .catch(err => {
        dispatch(setFetching(false));
      });
  };
}
