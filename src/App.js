import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import { Layout, Button } from "antd";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { RegisterForm } from "./components/Register";
import { Login } from "./components/Login";
import { Context } from "./context/Context";
import About from "./components/About";
import {Logout} from "./components/Logout"
// import {handleSubmit} from "./state/hooks/CustomHooks"
// import{ loadingUser, setLoadingUser, registerError, setRegisterError }from "./state/state"
import { useLocalStorage, withAuth } from "./hooks/CustomHooks";
const { Header, Content } = Layout;

const App = props => {

  const [loadingUser, setLoadingUser] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useLocalStorage("");
  const [homeSearch, setHomeSearch] = useState("");

  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loginUser, setLoginUser] = useState({
    usernameoremail: "",
    password: ""
  });

  const handleChange = evt => {
    setSearchValue(evt.target.value);
  };

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
          useLocalStorage,
          recipes,
          setRecipes,
          withAuth,
          searchValue,
          setSearchValue,
          handleChange,homeSearch, setHomeSearch
        }}
      >
        <Layout>
          <Header>
            <Navigation />
          
          </Header>
          <Content>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={RegisterForm} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
            </Switch>
          </Content>
        </Layout>
      </Context.Provider>
    </div>
  );
};

export default App;
