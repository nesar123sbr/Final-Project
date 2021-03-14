import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Nunito from '../Nunito';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale} from 'react-native-size-matters';
import { min } from 'react-native-reanimated';


export default function CardBoard({
  cardTitle1,
  cardTitle2,
  progress,
  onPress,
  countTask,
  
}) {
  
  return (
      
    <View style={styles.cardContainer}>
    <View style={{width:moderateScale(25),backgroundColor:'orange',paddingVertical:moderateScale(10),borderBottomLeftRadius:10,borderTopLeftRadius:10}}/>
    <View style={{paddingVertical:moderateScale(20),marginLeft:moderateScale(-10)}}>
      <MaterialCommunityIcons
          name="account-group"
          color="#4859EF"
          size={moderateScale(20)}
        />
      </View>
      <View style={{paddingVertical:moderateScale(20),paddingLeft:moderateScale(10)}}>
      <View style={styles.cardHeader}>
        <Nunito
          title={cardTitle1}
          type="SemiBold"
          size={moderateScale(16)}
          style={styles.cardName1}
        />
      </View>
      <View style={styles.cardHeader2}>
        <Nunito title={`on ${cardTitle2}`} type="Light" size={moderateScale(12)} />
      </View>
      <TouchableOpacity onPress={onPress} style={styles.quickLinks}>
        <Nunito
          title="QUICK LINKS"
          type="LightItalic"
          size={moderateScale(12)}
        />
      </TouchableOpacity>
      <View style={styles.MyTask}>
        <Nunito title="My Open Tasks" size={moderateScale(12)} />
        <View style={styles.countStyle}>
        <Nunito
          title={countTask}
          size={moderateScale(12)}
        />
        </View>
        
      </View>
      <View style={styles.cardProgress}>
       <Text>{progress}</Text> 
      </View>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection:'row',
    paddingRight: moderateScale(10),
    // paddingVertical: moderateScale(20),
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    backgroundColor: 'white',
    marginLeft:moderateScale(5),
    borderRadius:10,
    elevation:8
  },
  cardHeader: {
    flexDirection: 'row',
  },
  cardHeader2: {
    
    paddingVertical:moderateScale(5)
  },
  cardName1: {
  
  },
  MyTask: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
    height:moderateScale(30)
  },
  cardProgress: {
    paddingTop: moderateScale(5),
    
  },
  quickLinks: {
    paddingBottom: moderateScale(5),
  },
  countStyle:{
    marginLeft:moderateScale(10),
    width :moderateScale(39),
    height:moderateScale(19),
    borderRadius:10,
    backgroundColor:'#E1E1E1',
    alignItems:'center'
  }
});
