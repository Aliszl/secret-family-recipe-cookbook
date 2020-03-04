import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export function Logout(props) {
  const jumpToLogin = useHistory();
  localStorage.removeItem("token");

  jumpToLogin.push("/login");

  return null;
}
