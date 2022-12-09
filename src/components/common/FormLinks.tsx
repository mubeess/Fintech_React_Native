import { Text, HStack, Link } from "native-base";
import React from "react";

const FormFooter = ({
  linkLabel,
  linkOnPress,
  message,
}: {
  linkLabel: string;
  linkOnPress: () => void;
  message?: string;
}) => (
  <HStack mt="6" space="0">
    <Text
      fontSize="sm"
      color="coolGray.600"
      _dark={{
        color: "warmGray.200",
      }}
    >
      {message}
    </Text>
    <Link
      _text={{
        color: "primary.600",
        fontWeight: "medium",
        fontSize: "sm",
      }}
      onPress={linkOnPress}
    >
      {linkLabel}
    </Link>
  </HStack>
);

export default FormFooter;
