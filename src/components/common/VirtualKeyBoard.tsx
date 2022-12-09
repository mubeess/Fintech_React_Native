import { View, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import KeyBordIndicator from "./KeyBordIndicator";
import { BiometricIcon, KeyBoardtIcon } from "../../../assets/svg/Index";
import KeyBoardNumber from "./KeyBoardNumber";
type VirtualKeyBoardProps = {
  withBiometric?: boolean;
  onChange: (val: string) => void;
  inputs?: number;
};

enum ActiveProps {
  FIRST_INDICATOR = "FIRST_INDICATOR",
  SECOND_INDICATOR = "SECOND_INDICATOR",
  THIRD_INDICATOR = "THIRD_INDICATOR",
  FOURTH_INDICATOR = "FOURTH_INDICATOR",
  FIFTH_INDICATOR = "FIFTH_INDICATOR",
  SIXTH_INDICATOR = "SIXTH_INDICATOR",
}

const VirtualKeyBoard = ({
  withBiometric,
  onChange,
  inputs = 6,
}: VirtualKeyBoardProps) => {
  const [values, setValues] = useState("");
  const [lastIndicator, setLastIndicator] = useState("");
  const [active, setAc] = useState({
    FIRST_INDICATOR: false,
    SECOND_INDICATOR: false,
    THIRD_INDICATOR: false,
    FOURTH_INDICATOR: false,
    FIFTH_INDICATOR: false,
    SIXTH_INDICATOR: false,
  });

  const indicatorListener = () => {
    switch (values.length) {
      case 0:
        return ActiveProps.FIRST_INDICATOR;
      case 1:
        return ActiveProps.SECOND_INDICATOR;
      case 2:
        return ActiveProps.THIRD_INDICATOR;
      case 3:
        return ActiveProps.FOURTH_INDICATOR;
      case 4:
        return ActiveProps.FIFTH_INDICATOR;
      case 5:
        return ActiveProps.SIXTH_INDICATOR;

      default:
        return ActiveProps.SIXTH_INDICATOR;
    }
  };

  //METHOD OF LISTENING ONKEYBOARD CHANGE
  const onKeyBoardChange = (value: string, id: ActiveProps) => {
    if (values.length == inputs) {
      return;
    }
    const currentStateValue = active[id];
    setLastIndicator(id);
    const activeIndicator = {
      ...active,
      [id]: !currentStateValue,
    };
    setAc(activeIndicator);
    const newValue = `${values}${value}`;
    setValues(newValue);
    onChange(newValue);
  };

  //METHOD FOR CLEARING VALUES
  const clearText = () => {
    if (values.length == 0) {
      return;
    }
    const currentStateValue = active[lastIndicator];
    const activeIndicator = {
      ...active,
      [lastIndicator]: !currentStateValue,
    };
    setAc(activeIndicator);
    const currentLastIndiCator = Object.keys(active);
    const lastIndicatorValue =
      currentLastIndiCator[currentLastIndiCator.indexOf(lastIndicator) - 1];
    setLastIndicator(lastIndicatorValue);
    const newValue = values
      .split("")
      .splice(0, values.split("").length - 1)
      .join("");

    setValues(newValue);
    onChange(newValue);
  };
  return (
    <View style={styles.container}>
      <View style={styles.indicators}>
        <KeyBordIndicator active={active.FIRST_INDICATOR} />
        <KeyBordIndicator active={active.SECOND_INDICATOR} />
        <KeyBordIndicator active={active.THIRD_INDICATOR} />
        <KeyBordIndicator active={active.FOURTH_INDICATOR} />
        {inputs > 4 && (
          <>
            <KeyBordIndicator active={active.FIFTH_INDICATOR} />
            <KeyBordIndicator active={active.SIXTH_INDICATOR} />
          </>
        )}
      </View>

      <View style={styles.keypadContainer}>
        <View style={styles.keyPadLine}>
          <KeyBoardNumber
            onPress={() => onKeyBoardChange("1", indicatorListener())}
            value="1"
          />
          <KeyBoardNumber
            onPress={() => onKeyBoardChange("2", indicatorListener())}
            value="2"
          />
          <KeyBoardNumber
            onPress={() => onKeyBoardChange("3", indicatorListener())}
            value="3"
          />
        </View>

        <View style={styles.keyPadLine}>
          <KeyBoardNumber
            onPress={() => onKeyBoardChange("4", indicatorListener())}
            value="4"
          />
          <KeyBoardNumber
            onPress={() => onKeyBoardChange("5", indicatorListener())}
            value="5"
          />
          <KeyBoardNumber
            onPress={() => onKeyBoardChange("6", indicatorListener())}
            value="6"
          />
        </View>

        <View style={styles.keyPadLine}>
          <KeyBoardNumber
            onPress={() => onKeyBoardChange("7", indicatorListener())}
            value="7"
          />
          <KeyBoardNumber
            onPress={() => onKeyBoardChange("8", indicatorListener())}
            value="8"
          />
          <KeyBoardNumber
            onPress={() => onKeyBoardChange("9", indicatorListener())}
            value="9"
          />
        </View>

        <View
          style={[
            styles.keyPadLastLine,
            { width: withBiometric ? "100%" : "53%" },
          ]}
        >
          {withBiometric && (
            <KeyBoardNumber
              Icon={() => <BiometricIcon height={24} width={24} />}
            />
          )}

          <KeyBoardNumber
            onPress={() => onKeyBoardChange("0", indicatorListener())}
            value="0"
          />
          <KeyBoardNumber
            onPress={() => clearText()}
            Icon={() => <KeyBoardtIcon />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
  },
  indicators: {
    flexDirection: "row",
  },
  keypadContainer: {
    marginTop: Dimensions.get("window").height / 8,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  keyPadLine: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 56,
  },
  keypad: {
    fontSize: 27.65,
    fontWeight: "700",
  },
  keyPadLastLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "auto",
    transform: [
      {
        translateY: -20,
      },
    ],
  },
});
export default VirtualKeyBoard;
