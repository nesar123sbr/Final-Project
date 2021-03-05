import React, { useState } from "react";
import Lonceng from "react-native-vector-icons/FontAwesome";
import PanahKanan from "react-native-vector-icons/MaterialCommunityIcons";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import ButtonSave from "../../Shared/Component/Button/ButtonSave";
import Nunito from "../../Shared/Component/Nunito";



function ChangeEmail(props) {
  const { navigation } = props;

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
          <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
            <PanahKanan
              name="arrow-right-box"
              color="grey"
              size={moderateScale(25)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: moderateScale(100) }}>
          <Nunito
            title="Change Email"
            size={moderateScale(24)}
            type="Bold"
          />
          <Nunito
            title="Enter your new email"
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

        <ButtonSave
          buttonName="Save"
        />
      
    </View>
  );
}

export default ChangePassword;
