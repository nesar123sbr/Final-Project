import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const NewcardStyle = StyleSheet.create({
  titleField: {
    width: "100%",
    height: 40,
    borderColor: "#4859EF",
    borderWidth: 1,
    textAlignVertical: "top",
  },
  descTextField: {
    width: "100%",
    height: 120,
    borderColor: "#4859EF",
    borderWidth: 1,
    textAlignVertical: "top",
  },
  commentTextField: {
    width: "84%",
    height: 60,
    borderColor: "#4859EF",
    borderWidth: 1,
    marginRight: 15,
  },
  profIcon: {
    backgroundColor: "green",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    padding: moderateScale(7),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: moderateScale(5),
    justifyContent: "center",
    marginRight: moderateScale(5),
  },
  calendarModal: {
    height: 400,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    opacity: 1,
    marginTop: 350,
    alignSelf: "center",
  },
  calendarButton: {
    padding: 10,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#FFEEE1",
    alignItems: "center",
    marginTop: 8,
  },
});
