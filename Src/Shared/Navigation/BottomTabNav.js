import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Feather from "react-native-vector-icons/Feather";
import Landing from "../../Features/LandingPage/Landing";
import Profile from "../../Features/ProfilePage/Profile";
import Task from "../../Features/TaskPage/Task";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Boards"
      activeColor="#001aff"
      barStyle={{
        backgroundColor: "white",
        borderTopWidth: 0.5,
        borderTopColor: "grey",
      }} //backgroundColor: "#2196f3" //}}
    >
      <Tab.Screen
        name="Boards"
        component={Landing}
        options={{
          tabBarLabel: "Boards",
          tabBarIcon: ({ color }) => (
            <Feather name="clipboard" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={Task}
        options={{
          tabBarLabel: "Task",
          tabBarIcon: ({ color }) => (
            <Feather name="check-square" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Feather name="smile" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
