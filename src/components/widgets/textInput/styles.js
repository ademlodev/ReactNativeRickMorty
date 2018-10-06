import { StyleSheet } from "react-native";
import * as Colors from "../../../commons/colors/";

export default StyleSheet.create({
  label: {
    color: "black",
    fontSize: 16,
    marginBottom: 10
  },
  textInput: {
    color: "black",
    fontSize: 18,
    borderWidth: 1,
    borderColor: Colors.main,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10
  }
});
