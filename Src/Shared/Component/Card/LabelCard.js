import React from "react";
import { View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Nunito from "../Nunito";

export default function LabelCard({ label, color }) {
  return (
    <View
      style={{
        flexDirection:'row',
        backgroundColor: `${color}`,
        marginRight: moderateScale(8),
        paddingHorizontal: moderateScale(5),
        height: moderateScale(20),
        alignItems: "center",
        borderRadius: moderateScale(4),
        paddingVertical: moderateScale(15),
      }}
    >
      <Nunito title={label} size={moderateScale(13)} />
    </View>
  );
}
