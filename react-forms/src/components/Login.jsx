import { useState } from "react";
import Input from "./input";
export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const emailIsNotValid =enteredValues.email!==''&& !enteredValues.email.includes("@");
  const passwordIsInvalid =enteredValues.password!==''&&  enteredValues.password.length < 5;
  function onSubmit(event) {
    event.preventDefault();
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
