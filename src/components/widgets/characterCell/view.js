import React, { Component } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import styles from "./styles";
import * as Animatable from "react-native-animatable";

export default class extends Component {
  static defaultProps = {
    index: 0,
    character: null,
    onCharacterPress: () => {}
  };

  render() {
    const { character, index } = this.props;
    //console.log("<CharacterCell> This props:", character);
    console.log("<CharacterCell> This props.index:", index);
    const image = character.image
      ? { uri: character.image }
      : require("../../../resources/RKepisodes.jpg");
    const animation = index % 2 ? "slideInLeft" : "slideInRight";
    return (
      <Animatable.View animation={animation}>
        <TouchableOpacity
          onPress={() => this.props.onCharacterPress(character)}
          style={styles.cellContainer}
        >
          <Image source={image} style={styles.imageCell} resizeMode={"cover"} />
          <View style={styles.textCell}>
            <Text style={styles.textPrimaryCell}>{character.name}</Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}
