import { FormControl, Text, Input, Link, Pressable, Icon } from "native-base";
import React, { useState } from "react";
import useValidation from "./useValidation";

interface UseValidatedInputOptions {
  textValue?: string;
  placeholder: string;
  errorMessage?: string;
  validateFn?: (arg0: string) => boolean;
  inputType?: "text" | "password";
  linkLabel?: string;
  linkOnPress?: () => void;
  linkLabelOne?: string;
  linkOnPressOne?: () => void;
  iconName?: string;
}

export default function useValidatedInput(
  options: UseValidatedInputOptions,
): [string, boolean, JSX.Element] {
  const {
    textValue,
    placeholder,
    errorMessage,
    validateFn,
    inputType = "text",
    linkLabel,
    linkOnPress,
    linkLabelOne,
    linkOnPressOne,
    iconName,
  } = options;
  const [string, setString, error] = useValidation(validateFn);
  const [showInput, setShowInput] = useState(inputType === "text");

  const validatedInput = (
    <FormControl isRequired isInvalid={error}>
      <Text mb="2" mt="4" fontSize="16" fontWeight="400">
        {textValue}
      </Text>
      <Input
        placeholder={placeholder}
        type={showInput ? "text" : "password"}
        value={string}
        onChangeText={(text) => setString(text)}
        InputLeftElement={
          iconName ? <Icon name={iconName} size={5} ml="2" mr="2" /> : undefined
        }
        InputRightElement={
          inputType === "password" ? (
            <Pressable onPress={() => setShowInput(!showInput)}>
              <Icon
                name={showInput ? "eye-outline" : "eye-off-outline"}
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          ) : undefined
        }
      />
      {errorMessage && (
        <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
      )}
      {linkLabelOne && (
        <Link
          _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "primary.900",
          }}
          alignSelf="flex-start"
          mt="0.7"
          mb="5"
          textDecoration="none"
          onPress={linkOnPressOne}
        >
          {linkLabelOne}
        </Link>
      )}
      {linkLabel && (
        <Link
          _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "primary.600",
          }}
          alignSelf="flex-end"
          // mt="0.7"
          mb="5"
          onPress={linkOnPress}
        >
          {linkLabel}
        </Link>
      )}
    </FormControl>
  );

  return [string, error, validatedInput];
}
