import NewsletterSignup from "../newsLetter";
import classes from "../newsLetter.module.css"
function NewsletterPage() {
  return (
    <div className={classes.container}>
      <h2>Join our awesome newsletter!</h2>
      <NewsletterSignup />
    </div>
  );
}
export default NewsletterPage;
export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
}
