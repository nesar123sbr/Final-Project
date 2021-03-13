import React from "react";
import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import Nunito from "../Nunito";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Octicons from "react-native-vector-icons/Octicons";

export default function ModalPhoto({
  visible,
  onRequestClose,
  onPress,
  onCamera,
  onLibrary,
}) {
  return (
    <View>
      <Modal visible={visible} transparent={true} onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View
            style={{
              backgroundColor: "gray",
              flex: 1,
              opacity: 0.88,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: moderateScale(200),
                width: moderateScale(300),
                backgroundColor: "white",
                borderRadius: 20,
                opacity: 1,
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  alignItems:"center",
                  paddingTop: moderateScale(40),
                }}
              >
                <Nunito title="Choose" size={moderateScale(16)} type="Bold" />
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                  paddingTop: moderateScale(20),
                }}
              >
                <TouchableOpacity onPress={onCamera}>
                  <FontAwesome5 name="camera-retro" size={moderateScale(30)} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onLibrary}>
                  <Octicons name="file-directory" size={moderateScale(35)} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
