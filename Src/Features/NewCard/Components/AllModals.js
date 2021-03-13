import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { OptionsModal } from "./Modals/OptionsModal";
import MemberModal from "./Modals/MemberModal";
import CalendarModal from "./Modals/CalendarModal";
import PriorityModal from "./Modals/PriorityModal";
import LabelModal from "./Modals/LabelModal";
import { connect } from "react-redux";
import AntDesign from "react-native-vector-icons/AntDesign";
import { moderateScale } from "react-native-size-matters";
import { NewcardStyle } from "../style";
import { getListLabel, setDate, setPriority } from "../Redux/newCardAction";

const AllModals = (props) => {
  const [addMember, setAddMember] = useState(false);
  const [addDate, setAddDate] = useState(false);
  const [addPriority, setAddPriority] = useState(false);
  const [addLabel, setAddLabel] = useState(false);
  const [addOptions, setAddOptions] = useState(false);

  useEffect(() => {
    props.getListLabel();
  }, []);

  return (
    <>
      <ScrollView>
        {/* MEMBER */}
        <View style={{ flexDirection: "row" }}>
          <Text style={{ width: 100 }}>Assign To</Text>
          <View style={{ width: 200 }}>
            <TouchableOpacity
              style={{ marginBottom: 20 }}
              onPress={() => setAddMember(true)}
              disabled={props.selectedMembers.length ? true : false}
            >
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  maxWidth: moderateScale(245),
                }}
              >
                {props.selectedMembers.length ? (
                  props.selectedMembers.map((value) => {
                    return (
                      <View
                        key={value.id.toString()}
                        style={NewcardStyle.buttonContainer}
                      >
                        <Text>{value.title}</Text>
                      </View>
                    );
                  })
                ) : (
                  <Text style={{ color: "gray" }}>Choose Members</Text>
                )}
                {props.selectedMembers.length ? (
                  <TouchableOpacity
                    onPress={() => setAddMember(true)}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign
                      name="pluscircle"
                      size={moderateScale(15)}
                      style={{ color: "#15C39A" }}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* PRIORITY */}
        <View style={{ flexDirection: "row" }}>
          <Text style={{ width: 100 }}>Priority</Text>
          <View style={{ width: 200 }}>
            <TouchableOpacity
              style={{ marginBottom: 20 }}
              onPress={() => setAddPriority(true)}
              disabled={props.priority.length ? true : false}
            >
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  maxWidth: moderateScale(245),
                }}
              >
                {props.priority.icon ? (
                  <View
                    key={props.priority?.id.toString()}
                    style={NewcardStyle.buttonContainer}
                  >
                    <View style={{ minWidth: moderateScale(40) }}>
                      {props.priority.icon()}
                    </View>
                    <Text>{props.priority?.title}</Text>
                  </View>
                ) : (
                  <Text style={{ color: "gray" }}>Choose Priority</Text>
                )}

                {props.priority ? (
                  <TouchableOpacity
                    onPress={() => setAddPriority(true)}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></TouchableOpacity>
                ) : null}
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* CALENDAR */}
        <View style={{ flexDirection: "row" }}>
          <Text style={{ width: 100 }}>Due Date</Text>
          <View style={{ width: 200 }}>
            <TouchableOpacity
              style={{ marginBottom: 20 }}
              onPress={() => setAddDate(true)}
              disabled={props.selectedDate.length ? true : false}
            >
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  maxWidth: moderateScale(245),
                }}
              >
                {props.selectedDate ? (
                  <View style={NewcardStyle.buttonContainer}>
                    <View style={{ minWidth: moderateScale(40) }}>
                      <Text>{props.selectedDate}</Text>
                    </View>
                  </View>
                ) : (
                  <Text style={{ color: "gray" }}>Choose Date</Text>
                )}
                {props.selectedDate.length ? (
                  <TouchableOpacity
                    onPress={() => setAddDate(true)}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign
                      name="pluscircle"
                      size={moderateScale(15)}
                      style={{ color: "#15C39A" }}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* LABELS */}
        <View style={{ flexDirection: "row" }}>
          <Text style={{ width: 100 }}>Labels</Text>
          <View style={{ width: 200 }}>
            <TouchableOpacity
              style={{ marginBottom: 20 }}
              onPress={() => {
                setAddLabel(true);
              }}
              disabled={props.selectedLabels.length ? true : false}
            >
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  maxWidth: moderateScale(245),
                }}
              >
                {props.selectedLabels.length ? (
                  props.selectedLabels.map((value, index) => {
                    return (
                      <View
                        key={index.toString()}
                        style={[
                          NewcardStyle.buttonContainer,
                          { backgroundColor: value.color, borderRadius: 5 },
                        ]}
                      >
                        <Text>{value.labelName}</Text>
                      </View>
                    );
                  })
                ) : (
                  <Text style={{ color: "gray" }}>Choose Labels</Text>
                )}
                {props.selectedLabels.length ? (
                  <TouchableOpacity
                    onPress={() => setAddLabel(true)}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign
                      name="pluscircle"
                      size={moderateScale(15)}
                      style={{ color: "#15C39A" }}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* MODALS */}
      <Modal
        visible={addOptions}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAddOptions(false)}
      >
        <TouchableWithoutFeedback onPress={() => setAddOptions(false)}>
          <View style={{ backgroundColor: "gray", flex: 1, opacity: 0.88 }}>
            <OptionsModal />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        visible={addMember}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAddMember(false)}
      >
        <TouchableWithoutFeedback onPress={() => setAddMember(false)}>
          <View style={{ backgroundColor: "gray", flex: 1, opacity: 0.88 }}>
            <MemberModal />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        visible={addDate}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAddDate(false)}
      >
        <TouchableWithoutFeedback onPress={() => setAddDate(false)}>
          <View style={{ backgroundColor: "gray", flex: 1, opacity: 0.88 }}>
            <CalendarModal />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        visible={addPriority}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAddPriority(false)}
      >
        <TouchableWithoutFeedback onPress={() => setAddPriority(false)}>
          <View style={{ backgroundColor: "gray", flex: 1, opacity: 0.88 }}>
            <PriorityModal />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        visible={addLabel}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAddLabel(false)}
      >
        <TouchableWithoutFeedback onPress={() => setAddLabel(false)}>
          <View style={{ backgroundColor: "gray", flex: 1, opacity: 0.88 }}>
            <LabelModal onPress={() => setAddLabel(false)} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedLabels: state.newCardReducer.selectedLabels,
  selectedMembers: state.newCardReducer.selectedMembers,
  priority: state.newCardReducer.priority,
  selectedDate: state.newCardReducer.selectedDate,
  existingLabel: state.newCardReducer.existingLabel,
  openModal: state.newCardReducer.openModal,
});

const mapDispatchToProps = {
  getListLabel,
  setDate,
  setPriority,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllModals);
