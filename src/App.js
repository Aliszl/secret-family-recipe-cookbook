import React, { useState } from 'react';
import './App.css';
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import { Layout, Button } from "antd";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { RegisterForm } from "./components/Register";
import { Login } from "./components/Login"
import { Context } from "./context/Context";
import About from "./components/About";
// import {handleSubmit} from "./state/hooks/CustomHooks"
// import{ loadingUser, setLoadingUser, registerError, setRegisterError }from "./state/state"
import { useLocalStorage } from "./hooks/CustomHooks"
const { Header, Content } = Layout;

const App = (props) => {
  const onLogout = props => {
    localStorage.removeItem("token");
     };

  const [loadingUser, setLoadingUser] = useState(false);
const [registerError, setRegisterError] = useState("");

  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [loginUser, setLoginUser]=useState( {
    usernameoremail: "",
    password: ""
})

  return (
    <div className="App">
      <Context.Provider
      value={{ 
        loadingUser,
        setLoadingUser,
        registerError,
        setRegisterError,
        newUser, 
        setNewUser,
        loginUser,
        setLoginUser, 
        useLocalStorage
        
      }}
      >

      <Layout>
      <Header>
          <Navigation />
          <Button onClick={onLogout} type="primary">LogOut</Button>
        </Header>
        <Content> 
        <Switch>
        <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={Login} />
        </Switch>
           </Content>

      </Layout>
      </Context.Provider>

    </div>
  );
}

export default App;
