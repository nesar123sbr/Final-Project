import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Nunito from "../../Shared/Component/Nunito";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { moderateScale } from "react-native-size-matters";
import { Input } from "react-native-elements";
import ButtonChange from "../../Shared/Component/Button/ButtonChange";
import { connect } from "react-redux";
import {patchEmail} from "./Redux/Action"

function changeEmail(props) {
  const {navigation} = props
  const [email, setEmail] = useState("");
  const validateChangeEmail = (text) => {
    setEmail(text)
  };
  const changeEmailNow = () => {
    props.patchEmail(email)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Nunito title="Me" size={moderateScale(24)} type="Bold" />
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="bell" size={moderateScale(24)} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <MaterialCommunityIcons
              name="exit-to-app"
              size={moderateScale(24)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <Nunito title="Change Email" type="Bold" size={moderateScale(25)} />
        <Nunito
          title="Enter your new email"
          size={moderateScale(17)}
          style={{ paddingTop: moderateScale(10) }}
        />
        <Input
          containerStyle={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: moderateScale(25),
          }}
          onChangeText={(text) => validateChangeEmail(text)}
          inputContainerStyle={{
            width: moderateScale(342),
            height: moderateScale(42),
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: moderateScale(15),
          }}
          placeholder="Email"
        />
        <ButtonChange title="Save" onPress={changeEmailNow} />
      </View>
    </View>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  patchEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(changeEmail);
const styles = StyleSheet.create({
  container: {
    padding: moderateScale(16),
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerRight: {
    flexDirection: "row",
  },
  body: {
    paddingTop: moderateScale(100),
  },
});
