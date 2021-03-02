import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../Auth/Login/Login';
import Register from '../../Auth/Register/Register';



const StackNav = createStackNavigator();

const StackNavigator = ({navigation, route}) => {
  return (
    <StackNav.Navigator initialRouteName="Login">
      <StackNav.Screen
        component={Register}
        name="Register"
        options={{headerShown: false}}
      />
      <StackNav.Screen
        component={Login}
        name="Login"
        options={{headerShown: false}}
      />
  
    </StackNav.Navigator>
  );
};
export default StackNavigator;
