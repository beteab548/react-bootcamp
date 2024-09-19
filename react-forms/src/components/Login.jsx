import Input from "./input";
import { isEmail, hasMinLength } from "../util/validation";
import useSetFormValue from "../hooks/useSetFormValue";
export default function Login() {
  const {
    enteredValue: enteredEmailValue,
    valueIsValid: emailIsValid,
    handleEnteredValues: handleEmailInput,
  } = useSetFormValue(" ", (value) => {
    return isEmail(value);
  });
  const {
    enteredValue: enteredPasswordValue,
    valueIsValid: passwordIsValid,
    handleEnteredValues: handlePwdInput,
  } = useSetFormValue(" ", (value, length) => {
    return hasMinLength(value, length);
  });
  console.log(enteredEmailValue, enteredPasswordValue);
  function onsubmit(event) {
    event.preventDefault();
    event.target.reset();
    if (!emailIsValid || !passwordIsValid) {
      return;
    }
    console.log(enteredEmailValue, enteredPasswordValue);
  }
  return (
    <form onSubmit={onsubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          valid={enteredEmailValue !== '' && emailIsValid}
          lable="email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            handleEmailInput(e.target.value);
          }}
        />
        <Input
          valid={enteredPasswordValue !== '' && passwordIsValid}
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
