import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Nunito from "../../Shared/Component/Nunito";
import { moderateScale } from "react-native-size-matters";
import { Input } from "react-native-elements";
import ButtonAuth from "../../Shared/Component/Button/ButtonAuth";
import FastImage from "react-native-fast-image";
import ButtonSubmit from "../../Shared/Component/Button/ButtonSubmit";
import {changePassword} from './Redux/Action'
import { connect } from 'react-redux'


function ForgotPassword(props) {
  const { navigation } = props;
  const [changePass, setChangePass] = useState("");
  const changePassword = (text) => {
    setChangePass(text);
  };
  const actionChange = () => {
    props.changePassword(changePass)
  }

  return (
    <>
      <View style={{ margin: moderateScale(16) }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: moderateScale(20),
          }}
        >
          <FastImage
            style={{ width: moderateScale(143), height: moderateScale(23) }}
            source={require("../../Assets/Logo/whiteboard.png")}
          />
          <ButtonAuth
            onPress={() => navigation.navigate("Login")}
            buttonName="Sign In"
          />
        </View>
        <View style={{ marginTop: moderateScale(100) }}>
          <Nunito
            title="Forgot your Password?"
            size={moderateScale(24)}
            type="Bold"
          />
          <Nunito
            title="Enter Registered Email"
            size={moderateScale(14)}
            style={{ paddingTop: moderateScale(20) }}
          />
        </View>
        <View style={{ paddingTop: moderateScale(15) }}>
          <Input
            containerStyle={{ justifyContent: "center" }}
            onChangeText={(text) => changePassword(text)}
            inputContainerStyle={{
              width: moderateScale(330),
              height: moderateScale(50),
              borderStyle: "solid",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: moderateScale(15),
            }}
            placeholder="Email"
          />
        </View>

        <ButtonSubmit
          buttonName="Send"
          onPress={actionChange}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: moderateScale(10),
          }}
        >
          <Nunito
            title="Remember Password ?"
            size={moderateScale(14)}
            type="light"
            decoration="underline"
          />
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Nunito
              title=" Login"
              size={moderateScale(14)}
              type="light"
              color="blue"
              decoration="underline"
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  changePassword
}

export default connect(mapStateToProps,mapDispatchToProps) (ForgotPassword);
