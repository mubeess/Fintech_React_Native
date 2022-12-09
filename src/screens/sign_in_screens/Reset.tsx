import { StyleSheet } from "react-native";
import React from "react";
import AppContainer from "../../components/common/AppContainer";
import BackButton from "../../components/common/BackButton";
import AppHeader from "../../components/common/AppHeader";
import RegularText from "../../components/common/RegularText";
import useValidatedInput from "../../hooks/useValidatedInput";
import { Button, View } from "native-base";
import { RootStackScreenProps } from "../../navigation/RootNavigation.types";
import { Routes } from "../../utils/constants";

const Reset = ({ navigation }: RootStackScreenProps<Routes.RESET_PASSWORD>) => {
  const [pin, pinError, pinInput] = useValidatedInput({
    placeholder: "Reset pin",
    errorMessage: "Pin must be 6 digit",
    inputType: "text",
    textValue: "Enter 6-digit reset pin",
  });
  const [password, passwordError, passwordInput] = useValidatedInput({
    placeholder: "Password",
    errorMessage: "Password is required.",
    inputType: "password",
    textValue: "Password",
  });

  const [confimPassword, confirmPasswordError, confirmPasswordInput] =
    useValidatedInput({
      placeholder: "Password",
      errorMessage: "Password is required.",
      inputType: "password",
      textValue: "Confirm new password",
    });
  return (
    <AppContainer>
      <BackButton />
      <AppHeader style={styles.head} text="Reset password" />
      <RegularText text="Enter reset pin and your new password." />
      <View style={styles.inputs}>
        {pinInput}
        {passwordInput}
        {confirmPasswordInput}
        <RegularText style={styles.timer} text="5:00" />
      </View>
      <Button
        onPress={() => {
          navigation.navigate(Routes.SUCCESS, {
            title: "",
            body: "Password reset successful!",
            buttonText: "Back to Login",
          });
        }}
        isDisabled={
          !password ||
          passwordError ||
          !confimPassword ||
          confirmPasswordError ||
          !pin ||
          pinError
        }
        style={styles.button}
      >
        Reset Password
      </Button>
    </AppContainer>
  );
};
const styles = StyleSheet.create({
  head: {
    marginTop: 40,
    marginBottom: 14,
  },
  button: {
    marginTop: 30,
  },
  inputs: {
    marginTop: 20,
    position: "relative",
  },
  timer: {
    position: "absolute",
    right: 0,
    marginTop: 20,
    color: "#595959",
    fontSize: 13.333,
  },
});
export default Reset;
