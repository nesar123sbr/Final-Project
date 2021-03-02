import React from 'react';
import {View,ActivityIndicator} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export default function Loading() {
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1,opacity:5}}>
      <ActivityIndicator size={moderateScale(30)} color="#00ff00" />
    </View>
  );
}
