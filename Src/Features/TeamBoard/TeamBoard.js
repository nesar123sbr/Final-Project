import React,{useEffect,useState} from 'react';
import {View, FlatList} from 'react-native';
import HeaderTeam from '../../Shared/Component/Header/HeaderTeam';
import CardTeam from '../../Shared/Component/Card/CardTeam';
import CardEmptyTeam from '../../Shared/Component/EmptyCard/CardEmptyTeam';
import {connect} from 'react-redux';
import {setCardTeam} from './Redux/Action';
import { moderateScale } from 'react-native-size-matters';
function TeamBoard(props) {
  const {navigation} = props;
  return (
    <View >
      <HeaderTeam onPress={() => navigation.navigate('Boards')} title1="Meja Putih" />
      <View style={{margin:moderateScale(15)}}>
        <FlatList
          data={props.listCardTeam}
          numColumns={2}
          keyExtractor={(item, index) => item.Title1}
          renderItem={({item}) => (
            <CardTeam
              title1={item.title1}
              title2={item.title2}
              count={item.count}
              onTap={() => navigation.navigate('TeamBoardDetail')}
            />
          )}
        />
      </View>
      <View style={{margin:moderateScale(16)}}>
      <CardEmptyTeam />
      </View>
    </View>
  );
}
const mapStateToProps = (state) => ({
  listCardTeam: state.TeamBoardReducer.listCardTeam,
  title1: state.TeamBoardReducer.listCardTeam.title1,
  title2: state.TeamBoardReducer.listCardTeam.title2,
  count: state.TeamBoardReducer.listCardTeam.count,
});

const mapDispatchToProps = {
  setCardTeam,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamBoard);
