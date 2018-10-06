import React, { Component } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";
import { CharacterCell } from "../../widgets/";

export default class extends Component {
  componentDidMount() {
    this.props.fetchEpisodeCharactersList();
  }

  _onCharacterTapped(character) {
    this.props.onCharacterTapped(character);
  }

  _renderItem(item, index) {
    console.log("<Characters> item: ", item);
    return (
      <CharacterCell
        character={item}
        onCharacterPress={character => this._onCharacterTapped(character)}
      />
    );
  }

  _renderActivityIndicator() {
    if (!this.props.isFetching) {
      return null;
    } else {
      return (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ActivityIndicator size="large" animating={this.props.isFetching} />
        </View>
      );
    }
  }

  render() {
    console.log("<Characters> this.props.list: ", this.props.list);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.list}
          renderItem={(item, index) => this._renderItem(item.item, index)}
          keyExtractor={(v, i) => "cell" + i}
          // extraData={this.props}
        />
        {this._renderActivityIndicator()}
      </View>
    );
  }
}
