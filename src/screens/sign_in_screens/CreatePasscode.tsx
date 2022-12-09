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

const CreatePasscode = ({
  navigation,
}: RootStackScreenProps<Routes.SET_PASSCODE>) => {
  const [values, setValue] = useState("");

  const getValues = (value: string) => {
    setValue(value);
  };

  const onButtonPress = () => {
    navigation.navigate(Routes.CONFIRM_PASSCODE);
  };
  return (
    <AppContainer>
      <BackButton />
      <AppHeader style={styles.header} text="Create a passcode" />
      <RegularText text="Create a passcode to sign into your account securely" />
      <VirtualKeyBoard onChange={(val) => getValues(val)} />
      <Button
        isDisabled={values.length < 6}
        onPress={onButtonPress}
        style={styles.button}
      >
        Next
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
export default CreatePasscode;
