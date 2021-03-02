import React, {useState} from 'react';

import {Picker} from '@react-native-picker/picker';
import {View} from 'react-native';

export const Dropdown = (props) => {
  return (
    <View>
      <Picker
        style={{backgroundColor: 'whitesmoke'}}
        onValueChange={() => addList(value)}>
        <Picker.Item
          label="TO DO"
          value="todo"
          onPress={() => setAddList(value)}
        />
        <Picker.Item
          label="On Process"
          value="onprocess"
          onPress={() => setAddList(value)}
        />
        <Picker.Item
          label="Done"
          value="done"
          onPress={() => setAddList(value)}
        />
        <Picker.Item
          label="Testing"
          value="testing"
          onPress={() => setAddList(value)}
        />
      </Picker>
    </View>
  );
};
