import { redirect } from "react-router-dom";
export function getToken() {
    return localStorage.getItem("token");
  }
  export function LoginAuthenticationLoader() {
    const token = localStorage.getItem("token");
    if (!token) {
      return redirect("/auth");
    }
    return null;
  }
  