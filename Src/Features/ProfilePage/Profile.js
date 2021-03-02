import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Lonceng from 'react-native-vector-icons/FontAwesome';
import PanahKanan from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import PanahBawah from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from 'react-native-size-matters';
import ModalDropdown from 'react-native-modal-dropdown';
import { connect } from 'react-redux'
import {logOut} from '../../Auth/Login/Redux/Action'

function Profile(props) {
  const {navigation} = props
  const logOut = () => {
    props.logOut()
    navigation.navigate('Login');
  };
  return (
    <View style={{marginLeft: 15}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'flex-start',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 25, marginTop:10}}>Me</Text>

        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 10,
            marginRight:10
          }}>
          <TouchableOpacity >
            <Lonceng name="bell" color="grey" size={moderateScale(25)} />
          </TouchableOpacity>
          <TouchableOpacity onPress={logOut}>
            <PanahKanan
              name="arrow-right-box"
              color="grey"
              size={moderateScale(25)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            borderRadius: 100 / 2,
            backgroundColor: 'green',
            color: 'white',
            fontSize: moderateScale(50),
            width: 80,
            height: 80,
            textAlign: 'center',
            marginTop:10
          }}>
          H
        </Text>
        <Text style={{color: 'grey', marginLeft:20, marginTop:15, }}>YOUR PHOTO</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingHorizontal: widthPercentageToDP(20),
        }}>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#e1d3f0',
              color: '#00008b',
              width: widthPercentageToDP(20),
              alignSelf: 'center',
              borderRadius: 20,
              height: 35,
              fontSize: moderateScale(13),
              textAlign: 'center',
              alignContent: 'center',
              paddingTop: 7,
              fontWeight:'bold'
            }}>
            Upload
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              color: 'grey',
              fontWeight: 'bold',
              width: widthPercentageToDP(20),
              alignSelf: 'center',
              borderRadius: 20,
              height: 35,
              fontSize: moderateScale(13),
              textAlign: 'center',
              alignContent: 'center',
              paddingTop: 7,
              textDecorationLine: 'underline',
            }}>
            Remove
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{marginBottom: 10, color: 'grey', marginTop:15}}>PERSONAL INFO</Text>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          width: widthPercentageToDP(90)
        }}
      />

      <Text style={{marginBottom: 5, fontSize: 10, marginTop:15, marginLeft:10}}>Name</Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: '#c9c9c5',
          borderRadius: 5,
          height: heightPercentageToDP(5),
          width: widthPercentageToDP(90),
          paddingLeft: 10,
        }}
      />
      <Text style={{marginBottom: 5, fontSize: 10, marginTop: 15, marginLeft:10}}>Role</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 2,
          borderColor: '#c9c9c5',
          borderRadius: 5,
          height: heightPercentageToDP(5),
          width: widthPercentageToDP(90),
        }}>
        <ModalDropdown
          options={['Designer', 'Front-End', 'Back-End', 'React-Native']}
          style={{
            height: heightPercentageToDP(5),
            width: widthPercentageToDP(80),
            paddingLeft: 10,
            justifyContent: 'center',
          }}
        />
        <PanahBawah name="arrow-drop-down" size={moderateScale(20)} />
      </View>
      <Text style={{marginBottom: 5, fontSize: 10, marginTop:15, marginLeft:10}}>Industry</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 2,
          borderColor: '#c9c9c5',
          borderRadius: 5,
          height: heightPercentageToDP(5),
          width: widthPercentageToDP(90),
        }}>
        <ModalDropdown
          options={['None']}
          style={{
            height: heightPercentageToDP(5),
            width: widthPercentageToDP(80),
            paddingLeft: 10,
            justifyContent: 'center',
            color: 'grey',
          }}
        />
        <PanahBawah name="arrow-drop-down" size={moderateScale(20)} />
      </View>

      <Text style={{marginBottom: 5, fontSize: 10, marginTop:15, marginLeft:10}}>Company Name</Text>
      <TextInput
        placeholder="none"
        placeholderTextColor="grey"
        style={{
          borderWidth: 2,
          borderColor: '#c9c9c5',
          borderRadius: 5,
          height: heightPercentageToDP(5),
          width: widthPercentageToDP(90),
          paddingLeft: 10,
          marginBottom: 10,
        }}
      />
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          width: widthPercentageToDP(90),
          marginTop: 10,
        }}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginRight: 30,
          marginTop: 10,
        }}>
        <Text style={{fontWeight: 'bold', marginTop:5}}>Email Adress</Text>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity>
            <Text
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: '#ffe9d9',
                fontWeight: 'bold',
                color: 'orange',
                borderRadius: 20,
                alignContent: 'center',
              }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Text >Your email adress is </Text>
        <Text style={{fontWeight: 'bold'}}>hi@hello.mail</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          width: widthPercentageToDP(90),
          marginTop: 10,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 30,
          marginTop: 15,
        }}>
        <Text style={{marginTop:5, fontWeight:'bold'}}>Password</Text>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity>
            <Text
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: '#ffe9d9',
                color: 'orange',
                borderRadius: 20,
                fontWeight: 'bold',
                alignContent: 'center',
              }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  logOut
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
