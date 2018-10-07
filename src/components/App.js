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
import * as Colors from "../commons/colors/";
import * as reducers from "../redux/";

const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api))
);
/**
 * Para debug en Chrome con Dev Redux tool añadir al store como parametro en createStore
 * ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 **/

const sceneDefaultStyles = {
  navigationBarStyle: {
    backgroundColor: Colors.primary
  },
  backButtonTintColor: Colors.primaryText,
  backButtonTextStyle: { color: Colors.primaryText },
  titleStyle: { color: Colors.primaryText }
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
    <Text
      style={{ color: Colors.primaryText, fontSize: 20, fontWeight: "300" }}
    >
      {"Add"}
    </Text>
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
