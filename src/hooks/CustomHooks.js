import React from 'react';
import axios from "axios";
import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import{ loadingUser, setLoadingUser, registerError, setRegisterError }from "../state/state";

export function withAuth() {
  const token = localStorage.getItem("token");
  console.log(token);
  const instance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
  return instance;
}



export const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoredValue] = useState(key, () => {

    const currentValue = localStorage.getItem(key);

    return currentValue ? JSON.parse(currentValue) : initialValue;
  })

  const setValue = value => {
    setStoredValue(value);

    localStorage.setItem(key, JSON.stringify(value));
  }
  return [storedValue, setValue]
}


// const history = useHistory()
// export function handleSubmit(e, inputValues ) {
//   e.preventDefault();
//      axios
//     .post("https://lambda-cook-book.herokuapp.com/api/auth/register", inputValues)
//     .then(response => {
//       console.log(response);
//       setLoadingUser(false);
//       history.push("/login");
//     })
//     .catch(error => {
//       let { message } = error.response.data;
//       setLoadingUser(false);
//       setRegisterError(message);
//     });
 

// }
// export const registerUser = (values) => {

//   const [loadingUser, setLoadingUser] = useState(false);
//   const [newUser, setNewUser] = useState({
//     firstname: "",
//     lastname: "",
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   })
//   setLoadingUser(true);


//     axios.post(`https://lambda-cook-book.herokuapp.com/api/auth/register`)
//       .then(res => {
//         console.log(res);
//         setNewUser(res.data);
//         setLoadingUser(false);
//         props.history.push("/login");
//       })
//       .catch(err => {
//         debugger
//       })


//   return newUser
// }