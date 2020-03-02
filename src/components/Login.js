import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { Context } from "../context/Context";
import { useHistory } from "react-router-dom";
import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

export function Login(props) {
  const { loginUser, setLoginUser, initialValues } = useContext(Context);
  const history = useHistory();

  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  
  const handleChange = e => {
    console.log(e.target.value);
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value
    });
    // setLoginUser(initialValues)
  };
  const handleSubmitLogin = (e, inputValues) => {
    console.log(inputValues);
    axios
      .post(
        "https://lambda-cook-book.herokuapp.com/api/auth/login",
        inputValues
      )
      .then(response => {
        console.log(response);

        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
      })
      .catch(error => {
        alert(error.message);
      });
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
          label="Username/email"
          rules={[
            { required: true, message: "Please input your username or email!" }
          ]}
        >
          <Input
            name="usernameoremail"
            //  prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }}/>}
            placeholder="Username or email"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password name="password" onChange={handleChange} />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button onClick={(e)=>handleSubmitLogin(e, loginUser)} type="primary" htmlType="submit">
            Submit
          </Button>
          <br />
          <br />
          <Link to="/register">Register now!</Link>
        </Form.Item>
      </StyledForm>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const StyledForm = styled(Form)`
  max-width: 35rem;
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
