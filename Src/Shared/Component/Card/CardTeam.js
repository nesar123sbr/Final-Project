import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Nunito from '../Nunito';
import {moderateScale} from 'react-native-size-matters';

export default function CardTeam({title1, title2, count,onTap}) {
  return (
    <TouchableOpacity onPress={onTap}>
      <View style={styles.container}>
        <Nunito title={title1} type="Bold" size={moderateScale(18)} />
        <Nunito title={`on ${title2}`} size={moderateScale(16)} />
        <View style={styles.footerCard}>
          <Nunito title="Active Issues" size={moderateScale(16)} />
          <View style={styles.countItem}>
            <Nunito title={count} size={moderateScale(14)} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    
    borderRadius: 5,
    backgroundColor: 'white',
    opacity: 5,
    borderWidth: 1,
    borderColor:'grey',
    borderRadius:6,
    shadowRadius:5,
    elevation:3,
    padding: moderateScale(14),
    marginRight:moderateScale(8),
    marginBottom:moderateScale(8)
  },
  footerCard: {
    marginTop: moderateScale(50),
  },
  countItem: {
    width: moderateScale(39),
    height: moderateScale(19),
    borderRadius: 10,
    marginTop:moderateScale(10),
    backgroundColor: '#E1E1E1',
    alignItems: 'center',
  },
});
