import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { moderateScale } from "react-native-size-matters";
import { TaskStyle } from "./style";
import CheckBox from "@react-native-community/checkbox";
import { connect } from "react-redux";
import { getListTask } from "./Redux/taskAction";

const Task = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  useEffect(() => {
    props.getListTask();
  }, []);

  const Tasks = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={{ backgroundColor: "whitesmokes", marginBottom: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              tintColors={{ true: "#77CAEF", false: "black" }}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />

            <Text style={{ marginLeft: 15, fontSize: 15 }}>{item.title}</Text>
          </View>

          <View style={{ marginLeft: 45 }}>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="calendar-month"
                size={moderateScale(15)}
                color="orange"
              />
              <Text style={{ marginLeft: 10 }}>{item.dueDate}</Text>
            </View>

            {/* {item.teamId.length
              ? item.teamId.map((value) => {
                  return ( */}
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "gray" }}>{item.teamId?.teamName}</Text>
              <Entypo
                name="dot-single"
                size={moderateScale(20)}
                style={{ color: "gray" }}
              />
              {/* {value.boardId.length &&
                value.boardId.map((item) => {
                  return ( */}
              <Text key={item._id} style={{ color: "gray" }}>
                {item.boardId?.title}
              </Text>
              {/* );
                })} */}
            </View>
            {/* );
                })
              : null} */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const ListTask = () => {
    return (
      <>
        <View>
          <FlatList
            data={props.tasks}
            keyExtractor={(item) => item}
            renderItem={Tasks}
          />
        </View>
      </>
    );
  };

  return (
    <>
      <ScrollView>
        <View>
          <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 10 }}>
            Tasks
          </Text>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text>Assigned to me</Text>
            <View style={TaskStyle.totalTask}>
              <Text>10</Text>
            </View>
          </View>
          <Text style={{ color: "gray", marginBottom: 15 }}>TO DO</Text>
        </View>
        <ListTask />
      </ScrollView>
    </>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.taskReducer.tasks,
});

const mapDispatchToProps = { getListTask };

export default connect(mapStateToProps, mapDispatchToProps)(Task);
