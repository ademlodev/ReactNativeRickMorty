/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";
import {
  Episodes,
  Characters,
  CharacterDetail,
  CharacterAdd
} from "./sections";
import { Actions } from "react-native-router-flux";
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

const sceneDefaultStyles = {
  navigationBarStyle: { backgroundColor: "rgb(216, 212, 212)" }
};

const RightButton = props => (
  <TouchableOpacity
    style={{ padding: 10 }}
    onPress={() =>
      Actions.characterAdd({
        title: "Add character"
      })
    }
  >
    <Text style={{ color: "black", fontWeight: "bold" }}>{"Add"}</Text>
  </TouchableOpacity>
);

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
              hideNavBar={true}
              initial={true}
            />
            <Scene
              key="characters"
              component={Characters}
              renderRightButton={RightButton}
              {...sceneDefaultStyles}
            />
            <Scene
              key="characterDetail"
              component={CharacterDetail}
              {...sceneDefaultStyles}
            />
            <Scene
              key="characterAdd"
              component={CharacterAdd}
              {...sceneDefaultStyles}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}
