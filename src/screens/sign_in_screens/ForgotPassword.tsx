import React, { useState } from "react";
import AppContainer from "../../components/common/AppContainer";
import BackButton from "../../components/common/BackButton";
import AppHeader from "../../components/common/AppHeader";
import RegularText from "../../components/common/RegularText";
import AppInput from "../../components/common/AppInput";
import { Button, View } from "native-base";
import { StyleSheet } from "react-native";
import AppLink from "../../components/common/AppLink";
import { RootStackScreenProps } from "../../navigation/RootNavigation.types";
import { Routes } from "../../utils/constants";
import AppModal from "../../components/common/AppModal";

const ForgotPassword = ({
  navigation,
}: RootStackScreenProps<Routes.FORGOT_PASSWORD>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  return (
    <AppContainer>
      <BackButton />
      <AppHeader style={styles.head} text="Forgot password" />
      <RegularText text="Please enter the phone number  associated with your account. We will send an OTP to reset your password." />
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
        onPress={() => setIsOpen(true)}
        style={styles.button}
      >
        Reset password
      </Button>
      <View style={styles.link}>
        <AppLink onPress={() => navigation.goBack()} text="Go back" />
      </View>
      <AppModal
        isOpened={isOpen}
        title="Reset password"
        body="Reset instructions has been sent to your phone number."
      >
        <Button
          onPress={() => {
            navigation.navigate(Routes.RESET_PASSWORD);
            setIsOpen(false);
          }}
          style={styles.modalButton}
        >
          Ok
        </Button>
      </AppModal>
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
export default ForgotPassword;
