import React, { useState } from "react";
import { Button, View } from "native-base";
import { EyeClosed, EyeOpenIcon, QuolaLogo } from "../../../assets/svg/Index";
import AppContainer from "../../components/common/AppContainer";
import AppHeader from "../../components/common/AppHeader";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppInput from "../../components/common/AppInput";
import AppLink from "../../components/common/AppLink";
import RegularText from "../../components/common/RegularText";
import Biometric from "../../components/common/Biometric";
import { Routes } from "../../utils/constants";
import { RootStackScreenProps } from "../../navigation/RootNavigation.types";

const SignInIndex = ({ navigation }: RootStackScreenProps<Routes.SIGN_IN>) => {
  const [secureText, setSeecureText] = useState(true);
  // const { isLoading, request } = useAxios();

  // const { setId } = useAuthStore();

  // const signInService = async () => {
  //   const { data } = await request({
  //     url: "/auth/signin",
  //     data: {
  //       email,
  //       password,
  //     },
  //     failureMessages: {
  //       400: "Invalid email or password.",
  //       401: "Invalid email or password.",
  //     },
  //   });

  //   if (data) {
  //     const { jwtToken, payload } = data.idToken;
  //     const { sub: id } = payload;

  //     setItem("jwtToken", jwtToken);
  //     setId(id);
  //   }
  // };

  return (
    <AppContainer>
      <QuolaLogo style={styles.logo} height={56} width={56} color="#06283D" />
      <AppHeader text="Welcome!" />
      <AppInput
        placeHolder="Enter your mobile number"
        isNumber
        label="Phone Number"
      />
      <AppInput
        secureText={secureText}
        Icon={() =>
          secureText ? (
            <TouchableOpacity onPress={() => setSeecureText(false)}>
              <EyeClosed height={24} width={24} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setSeecureText(true)}>
              <EyeOpenIcon height={24} width={24} />
            </TouchableOpacity>
          )
        }
        placeHolder="Password"
        label="Password"
      />
      <View style={styles.links}>
        <AppLink
          onPress={() => navigation.navigate(Routes.CHANGE_DEVICE)}
          text="Change Device"
        />
        <AppLink
          onPress={() => navigation.navigate(Routes.FORGOT_PASSWORD)}
          text="Forgot Password"
        />
      </View>
      <Button
        onPress={() => navigation.navigate(Routes.SET_PASSCODE)}
        style={styles.button}
      >
        Next
      </Button>

      <View style={styles.bottomLink}>
        <RegularText text="Don’t have an account?" />
        <AppLink style={styles.linText} text="Create one" />
      </View>
      <Biometric />
    </AppContainer>
  );
};
const styles = StyleSheet.create({
  links: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
  },
  button: {
    marginTop: 48,
  },
  bottomLink: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 38,
  },
  logo: {
    marginBottom: 30,
  },
  linText: {
    marginLeft: 10,
  },
});
export default SignInIndex;
