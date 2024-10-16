import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}
export default AuthenticationPage;
export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  const data = await request.formData();
  const formData = { email: data.get("email"), password: data.get("password") };
  console.log(formData);
  const response = await fetch("http://localhost:8080/" + mode, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  console.log(response.status);
  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "unsupported mode" }, { status: 500 });
  }
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "response error! " }, { status: 500 });
  }
  return redirect("/");
}
