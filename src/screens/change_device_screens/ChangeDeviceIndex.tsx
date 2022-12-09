import React from "react";
import { RootStackScreenProps } from "../../navigation/RootNavigation.types";
import { Routes } from "../../utils/constants";
import AppContainer from "../../components/common/AppContainer";
import BackButton from "../../components/common/BackButton";
import { Button, View } from "native-base";
import { Image, StyleSheet } from "react-native";
import AppHeader from "../../components/common/AppHeader";
import RegularText from "../../components/common/RegularText";

const ChangeDeviceIndex = ({
  navigation,
}: RootStackScreenProps<Routes.CHANGE_DEVICE>) => {
  return (
    <AppContainer>
      <BackButton />
      <View style={styles.content}>
        <Image
          source={require("../../../assets/images/exclamation.png")}
          style={styles.image}
        />
        <AppHeader text="This is not your mobile device!" />
        <RegularText
          style={styles.text}
          text="Please login using your registered mobile device. If you would like to proceed using this device, please click on “change device” and follow the instructions"
        />
      </View>
      <Button
        onPress={() => navigation.navigate(Routes.ENTER_PHONE)}
        style={styles.button}
      >
        Change Device
      </Button>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 108,
    width: 108,
    marginBottom: 24,
  },
  text: {
    textAlign: "justify",
    marginTop: 22,
  },
  button: {
    marginBottom: 20,
  },
});

export default ChangeDeviceIndex;
