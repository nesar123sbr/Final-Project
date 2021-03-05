import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Lonceng from "react-native-vector-icons/FontAwesome";
import PanahKanan from "react-native-vector-icons/MaterialCommunityIcons";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Input } from "react-native-elements";
import Entypo from "react-native-vector-icons/Entypo";
import ButtonSave from "../../Shared/Component/Button/ButtonSave";

function ChangePassword(props) {
  const { navigation } = props;
  const [visibility, setVisibility] = useState(true);
  const [iconName, setIconName] = useState("eye-with-line");
  const [password, setPassword] = useState("");
  const setPasswordVisibility = () => {
    setVisibility(!visibility);
    setIconName(iconName === "eye" ? "eye-with-line" : "eye");
  };
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "flex-start",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 25, marginTop: 10 }}>Me</Text>

        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            marginTop: 10,
            marginRight: 10,
          }}
        >
          <TouchableOpacity>
            <Lonceng name="bell" color="grey" size={moderateScale(25)} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <PanahKanan
              name="arrow-right-box"
              color="grey"
              size={moderateScale(25)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: moderateScale(100) }}>
        <Nunito title="Change Password" size={moderateScale(24)} type="Bold" />
        <Nunito
          title="Enter your new Password"
          size={moderateScale(14)}
          style={{ paddingTop: moderateScale(20) }}
        />
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Input
          containerStyle={{ justifyContent: "center" }}
          onChangeText={(text) => validatePassword(text)}
          inputContainerStyle={{
            width: moderateScale(330),
            height: moderateScale(50),
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
            paddingLeft: moderateScale(15),
            borderRadius: 10,
          }}
          placeholder="Password 5+ characters"
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
      </View>

      <Text>New Password</Text>
      <View style={{ marginHorizontal: 10 }}>
        <Input
          containerStyle={{ justifyContent: "center" }}
          onChangeText={(text) => validatePassword(text)}
          inputContainerStyle={{
            width: moderateScale(330),
            height: moderateScale(50),
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
            paddingLeft: moderateScale(15),
            borderRadius: 10,
          }}
          placeholder="Password 5+ characters"
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
      </View>

      <Text>Confirm Password</Text>
      <View style={{ marginHorizontal: 10 }}>
        <Input
          containerStyle={{ justifyContent: "center" }}
          onChangeText={(text) => validatePassword(text)}
          inputContainerStyle={{
            width: moderateScale(330),
            height: moderateScale(50),
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
            paddingLeft: moderateScale(15),
            borderRadius: 10,
          }}
          placeholder="Password 5+ characters"
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
      </View>
      <ButtonSave buttonName="Save" />
    </View>
  );
}

export default ChangePassword;
