import React from "react";
import { Button, VStack } from "native-base";
import validator from "validator";
import { Routes } from "../../utils/constants";
import { RootStackScreenProps } from "../../navigation/RootNavigation.types";
import useValidatedInput from "../../hooks/useValidatedInput";
import FormLinks from "../common/FormLinks";
import useAuthStore from "../../hooks/useAuthStore";
import { setItem } from "../../utils/storage";
import useAxios from "../../hooks/useAxios";


const SignIn = ({ navigation }: RootStackScreenProps<Routes.SIGN_IN>) => {
  const [email, emailError, emailInput] = useValidatedInput({
    placeholder: "Email",
    errorMessage: "Invalid email.",
    validateFn: validator.isEmail,
    iconName: "email-outline",
  });
  const [password, passwordError, passwordInput] = useValidatedInput({
    placeholder: "Password",
    errorMessage: "Password is required.",
    inputType: "password",
    linkLabel: "Forgot Password?",
    linkOnPress: () => navigation.push(Routes.FORGOT_PASSWORD),
    iconName: "lock-outline",
  });

  const { isLoading, request } = useAxios();

  const { setId } = useAuthStore();

  const signInService = async () => {
    const { data } = await request({
      url: "/auth/signin",
      data: {
        email,
        password,
      },
      failureMessages: {
        400: "Invalid email or password.",
        401: "Invalid email or password.",
      },
    });

    if (data) {
      const { jwtToken, payload } = data.idToken;
      const { sub: id } = payload;

      setItem("jwtToken", jwtToken);
      setId(id);
    }
  };

  return (
    <VStack space={3}>
      {emailInput}
      {passwordInput}
      <Button
        isLoading={isLoading}
        isDisabled={!email || !password || emailError || passwordError}
        mt="2"
        onPress={() => {
          signInService();
        }}
      >
        Sign In
      </Button>
      <FormLinks
        message="Don't have an account? "
        linkLabel="Sign Up"
        linkOnPress={() => navigation.push(Routes.SIGN_UP)}
      />
    </VStack>
  );
};

export default SignIn;
