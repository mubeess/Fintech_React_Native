import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { BiometricIcon } from "../../../assets/svg/Index";
import Colors from "../../constants/Colors";

const Biometric = () => {
  return (
    <TouchableOpacity style={styles.biometric}>
      <BiometricIcon height={24} width={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  biometric: {
    width: 61,
    height: 61,
    backgroundColor: Colors.light.backgroundSecondary,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 28,
    borderRadius: 61,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Biometric;
