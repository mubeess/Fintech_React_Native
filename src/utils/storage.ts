import { getItemAsync, setItemAsync } from "expo-secure-store";
import { Platform } from "react-native";

export const getItem = async (key: string) => {
  if (Platform.OS === "web") {
    return localStorage.getItem(key);
  }

  return getItemAsync(key);
};

// storage APIs have an expected any as they can store any json
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setItem = async (key: string, value: any) => {
  if (Platform.OS === "web") {
    return localStorage.setItem(key, value);
  }

  return setItemAsync(key, value);
};
