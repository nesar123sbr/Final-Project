import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Nunito from "../Nunito";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { moderateScale } from "react-native-size-matters";
import { connect } from "react-redux";
import {
  postCard,
  combinedAction,
} from "../../../Features/NewCard/Redux/newCardAction";
import { putListId } from "../../../Features/TeamBoardDetail/Redux/Action";

const Header = ({
  combinedAction,
  boardId,
  postCard,
  teamId,
  labelId,
  listId,
  desc,
  title,
  priority,
  selectedDate,
  boardName,
  onTap1,
  boardName1,
  timName,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.ButtonDone}>
        <TouchableOpacity onPress={onTap1}>
          <MaterialCommunityIcons
            name="close"
            color="white"
            size={moderateScale(22)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            const listLabelId = labelId.map((value) => value._id);
            // postCard(desc, title, priority.id + 1, selectedDate, listLabelId);
            const postCardData = {
              desc,
              title,
              priority: priority.id + 1,
              selectedDate,
            };
            combinedAction(postCardData, listLabelId, boardId, teamId, listId);
          }}
        >
          <View
            style={{ flexDirection: "row", paddingRight: moderateScale(10) }}
          >
            <MaterialCommunityIcons
              name="check"
              color="white"
              size={moderateScale(22)}
              style={{ paddingRight: moderateScale(5) }}
            />
            <Nunito title="Done" color="white" size={moderateScale(17)} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Nunito title={boardName} color="white" size={moderateScale(18)} />
      </View>
      <View style={styles.desc}>
        <Nunito title={timName} color="white" style={{ paddingRight: 3 }} />
        <Nunito title="|" color="white" style={{ paddingRight: 3 }} />
        <Nunito title={boardName1} color="white" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: moderateScale(130),
    backgroundColor: "#4859EF",
  },
  ButtonDone: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: moderateScale(10),
    paddingLeft: moderateScale(15),
  },
  desc: {
    flexDirection: "row",
    paddingTop: moderateScale(5),
    paddingLeft: moderateScale(20),
  },
  title: {
    paddingTop: moderateScale(25),
    paddingLeft: moderateScale(20),
  },
});

const mapStateToProps = (state) => ({
  desc: state.newCardReducer.desc,
  title: state.newCardReducer.title,
  priority: state.newCardReducer.priority,
  selectedDate: state.newCardReducer.selectedDate,
  labelId: state.newCardReducer.labelId,
  boardId: state.TeamBoardReducer.listCardTeam[0]._id,
  teamId: state.teamReducer.teamId,
  listId: state.ListDataReducer.listId,
});

const mapDispatchToProps = {
  postCard,
  combinedAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
