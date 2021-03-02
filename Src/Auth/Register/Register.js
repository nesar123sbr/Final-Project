import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import Nunito from '../../Shared/Component/Nunito';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import ButtonAuth from '../../Shared/Component/Button/ButtonAuth';
import Entypo from 'react-native-vector-icons/Entypo';
import {Input} from 'react-native-elements';
import ButtonSubmit from '../../Shared/Component/Button/ButtonSubmit';
import {RegisterAction} from './Redux/Action';
import {connect} from 'react-redux';
import Loading from '../../Shared/Component/Loading';
import {setLoading} from '../../Store/GlobalAction';

function Register(props) {
  const {navigation} = props;
  const [visibility, setVisibility] = useState(true);
  const [iconName, setIconName] = useState('eye-with-line');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');

  const nameRegister = (text) => {
    setName(text);
  };
  const EmailRegister = (text) => {
    setEmail(text);
  };
  const PasswordRegister = (text) => {
    setPassWord(text);
  };

  const AddUser = () => {
    props.RegisterAction(name, email, password);
  };
  const setPasswordVisibility = () => {
    setVisibility(!visibility);
    setIconName(iconName === 'eye' ? 'eye-with-line' : 'eye');
  };
  const moveToSignIn = () => {
    navigation.navigate('Login');
  };
  return (
    <>
      {props.isLoading ? (
        <Loading />
      ) : (
        <View style={{ margin: moderateScale(16) }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: moderateScale(20),
              
            }}>
            <ButtonAuth
              onPress={() => navigation.navigate('Login')}
              buttonName="Sign In"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <FastImage
              style={{width: 143, height: 23}}
              source={require('../../Assets/Logo/whiteboard.png')}
            />
          </View>

          <View
            style={{
              marginTop: moderateScale(95),
              marginBottom: moderateScale(16),
              
            }}>
            <Nunito type="Bold" title="Sign Up" size={moderateScale(23)} />
          </View>

          <View
            style={{
              marginTop: moderateScale(6),
              justifyContent:'center',
              alignItems:'center'
            }}>
            <Input
              onChangeText={(text) => nameRegister(text)}
              inputContainerStyle={{
                width: moderateScale(330),
                height: moderateScale(50),
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: moderateScale(15),
              }}
              placeholder="Name"
            />
            <Input
              onChangeText={(text) => EmailRegister(text)}
              inputContainerStyle={{
                width: moderateScale(330),
                height: moderateScale(50),
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: moderateScale(15),
              }}
              placeholder="Email"
            />
          <Input
            onChangeText={(text) => PasswordRegister(text)}
            inputContainerStyle={{
              width: moderateScale(330),
              height: moderateScale(50),
              borderStyle: 'solid',
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: moderateScale(15),
            }}
            placeholder="Password 5+ Character"
            secureTextEntry={visibility}
            rightIcon={
              <TouchableOpacity onPress={setPasswordVisibility}>
                <Entypo
                  name={iconName}
                  size={moderateScale(12)}
                  style={{paddingRight: moderateScale(10)}}
                />
              </TouchableOpacity>
            }
          />
          </View>
          <View style={{alignSelf: 'center'}}>
            <ButtonSubmit buttonName="Submit" onPress={AddUser} />
          </View>
          <View style={{alignSelf: 'center', marginTop: moderateScale(24)}}>
            <TouchableOpacity>
              <Nunito
                type="Bold"
                color="#80848D"
                title="Forgot Password"
                size={moderateScale(14)}
                decoration="underline"
              />
            </TouchableOpacity>
          </View>
          <View style={{alignSelf: 'center', marginTop: moderateScale(40)}}>
            <Nunito
              type="Bold"
              color="#80848D"
              title="or continue with"
              size={moderateScale(14)}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: moderateScale(10),
            }}>
            <TouchableOpacity>
              <FastImage
                style={{width: moderateScale(50), height: moderateScale(50)}}
                source={require('../../Assets/Image/glogo.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo
                name="facebook-with-circle"
                size={moderateScale(30)}
                color="#3d5790"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
const mapStateToProps = (state) => ({
  isLoading: state.GlobalReducer.isLoading,
});

const mapDispatchToProps = {
  RegisterAction,
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
