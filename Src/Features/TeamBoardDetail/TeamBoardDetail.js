import React, { useState } from "react";
import { Board } from "react-native-draganddrop-board";
import { View } from "react-native";
import { boardRepository } from "./dummy";
import CardBoardDetail from "../../Shared/Component/Card/CardBoardDetail";
import HeaderBoardDetail from "../../Shared/Component/Header/HeaderBoardDetail";
import { moderateScale } from "react-native-size-matters";
import ModalInvite from "../../Shared/Component/Modal/ModalInvite"

export default function TeamBoardDetail(props) {
  const {navigation} = props;
  const [showModal, setShowModal] = useState(false);
  
  return (
    <View>
      <HeaderBoardDetail title1='Design Task' onPress={() => navigation.navigate('Boards')} onPress2={() => setShowModal(true) } onPress1={() => navigation.navigate("Notification")}/>
      
      <Board
        boardRepository={boardRepository}
        AddNewCard={(name) => console.log("nambah", name)}
        open={() => {}}
        onDragEnd={() => {}}
        badgeWidth={moderateScale(40)}
        columnBorderRadius={15}
        columnBackgroundColor= '#f3f3f3'
        
        cardContent={(data) => (
          <CardBoardDetail title1={data.name} title2={data.description} onPress={() => navigation.navigate('Newcard')} />
        )}
      />
      <ModalInvite
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        onPress={() => setShowModal(false)}
        // onChangeText={(text) => }
        // submit={() => {
        //   addNewBoard();
        //   setShowModal(false);
        // }}
      />
    </View>
  );
}
