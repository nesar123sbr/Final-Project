import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Nunito from '../Nunito';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function HeaderTeam({title1, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.icon}>
          <MaterialIcons
            name="arrow-back-ios"
            size={moderateScale(18)}
            color="white"
          />
        </View>
      </TouchableOpacity>
      <View style={styles.header}>
        <Nunito
          title={title1}
          color="white"
          type="Bold"
          size={moderateScale(18)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:moderateScale(16),
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: '#4859EF',
    width: '100%',
    height: moderateScale(80),
  },

  icon: {
    
  },
  header:{
      paddingLeft:'30%'
}
});
