import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNav";
import StackNavigator from "./StackNav";
import Team from "../../Features/TeamPage/Team";
import TeamBoard from "../../Features/TeamBoard/TeamBoard";
import TeamBoardDetail from "../../Features/TeamBoardDetail/TeamBoardDetail";
import Newcard from "../../Features/NewCard/Newcard";
import { Store } from "../../Store/Store";
import changeEmail from "../../Features/ProfilePage/changeEmail";
import changePass from "../../Features/ProfilePage/changePass";
import Notification from "../../Features/Notification/Notification"

const Stack = createStackNavigator();

const Navigator = ({ navigation, route }) => {
  const { isLogged } = Store.getState().LoginReducer;
  return (
    <Stack.Navigator initialRouteName={isLogged ? "BottomTab" : "StackNav"}>
      <Stack.Screen
        component={StackNavigator}
        name="StackNav"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={BottomTabNavigator}
        name="BottomTab"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Team}
        name="Team"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={TeamBoard}
        name="TeamBoard"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={TeamBoardDetail}
        name="TeamBoardDetail"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Newcard}
        name="Newcard"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={changeEmail}
        name="changeEmail"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={changePass}
        name="changePass"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Notification}
        name="Notification"
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};
export default Navigator;
