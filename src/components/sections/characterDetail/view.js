import React, { Component } from "react";
import { ScrollView, View, Text, Animated } from "react-native";
import { Button } from "../../widgets/";
import styles from "./styles";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageExpanded: true,
      animatedHeight: new Animated.Value(300)
    };
  }

  _onShowImage() {
    if (this.state.imageExpanded) {
      Animated.timing(this.state.animatedHeight, {
        toValue: 0,
        duration: 500
      }).start();
      this.setState({ imageExpanded: false });
    } else {
      Animated.timing(this.state.animatedHeight, {
        toValue: 300,
        duration: 500
      }).start();
      this.setState({ imageExpanded: true });
    }
  }

  render() {
    const { character } = this.props;
    const image =
      character && character.image ? { uri: character.image } : null;

    return (
      <ScrollView style={styles.container}>
        <Animated.Image
          source={image}
          resizeMode={"cover"}
          style={[styles.image, { height: this.state.animatedHeight }]}
        />
        <View style={styles.dataContainer}>
          <Text style={styles.textTitle}>{"Name: "}</Text>
          <Text style={styles.textDesc}>{character.name}</Text>
          <Text style={styles.textTitle}>{"Status: "}</Text>
          <Text style={styles.textDesc}>{character.status}</Text>
          <Text style={styles.textTitle}>{"Specie: "}</Text>
          <Text style={styles.textDesc}>{character.species}</Text>
          <Text style={styles.textTitle}>{"Location: "}</Text>
          <Text style={styles.textDesc}>{character.location.name}</Text>
          <View
            style={{ marginHorizontal: 40, marginVertical: 10, paddingTop: 20 }}
          >
            <Button
              label={this.state.imageExpanded ? "Hide image" : "Show image"}
              onPress={() => this._onShowImage()}
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.button}
            />
          </View>
          <View style={{ marginHorizontal: 40, marginVertical: 10 }}>
            <Button
              label={"Edit"}
              onPress={() => console.log("Presionado editar")}
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.button}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
