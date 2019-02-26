import React, { Component } from "react";
import Input from "./Input";

export default class Password extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Input
        autoComplete="password"
        secureTextEntry={true}
        textContentType="password"
        {...this.props}
      />
    );
  }
}
