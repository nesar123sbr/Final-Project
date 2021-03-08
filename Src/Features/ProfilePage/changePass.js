import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Nunito from "../../Shared/Component/Nunito";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { moderateScale } from "react-native-size-matters";
import { Input } from "react-native-elements";
import ButtonChange from "../../Shared/Component/Button/ButtonChange";
import Entypo from "react-native-vector-icons/Entypo";
import Toast from "react-native-simple-toast";
import { patchPassword } from "./Redux/Action";
import { connect } from "react-redux";


function changePass(props) {
  const { navigation } = props;
  const [visibility, setVisibility] = useState(true);
  const [iconName, setIconName] = useState("eye-with-line");
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const setPasswordVisibility = () => {
    setVisibility(!visibility);
    setIconName(iconName === "eye" ? "eye-with-line" : "eye");
  };
  const sendCurrentPassword = (text) => {
    setCurrentPass(text);
  };
  const sendNewPassword = (text) => {
    setNewPass(text);
  };
  const confirmPassword = (text) => {
    setConfirmPass(text);
  };
  const sendingPass = (text) => {
    if (currentPass == "" || currentPass == "" || currentPass == "") {
      Toast.show("Fill all form");
    } else if (newPass !== confirmPass) {
      Toast.show("Password must be same");
    } else {
      props.patchPassword(currentPass, newPass);
    }
  };

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
        <Nunito title="Change Password" type="Bold" size={moderateScale(25)} />
        <Nunito
          title="Enter your current password"
          size={moderateScale(17)}
          style={{ paddingTop: moderateScale(10) }}
        />
        <Input
          containerStyle={{ justifyContent: "center" }}
          onChangeText={(text) => sendCurrentPassword(text)}
          inputContainerStyle={{
            width: moderateScale(330),
            height: moderateScale(42),
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
            paddingLeft: moderateScale(15),
            borderRadius: 10,
          }}
          placeholder="Password"
          secureTextEntry={visibility}
          rightIcon={
            <TouchableOpacity
              onPress={setPasswordVisibility}
              style={{ paddingRight: moderateScale(10) }}
            >
              <Entypo name={iconName} size={moderateScale(12)} />
            </TouchableOpacity>
          }
        />
        <Nunito
          title="New password"
          size={moderateScale(17)}
          style={{ paddingTop: moderateScale(10) }}
        />
        <Input
          containerStyle={{ justifyContent: "center" }}
          onChangeText={(text) => sendNewPassword(text)}
          inputContainerStyle={{
            width: moderateScale(330),
            height: moderateScale(42),
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
            paddingLeft: moderateScale(15),
            borderRadius: 10,
          }}
          placeholder="Password 5+ chacracter"
          secureTextEntry={visibility}
          rightIcon={
            <TouchableOpacity
              onPress={setPasswordVisibility}
              style={{ paddingRight: moderateScale(10) }}
            >
              <Entypo name={iconName} size={moderateScale(12)} />
            </TouchableOpacity>
          }
        />
        <Nunito
          title="Confirm password"
          size={moderateScale(17)}
          style={{ paddingTop: moderateScale(10) }}
        />
        <Input
          containerStyle={{ justifyContent: "center" }}
          onChangeText={(text) => confirmPassword(text)}
          inputContainerStyle={{
            width: moderateScale(330),
            height: moderateScale(42),
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
            paddingLeft: moderateScale(15),
            borderRadius: 10,
          }}
          placeholder="Password 5+ chacracter"
          secureTextEntry={visibility}
          rightIcon={
            <TouchableOpacity
              onPress={setPasswordVisibility}
              style={{ paddingRight: moderateScale(10) }}
            >
              <Entypo name={iconName} size={moderateScale(12)} />
            </TouchableOpacity>
          }
        />
        <ButtonChange title="Save" onPress={sendingPass} />
      </View>
    </View>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  patchPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(changePass);
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
