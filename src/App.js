import React, { useState } from "react";
// import axios from "axios";
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
import { Logout } from "./components/Logout";
import { useLocalStorage, withAuth } from "./hooks/CustomHooks";
import AddRecipeForm from "./components/AddRecipeForm";

const { Header, Content } = Layout;

const App = props => {
  const [loadingUser, setLoadingUser] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useLocalStorage("");
  const [homeSearch, setHomeSearch] = useState("");
  const [recipe, setRecipe] = useState();

  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [newRecipe, setNewRecipe]=useState({
      recipe_image: "",
      title: "",
      description: "",
      ingredients: "",
      directions: "",
      Notes: "",
      source: "",
      bio: "",
      source_image: ""
  }
  )

  const [loginUser, setLoginUser] = useState({
    usernameoremail: "",
    password: ""
  });

  const handleChangeSearchbar = evt => {
    setSearchValue(evt.target.value);
  };

  const seeMoreDetails = (evt, id )=> {
    console.log("click", id );

    withAuth()
      .get(`https://lambda-cook-book.herokuapp.com/api/recipes/${id}`)
      .then(response => {
        console.log(response.data.data)
        setRecipe(response.data.data);
    //  <Redirect to={{
    //    pathname:`/${id}`
    //  }}/>
      })
      .catch(error => {
        console.error(error);
      });
  };
  const deleteRecipe = (evt, id )=> {
    console.log("click", id );

    withAuth()
      .delete(`https://lambda-cook-book.herokuapp.com/api/recipes/${id}`)
      .then(response => {
        console.log("delete:", response.data.data)
        setRecipe(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
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
          handleChangeSearchbar,
          homeSearch,
          setHomeSearch,
          seeMoreDetails,
          deleteRecipe,
          newRecipe, 
          setNewRecipe
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
              <Route exact path="/addrecipe" component={AddRecipeForm} />
              {/* <Route exact path={`/${id}`} component={Logout} /> */}
            </Switch>
          </Content>
        </Layout>
      </Context.Provider>
    </div>
  );
};

export default App;
