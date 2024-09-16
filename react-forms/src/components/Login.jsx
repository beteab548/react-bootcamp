import { useState } from "react";
export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => {
              handleEnteredValues("email", e.target.value);
            }}
          />
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => {
              handleEnteredValues("password", e.target.value);
            }}
          />
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
