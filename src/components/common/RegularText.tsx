import { Text, StyleProp, TextStyle, StyleSheet } from "react-native";
import React from "react";

type TextProps = {
  style?: StyleProp<TextStyle>;
  text: string;
};

const RegularText = ({ style, text = "" }: TextProps) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "BasisGrotec",
  },
});
export default RegularText;
