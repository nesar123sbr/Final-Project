import React from 'react'
import { View,StyleSheet } from 'react-native'
import Nunito from '../Nunito'
import FastImage from 'react-native-fast-image'
import { moderateScale } from 'react-native-size-matters'
import ButtonEmptyPage from '../Button/ButtonEmptyPage'
export default function EmptyTeamBoard({onTap}) {
    return (
        <View style={styles.Container}>
            <FastImage
                style={{ width:moderateScale(288), height:moderateScale(164) }}
                source={require("../../../Assets/Image/Saly-17.png")}
              />
              <Nunito
              title='No boards created'
              type='Bold'
              size={moderateScale(20)}
              />
              <Nunito
              title= "Let's make one for your team"
              size={moderateScale(18)}
              />
              <View style={{paddingTop:moderateScale(10)}}>
              <ButtonEmptyPage buttonName='Create Board' onPress={onTap}/>
              </View>
        </View>
    )
}

const styles = StyleSheet.create({
  Container: {
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:moderateScale(150),
    marginHorizontal:moderateScale(40),
  },
})