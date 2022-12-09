import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Routes } from "../utils/constants";

export type RootStackParamList = {
  [Routes.FORGOT_PASSWORD]: undefined;
  [Routes.SET_PASSWORD]: { email: string };
  [Routes.SIGN_IN]: undefined;
  [Routes.SIGN_UP]: undefined;
  [Routes.VERIFY_ACCOUNT]: { email: string };
  [Routes.SET_PASSCODE]: undefined;
  [Routes.CONFIRM_PASSCODE]: undefined;
  [Routes.SUCCESS]: { title: string; body: string; buttonText: string };
  [Routes.DEFAULT_SIGN]: undefined;
  [Routes.RESET_PASSWORD]: undefined;
  [Routes.CHANGE_DEVICE]: undefined;
  [Routes.ENTER_PHONE]: undefined;
  [Routes.ENTER_TRANSACTION_PIN]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
