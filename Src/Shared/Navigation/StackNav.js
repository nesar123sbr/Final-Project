import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../Auth/Login/Login';
import Register from '../../Auth/Register/Register';
import ForgotPassword from '../../Auth/ForgotPassword/ForgotPassword';
import EmailSent from '../../Auth/EmailSent/EmailSent';
import ResetPassword from '../../Auth/ResetPassword/ResetPassword';
// import ChangeEmail from '../../Auth/ChangeEmail/ChangeEmail';
// import ChangePassword from '../../Auth/ChangePassword/ChangePassword';



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
      <StackNav.Screen
        component={ForgotPassword}
        name="ForgotPassword"
        options={{headerShown: false}}
      />
      <StackNav.Screen
        component={EmailSent}
        name="EmailSent"
        options={{headerShown: false}}
      />
      {/* <StackNav.Screen
        component={ChangeEmail}
        name="ChangeEmail"
        options={{headerShown: false}}
      />           
      <StackNav.Screen
        component={ChangePassword}
        name="ChangePassword"
        options={{headerShown: false}}
      /> */}

       {/* <StackNav.Screen
        component={ResetPassword}
        name="ResetPassword"
        options={{headerShown: false}}
      /> */}
      
  
    </StackNav.Navigator>
  );
};
export default StackNavigator;
