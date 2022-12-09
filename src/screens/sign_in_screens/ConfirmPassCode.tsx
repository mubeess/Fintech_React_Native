import { StyleSheet } from "react-native";
import React, { useState } from "react";
import AppContainer from "../../components/common/AppContainer";
import BackButton from "../../components/common/BackButton";
import AppHeader from "../../components/common/AppHeader";
import RegularText from "../../components/common/RegularText";
import VirtualKeyBoard from "../../components/common/VirtualKeyBoard";
import { Button } from "native-base";
import { Routes } from "../../utils/constants";
import { RootStackScreenProps } from "../../navigation/RootNavigation.types";

const ConfirmPasscode = ({
  navigation,
}: RootStackScreenProps<Routes.CONFIRM_PASSCODE>) => {
  const [values, setValue] = useState("");

  const getValues = (value: string) => {
    setValue(value);
  };

  const onButtonPress = () => {
    navigation.navigate(Routes.SUCCESS, {
      title: "Passcode created",
      body: "You can now sign into your account with your passcode.",
      buttonText: "Ok",
    });
  };
  return (
    <AppContainer>
      <BackButton />
      <AppHeader style={styles.header} text="Confirm passcode" />
      <RegularText text="Re-enter your pin to ensure you remember it correctly." />
      <VirtualKeyBoard onChange={(val) => getValues(val)} />
      <Button
        isDisabled={values.length < 6}
        onPress={onButtonPress}
        style={styles.button}
      >
        Confirm
      </Button>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    marginBottom: 24,
  },
  button: {
    marginTop: "auto",
    marginBottom: 10,
  },
});
export default ConfirmPasscode;
