import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import RegularText from "./RegularText";
type InputProps = {
  label: string;
  isNumber?: boolean;
  placeHolder?: string;
  secureText?: boolean;
  Icon?: () => JSX.Element;
  onChange?: (e: string) => void;
};
const AppInput = ({
  label,
  isNumber,
  placeHolder,
  secureText = false,
  Icon,
  onChange = () => {
    return;
  },
}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <RegularText text={label} />
      <View
        style={[
          styles.mainInput,
          { justifyContent: isNumber ? "flex-start" : "space-between" },
        ]}
      >
        {isNumber && <RegularText style={styles.inputText} text="+234" />}
        <TextInput
          onChangeText={(e) => onChange(e)}
          secureTextEntry={secureText}
          style={styles.input}
          placeholder={placeHolder}
          keyboardType={isNumber ? "number-pad" : "default"}
        />
        {!isNumber && Icon && <Icon />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 82,
    width: "100%",
    marginTop: 26,
  },
  mainInput: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    marginTop: 16,
    borderRadius: 5,
  },
  inputText: {
    fontSize: 13.3,
    borderRightColor: "#000000",
    borderRightWidth: 1,
    width: 40,
    marginRight: 20,
  },
  input: {
    color: "#000000",
  },
});
export default AppInput;
