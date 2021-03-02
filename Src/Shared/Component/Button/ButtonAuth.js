import React from 'react'
import {TouchableOpacity ,StyleSheet} from 'react-native'
import Nunito from '../Nunito'
import {moderateScale} from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function ButtonAuth ({buttonName,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonAuthcontaine}>
        <Nunito
        title={buttonName}
        type="SemiBold"
        size={moderateScale(16)}
        color='blue'/>
        <MaterialIcons
        name='arrow-forward'
        color='blue'
        size={moderateScale(16)}/>
        </TouchableOpacity>
        )
}
const styles = StyleSheet.create({

    buttonAuthcontaine:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: moderateScale(14),
        width: moderateScale(122),
        height: moderateScale(46),
        backgroundColor: '#EFF1FF',
        borderRadius: 35,
        elevation:5,
    }

})

