import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import RegularText from "./RegularText";
import Colors from "../../constants/Colors";
type AppLinkProps = {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};
const AppLink = ({ text = "", style, onPress }: AppLinkProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <RegularText style={styles.linkStyle} text={text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkStyle: {
    color: Colors.light.linkColor,
  },
});
export default AppLink;
