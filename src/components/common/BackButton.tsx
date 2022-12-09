import { TouchableOpacity } from "react-native";
import React from "react";
import { ArrowLeftIcon } from "../../../assets/svg/Index";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigator = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigator.goBack()}>
      <ArrowLeftIcon height={24} width={24} />
    </TouchableOpacity>
  );
};

export default BackButton;
