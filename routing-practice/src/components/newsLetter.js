import {  useFetcher } from "react-router-dom";
import classes from "./newsLetter.module.css";

function NewsletterSignup() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        required
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
