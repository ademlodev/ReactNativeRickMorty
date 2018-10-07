import { StyleSheet } from "react-native";
import * as Colors from "../../../commons/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary
  },
  image: {
    width: "100%",
    height: 300
  },
  dataContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingVertical: 20
  },
  textTitle: {
    color: Colors.primaryText,
    fontSize: 20,
    paddingHorizontal: 20,
    fontWeight: "600"
  },
  textDesc: {
    color: Colors.primaryText,
    fontSize: 20,
    paddingHorizontal: 40,
    fontWeight: "300"
  },
  buttonContainer: {
    backgroundColor: Colors.accent,
    borderRadius: 20
  },
  button: {
    fontSize: 20,
    color: Colors.primaryText
  }
});
