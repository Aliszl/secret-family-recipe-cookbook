import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { RegisterForm } from "./components/Register";
import { Login } from "./components/Login"
const { Header, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <Layout>
      <Header>
          <Navigation />
        </Header>
        <Content> 
        <Switch>
        <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={Login} />
        </Switch>
           </Content>

      </Layout>

    </div>
  );
}

export default App;
