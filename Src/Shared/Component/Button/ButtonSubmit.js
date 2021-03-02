import React from 'react'
import {TouchableOpacity ,StyleSheet} from 'react-native'
import Nunito from '../Nunito'
import {moderateScale} from 'react-native-size-matters'

export default function ButtonSubmit ({buttonName,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonSubContainer}>
        <Nunito
        title={buttonName}
        type="SemiBold"
        size={moderateScale(16)}
        color='white'
         />
      </TouchableOpacity>
        )
}
const styles = StyleSheet.create({

    buttonSubContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:moderateScale(14),
        width: moderateScale(344),
        height: moderateScale(46),
        backgroundColor: '#4859EF',
        borderRadius: 35,
        elevation:5
    },

})

