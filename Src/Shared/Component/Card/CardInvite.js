import React from 'react'
import { StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Nunito from "../Nunito"
import Entypo from "react-native-vector-icons/Entypo"
import Fontisto from "react-native-vector-icons/Fontisto"
export default function CardInvite() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
            <View>
            <Nunito
            title="Meja Putih Vietnam"
            type="Bold"
            size={moderateScale(16)}
            />
            </View>
            <View style={{flexDirection:"row",alignItems:"center",paddingTop:moderateScale(13)}}>
            <Nunito
            title="Design Task"
            type="Light"
            size={moderateScale(14)}
            />
            <Entypo
            name="dot-single"
            size={moderateScale(22)}
            color="black"
            />
            <Nunito
            title="Meja putih"
            type="Light"
            size={moderateScale(14)}
            />
            </View>
            <View style={{flexDirection:"row",alignItems:"center",paddingTop:moderateScale(17)}}>
            <Fontisto
            name="date"
            size={moderateScale(15)}
            color="orange"
            style={{paddingRight:moderateScale(11)}}
            />
            <Nunito
            title="Due 10 Jan 2021"
            type="Bold"
            size={moderateScale(14)}
            />
            </View>
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:moderateScale(118),
        borderLeftWidth:moderateScale(22),
        borderLeftColor:"pink",
    },
    body:{
        paddingLeft:moderateScale(39),
        paddingTop:moderateScale(16)
    }
})
