import React from "react";
import { StyleSheet,TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Nunito from '../Nunito'
export default function ButtonEmptyPage({ onPress,buttonName }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonEmptyContainer}>
      <Nunito
        title={buttonName}
        type="Bold"
        size={moderateScale(12)}
        color="white"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonEmptyContainer: {
    width: moderateScale(170),
    height: moderateScale(46),
    backgroundColor: "#4859ef",
    flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(42),
    borderRadius:40
  },
});
