import React, { Component } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import styles from "./styles";

export default class extends Component {
  static defaultProps = {
    episode: null,
    onEpisodePress: () => {}
  };

  render() {
    const { episode } = this.props;
    const image = require("../../../resources/RKepisodes.jpg");
    return (
      <TouchableOpacity
        onPress={() => this.props.onEpisodePress(episode)}
        style={styles.cellContainer}
      >
        <Image source={image} style={styles.imageCell} resizeMode={"cover"} />
        <View style={styles.textCell}>
          <Text style={styles.textPrimaryCell}>Episode {episode.id}:</Text>
          <Text style={styles.textSecondCell}>{episode.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
