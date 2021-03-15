import React, {useState} from 'react';

import {Picker} from '@react-native-picker/picker';
import {View} from 'react-native';

export const Dropdown = (props) => {
  return (
    <View>
      <Picker
        style={{backgroundColor: 'whitesmoke'}}
        >
          {props.listData.length && props.listData.map((value,index) => {
            return <Picker.Item
            label={value.title}
            value= {value.title}
            onPress={() => props.onValueChange(value)}
          />
          } )}
        
        
      </Picker>
    </View>
  );
};
