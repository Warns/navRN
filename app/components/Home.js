import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title={"Go To Users"}
          onPress={() =>
            this.props.navigation.navigate("Users", {
              userId: 123,
              userName: "Mark",
              userLastName: "Wahlberg"
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;
