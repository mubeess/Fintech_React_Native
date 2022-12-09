import { Button, View } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { QuolaLogo } from "../../../assets/svg/Index";
import AppContainer from "../../components/common/AppContainer";
import AppHeader from "../../components/common/AppHeader";
import AppLink from "../../components/common/AppLink";
import AppModal from "../../components/common/AppModal";
import RegularText from "../../components/common/RegularText";
import VirtualKeyBoard from "../../components/common/VirtualKeyBoard";
import { RootStackScreenProps } from "../../navigation/RootNavigation.types";
import { Routes } from "../../utils/constants";

const DefaultSingIn = ({
  navigation,
}: RootStackScreenProps<Routes.DEFAULT_SIGN>) => {
  const [isOpen, setIsOpen] = useState(false);
  const onChange = (e: string) => {
    console.log(e);
  };
  return (
    <AppContainer>
      <QuolaLogo style={styles.logo} height={56} width={56} color="#06283D" />
      <AppHeader text="Welcome, Mubarak" />
      <RegularText
        style={styles.text}
        text="Please enter your login passcode"
      />
      <VirtualKeyBoard withBiometric onChange={(e) => onChange(e)} />
      <View style={styles.signOut}>
        <AppLink onPress={() => setIsOpen(true)} text="Sign Out" />
      </View>
      <AppModal
        title="Sign Out"
        body="You’ll have to create another passcode to sign in again."
        isOpened={isOpen}
      >
        <Button onPress={() => setIsOpen(false)} style={styles.button}>
          Cancel
        </Button>
        <Button
          bg="transparent"
          _text={{
            color: "primary.800",
          }}
          onPress={() => {
            navigation.navigate(Routes.SIGN_IN);
            setIsOpen(false);
          }}
          style={styles.button}
          variant="outline"
        >
          SIGN OUT
        </Button>
      </AppModal>
    </AppContainer>
  );
};
const styles = StyleSheet.create({
  logo: {
    marginBottom: 30,
  },
  text: {
    marginTop: 16,
  },
  signOut: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});
export default DefaultSingIn;
