import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import NunitoWithMax from '../NunitoWithMax'
import Nunito from '../Nunito'
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from 'react-native-size-matters';

export default function CardBoardDetail({
  title1,title2,onPress
}) {
  return (
    
    <View style={styles.cardContainer}>
      <View style={styles.labelTitle}>
        <TouchableOpacity onPress={onPress}>
          <Nunito
          title={title1}
          type="SemiBold"
          size={moderateScale(12)}
        />
        </TouchableOpacity>
    </View>
    <View style={styles.labelTitle2}>
        <TouchableOpacity>
          <Nunito
          title={title2}
          type="SemiBold"
          size={moderateScale(10)}
          color='black'
        />
        </TouchableOpacity>
    </View>
    <View style={styles.footerCard}>
      <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
    <TouchableOpacity>
        <Foundation
        name="paperclip"
        color="#80848D"
        size={moderateScale(15)}/>
    </TouchableOpacity>
    <TouchableOpacity style={{paddingLeft:moderateScale(15)}}>
        <FontAwesome5
        name="clipboard-check"
        color="#80848D"
        size={moderateScale(15)}/>
    </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
    <TouchableOpacity>
        <MaterialIcons
        name="arrow-upward"
        color="red"
        size={moderateScale(15)}/>
    </TouchableOpacity>
    <TouchableOpacity style={{paddingLeft:moderateScale(15)}}>
        <Foundation
        name="photo"
        color="blue"
        size={moderateScale(15)}/>
    </TouchableOpacity>
    </View>
    </View>
    
    </View>
    
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    width: moderateScale(200),
    height: moderateScale(150),
    padding:moderateScale(12),
    backgroundColor: '#ffffff',
    borderRadius: moderateScale(4),
    justifyContent:'space-between',
    marginBottom:moderateScale(10),
    elevation:6
  },
  labelTitle:{
    alignSelf: 'flex-start', 
    padding: 5,
    marginLeft:5,
    backgroundColor:'#FFDBDA',
    elevation:10
  },
  labelTitle2:{
    alignSelf: 'flex-start', 
    padding: 5,
    marginLeft:5,
  },
  footerCard:{
      paddingTop:moderateScale(20),
      flexDirection:'row',
      justifyContent:'space-between'
  },
  
});
