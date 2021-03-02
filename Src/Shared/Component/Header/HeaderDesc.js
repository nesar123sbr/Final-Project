import React from 'react';
import {StyleSheet, View,TouchableOpacity} from 'react-native';
import Nunito from '../Nunito';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale} from 'react-native-size-matters';
export default function Header({CardTitle, CardName1, CardName2}) {
  return (
    <View style={styles.container}>
      <View style={styles.ButtonDone}>
        <TouchableOpacity>
        <MaterialCommunityIcons
          name="close"
          color="white"
          size={moderateScale(22)}
        />
        </TouchableOpacity>
        <View style={{flexDirection: 'row',paddingRight:moderateScale(10)}}>
          <TouchableOpacity>
          <MaterialCommunityIcons
            name="check"
            color="white"
            size={moderateScale(22)}
            style={{paddingRight: moderateScale(5)}}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Nunito title="Done" color="white" size={moderateScale(17)} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.title}>
        <Nunito title="idev project" color="white" size={moderateScale(18)}/>
      </View>
      <View style={styles.desc}>
        <Nunito title="idevby on meja" color="white" style={{paddingRight:3}} />
        <Nunito title="|" color='white' style={{paddingRight:3}}/>
        <Nunito title="idevfffff" color="white" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: moderateScale(130),
    backgroundColor: '#4859EF',
    
  },
  ButtonDone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:moderateScale(10),
    paddingLeft:moderateScale(15)
  },
  desc:{
      flexDirection:'row',
      paddingTop:moderateScale(5),
      paddingLeft:moderateScale(20)
  },
  title:{
      paddingTop:moderateScale(25),
      paddingLeft:moderateScale(20)
  }
});
