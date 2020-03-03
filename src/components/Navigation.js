import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";

import styled from "styled-components";

const Navigation = () => {
  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px"}}
      >
        <Menu.Item key="1">
          <Link to="/">About </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/recipes">Recipes</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/addrecipe">
          Add a Recipe
          </Link>
          </Menu.Item>
        <Menu.Item key="4">
          <Link to="/login">Login </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/register">Register </Link>
        </Menu.Item>
       
        <Menu.Item key="6">
          <Link to="/logout">
            <Button value="large" color="success">logout</Button>
          </Link>

       

        </Menu.Item>
          

      </Menu>
          </>
  );
};

export default Navigation;

// const NavDiv = styled.div`

// `