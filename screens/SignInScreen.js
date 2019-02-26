import React from "react";
import { AsyncStorage, Button, StyleSheet, View } from "react-native";
import signIn from "../api/signIn.api";

import { Input, Password } from "../components";
export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: null,
      password: null,
    };

    this._signInAsync = this._signInAsync.bind(this);
  }
  static navigationOptions = {
    title: "Sign In",
  };

  _signInAsync = async () => {
    const token = await signIn(this.state.userName, this.state.password);
    console.log("token is", token);
    if (token) {
      await AsyncStorage.setItem("userToken", token);
      this.props.navigation.navigate("Main");
    }
  };

  render() {
    return (
      <View>
        <Input onChangeText={userName => this.setState({ userName })}>
          email address
        </Input>
        <Password onChangeText={password => this.setState({ password })}>
          password
        </Password>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
});
