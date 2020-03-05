import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AddRecipeForm from './components/AddRecipeForm';
import SingleRecipe from './components/SingleRecipe';
import EditRecipe from './components/EditRecipeForm ';
import RegisterForm from './components/Register';
import Login from './components/Login';
import About from './components/About';
import Logout from './components/Logout';
import { Context } from './context/Context';
import { useLocalStorage, withAuth, useForm } from './hooks/CustomHooks';
import { useHistory } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const App = () => {
  const jumpToRecipeID = useHistory();
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [recipes, setRecipes] = useState([]);
  // const [searchValue, setSearchValue] = useLocalStorage("");
  const [homeSearch, setHomeSearch] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const [currentRecipeId, setCurrentRecipeId] = useState(null);

  const [newUser, setNewUser] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const initialRecipeFormValues = {
    recipe_image: 'https://i.imgur.com/HW2AIVK.jpg',
    title: '',
    description: '',
    ingredients: '',
    directions: '',
    Notes: ''
    // source: "",
    // bio: "",
    // source_image: ""
  };
  // const [newRecipe, setNewRecipe] = useState(initialRecipeFormValues);
  const [recipe, setRecipe] = useState(initialRecipeFormValues);
  const [loginUser, setLoginUser] = useState({
    usernameoremail: '',
    password: ''
  });

  const getAllRecipes = () => {
    withAuth()
      .get('https://lambda-cook-book.herokuapp.com/api/recipes')
      .then(response => {
        setRecipes(response.data.data);
      })
      .catch(error => {
        debugger;
      });
  };
  useEffect(() => {
    getAllRecipes();
  }, []);

  // const handleChangeSearchbar = evt => {
  //   console.log(evt.target.value)
  //   setSearchValue(evt.target.value);
  // };

  useEffect(() => {
    getAllRecipes();
  }, []);

  const deleteRecipe = (evt, id) => {
    console.log('click', id);

    withAuth()
      .delete(`https://lambda-cook-book.herokuapp.com/api/recipes/${id}`)
      .then(response => {
        console.log('delete:', response.data);
        setRecipe(response.data.data);
        getAllRecipes();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getCurrentRecipeId = (evt, id) => {
    withAuth()
      .get(`https://lambda-cook-book.herokuapp.com/api/recipes/${id}`)
      .then(response => {
        setRecipe(response.data.data);
        setCurrentRecipeId(response.data.data.id);
        jumpToRecipeID.push('/recipe');
      })
      .catch(error => {
        console.error(error);
      });
  };
  function RouteProtected({ children, ...rest }) {
    const tokenExists = localStorage.getItem('token');
    return (
      <Route {...rest}>
        {tokenExists ? children : <Redirect to='/login' />}
      </Route>
    );
  }

  return (
    <div className='App'>
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
          // handleChangeSearchbar,
          homeSearch,
          setHomeSearch,
          deleteRecipe,
          // newRecipe,
          // setNewRecipe,
          initialRecipeFormValues,
          recipe,
          setRecipe,
          currentRecipeId,
          setCurrentRecipeId,
          getCurrentRecipeId,
          useForm
        }}
      >
        <Layout>
          <Header>
            <Navigation />
          </Header>
          <Content>
            <Switch>
              <Route exact path='/' component={About} />
              <RouteProtected exact path='/recipes'>
                <Home />
              </RouteProtected>
              <Route exact path='/register' component={RegisterForm} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/logout' component={Logout} />
              <RouteProtected exact path='/addrecipe'>
                <AddRecipeForm />
              </RouteProtected>
              <Route exact path={`/recipe`} component={SingleRecipe} />
              <Route exact path={`/editrecipe/:id`} component={EditRecipe} />
            </Switch>
          </Content>
        </Layout>
      </Context.Provider>
    </div>
  );
};

export default App;

// const updateRecipe = ({
//   id,
//   title,
//   recipe_image,
//   description,
//   ingredients,
//   directions,
//   Notes
// }) => {
//   withAuth()
//     .put(`https://lambda-cook-book.herokuapp.com/api/recipes/${id}`, {
//       title,
//       recipe_image,
//       description,
//       ingredients,
//       directions,
//       Notes
//     })
//     .then(res => {
//       setCurrentRecipeId(null);

//       setRecipes(recipes => {
//         return recipes.map(r => {
//           if (r.id === id) {
//             return res.data;
//           }
//           return r;
//         });
//       });
//     })
//     .catch(err => {
//       debugger;
//     });
// };
