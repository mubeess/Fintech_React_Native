import React, { useCallback, useEffect, useRef, useState } from "react";
import { AxiosError } from "axios";
import axiosWithAuth from "../utils/axios";
import axiosWithoutAuth from "axios";
import { Toast } from "native-base";
import Notification from "../components/common/Notification";

export interface UseAxiosOptions {
  method?: "POST" | "GET" | "PATCH" | "PUT";
  url: string;
  data?: unknown;
  successMessage?: string;
  failureMessages?: { [key: number]: string };
  withAuth?: boolean;
}

const useAxios = (initialRequest?: UseAxiosOptions) => {
  const [isLoading, setIsLoading] = useState(!!initialRequest);
  // axios can send any json data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();
  const [error, setError] = useState<unknown>();

  const savedInitialRequest = useRef(initialRequest);

  const request = useCallback(
    async ({
      method = "POST",
      url,
      data,
      successMessage,
      failureMessages,
      withAuth = true,
    }: UseAxiosOptions) => {
      try {
        const axios = withAuth ? axiosWithAuth : axiosWithoutAuth;

        setIsLoading(true);
        const { data: responseData } = await axios.request({
          method,
          url,
          data,
        });

        if (successMessage) {
          Toast.show({
            avoidKeyboard: true,
            render: () => (
              <Notification message={successMessage} variant="success" />
            ),
          });
        }

        setData(responseData);
        return { data: responseData };
      } catch (error) {
        console.error(error);
        let message = "Something went wrong, please try again.";
        if (
          error instanceof AxiosError &&
          error.response?.status &&
          failureMessages?.[error.response.status]
        ) {
          message = failureMessages[error.response.status];
        }

        Toast.show({
          avoidKeyboard: true,
          render: () => <Notification message={message} variant="error" />,
        });

        setError(error);
        return { error };
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    if (savedInitialRequest.current) request(savedInitialRequest.current);
  }, [savedInitialRequest, request]);

  return { isLoading, request, data, error };
};

export default useAxios;
