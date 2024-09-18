import { useState } from "react";
import { isEmail, hasMinLength } from "../util/validation";

export default function useSetFormValue() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const emailIsNotValid =
    enteredValues.email !== "" && !isEmail(enteredValues.email);
  const passwordIsInvalid =
    enteredValues.password !== "" && !hasMinLength(enteredValues.password, 6);
  function onSubmit(event) {
    event.preventDefault();
    event.target.reset();
    setEnteredValues({
      email: "",
      password: "",
    });
    console.log(enteredValues);
  }
  function handleEnteredValues(idetifier, value) {
    setEnteredValues((prevValue) => {
      return { ...prevValue, [idetifier]: value };
    });
  }
  return {
    enteredValues,
    emailIsNotValid,
    passwordIsInvalid,
    onSubmit,
    handleEnteredValues,
  };
}
