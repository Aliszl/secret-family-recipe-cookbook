import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

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
      
      </Menu>
          </>
  );
};

export default Navigation;
