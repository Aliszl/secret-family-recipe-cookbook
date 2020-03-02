import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Form, Input, Button, Checkbox} from 'antd';
import { Link } from "react-router-dom";
// import styled from "styled-components";


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};



export function RegisterForm(){
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


  return (
    <StyledContainer>

    <StyledForm
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input 
        //  prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }}/>}
         placeholder="Username"
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button><br/>
        <br/>
        <Link to="/login">Already have an account?</Link>
      </Form.Item>
    </StyledForm>
    </StyledContainer>
  );
};



const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;


const StyledForm = styled(Form)`
  max-width: 25rem;
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
