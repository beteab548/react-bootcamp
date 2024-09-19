import { useState } from "react";
export default function useSetFormValue(initialValue, customFunction) {
  const [enteredValue, setEnteredValue] = useState(initialValue);

  const valueIsValid = enteredValue !== "" && customFunction(enteredValue);
  console.log(valueIsValid);

  function handleEnteredValues(value) {
    setEnteredValue(value);
  }
  return {
    enteredValue,
    valueIsValid,
    handleEnteredValues,
  };
}
