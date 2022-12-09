import React, { useState } from "react";
import AppContainer from "../../components/common/AppContainer";
import BackButton from "../../components/common/BackButton";
import AppHeader from "../../components/common/AppHeader";
import RegularText from "../../components/common/RegularText";

import { Button } from "native-base";
import { StyleSheet } from "react-native";

import { RootStackScreenProps } from "../../navigation/RootNavigation.types";
import { Routes } from "../../utils/constants";
import VirtualKeyBoard from "../../components/common/VirtualKeyBoard";
import AppModal from "../../components/common/AppModal";

const EnterTransactionPin = ({
  navigation,
}: RootStackScreenProps<Routes.ENTER_TRANSACTION_PIN>) => {
  const [phone, setPhone] = useState("");
  const [count, setIsCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const onChange = (e: string) => {
    setPhone(e);
    console.log(e);
  };
  return (
    <AppContainer>
      <BackButton />
      <AppHeader style={styles.head} text="Enter transaction pin" />
      <RegularText text="Please enter your 4-digit pin for transactions." />
      <VirtualKeyBoard inputs={4} onChange={(e) => onChange(e)} />
      <Button
        isDisabled={phone.length < 4}
        onPress={() => {
          if (count == 4) {
            setIsOpen(true);
          }
          setIsCount(count + 1);
        }}
        style={styles.button}
      >
        Confirm
      </Button>
      <AppModal
        isOpened={isOpen}
        body="Your account has been locked due to too many failed login attempts"
        title="Exceeded allowed transaction pin attempts"
      >
        <Button>Contact Support</Button>
      </AppModal>
    </AppContainer>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
    marginBottom: 20,
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
export default EnterTransactionPin;
