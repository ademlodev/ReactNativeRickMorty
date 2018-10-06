import React, { Component } from "react";
import { View, Text, Animated } from "react-native";
import { Button } from "../../widgets/";
import styles from "./styles";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageExpanded: true,
      animatedHeight: new Animated.Value(200)
    };
  }

  render() {
    const { character } = this.props;
    const image =
      character && character.image ? { uri: character.image } : null;

    return (
      <View style={styles.container}>
        <Animated.Image
          source={image}
          resizeMode={"cover"}
          style={[styles.image]} //, { height: this.state.animatedHeight }
        />
        <View style={styles.dataContainer}>
          <Text style={styles.text}>{"Nombre: "}</Text>
          <Text style={styles.text}>{character.name}</Text>
        </View>
        <View style={{ margin: 20 }}>
          <Button
            label={"EDITAR"}
            onPress={() => console.log("Presionado editar")}
          />
        </View>
      </View>
    );
  }
}
