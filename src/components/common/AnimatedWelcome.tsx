import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const AnimatedWelcome = () => {
  const sharedVal = useSharedValue(-150);
  useEffect(() => {
    sharedVal.value = withSpring(-50);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: sharedVal.value }],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    const value = interpolate(sharedVal.value, [-150, -50], [80, 0]);
    return {
      transform: [{ translateX: value }],
    };
  });
  const animatedStyle3 = useAnimatedStyle(() => {
    const value = interpolate(sharedVal.value, [-150, -50], [0.2, 1]);
    return {
      opacity: value,
    };
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.firstCard, animatedStyle]}></Animated.View>
      <Animated.View
        style={[styles.secondCard, animatedStyle2]}
      ></Animated.View>
      <Animated.Text
        style={[{ marginTop: 10, fontWeight: "bold" }, animatedStyle3]}
      >
        WELCOME TO QUOLAAAAA
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstCard: {
    height: 206,
    width: "90%",
    backgroundColor: "#06283D",
    borderRadius: 20,
  },
  secondCard: {
    height: 98,
    width: "40%",
    backgroundColor: "#06283D",
    borderRadius: 10,
    marginTop: 10,
    marginLeft: "auto",
  },
});
export default AnimatedWelcome;
