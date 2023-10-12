import React from "react";
import { View, Text, StyleSheet } from "react-native";
const RowText = (props) => {
  const {
    messageOne,
    messageTwo,
    messageOneStyle,
    messageTwoStyle,
    containerStyle,
  } = props;
  return (
    <View style={containerStyle}>
      <Text style={messageOneStyle}>{messageOne}</Text>
      <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default RowText;
