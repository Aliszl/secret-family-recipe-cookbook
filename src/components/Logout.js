import { useHistory } from "react-router-dom";

export default function Logout(props) {
  const jumpToLogin = useHistory();
  localStorage.removeItem("token");

  jumpToLogin.push("/login");

  return null;
}
