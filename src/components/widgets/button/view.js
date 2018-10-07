import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default class extends Component {
  static defaultProps = {
    label: "Save",
    onPress: () => {},
    containerStyle: [],
    buttonStyle: []
  };

  _onPress() {
    if (!this.props.isFetching) {
      this.props.onPress();
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.buttonContainer, this.props.containerStyle]}
        onPress={() => this._onPress()}
      >
        <Text style={[styles.buttonText, this.props.buttonStyle]}>
          {this.props.label}
        </Text>
      </TouchableOpacity>
    );
  }
}
