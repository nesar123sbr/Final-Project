import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { moderateScale } from "react-native-size-matters";
import { connect } from "react-redux";
import {
  setExistingLabel,
  setSelectedLabels,
  postLabel,
  getLabel,
} from "../../Redux/newCardAction";

const LabelModal = (props) => {
  const [getLabel, setGetLabel] = useState([]);
  const [newLabel, setNewLabel] = useState(false);
  const [saveLabel, setSaveLabel] = useState("");
  const [saveColor, setSaveColor] = useState("");
  const [generateID, setGenerateID] = useState(0);
  const [listColor, setListColor] = useState([
    "#FFDBDA",
    "#E0FCF1",
    "#E5F7FF",
    "#F2D61E",
    "#00C2E0",
    "#51E898",
    "#FF78CB",
    "#EB5A46",
  ]);

  const addExistingLabel = (item) => {
    const newLabel = {
      id: generateID,
      title: saveLabel,
      color: saveColor,
    };

    const findExistingLabel = props.existingLabel.find(
      (value) => value.labelName === saveLabel && value.color === saveColor
    );

    if (findExistingLabel) {
      Alert.alert("Label already exist!");
    } else if (newLabel.labelName === "" && newLabel.color === "") {
      props.setExistingLabel([...props.existingLabel]);
    } else {
      props.setExistingLabel([...props.existingLabel, newLabel]);
      setGenerateID(newLabel.id + 1);
    }
  };

  const removeLabels = (item) => {
    const newArray = props.selectedLabels.filter(
      (data) => data.labelName !== item.labelName
    );
    props.setSelectedLabels([...newArray]);
  };

  const removeExistingLabel = (item) => {
    const newArray = props.existingLabel.filter((data) => data.id !== item.id);
    props.setExistingLabel([...newArray]);
  };

  const addLabels = (item, index) => {
    console.log(item);
    if (item._id === props.selectedLabels[index]?._id) {
      Alert.alert("Cannot add the same label");
    } else {
      props.setSelectedLabels([...props.selectedLabels, item]);
    }
  };

  // const getRandomColor = () => {
  //   return (
  //     'rgb(' +
  //     Math.floor(Math.random() * 256) +
  //     ',' +
  //     Math.floor(Math.random() * 256) +
  //     ',' +
  //     Math.floor(Math.random() * 256) +
  //     ')'
  //   );
  // };

  const SelectedLabelsContainer = () => {
    return (
      <>
        <View
          style={{
            borderWidth: 1,
            height: moderateScale(50),
            borderRadius: moderateScale(5),
            width: "100%",
            borderColor: "gray",
            borderWidth: 1,
            backgroundColor: "white",
            justifyContent: "center",
            paddingHorizontal: moderateScale(7),
            paddingVertical: moderateScale(8),
          }}
        >
          {props.selectedLabels.length ? (
            <FlatList
              horizontal
              data={props.selectedLabels}
              keyExtractor={(item) => item.id}
              renderItem={(item) => MySelectedLabels(item)}
            />
          ) : (
            <Text style={{ color: "gray" }}>Choose your labels</Text>
          )}
        </View>
      </>
    );
  };

  const MySelectedLabels = ({ item }) => {
    return (
      <>
        <View
          style={{
            backgroundColor: item.color,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: moderateScale(5),
            justifyContent: "space-between",
            paddingHorizontal: moderateScale(8),
            marginRight: moderateScale(7),
          }}
        >
          <Text>{item.labelName}</Text>
          <TouchableOpacity onPress={() => removeLabels(item)}>
            <AntDesign name="close" style={{ marginLeft: moderateScale(6) }} />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const ListLabel = () => {
    return (
      <>
        <View
          style={{
            height: moderateScale(30),
          }}
        >
          <FlatList
            horizontal
            data={props.existingLabel}
            keyExtractor={(item) => item}
            renderItem={(item) => MyLabel(item)}
          />
        </View>
      </>
    );
  };

  const MyLabel = ({ item, index }) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => addLabels(item, index)}
          style={{ marginRight: 12 }}
        >
          <View
            style={{
              padding: moderateScale(7),
              backgroundColor: item.color,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: moderateScale(5),
              justifyContent: "center",
            }}
          >
            <Text>{item.labelName}</Text>
            <TouchableOpacity onPress={() => removeExistingLabel(item)}>
              <AntDesign
                name="close"
                style={{ marginLeft: moderateScale(6) }}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  console.log(props);
  return (
    <>
      <View
        style={{
          height: 500,
          width: "100%",
          backgroundColor: "white",
          borderRadius: moderateScale(20),
          opacity: 1,
          marginTop: 430,
          alignSelf: "center",
        }}
      >
        <View
          style={{ margin: moderateScale(20), marginTop: moderateScale(50) }}
        >
          <Text
            style={{
              fontSize: moderateScale(15),
              marginBottom: moderateScale(20),
            }}
          >
            Labels
          </Text>
          <SelectedLabelsContainer />

          <TouchableOpacity onPress={() => setNewLabel(true)}>
            <Text
              style={{
                color: "gray",
                marginTop: moderateScale(20),
                marginBottom: moderateScale(15),
              }}
            >
              Select an option or create one
            </Text>
          </TouchableOpacity>

          <ListLabel />

          <TouchableOpacity onPress={props.onPress}>
            <View
              style={{
                padding: moderateScale(10),
                width: "100%",
                backgroundColor: "#FFEEE1",
                borderRadius: moderateScale(20),
                alignItems: "center",
                marginTop: moderateScale(8),
              }}
            >
              <Text style={{ color: "orange" }}>Done</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={newLabel} onRequestClose={() => setNewLabel(false)}>
        <View style={{ backgroundColor: "gray", flex: 1, opacity: 0.88 }}>
          <ScrollView>
            <View
              style={{
                height: 500,
                width: "100%",
                backgroundColor: "#d3f0f2",
                borderRadius: moderateScale(20),
                opacity: 1,
                marginTop: 530,
                alignSelf: "center",
              }}
            >
              <View style={{ margin: moderateScale(20) }}>
                <TextInput
                  style={{
                    height: 40,
                    width: "100%",
                    borderColor: "gray",
                    borderWidth: 1,
                    backgroundColor: "white",
                    borderRadius: 5,
                  }}
                  placeholderTextColor="gray"
                  placeholder="New Label Name"
                  onChangeText={(text) => setSaveLabel(text)}
                />

                <Text style={{ margin: 7 }}>Label Color</Text>
                <FlatList
                  horizontal
                  data={listColor}
                  keyExtractor={({ item }) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => setSaveColor(item)}
                      style={{ margin: 7 }}
                    >
                      <View
                        style={{
                          height: 30,
                          width: 30,
                          borderRadius: 20,
                          backgroundColor: item,
                          borderWidth: 3,
                          borderColor: "white",
                        }}
                      />
                    </TouchableOpacity>
                  )}
                />

                <TouchableOpacity
                  onPress={
                    () => props.postLabel(saveLabel)
                    // {
                    //   addExistingLabel();
                    //   setNewLabel(false);
                    // }
                  }
                >
                  <View
                    style={{
                      padding: 10,
                      width: "100%",
                      backgroundColor: "#FFEEE1",
                      borderRadius: 20,
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Text style={{ color: "orange" }}>Done</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  existingLabel: state.newCardReducer.existingLabel,
  selectedLabels: state.newCardReducer.selectedLabels,
  labelName: state.newCardReducer.labelName,
});

const mapDispatchToProps = {
  setExistingLabel,
  setSelectedLabels,
  postLabel,
  getLabel,
};

export default connect(mapStateToProps, mapDispatchToProps)(LabelModal);
