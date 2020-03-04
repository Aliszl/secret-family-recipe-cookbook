import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import axios from "axios";
import { Form, Input, Button, Checkbox, Spin } from "antd";
import { Link } from "react-router-dom";
import {  UserOutlined, LockOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

export default function RegisterForm(props) {
  const {
    loading,
    setLoading,
    setRegisterError,
    newUser,
    setNewUser
  } = useContext(Context);

  console.log(loading);
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  function handleSubmit(e, inputValues) {
    console.log(inputValues);
    e.preventDefault();

    axios
      .post(
        "https://lambda-cook-book.herokuapp.com/api/auth/register",
        inputValues
      )
      .then(response => {
        console.log(response);
        setLoading(false);
        props.history.push("/login");
      })
      .catch(error => {
        let { message } = error.response.data;
        setLoading(false);
        setRegisterError(message);
      });
  }
  const handleChangeReg = e => {
    console.log(e.target.value);
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  return (
    <StyledRegContainer>
      {loading?<Spin/>:null}
      <StyledRegForm
        // onSubmit={e => handleSubmit(e)}
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h2>Register</h2>
        <Form.Item
          label="First name"
          // name="firstname"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input
            name="firstname"
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }}/>}
          
            placeholder="first name"
            onChange={handleChangeReg}
          />
        </Form.Item>

        <Form.Item
          label="Last name"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input
            name="lastname"
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }}/>}
                     placeholder="last name"
            onChange={handleChangeReg}
          />
        </Form.Item>
        <Form.Item
          label="Username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            name="username"
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }}/>}
                       placeholder="Username"
            onChange={handleChangeReg}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            name="email"
            //  prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }}/>}
            placeholder="email"
            onChange={handleChangeReg}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            name="password"
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }}/>}
            placeholder="Password"
            onChange={handleChangeReg}
          />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          rules={[{ required: true, message: "Please repeat your password!" }]}
        >
          <Input.Password
            name="confirmPassword"
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }}/>}
            placeholder="Re-enter password"
            onChange={handleChangeReg}
          />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            onClick={e => handleSubmit(e, newUser)}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
          <br />
          <br />
          <Link to="/login">Already have an account?</Link>
        </Form.Item>
      </StyledRegForm>
    </StyledRegContainer>
  );
}

const StyledRegContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const StyledRegForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  padding: 2.5rem !important;
  margin: 2.5rem !important;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  @media only screen and (max-width: 600px) {
    padding: 2.5rem 1.5rem !important;
    margin: 1.5rem !important;
  }
`;
