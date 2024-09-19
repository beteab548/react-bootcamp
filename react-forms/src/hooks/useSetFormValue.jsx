import { useState } from "react";
import { isEmail, hasMinLength } from "../util/validation";

export default function useSetFormValue(initialValue) {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  
//   const emailIsNotValid =
//     enteredValue.email !== "" && !isEmail(enteredValue.email);
//   const passwordIsInvalid =
//     enteredValue.password !== "" && !hasMinLength(enteredValue.password, 6);
  function onSubmit(event) {
    event.preventDefault();
    event.target.reset();
    setEnteredValue(initialValue);
    console.log(enteredValue);
  }
  function handleEnteredValues( value) {
    setEnteredValue(value);
  }
  return {
    enteredValue,
    emailIsNotValid,
    passwordIsInvalid,
    onSubmit,
    handleEnteredValues,
  };
}
