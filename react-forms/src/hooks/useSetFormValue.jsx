import { useState } from "react";
export default function useSetFormValue(initialValue, customFunction) {
  const [enteredValue, setEnteredValue] = useState('');
  const valueIsValid = customFunction(enteredValue, 6);
  function handleEnteredValues(value) {
    setEnteredValue(value);
  }
  return {
    enteredValue,
    valueIsValid,
    handleEnteredValues,
  };
}
