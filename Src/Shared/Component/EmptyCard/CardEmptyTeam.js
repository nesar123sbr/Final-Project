import React from 'react'
import { StyleSheet,TouchableOpacity, View } from 'react-native'
import {moderateScale} from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Nunito from '../Nunito'
export default function CardEmptyTeam({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialIcons
            name='library-add'
            color='blue'
            size={moderateScale(65)}
            />
        <Nunito 
        title='Create New Board'
        size={moderateScale(14)}
        color='blue'/> 
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: moderateScale(165),
        height: moderateScale(175),
        borderRadius: 5,
        backgroundColor: '#EFF1FF',
        opacity: 5,
        borderWidth: 1,
        borderStyle:'dashed',
        borderColor:'blue',
        padding: moderateScale(14),
        alignItems:'center',
        justifyContent:'center'
      },

})
