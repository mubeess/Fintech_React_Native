import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootNavigation.types";
import { Routes } from "../utils/constants";
import SignInIndex from "../screens/sign_in_screens/SignInIndex";
import CreatePasscode from "../screens/sign_in_screens/CreatePasscode";
import ConfirmPassCode from "../screens/sign_in_screens/ConfirmPassCode";
import DefaultSingIn from "../screens/sign_in_screens/DefaultSingIn";
import ForgotPassword from "../screens/sign_in_screens/ForgotPassword";
import Reset from "../screens/sign_in_screens/Reset";
import Success from "../screens/Success";
import ChangeDeviceIndex from "../screens/change_device_screens/ChangeDeviceIndex";
import EnterPhone from "../screens/change_device_screens/EnterPhone";
import EnterTransactionPin from "../screens/change_device_screens/EnterTransactionPin";

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking = {
  prefixes: ["quola://", "https://quola.ng", "https://*.quola.ng"],
};

export default function RootNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName={Routes.DEFAULT_SIGN}
        screenOptions={{ headerShown: false }}
      >
        <>
          <Stack.Screen name={Routes.DEFAULT_SIGN} component={DefaultSingIn} />
          <Stack.Screen name={Routes.SIGN_IN} component={SignInIndex} />
          <Stack.Screen name={Routes.SET_PASSCODE} component={CreatePasscode} />
          <Stack.Screen
            name={Routes.CONFIRM_PASSCODE}
            component={ConfirmPassCode}
          />
          <Stack.Screen name={Routes.SUCCESS} component={Success} />
          <Stack.Screen
            name={Routes.FORGOT_PASSWORD}
            component={ForgotPassword}
          />
          <Stack.Screen name={Routes.RESET_PASSWORD} component={Reset} />
          <Stack.Screen
            name={Routes.CHANGE_DEVICE}
            component={ChangeDeviceIndex}
          />
          <Stack.Screen name={Routes.ENTER_PHONE} component={EnterPhone} />
          <Stack.Screen
            name={Routes.ENTER_TRANSACTION_PIN}
            component={EnterTransactionPin}
          />

          {/* <Stack.Screen name={} component={} /> */}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
