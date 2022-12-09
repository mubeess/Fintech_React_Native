import { useState, useEffect, SetStateAction, Dispatch, useRef } from "react";

export default function useValidation(
  validateFn?: (arg0: string) => boolean,
): [string, Dispatch<SetStateAction<string>>, boolean] {
  const [string, setString] = useState("");
  const [error, setError] = useState(false);
  const isInitialRender = useRef(true);

  useEffect(() => {
    setError(false);
    if (!isInitialRender.current) {
      if (!string) setError(true);
      else if (validateFn) setError(!validateFn(string));
    }

    isInitialRender.current = false;
  }, [isInitialRender, string, validateFn]);

  return [string, setString, error];
}
