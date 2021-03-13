import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderMember from "../../Shared/Component/Header/HeaderMember";
import CardInvite from "../../Shared/Component/Card/CardInvite";
import { FlatList } from "react-native";

export default function Notification(props) {
  const { navigation } = props;
  return (
    <View>
      <HeaderMember
        title1="Notification"
        onPress={() => navigation.navigate("TeamBoardDetail")}
      />
      <FlatList />
      <CardInvite />
    </View>
  );
}

const styles = StyleSheet.create({});
