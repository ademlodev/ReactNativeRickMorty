import { StyleSheet } from "react-native";
import * as Colors from "../../../commons/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary
  },
  firstElement: { paddingTop: 10 },
  spaceBetweenElements: { padding: 20 },
  textInput: { backgroundColor: Colors.primaryText, fontSize: 20 },
  textLabel: {
    padding: 10,
    fontSize: 20,
    color: Colors.primaryText
  },
  textContainer: { paddingHorizontal: 20 },
  imageContainer: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 20,
    height: 200,
    width: "100%"
  },
  image: {
    borderRadius: 20,
    width: "100%",
    height: "100%"
  },
  imageText: {
    borderColor: Colors.primary,
    color: Colors.primaryText,
    fontSize: 20,
    fontWeight: "600",
    position: "absolute",
    top: "46%",
    textAlign: "center",
    left: 0,
    right: 0
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
