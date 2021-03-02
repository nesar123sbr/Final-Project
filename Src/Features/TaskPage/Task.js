import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {moderateScale} from 'react-native-size-matters';
import {TaskStyle} from './style';
import CheckBox from '@react-native-community/checkbox';
import {connect} from 'react-redux';

function Task() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const Tasks = () => {
    return (
      <TouchableOpacity>
        <View style={{backgroundColor: 'whitesmokes', marginBottom: 20}}>
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              tintColors={{true: '#77CAEF', false: 'black'}}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />

            <Text style={{marginLeft: 15, fontSize: 15}}>
              Meja Putih Inbox Copy Application
            </Text>
          </View>
          <View style={{marginLeft: 45}}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="calendar-month"
                size={moderateScale(15)}
                color="orange"
              />
              <Text style={{marginLeft: 10}}>Due 10 Jan 2020</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'gray'}}>Team Name</Text>
              <Entypo
                name="dot-single"
                size={moderateScale(20)}
                style={{color: 'gray'}}
              />
              <Text style={{color: 'gray'}}>Project Name</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <ScrollView>
        <View>
          <Text style={{fontSize: 20, marginTop: 20, marginBottom: 10}}>
            Tasks
          </Text>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Text>Assigned to me</Text>
            <View style={TaskStyle.totalTask}>
              <Text>10</Text>
            </View>
          </View>
          <Text style={{color: 'gray', marginBottom: 15}}>TO DO</Text>
        </View>
        <Tasks />
      </ScrollView>
      <FlatList
        renderItem={({item}) => {
          return <Tasks />;
        }}
      />
    </>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
