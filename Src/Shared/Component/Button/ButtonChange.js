import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Nunito from "../Nunito";

export default function ButtonChange({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Nunito title={title} size={moderateScale(18)} color="orange" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: moderateScale(344),
    height: moderateScale(46),
    backgroundColor: "#FFEEE1",
    borderRadius: 35,
  },
});
