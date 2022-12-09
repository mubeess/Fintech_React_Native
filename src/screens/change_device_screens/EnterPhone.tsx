import React, { useState } from "react";
import AppContainer from "../../components/common/AppContainer";
import BackButton from "../../components/common/BackButton";
import AppHeader from "../../components/common/AppHeader";
import RegularText from "../../components/common/RegularText";
import AppInput from "../../components/common/AppInput";
import { Button } from "native-base";
import { StyleSheet } from "react-native";

import { RootStackScreenProps } from "../../navigation/RootNavigation.types";
import { Routes } from "../../utils/constants";

const EnterPhone = ({
  navigation,
}: RootStackScreenProps<Routes.ENTER_PHONE>) => {
  const [phone, setPhone] = useState("");
  return (
    <AppContainer>
      <BackButton />
      <AppHeader style={styles.head} text="Enter phone number" />
      <RegularText text="Please enter phone number associated with this device." />
      <AppInput
        onChange={(e) => {
          setPhone(e);
        }}
        placeHolder="Enter your mobile number"
        isNumber
        label="Phone Number"
      />
      <Button
        isDisabled={phone.length < 6}
        onPress={() => {
          navigation.navigate(Routes.ENTER_TRANSACTION_PIN);
        }}
        style={styles.button}
      >
        Reset password
      </Button>
    </AppContainer>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 40,
  },
  link: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButton: {
    marginTop: 20,
  },
  head: {
    marginTop: 40,
    marginBottom: 24,
  },
});
export default EnterPhone;
