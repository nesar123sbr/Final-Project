import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Lonceng from "react-native-vector-icons/FontAwesome";
import PanahKanan from "react-native-vector-icons/MaterialCommunityIcons";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { moderateScale } from "react-native-size-matters";
import { connect } from "react-redux";
import { logOut } from "../../Auth/Login/Redux/Action";
import { getProfile } from "./Redux/Action";
import DropDownPicker from "react-native-dropdown-picker";
import ModalDropdown from "react-native-modal-dropdown";
import { patchProfile } from "./Redux/Action";
import { removeCredential } from "./Redux/Action";
function Profile(props) {
  const { navigation } = props;
  const [addName, setAddName] = useState("");
  const [addRole, setAddRole] = useState(props.role);
  const [addIndustry, setAddIndustry] = useState(props.industry);
  const [addCompany, setCompany] = useState("");

  const changeInName = (text) => {
    setAddName(text);
    
  };
  const changeInRole = (item) => {
    setAddRole(item);
  };
  const changeInIndustry = (item) => {
    setAddIndustry(item);
  };
  const changeInCompany = (text) => {
    setCompany(text);
  };
  const sendChangeProfile = () => {
    props.patchProfile(addName, addRole, addIndustry, addCompany);
  };

  useEffect(() => {
    props.getProfile();
  }, [props]);
  const logOut = () => {
    props.logOut();
    props.removeCredential();
    navigation.navigate("StackNav");
  };
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <ScrollView
        contentContainerStyle={{
          padding: moderateScale(15),
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 25, marginTop: moderateScale(10) }}>Me</Text>

          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              marginTop: moderateScale(10),
            }}
          >
            <TouchableOpacity>
              <Lonceng name="bell" color="grey" size={moderateScale(25)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={logOut}>
              <PanahKanan
                name="arrow-right-box"
                color="grey"
                size={moderateScale(25)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              borderRadius: 100 / 2,
              backgroundColor: "green",
              color: "white",
              fontSize: moderateScale(50),
              width: 80,
              height: 80,
              textAlign: "center",
              marginTop: moderateScale(10),
            }}
          >
            {props.name[0]}
          </Text>
          <Text
            style={{
              color: "grey",
              marginLeft: 20,
              marginTop: moderateScale(10),
            }}
          >
            YOUR PHOTO
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingHorizontal: widthPercentageToDP(20),
          }}
        >
          <TouchableOpacity onPress={sendChangeProfile}>
            <Text
              style={{
                backgroundColor: "#e1d3f0",
                color: "#00008b",
                width: widthPercentageToDP(20),
                alignSelf: "center",
                borderRadius: 20,
                height: 35,
                fontSize: moderateScale(13),
                textAlign: "center",
                alignContent: "center",
                paddingTop: 7,
                fontWeight: "bold",
              }}
            >
              Upload
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: "grey",
                fontWeight: "bold",
                width: widthPercentageToDP(20),
                alignSelf: "center",
                borderRadius: 20,
                height: 35,
                fontSize: moderateScale(13),
                textAlign: "center",
                alignContent: "center",
                paddingTop: 7,
                textDecorationLine: "underline",
              }}
            >
              Remove
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginBottom: 10,
            color: "grey",
            marginTop: moderateScale(10),
          }}
        >
          PERSONAL INFO
        </Text>
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            width: widthPercentageToDP(90),
          }}
        />

        <Text
          style={{
            marginBottom: moderateScale(5),
            fontSize: moderateScale(10),
            marginTop: moderateScale(10),
            marginLeft: moderateScale(10),
            fontSize: moderateScale(14),
          }}
        >
          Name
        </Text>
        <TextInput
          onChangeText={(text) => changeInName(text)}
          defaultValue={props.name}
          style={{
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 5,
            width: widthPercentageToDP(90),
            paddingLeft: moderateScale(10),
            fontSize: moderateScale(14),
          }}
        />
        <Text
          style={{
            marginBottom: moderateScale(5),
            fontSize: moderateScale(10),
            marginTop: moderateScale(15),
            marginLeft: moderateScale(10),
            fontSize: moderateScale(14),
          }}
        >
          Role
        </Text>
        <DropDownPicker
          items={[{label:"Employee",value:"Employee"}, {label:"Director",value:"Director"}, {label:"Manager",value:"Manager"}, {label:"Supervisor",value:"Supervisor"}, {label:"Owner",value:"Owner"}]}
          defaultValue={addRole}
          style={{paddingVertical: 10}}
          containerStyle={{width:moderateScale(343), height:moderateScale(40) ,borderRadius:4}}
          onChangeItem={item => changeInRole(item.value)}
        />

        <Text
          style={{
            marginBottom: moderateScale(5),
            fontSize: moderateScale(10),
            marginTop: moderateScale(15),
            marginLeft: moderateScale(10),
            fontSize: moderateScale(14),
          }}
        >
          Industry
        </Text>
        <View>
          <DropDownPicker
            items={[
              {label:"education",value:"Education"},
              {label:"food&beverages",value:"Food & Beverages"},
              {label:"health services",value:"Health services"},
              {label:"tourism",value:"Tourism"},
              {label:"transportation",value:"Transportation"},
              {label:"public services",value:"Public Services"},
              {label:"telecomunications",value:"Telecomunications"},
              {label:"agliculture",value:"Agliculture"},
              {label:"others",value:"Others"},
            ]}
            defaultValue={addIndustry}
            style={{paddingVertical: 10}}
            containerStyle={{width:moderateScale(343), height:moderateScale(40) ,borderRadius:4}}
            onChangeItem={item => changeInIndustry(item.value)}
          />
        </View>

        <Text
          style={{
            marginBottom: moderateScale(5),
            fontSize: moderateScale(10),
            marginTop: moderateScale(15),
            marginLeft: moderateScale(10),
            fontSize: moderateScale(14),
          }}
        >
          Company Name
        </Text>
        <TextInput
          onChangeText={(text) => changeInCompany(text)}
          placeholder="none"
          placeholderTextColor="grey"
          defaultValue={props.company_name}
          style={{
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 5,
            width: widthPercentageToDP(90),
            paddingLeft: moderateScale(10),
            fontSize: moderateScale(14),
          }}
        />
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            width: widthPercentageToDP(90),
            marginTop: moderateScale(10),
          }}
        />
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: moderateScale(10),
          }}
        >
          <Text style={{ fontWeight: "bold", marginTop: moderateScale(10) }}>
            Email Adress
          </Text>
          <View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: moderateScale(14),
                width: moderateScale(80),
                height: moderateScale(30),
                backgroundColor: "#FFEEE1",
                borderRadius: 35,
                elevation: 3,
              }}
              onPress={() => navigation.navigate("changeEmail")}
            >
              <Text style={{ color: "orange", fontWeight: "bold" }}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text>Your email adress is </Text>
          <Text style={{ fontWeight: "bold" }}>{props.email}</Text>
        </View>
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            width: widthPercentageToDP(90),
            marginTop: moderateScale(10),
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: moderateScale(10),
          }}
        >
          <Text style={{ marginTop: moderateScale(5), fontWeight: "bold" }}>
            Password
          </Text>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: moderateScale(14),
              width: moderateScale(80),
              height: moderateScale(30),
              backgroundColor: "#FFEEE1",
              borderRadius: 35,
              elevation: 3,
            }}
            onPress={() => navigation.navigate("changePass")}
          >
            <Text style={{ color: "orange", fontWeight: "bold" }}>Change</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const mapStateToProps = (state) => ({
  name: state.ProfileReducer.name,
  email: state.ProfileReducer.email,
  role: state.ProfileReducer.role,
  industry: state.ProfileReducer.industry,
  company_name: state.ProfileReducer.company_name,
});

const mapDispatchToProps = {
  logOut,
  getProfile,
  patchProfile,
  removeCredential,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
