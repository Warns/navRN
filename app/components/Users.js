import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

class UserScreen extends Component {
  // This kicks in before anything
  static navigationOptions = {
    title: "Users",
    headerStyle: {
      backgroundColor: "#f2115e"
    },
    headerTintColor: "blue",
    headerTitleStyle: { fontWeight: "bold", color: "white" }
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>User Screen</Text>
        <Button
          title={"Go To Home"}
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title={"Go Back"}
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default UserScreen;
