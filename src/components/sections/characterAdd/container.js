import CharacterAdd from "./view";
import { connect } from "react-redux";
import * as CharactersActions from "../../../redux/characters/actions";
import { setFetching } from "../../../redux/episodes/actions";

const mapStateToProps = state => {
  return {
    episode: state.episodes.item,
    isFetching: state.characters.isFetching
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmitCharacter: data => {
      dispatch(CharactersActions.postEpisodeCharacter(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterAdd);
