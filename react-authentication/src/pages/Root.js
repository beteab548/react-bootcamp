import { Outlet, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getToken } from "../util/auth";

function RootLayout() {
  const submit = useSubmit();
  const duration = getDuration();
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    if (duration === "EXPIRED") {
      submit({}, { action: "/logout", method: "post" });
    }
    setTimeout(() => {
      submit({}, { action: "/logout", method: "post" });
    }, duration);
  }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
