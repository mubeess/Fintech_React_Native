import { Alert, Text, HStack } from "native-base";
import React from "react";

const Notification = ({
  message,
  variant = "info",
}: {
  message: string;
  variant: "error" | "warning" | "info" | "success";
}) => (
  <Alert w="100%" variant="subtle" colorScheme={variant} status={variant}>
    <HStack space={2} flexShrink={1} alignItems="center">
      <Alert.Icon />
      <Text>{message}</Text>
    </HStack>
  </Alert>
);

export default Notification;
