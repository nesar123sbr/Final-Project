import React, { useEffect, useState } from "react";
import { View, FlatList ,Alert, ScrollView} from "react-native";
import HeaderTeam from "../../Shared/Component/Header/HeaderTeam";
import CardTeam from "../../Shared/Component/Card/CardTeam";
import CardEmptyTeam from "../../Shared/Component/EmptyCard/CardEmptyTeam";
import { connect } from "react-redux";
import { setCardTeam } from "./Redux/Action";
import { moderateScale } from "react-native-size-matters";
import EmptyTeamBoard from "../../Shared/Component/EmptyPage/EmptyTeamBoard";
import ModalTeam from '../../Shared/Component/Modal/ModalTeam'
function TeamBoard(props) {
  const { navigation } = props;
  const [showModal,setShowModal] = useState(false)
  const [saveBoard, setSaveBoard] = useState('');
  const [generateID, setGenerateID] = useState(0);

  const addNewBoard = () => {
    const newBoard = {
      id: generateID,
      title1: saveBoard,
    };

  const findBoard = props.listCardTeam.find(
    (value) => value.title1 === saveBoard,
  );

  if (findBoard) {
    Alert.alert('Board already exist!');
  } else if (newBoard.title1 === '') {
    props.setCardTeam([...props.listCardTeam]);
  } else {
    props.setCardTeam([...props.listCardTeam, newBoard]);
    setGenerateID(newBoard.id + 1);
  }
};


  return (
    <>
      <HeaderTeam
        onPress={() => navigation.navigate("Boards")}
        title1="Meja Putih"
      />
      {!props.listCardTeam ? (
        <EmptyTeamBoard onTap={() => setShowModal(true)}/>
      ) : (
        <>
        
          <View style={{ margin: moderateScale(15) }}>
            <FlatList
              data={props.listCardTeam}
              numColumns={2}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item }) => (
                <CardTeam
                  title1={item.title1}
                  // title2={item.title2}
                  // count={item.count}
                  onTap={() => navigation.navigate("TeamBoardDetail")}
                />
              )}
            />
          </View>
          
          <View style={{ margin: moderateScale(16) }}>
            <CardEmptyTeam onPress={() => setShowModal(true)} />
          </View>
        </>
      )}
      <ModalTeam visible={showModal} onRequestClose={() => setShowModal(false)} onPress={() => setShowModal(false)} onChangeText={(text) => setSaveBoard(text)} submit={() => {addNewBoard(); setShowModal(false)} }/>
    </>
  );
}
const mapStateToProps = (state) => ({
  listCardTeam: state.TeamBoardReducer.listCardTeam,
});

const mapDispatchToProps = {
  setCardTeam,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamBoard);
