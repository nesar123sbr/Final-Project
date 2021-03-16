import React from "react";
import { View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import NunitoWithMax from "../NunitoWithMax";
import Nunito from "../Nunito";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { moderateScale } from "react-native-size-matters";
import LabelCard from "./LabelCard";

export default function CardBoardDetail({ title2, onPress, data, cases }) {
  const renderSwitch = (cases) => {
    switch (cases) {
      case 1:
        return (
          <MaterialIcons
            name="arrow-upward"
            color="red"
            size={moderateScale(15)}
          />
        );
      case 2:
        return (
          <MaterialIcons
            name="arrow-upward"
            color="orange"
            size={moderateScale(15)}
          />
        );
      case 3:
        return (
          <MaterialIcons
            name="arrow-downward"
            color="green"
            size={moderateScale(15)}
          />
        );
      case 4:
        return (
          <MaterialIcons
            name="arrow-downward"
            color="lightgreen"
            size={moderateScale(15)}
          />
        );
      default:
        return null;
    }
  };
  return (
    <View style={styles.cardContainer}>
      <View>
        <View style={{ paddingRight: 10 }}>
          <FlatList
            data={data}
            horizontal
            keyExtractor={(item, index) => item._id}
            renderItem={({ item }) => (
              <LabelCard label={item.labelName} color={item.color} />
            )}
          />
        </View>
      </View>
      <View style={styles.labelTitle2}>
        <TouchableOpacity onPress={onPress}>
          <Nunito
            title={title2}
            type="SemiBold"
            size={moderateScale(15)}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.footerCard}>
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <TouchableOpacity>
            <Foundation
              name="paperclip"
              color="#80848D"
              size={moderateScale(15)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingLeft: moderateScale(15) }}>
            <FontAwesome5
              name="clipboard-check"
              color="#80848D"
              size={moderateScale(15)}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <View>
          {renderSwitch(cases)}
          </View>
          

          <TouchableOpacity style={{ paddingLeft: moderateScale(15) }}>
            <Foundation name="photo" color="blue" size={moderateScale(15)} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    width: moderateScale(200),
    height: moderateScale(150),
    padding: moderateScale(12),
    backgroundColor: "#ffffff",
    borderRadius: moderateScale(4),
    justifyContent: "space-between",
    marginBottom: moderateScale(10),
    elevation: 6,
  },

  footerCard: {
    paddingTop: moderateScale(20),
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
