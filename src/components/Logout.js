export function Logout(props){
  
        localStorage.removeItem("token");
        props.history.push("/home");
      return null;

}