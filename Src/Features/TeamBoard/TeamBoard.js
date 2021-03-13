import React, { useEffect, useState } from "react";
import { View, FlatList, Alert, ScrollView } from "react-native";
import HeaderTeam from "../../Shared/Component/Header/HeaderTeam";
import CardTeam from "../../Shared/Component/Card/CardTeam";
import CardEmptyTeam from "../../Shared/Component/EmptyCard/CardEmptyTeam";
import { connect } from "react-redux";
import { moderateScale } from "react-native-size-matters";
import EmptyTeamBoard from "../../Shared/Component/EmptyPage/EmptyTeamBoard";
import ModalTeam from "../../Shared/Component/Modal/ModalTeam";
import { postBoard } from "./Redux/Action";
import Spinner from 'react-native-loading-spinner-overlay';
import {getListTeamBoard} from "./Redux/Action"
import {getListTeams} from "../LandingPage/Redux/Action"

function TeamBoard(props) {
  const { navigation, route } = props;
  const { _id,teamName } = route.params;
  const [showModal, setShowModal] = useState(false);
  const [saveBoard, setSaveBoard] = useState("");

  console.log("lopU", _id);
  useEffect(() => {
    props.getListTeamBoard(_id)
  }, [])
  const addNewBoard = () => {
    const findBoard = props.listCardTeam.find((value) => value.title === saveBoard);
    if (findBoard) {
      Alert.alert("Board already exist!");
    } else {
      props.postBoard(saveBoard, _id);
    }
  };
  return (
    <>
     <Spinner
     visible={props.isLoading}
     textContent={"Loading"}
     textStyle={{color:"white"}}

      /> 
      <HeaderTeam
        onPress={() => {navigation.navigate("Boards")
        props.getListTeams();
      }}
        title1={teamName}
      />

      {props.listCardTeam.length ? (
        <>
          <ScrollView>
            <View style={{ margin: moderateScale(15) }}>
              <ScrollView horizontal={true}>
                <FlatList
                  data={props.listCardTeam}
                  numColumns={2}
                  horizontal={false}
                  keyExtractor={(item, index) => item._id}
                  renderItem={({ item }) => (
                    <CardTeam
                      title1={item.title}
                      // title2={item.title2}
                      // count={item.count}
                      onTap={() => navigation.navigate("TeamBoardDetail")}
                    />
                  )}
                />
              </ScrollView>
              <CardEmptyTeam onPress={() => setShowModal(true)} />
            </View>
          </ScrollView>
        </>
      ) : (
        <EmptyTeamBoard onTap={() => setShowModal(true)} />
      )}
      <ModalTeam
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        onPress={() => setShowModal(false)}
        onChangeText={(text) => setSaveBoard(text)}
        submit={() => {
          addNewBoard();
          setShowModal(false);
        }}
      />
    </>
  );
}
const mapStateToProps = (state) => ({
  listCardTeam:state.TeamBoardReducer.listCardTeam,
  isLoading: state.GlobalReducer.isLoading,
});

const mapDispatchToProps = {
  postBoard,
  getListTeamBoard,
  getListTeams
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamBoard);
