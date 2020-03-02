import React from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

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

        </Switch>
           </Content>

      </Layout>

    </div>
  );
}

export default App;
