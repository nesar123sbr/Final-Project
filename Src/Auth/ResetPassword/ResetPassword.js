import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Nunito from "../../Shared/Component/Nunito";
import { moderateScale } from "react-native-size-matters";
import Entypo from "react-native-vector-icons/Entypo";
import { Input } from "react-native-elements";

function ResetPassword(props) {
  const { navigation } = props;
  const [visibility, setVisibility] = useState(true);
  const [iconName, setIconName] = useState("eye-with-line");
  const [password, setPassword] = useState("");

  const validatePassword = (text) => {
    setPassword(text);
  };

  const setPasswordVisibility = () => {
    setVisibility(!visibility);
    setIconName(iconName === "eye" ? "eye-with-line" : "eye");
  };
  return (
    <>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 15,
          }}
        >
          <View style={{ marginTop: 10, marginLeft: 5 }}>
            <Image source={require("../../Assets/Logo/whiteboard.png")} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                color: "#0018ed",
                backgroundColor: "#c4ccff",
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              SignIn
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginTop: hp(20),
            paddingHorizontal: wp(5),
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          Choose a new password
        </Text>
        {/* <Text style={{marginTop:15, paddingHorizontal:wp(5), marginBottom:15}}>Enter Registered Email</Text> */}
        {/* <TextInput style={{borderColor:'grey', paddingVertical:10, marginHorizontal:wp(5), borderWidth:2, paddingHorizontal:10}} placeholder="Email" /> */}
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
        </View>
        <TouchableOpacity
          style={{ paddingHorizontal: wp(5) }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              color: "white",
              backgroundColor: `#9932cc`,
              paddingVertical: 10,
              textAlign: "center",
              borderRadius: 20,
              marginTop: 20,
            }}
          >
            Send
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textDecorationLine: "underline",
            fontWeight: "bold",
            color: `grey`,
            textAlign:'center',
            marginTop:10
          }}
        >
          Still having trouble logging in?
        </Text>
      </View>
    </>
  );
}

export default ResetPassword;
