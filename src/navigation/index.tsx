import React from "react";
import { NativeBaseProvider } from "native-base";
import RootNavigator from "./RootNavigator";
import theme from "./Theme";

export default function Index() {
  return (
    <NativeBaseProvider theme={theme}>
      <RootNavigator />
    </NativeBaseProvider>
  );
}
