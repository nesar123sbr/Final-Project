import React from 'react'
import { View, Text } from 'react-native'

export default function RenderRowCard({columnTitle1}) {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>{columnTitle1}</Text>
        </View>
    )
}
