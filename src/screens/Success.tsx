import { View, StyleSheet } from "react-native";
import React from "react";
import AppContainer from "../components/common/AppContainer";
import BackButton from "../components/common/BackButton";
import { SuccessSvg } from "../../assets/svg/Index";
import AppHeader from "../components/common/AppHeader";
import RegularText from "../components/common/RegularText";
import { Button } from "native-base";
import { RootStackScreenProps } from "../navigation/RootNavigation.types";
import { Routes } from "../utils/constants";

const Success = ({
  route,
  navigation,
}: RootStackScreenProps<Routes.SUCCESS>) => {
  const { title, body, buttonText } = route.params;

  return (
    <AppContainer>
      <BackButton />
      <View style={styles.subContainer}>
        <SuccessSvg />
        <AppHeader text={title} />
        <RegularText style={styles.text} text={body} />
      </View>
      <Button
        onPress={() => navigation.navigate(Routes.DEFAULT_SIGN)}
        style={styles.button}
      >
        {buttonText}
      </Button>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    marginBottom: 20,
  },
});
export default Success;
