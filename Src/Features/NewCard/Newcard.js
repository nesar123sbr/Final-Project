import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import { moderateScale } from "react-native-size-matters";
import { NewcardStyle } from "./style";
import Entypo from "react-native-vector-icons/Entypo";
import { Dropdown } from "./Components/Dropdown";
import AllModals from "./Components/AllModals";
import HeaderDesc from "../../Shared/Component/Header/HeaderDesc";
import { connect } from "react-redux";
import { setDesc, setTitle } from "./Redux/newCardAction";

const Newcard = (props) => {
  return (
    <>
      <HeaderDesc />
      <View style={{ margin: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>New Card Screen</Text>
          <TouchableOpacity onPress={() => setAddOptions(true)}>
            <Entypo name="dots-three-vertical" size={moderateScale(20)} />
          </TouchableOpacity>
        </View>
        <Text style={{ marginBottom: 15 }}>Title</Text>
        <TextInput
          style={NewcardStyle.titleField}
          onChangeText={(text) => props.setTitle(text)}
        />
        <Dropdown />

        <Text style={{ marginBottom: 15 }}>Description</Text>
        <TextInput
          style={NewcardStyle.descTextField}
          onChangeText={(text) => props.setDesc(text)}
        />
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <View style={{ marginRight: 50 }}>
            <Text style={{ marginBottom: 20 }}>Assign To</Text>
            <Text style={{ marginBottom: 20 }}>Priority</Text>
            <Text style={{ marginBottom: 20 }}>Due Date</Text>
            <Text style={{ marginBottom: 20 }}>Labels</Text>
          </View>

          <AllModals />
        </View>
        <Text style={{ marginBottom: 10 }}>Comments</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 10 }}>
            <View style={NewcardStyle.profIcon}>
              <Fontisto name="person" size={moderateScale(25)} />
            </View>
          </View>
          <TextInput
            style={NewcardStyle.commentTextField}
            placeholder="Add a comment"
          />
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ padding: 10, paddingBottom: 20 }}>
              <View style={NewcardStyle.profIcon}>
                <Fontisto name="person" size={moderateScale(25)} />
              </View>
            </View>
            <Text>Member Name</Text>
            <View style={{ flexDirection: "row", marginLeft: 15 }}>
              <Text style={{ color: "gray" }}>Wed, 27 Jan 2020</Text>
              <Text style={{ color: "gray" }}> | </Text>
              <Text style={{ color: "gray" }}>5:03 PM</Text>
            </View>
          </View>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            eget pretium augue, quis ornare nisl. Lorem ipsum dolor sit amet,
            consectetur adipiscing.
          </Text>
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  desc: state.newCardReducer.desc,
  title: state.newCardReducer.title,
});

const mapDispatchToProps = {
  setDesc,
  setTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Newcard);
