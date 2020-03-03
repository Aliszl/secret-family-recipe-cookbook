import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";

const Navigation = () => {
  return (
    <>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">About </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/login">Login </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/register">Register </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/logout">
            <Button color="success">logout</Button>
          </Link>

        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/addrecipe">
            <Button color="success">+</Button>
          </Link>

        </Menu.Item>
          

      </Menu>
          </>
  );
};

export default Navigation;
