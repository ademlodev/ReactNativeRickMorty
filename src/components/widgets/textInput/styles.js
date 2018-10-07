import { StyleSheet } from "react-native";

const primary = "rgb(255, 255, 255)"; // White
const secondaryText = "rgb(24, 24, 24)"; // Black

export default StyleSheet.create({
  label: {
    color: secondaryText,
    fontSize: 20,
    marginBottom: 10
  },
  textInput: {
    color: secondaryText,
    fontSize: 20,
    borderWidth: 1,
    borderColor: primary,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10
  }
});
