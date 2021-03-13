import React, { useState } from "react";
import { View, Text, TextInput, Modal, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { setPriority } from "../../Redux/newCardAction";
import { connect } from "react-redux";

const priorityDummy = [
  {
    id: 0,
    icon: () => (
      <Ionicons
        name="arrow-up"
        size={moderateScale(17)}
        style={{ color: "#C03630" }}
      />
    ),
    title: "Highest",
    active: true,
  },
  {
    id: 1,
    icon: () => (
      <Ionicons
        name="arrow-up"
        size={moderateScale(17)}
        style={{ color: "#FF706A" }}
      />
    ),
    title: "High",
    active: false,
  },
  {
    id: 2,
    icon: () => (
      <Ionicons
        name="arrow-down"
        size={moderateScale(17)}
        style={{ color: "#1A7D5A" }}
      />
    ),
    title: "Low",
    active: false,
  },
  {
    id: 3,
    icon: () => (
      <Ionicons
        name="arrow-down"
        size={moderateScale(17)}
        style={{ color: "#28B446" }}
      />
    ),
    title: "Lowest",
    active: false,
  },
];

const PriorityModal = (props) => {
  const [prioritySelect, setPrioritySelect] = useState(priorityDummy);
  const [addOptions, setAddOptions] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState(null);

  const choosePriority = (id, data, status) => {
    const activeTmp = prioritySelect.find((value) => value.active);
    const isNotActive = { ...activeTmp, active: false };
    const getClick = prioritySelect.find((value) => value.id === id);
    const setActive = { ...getClick, active: true };
    priorityDummy[isNotActive.id] = isNotActive;
    priorityDummy[id] = setActive;
    props.setPriority(data);
    setSelectedPriority(setActive.id);
  };

  return (
    <>
      <View
        style={{
          height: 500,
          width: "100%",
          backgroundColor: "white",
          borderRadius: 20,
          opacity: 1,
          marginTop: 330,
          alignSelf: "center",
        }}
      >
        <Text style={{ margin: 20, marginTop: 40 }}>Priority</Text>
        <Text style={{ color: "gray", margin: 20, marginTop: 5 }}>
          Select an option
        </Text>

        <View>
          {prioritySelect.map((value) => {
            return (
              <TouchableOpacity
                onPress={() => choosePriority(value.id, value, value.status)}
                key={value.id.toString()}
                style={{
                  flexDirection: "row",
                  paddingHorizontal: moderateScale(8),
                  paddingVertical: moderateScale(8),
                  marginBottom: moderateScale(10),
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={{ minWidth: moderateScale(40) }}>
                    {value.icon()}
                  </View>
                  <Text>{value.title}</Text>
                </View>
                {value.active ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={moderateScale(20)}
                    color="#5ED6BA"
                  />
                ) : null}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  priority: state.newCardReducer.priority,
});

const mapDispatchToProps = {
  setPriority,
};

export default connect(mapStateToProps, mapDispatchToProps)(PriorityModal);
