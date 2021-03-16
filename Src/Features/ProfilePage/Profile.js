import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Platform,
  PermissionsAndroid,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
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
import Spinner from "react-native-loading-spinner-overlay";
import ModalPhoto from "../../Shared/Component/Modal/ModalPhoto";
import FastImage from "react-native-fast-image";
function Profile(props) {
  const { navigation } = props;
  const [addName, setAddName] = useState(props.name);
  const [addRole, setAddRole] = useState(props.role);
  const [addIndustry, setAddIndustry] = useState(props.industry);
  const [addCompany, setCompany] = useState(props.company_name);
  const [showMod, setShowMod] = useState(false);
  const [filePath, setFilePath] = useState({});

  const requestCameraPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Camera Permission",
            message: "App needs camera permission",
          }
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "External Storage Write Permission",
            message: "App needs write permission",
          }
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert("Write permission err", err);
      }
      return false;
    } else return true;
  };

  const captureImage = () => {
    let options = {
      mediaType: "photo",
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      // videoQuality: 'low',
      // durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };

    launchCamera(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        alert("User cancelled camera picker");
        return;
      } else if (response.errorCode == "camera_unavailable") {
        alert("Camera not available on device");
        return;
      } else if (response.errorCode == "permission") {
        alert("Permission not satisfied");
        return;
      } else if (response.errorCode == "others") {
        alert(response.errorMessage);
        return;
      }
      console.log("base64 -> ", response.base64);
      console.log("uri -> ", response.uri);
      console.log("width -> ", response.width);
      console.log("height -> ", response.height);
      console.log("fileSize -> ", response.fileSize);
      console.log("type -> ", response.type);
      console.log("fileName -> ", response.fileName);
      setFilePath(response);
    });
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        alert("User cancelled camera picker");
        return;
      } else if (response.errorCode == "camera_unavailable") {
        alert("Camera not available on device");
        return;
      } else if (response.errorCode == "permission") {
        alert("Permission not satisfied");
        return;
      } else if (response.errorCode == "others") {
        alert(response.errorMessage);
        return;
      }
      console.log("base64 -> ", response.base64);
      console.log("uri -> ", response.uri);
      console.log("width -> ", response.width);
      console.log("height -> ", response.height);
      console.log("fileSize -> ", response.fileSize);
      console.log("type -> ", response.type);
      console.log("fileName -> ", response.fileName);
      setFilePath(response);
    });
  };

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
    props.patchProfile(addName, addRole, addIndustry, addCompany,filePath);
  };
  console.log("fotollll",filePath)

  useEffect(() => {
    props.getProfile();
    setAddName(props.name);
    setAddRole(props.role);
    setAddIndustry(props.industry);
    setCompany(props.company_name);
  }, [props]);
  const logOut = () => {
    navigation.navigate("StackNav");
    props.logOut();
    // props.removeCredential();
  };
  console.log("photo",props.photo)
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <Spinner
        visible={props.isLoading}
        textContent={"Loading"}
        textStyle={{ color: "white" }}
      />
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
        <TouchableOpacity
          onPress={() => {
            setShowMod(true);
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                borderRadius: 80,
                backgroundColor: "#1A7D5A",
                color: "white",
                width: moderateScale(80),
                height: moderateScale(80),
                justifyContent: "center",
                alignItems: "center",
                marginTop: moderateScale(10),
              }}
            >
              {props.photo ? (
                <>
                  <FastImage
                    style={{alignSelf: "center",width:100,height:100 ,borderRadius:20}}
                    source={{
                      uri: `${filePath.uri?filePath.uri:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2F34AD2.jpg&f=1&nofb=1"}`,
                      priority: FastImage.priority.contain,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </>
              ) : (
                <Text
                  style={{
                    fontSize: moderateScale(40),
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {props.name[0]}
                </Text>
              )}
            </View>

            <Text
              style={{
                color: "grey",
                marginLeft: moderateScale(20),
                marginTop: moderateScale(10),
                fontSize: moderateScale(18),
              }}
            >
              Your Photo
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingHorizontal: widthPercentageToDP(20),
          }}
        >
          <TouchableOpacity onPress={sendChangeProfile}>
            <Text
              style={{
                backgroundColor: "#e1d3f0",
                color: "#00008b",
                alignSelf: "center",
                width: moderateScale(60),
                borderRadius: 20,
                height: 35,
                fontSize: moderateScale(14),
                textAlign: "center",
                alignContent: "center",
                paddingTop: 7,
                fontWeight: "bold",
              }}
            >
              Update
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: "grey",
                fontWeight: "bold",
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
              Remove Account
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
          value={addName}
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
          items={[
            { label: "employee", value: "Employee" },
            { label: "director", value: "Director" },
            { label: "manager", value: "Manager" },
            { label: "supervisor", value: "Supervisor" },
            { label: "owner", value: "Owner" },
          ]}
          defaultValue={props.role ? addRole : ""}
          style={{ paddingVertical: 10 }}
          containerStyle={{
            width: moderateScale(343),
            height: moderateScale(40),
            borderRadius: 4,
          }}
          onChangeItem={(item) => changeInRole(item.value)}
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
              { label: "education", value: "Education" },
              { label: "food&beverages", value: "Food&Beverages" },
              { label: "health services", value: "Health services" },
              { label: "tourism", value: "Tourism" },
              { label: "transportation", value: "Transportation" },
              { label: "public services", value: "Public Services" },
              { label: "telecomunications", value: "Telecomunications" },
              { label: "agliculture", value: "Agliculture" },
              { label: "others", value: "Others" },
            ]}
            defaultValue={props.industry ? addIndustry : ""}
            style={{ paddingVertical: 10 }}
            containerStyle={{
              width: moderateScale(343),
              height: moderateScale(40),
              borderRadius: 4,
            }}
            onChangeItem={(item) => changeInIndustry(item.value)}
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
          value={addCompany}
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
      <ModalPhoto
        visible={showMod}
        onRequestClose={() => setShowMod(false)}
        onPress={() => setShowMod(false)}
        onLibrary={() => chooseFile("photo")}
        onCamera={() => captureImage("photo")}
      />
    </View>
  );
}
const mapStateToProps = (state) => ({
  name: state.ProfileReducer.name,
  email: state.ProfileReducer.email,
  role: state.ProfileReducer.role,
  industry: state.ProfileReducer.industry,
  company_name: state.ProfileReducer.company_name,
  isLoading: state.GlobalReducer.isLoading,
  photo: state.ProfileReducer.photo,
});

const mapDispatchToProps = {
  logOut,
  getProfile,
  patchProfile,
  removeCredential,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
