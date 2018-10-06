import CharacterDetail from "./view";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    character: state.characters.item
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetail);
