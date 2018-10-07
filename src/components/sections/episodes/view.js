import React, { Component } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles";
import { EpisodeCell } from "../../widgets/";
import { connect } from "react-redux";
import * as EpisodesActions from "../../../redux/episodes/actions";

class Episodes extends Component {
  componentDidMount() {
    this.props.fetchEpisodesList();
  }

  _onEpisodeTapped(episode) {
    this.props.onEpisodeTapped(episode);
  }

  _renderItem({ item }) {
    return (
      <EpisodeCell
        episode={item}
        onEpisodePress={episode => this._onEpisodeTapped(episode)}
      />
    );
  }

  _renderActivityIndicator() {
    if (!this.props.isFetching) {
      return null;
    } else {
      return (
        <View style={styles.activity}>
          <ActivityIndicator size="large" animating={this.props.isFetching} />
        </View>
      );
    }
  }

  render() {
    const { list } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={value => this._renderItem(value)}
          keyExtractor={(v, i) => "cell" + i}
          extraData={this.props}
        />
        {this._renderActivityIndicator()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.episodes.isFetching,
    list: state.episodes.list
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchEpisodesList: () => {
      dispatch(EpisodesActions.fetchEpisodesList());
    },
    onEpisodeTapped: character => {
      dispatch(EpisodesActions.setItem(character));
      Actions.characters({
        title: "Episode: " + character.id
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Episodes);
