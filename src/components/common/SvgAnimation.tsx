import { View, Dimensions } from "react-native";
import React from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Path, Svg } from "react-native-svg";
import { Button } from "native-base";

const SvgAnimation = () => {
  const sharedValue = useSharedValue(0);
  const AnimatedPath = Animated.createAnimatedComponent(Path);
  const { width } = Dimensions.get("window");

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: width * sharedValue.value,
    };
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: 50,
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 120,
          backgroundColor: "transparent",
        }}
      >
        <Svg>
          <Path
            d="M0 132.726C122.552 -47.52 420.447 14.1959 430 14.1959"
            stroke="#D3D3D3"
            strokeWidth="5"
          />

          <AnimatedPath
            d="M0 132.726C122.552 -47.52 420.447 14.1959 430 14.1959"
            stroke="#06283D"
            strokeWidth="8"
            strokeDasharray={Dimensions.get("window").width + 100}
            animatedProps={animatedProps}
          />
        </Svg>
      </View>
      <Button
        onPress={() => {
          //YOU CAN MANIPULATE THE VALUES ACCORDING TO YOUR TASTE
          sharedValue.value = withTiming(
            sharedValue.value == 0 ? 0.9 : sharedValue.value == 0.9 ? 0.5 : 0,
          );
        }}
      >
        Press
      </Button>
    </View>
  );
};

export default SvgAnimation;
