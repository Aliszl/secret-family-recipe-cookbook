import React, { useEffect} from "react";
import { useHistory } from "react-router-dom";

export function Logout(props){
  const jumpToLogin= useHistory();

  useEffect(() => {
    jumpToLogin.push("/home");
},[]);
        localStorage.removeItem("token");
        
      return null;

}