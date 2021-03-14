import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Nunito from "../Nunito";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
export default function HeaderBoardDetail({ title1, onPress, title2,onPress1 ,onPress2}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.icon}>
          <MaterialIcons
            name="arrow-back-ios"
            size={moderateScale(18)}
            color="white"
          />
        </View>
      </TouchableOpacity>
      <View style={styles.header}>
        <Nunito
          title={title1}
          color="white"
          type="Bold"
          size={moderateScale(18)}
        />
        <Nunito
          title={`by ${title2}`}
          color="white"
          type="Bold"
          size={moderateScale(14)}
        />
      </View>

      <View style={styles.icon}>
        <TouchableOpacity onPress={onPress2}>
          <Entypo
            name="dots-three-vertical"
            size={moderateScale(18)}
            color="white"
            style={{paddingLeft:moderateScale(8)}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress1}>
          <SimpleLineIcons name="bell" size={moderateScale(20)} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4859EF",
    width: "100%",
    height: moderateScale(80),
  },

  icon: {
    flexDirection: "row-reverse",
  },
  header: {
    alignItems: "center",
  },
});
