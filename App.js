import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./app/components/Home";
import UserScreen from "./app/components/Users";

const AppNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Users: UserScreen
  },
  {
    drawerWidth: 300,
    drawerBackgroundColor: "cyan"
  }
);

// const AppNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen
//     },
//     Users: {
//       screen: UserScreen
//     }
//   },
//   {
//     initialRouteName: "Home"
//   }
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default createAppContainer(AppNavigator);
