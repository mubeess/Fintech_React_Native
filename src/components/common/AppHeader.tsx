import React from "react";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import RegularText from "./RegularText";

type AppHeaderProps = {
  text: string;
  style?: StyleProp<TextStyle>;
};

const AppHeader = ({ text = "", style }: AppHeaderProps) => (
  <RegularText style={[styles.text, style]} text={text} />
);

const styles = StyleSheet.create({
  text: {
    fontSize: 23.04,
    fontWeight: "bold",
    fontFamily: "BasisGrotec",
  },
});

export default AppHeader;
