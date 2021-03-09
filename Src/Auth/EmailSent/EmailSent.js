import React from "react";
import { View, TouchableOpacity } from "react-native";
import Nunito from "../../Shared/Component/Nunito";
import ButtonAuth from "../../Shared/Component/Button/ButtonAuth";
import ButtonSubmit from "../../Shared/Component/Button/ButtonSubmit";
import { connect } from "react-redux";
import { moderateScale } from "react-native-size-matters";
import FastImage from "react-native-fast-image";

function EmailSent(props) {
  const { navigation } = props;

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
            title="Email has been sent!"
            size={moderateScale(24)}
            type="Bold"
          />
          <View style={{ marginBottom: moderateScale(15) }}>
            <Nunito
              title={props.respond}
              size={moderateScale(14)}
              style={{ paddingTop: moderateScale(20) }}
              textAlign="left"
            />
          </View>
        </View>

        <ButtonSubmit
          buttonName="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: moderateScale(10),
          }}
        >
          <Nunito
            title="Didn't receive link ?"
            size={moderateScale(14)}
            type="light"
            decoration="underline"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Nunito
              title=" Resend"
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
  respond: state.EmailSentReducer.respond,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EmailSent);
