import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
} from "react-native";
import React, { ReactNode } from "react";
import Colors from "../../constants/Colors";

const PaddingTop = StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 0;
const AppContainer = ({ children }: { children?: ReactNode }) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.Childcontainer}>{children}</View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  Childcontainer: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 16,
    paddingTop: Platform.OS == "android" ? PaddingTop : 20,
  },
});
export default AppContainer;
