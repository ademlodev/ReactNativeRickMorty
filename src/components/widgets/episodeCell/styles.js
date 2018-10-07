import { StyleSheet, Dimensions } from "react-native";
import * as Colors from "../../../commons/colors";
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  cellContainer: {
    width: "100%",
    height: "30%",
    backgroundColor: Colors.primary,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 2,
    flex: 1,
    flexDirection: "row"
  },
  imageCell: {
    width: width / 4,
    height: height / 6
  },
  textCell: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  textPrimaryCell: {
    color: Colors.primaryText,
    fontSize: 20,
    paddingHorizontal: 10,
    fontWeight: "600"
  },
  textSecondCell: {
    color: Colors.primaryText,
    fontSize: 14,
    fontWeight: "300",
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});
