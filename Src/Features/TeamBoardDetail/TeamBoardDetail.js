import React, { useState, useEffect } from "react";
import { Board, BoardRepository } from "react-native-draganddrop-board";
import { View } from "react-native";
import CardBoardDetail from "../../Shared/Component/Card/CardBoardDetail";
import HeaderBoardDetail from "../../Shared/Component/Header/HeaderBoardDetail";
import { moderateScale } from "react-native-size-matters";
import ModalList from "../../Shared/Component/Modal/ModalList";
import ModalAddCard from "../../Shared/Component/Modal/ModalAddCard";
import { connect } from "react-redux";
import { postList, getListData } from "./Redux/Action";
import Spinner from "react-native-loading-spinner-overlay";
import EmptyTeamBoardDetail from "../../Shared/Component/EmptyPage/EmptyTeamBoardDetail";
import boardRepository from "./dummy"

function TeamBoardDetail(props) {
  const { navigation, route } = props;
  const { _id, title, teamName } = route.params;
 
  const [showModal, setShowModal] = useState(false);
  const [saveList, setSaveList] = useState("");
  const [boardList, setBoardList] = useState([]);

  const onDrag = (item) => {
      console.log(item)
  }
 
  const finalProjectDataList = () => {
    const dataList =
      props.listData.length &&
      props.listData.map((value, index) => {
        console.log("lissssttttttttt", value._id);
        const rows = props.tasks
          .map((v, i) => {
            if (v.listId.length && value._id === v.listId[0]._id) {
              console.log("huhu", v);
              return {
                id: i + 1,
                name: v.title ? v.title : "",
                description: v.description ? v.description : "",
                label: v.labelId ? v.labelId : [],
                priority:v.priority?v.priority:""
              };
            }
            console.log("idwijjdi",v.priority);
          })
          .filter((data) => data !== undefined);
          
        return {
          id: index + 1,
          name: value.title,
          rows: rows,
        };
      });

    console.log("namain", dataList);
    setBoardList(dataList);
    console.log(dataList)
  };

  const addNewList = () => {
    props.postList(saveList, _id);
  };
  useEffect(() => {
    props.getListData(_id);
    finalProjectDataList();
  }, []);
  
  return (
    <View>
      <Spinner
        visible={props.isLoading}
        textContent={"Loading"}
        textStyle={{ color: "white" }}
      />
      {props.listData.length ? (
        <>
          <HeaderBoardDetail
            title1={title}
            title2={teamName}
            onPress={() => navigation.navigate("Boards")}
            onPress2={() => setShowModal(true)}
            onPress1={() => navigation.navigate("Notification")}
          />

          <Board
            boardRepository={new BoardRepository(boardList)}
            open={(item) => {
              console.log("open", item);
            }}
            onDragEnd={(item) => {
              onDrag( item);
            }}
            badgeWidth={moderateScale(40)}
            columnBorderRadius={15}
            columnBackgroundColor="#f3f3f3"
            burgerClick={() => setShowModal(true)}
            AddNewCard={() => navigation.navigate("Newcard",{
              nama:title,
              nama1:teamName
            })}
            cardContent={(data) => (
              <CardBoardDetail
                data={data.label}
                title2={data.name}
                cases={data.priority}
                onPress={() => navigation.navigate("Newcard")}
              />
            )}
          />
        </>
      ) : (
        <EmptyTeamBoardDetail onTap={() => {setShowModal(true)}}/>
      )}

      <ModalList
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        onPress={() => setShowModal(false)}
        onChangeText={(text) => setSaveList(text)}
        submit={() => {
          addNewList();
          setShowModal(false);
        }}
      />
    </View>
  );
}
const mapStateToProps = (state) => ({
  listData: state.ListDataReducer.listData,
  tasks: state.taskReducer.tasks,
});

const mapDispatchToProps = {
  postList,
  getListData,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamBoardDetail);
