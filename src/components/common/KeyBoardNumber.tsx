import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import RegularText from "./RegularText";
type KeyBoardNumberProps = {
  value?: string;
  Icon?: React.FC;
  onPress?: () => void;
};
const KeyBoardNumber = ({ value = "", Icon, onPress }: KeyBoardNumberProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {!Icon && <RegularText style={styles.keypad} text={value} />}

      {Icon && <Icon />}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  keypad: {
    fontSize: 27.65,
    fontWeight: "700",
  },
});
export default KeyBoardNumber;
