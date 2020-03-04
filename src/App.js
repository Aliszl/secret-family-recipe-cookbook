import React, { useState } from "react";
// import axios from "axios";
import "./App.css";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { RegisterForm } from "./components/Register";
import { Login } from "./components/Login";
import { Context } from "./context/Context";
import About from "./components/About";
import { Logout } from "./components/Logout";
import { useLocalStorage, withAuth } from "./hooks/CustomHooks";
import AddRecipeForm from "./components/AddRecipeForm";
import SingleRecipe from "./components/SingleRecipe";
import { useHistory } from "react-router-dom";

const { Header, Content } = Layout;

const App = props => {
  const jumpToRecipeID = useHistory();
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useLocalStorage("");
  const [homeSearch, setHomeSearch] = useState("");
 
  const [currentRecipeId, setCurrentRecipeId] = useState(null);

  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const initialRecipeFormValues = {
    recipe_image: "https://i.imgur.com/HW2AIVK.jpg",
    title: "",
    description: "",
    ingredients: "",
    directions: "",
    Notes: "",
    source: "",
    bio: "",
    source_image: ""
  };
  const [newRecipe, setNewRecipe] = useState(initialRecipeFormValues);
  const [recipe, setRecipe] = useState(initialRecipeFormValues);
  const [loginUser, setLoginUser] = useState({
    usernameoremail: "",
    password: ""
  });

  
  const getAllRecipes = () => {
    withAuth()
      .get("https://lambda-cook-book.herokuapp.com/api/recipes")
      .then(response => {
        setRecipes(response.data.data);
      })
      .catch(error => {
        debugger;
      });
  };
  const handleChangeSearchbar = evt => {
    setSearchValue(evt.target.value);
  };

  const deleteRecipe = (evt, id) => {
    console.log("click", id);

    withAuth()
      .delete(`https://lambda-cook-book.herokuapp.com/api/recipes/${id}`)
      .then(response => {
        console.log("delete:", response.data);
        setRecipe(response.data.data);
        getAllRecipes();
        // setRecipes(currentRecipes=>{
        //   return currentRecipes.map(r=>{
        //     if(r.id === id){
        //       return response.data
        //     }
        //     return r
        //   })
        // })
      })
      .catch(error => {
        console.error(error);
      });
  };
  

  const getCurrentRecipeId = (evt, id) => {
    console.log("click", id);

    withAuth()
      .get(`https://lambda-cook-book.herokuapp.com/api/recipes/${id}`)
      .then(response => {
        // console.log(response.data.data.id);
        setRecipe(response.data.data);
        setCurrentRecipeId(response.data.data.id);
        console.log(currentRecipeId);
        jumpToRecipeID.push("/recipe");
        //  <Redirect to={{
        //    pathname:`/${id}`
        //  }}/>
      })
      .catch(error => {
        console.error(error);
      });
  };
  // const getCurrentRecipeId = (evt, id) => {
  //   console.log("click", id);
  //   const currentRecipe = recipes.find(recipe => recipe.id === currentRecipeId);
  // };
  // const recipeById = (evt, id)=>{
  // console.log("click", id);
  // recipes.filter(recipe =>
  //   recipe =>recipe.id === id
  // );


  const getOneRecipe = () => {
    withAuth()
      .get(`https://lambda-cook-book.herokuapp.com/api/recipes/${currentRecipeId}`)
      .then(response => {
        console.log(response)
        // setRecipe(response.data.data);
      })
      .catch(error => {
        debugger;
      });
  };

  console.log(currentRecipeId);
  return (
    <div className="App">
      <Context.Provider
        value={{
          getAllRecipes,
          loading,
          setLoading,
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
          deleteRecipe,
          newRecipe,
          setNewRecipe,
          initialRecipeFormValues,
          recipe,
          setRecipe,
          currentRecipeId,
          setCurrentRecipeId,
          getOneRecipe,
          getCurrentRecipeId
        }}
      >
        <Layout>
          <Header>
            <Navigation />
          </Header>
          <Content>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/recipes" component={Home} />
              <Route exact path="/register" component={RegisterForm} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/addrecipe" component={AddRecipeForm} />
              <Route exact path={`/recipe`} component={SingleRecipe} />
            </Switch>
          </Content>
        </Layout>
      </Context.Provider>
    </div>
  );
};

export default App;
