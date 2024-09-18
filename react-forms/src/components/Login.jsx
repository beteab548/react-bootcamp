import { useState } from "react";
import Input from "./input";
import { isEmail, hasMinLength, isNotEmpty } from "../util/validation";
export default function Login() {
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
  console.log(enteredValues);
  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          error={emailIsNotValid}
          lable="email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            handleEnteredValues("email", e.target.value);
          }}
        />
        <Input
          error={passwordIsInvalid}
          lable="password"
          id="password"
          type="password"
          name="password"
          onChange={(e) => {
            handleEnteredValues("password", e.target.value);
          }}
        />
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
