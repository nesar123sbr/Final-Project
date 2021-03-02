import React, {useState} from 'react';
import {View, Text, TextInput, Modal, TouchableOpacity} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {moderateScale} from 'react-native-size-matters';

export const OptionsModal = (props) => {
  const [addOptions, setAddOptions] = useState(false);
  return (
    <>
      <View
        style={{
          height: 400,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 20,
          opacity: 1,
          marginTop: 600,
          alignSelf: 'center',
        }}>
        <TouchableOpacity onPress={() => setAddOptions(false)}>
          <View
            style={{
              padding: 10,
              width: '100%',
              borderRadius: 20,
              marginTop: 30,
              marginLeft: 20,
            }}>
            <Text style={{color: 'black'}}>Share</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAddOptions(false)}>
          <View
            style={{
              padding: 10,
              width: '100%',
              borderRadius: 20,
              marginTop: 5,
              marginLeft: 20,
            }}>
            <Text style={{color: 'black'}}>Archive Card</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
