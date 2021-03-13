import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Nunito from '../Nunito';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
export default function HeaderMember({title1, onPress,onPress1}) {
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
      <TouchableOpacity onPress={onPress1}>
        <View style={styles.icon}>
          <Ionicons
            name="checkmark-done-sharp"
            size={moderateScale(18)}
            color="white"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:moderateScale(16),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between",
    backgroundColor: '#4859EF',
    width: '100%',
    height: moderateScale(80),
  },

  icon: {
    
  },
  header:{
  
}
});
