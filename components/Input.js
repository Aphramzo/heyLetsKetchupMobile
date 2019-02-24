import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import Colors from "../constants/Colors";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, ...rest } = this.props;

    return <TextInput style={styles.input} placeholder={children} {...rest} />;
  }
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 50,
    borderColor: Colors.inputBorderColor,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
