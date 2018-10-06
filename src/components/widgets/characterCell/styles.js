import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  cellContainer: {
    width: "100%",
    height: "30%",
    //    backgroundColor: "rgb(24,24,24)",
    //paddingHorizontal: 4,
    //paddingVertical: 2,
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
    flexDirection: "row"
  },
  imageCell: {
    width: width / 4,
    height: height / 6
  },
  textCell: {
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 5,
    fontSize: 20,
    flex: 1,
    flexDirection: "column"
  }
});
