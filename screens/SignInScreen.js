import React from "react";
import { AsyncStorage, Button, StyleSheet, View } from "react-native";

import Input from "../components/Input";

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Sign In",
  };

  render() {
    return (
      <View>
        <Input>Email Address</Input>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Main");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
});
