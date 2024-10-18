import { redirect } from "react-router-dom";
export function getToken() {
  return localStorage.getItem("token");
}
export function getDuration() {
  const StoredExpiration = localStorage.getItem("expiration");
  const storedHour = new Date(StoredExpiration).getHours;
  const nowHour = new Date().getHours;
  const duration = storedHour - nowHour;
  console.log(duration);
  return duration;
}
export function LoginAuthenticationLoader() {
  const token = localStorage.getItem("token");
  const duration = getDuration();
  if (duration <= 0) {
    return "EXPIRED";
  }
  if (!token) {
    return redirect("/auth");
  }
  return null;
}
