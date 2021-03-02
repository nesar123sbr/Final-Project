import React, { useState } from "react";
import { Board } from "react-native-draganddrop-board";
import { View } from "react-native";
import { boardRepository } from "./dummy";
import CardBoardDetail from "../../Shared/Component/Card/CardBoardDetail";
import HeaderBoardDetail from "../../Shared/Component/Header/HeaderBoardDetail";
import { moderateScale } from "react-native-size-matters";

export default function TeamBoardDetail(props) {
  const {navigation} = props;
  // const [dataRepository,setDataRepository ]=useState(rowRepository)
  
  return (
    <View>
      <HeaderBoardDetail title1='Design Task' onPress={() => navigation.navigate('TeamBoard')}/>
      
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
    </View>
  );
}
