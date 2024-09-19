import Input from "./input";
import { isEmail, hasMinLength } from "../util/validation";
import useSetFormValue from "../hooks/useSetFormValue";
export default function Login() {
  const {
    enteredEmailValue,
    valueIsValid: emailIsValid,
    handleEnteredValues: handleEmailInput,
  } = useSetFormValue("", (value) => {
    return isEmail(value);
  });
  const {
    enteredPasswordValue,
    valueIsValid: passwordIsValid,
    handleEnteredValues: handlePwdInput,
  } = useSetFormValue("", (value) => {
    return hasMinLength(value);
  });
  function onsubmit(event) {
    event.preventDefault();
    event.target.reset();
  }
  console.log(enteredEmailValue, enteredPasswordValue);
  return (
    <form onSubmit={onsubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          valid={emailIsValid}
          lable="email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            handleEmailInput(e.target.value);
          }}
        />
        <Input
          valid={passwordIsValid}
          lable="password"
          id="password"
          type="password"
          name="password"
          onChange={(e) => {
            handlePwdInput(e.target.value);
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
