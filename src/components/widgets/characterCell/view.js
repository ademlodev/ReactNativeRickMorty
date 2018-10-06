import React, { Component } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import styles from "./styles";

export default class extends Component {
  static defaultProps = {
    character: null,
    onCharacterPress: () => {}
  };

  render() {
    const { character } = this.props;
    //console.log("<CharacterCell> This props:", character);
    const image = character.image
      ? { uri: character.image }
      : require("../../../resources/RKepisodes.jpg");
    return (
      <TouchableOpacity
        onPress={() => this.props.onCharacterPress(character)}
        style={styles.cellContainer}
      >
        <Image source={image} style={styles.imageCell} resizeMode={"cover"} />
        <View style={styles.textCell}>
          <Text>{character.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
