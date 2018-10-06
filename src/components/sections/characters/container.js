import Characters from "./view";
import { connect } from "react-redux";
import * as CharactersActions from "./../../../redux/characters/actions/";
import { Actions } from "react-native-router-flux";

const mapStateToProps = state => {
  return {
    isFetching: state.characters.isFetching,
    list: state.characters.list
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchEpisodeCharactersList: () => {
      dispatch(CharactersActions.fetchEpisodeCharactersList());
    },
    onCharacterTapped: character => {
      dispatch(CharactersActions.setItem(character));
      Actions.characterDetail({
        title: character.name
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);
