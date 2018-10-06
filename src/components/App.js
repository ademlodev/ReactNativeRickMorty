/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import { Episodes, Characters, CharacterDetail } from "./sections";
import * as api from "../api/";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";

import * as reducers from "../redux/";

const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* const sceneDefaultStyles = {
  navigationBarStyle: { backgroundColor: "rgb(216, 212, 212)" }
}; */
export default class App extends Component {
  componentWillMount() {
    api.configureAxios();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene
              key="episodes"
              component={Episodes}
              initial={true}
              hideNavBar={true}
            />
            <Scene
              key="characters"
              component={Characters}
              // {...sceneDefaultStyles}
            />
            <Scene
              key="characterDetail"
              component={CharacterDetail}
              // {...sceneDefaultStyles}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}
