import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Nunito from "../../Shared/Component/Nunito";
import { moderateScale } from "react-native-size-matters";
import FastImage from "react-native-fast-image";
import ButtonAuth from "../../Shared/Component/Button/ButtonAuth";
import Entypo from "react-native-vector-icons/Entypo";
import { Input } from "react-native-elements";
import ButtonSubmit from "../../Shared/Component/Button/ButtonSubmit";
import { connect } from "react-redux";
import { ActionLogin } from "./Redux/Action";
import Loading from "../../Shared/Component/Loading";
import { setLoading } from "../../Store/GlobalAction";
function Login(props) {
  // const navigation = useNavigation();
  const { navigation } = props;
  const [visibility, setVisibility] = useState(true);
  const [iconName, setIconName] = useState("eye-with-line");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (text) => {
    setEmail(text);
  };

  const validatePassword = (text) => {
    setPassword(text);
  };
  const loginAction = () => {
    props.ActionLogin(email, password);
  };

  const setPasswordVisibility = () => {
    setVisibility(!visibility);
    setIconName(iconName === "eye" ? "eye-with-line" : "eye");
  };

  return (
    <>
      {props.isLoading ? (
        <Loading />
      ) : (
        <View style={{ margin: moderateScale(16) }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: moderateScale(20),
            }}
          >
            <ButtonAuth
              onPress={() => navigation.navigate("Register")}
              buttonName="Sign Up"
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <FastImage
              style={{ width: 143, height: 23 }}
              source={require("../../Assets/Logo/whiteboard.png")}
            />
          </View>

          <View
            style={{
              marginTop: moderateScale(120),
              marginBottom: moderateScale(16),
            }}
          >
            <Nunito type="Bold" title="Sign In" size={moderateScale(23)} />
          </View>

          <View
            style={{
              marginTop: moderateScale(20),
            }}
          >
            <Input
              containerStyle={{ justifyContent: "center" }}
              onChangeText={(text) => validateEmail(text)}
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
          <View style={{ alignSelf: "center" }}>
            <ButtonSubmit buttonName="Submit" onPress={loginAction} />
          </View>
          <View style={{ alignSelf: "center", marginTop: moderateScale(24) }}>
            <TouchableOpacity>
              <Nunito
                type="Bold"
                color="#80848D"
                title="Forgot Password"
                size={moderateScale(14)}
                decoration="underline"
              />
            </TouchableOpacity>
          </View>
          <View style={{ alignSelf: "center", marginTop: moderateScale(40) }}>
            <Nunito
              type="Bold"
              color="#80848D"
              title="or continue with"
              size={moderateScale(14)}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: moderateScale(10),
            }}
          >
            <TouchableOpacity>
              <FastImage
                style={{ width: 50, height: 50 }}
                source={require("../../Assets/Image/glogo.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo
                name="facebook-with-circle"
                size={moderateScale(30)}
                color="#3d5790"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
const mapStateToProps = (state) => ({
  isLoading: state.GlobalReducer.isLoading,
});

const mapDispatchToProps = {
  ActionLogin,
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
