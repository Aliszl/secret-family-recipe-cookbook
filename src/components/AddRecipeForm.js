import React, { useContext } from "react";
// import { withAuth } from "../hooks/CustomHooks";
import { Form, Input, Button } from "antd";
import { Context } from "../context/Context";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

export default function AddRecipeForm(props) {
  const history = useHistory();
  const { newRecipe, setNewRecipe, withAuth, getAllRecipes } = useContext(
    Context
  );

  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = e => {
    console.log(e.target.value);
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmitRecipe = (e, inputValues) => {
    withAuth()
      .post("https://lambda-cook-book.herokuapp.com/api/recipes", inputValues)
      .then(response => {
        console.log(response);
        // props.history.push("/facilityList/");
        // getAllRecipes();
        history.push("/recipes");
      })
      .catch(e => {
        alert(e.message);
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
          label="Recipe image url"
          rules={[{ required: true, message: "recipe_image" }]}
        >
          <Input
            name="recipe_image"
            //  prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }}/>}

            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Title" rules={[{ required: true, message: "title" }]}>
          <Input name="title" placeholder="Title" onChange={handleChange} />
        </Form.Item>

        <Form.Item
          label="Description"
          rules={[{ required: true, message: "description" }]}
        >
          <Input
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="ingredients"
          rules={[{ required: true, message: "ingredients" }]}
        >
          <Input
            name="ingredients"
            placeholder="Ingredients list"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="directions"
          rules={[{ required: true, message: "directions" }]}
        >
          <Input
            name="directions"
            placeholder="Directions"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Notes" rules={[{ required: true, message: "Notes" }]}>
          <Input
            name="Notes"
            placeholder="Notes about recipe"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="entered by"
          rules={[{ required: true, message: "source" }]}
        >
          <Input name="source" placeholder="Source" onChange={handleChange} />
        </Form.Item>

        <Form.Item label="bio" rules={[{ required: true, message: "bio" }]}>
          <Input name="bio" placeholder="Bio" onChange={handleChange} />
        </Form.Item>

        <Form.Item
          label="source_image"
          rules={[{ required: true, message: "source_image" }]}
        >
          <Input
            name="source_image"
            //  value="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Creative-Tail-People-man-2.svg/128px-Creative-Tail-People-man-2.svg.png"
            onChange={handleChange}
            placeholder="Avatar Image URL"
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            onClick={e => handleSubmitRecipe(e, newRecipe)}
            type="primary"
            htmlType="submit"
          >
            Submit Recipe
          </Button>
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
display:flex;
flex-direction:column;
justify-content:center;
font-size:3rem;
  width: 50vw;
  font-size:3rem;
  padding: 2.5rem !important;
  margin: 2.5rem !important;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  @media(min-width: 768px) {
    margin:0 auto;
    width:90%;
  
  }
  /* @media only screen and (max-width: 600px) {
    padding: 2.5rem 1.5rem !important;
    margin: 1.5rem !important;
    width: 100vw;
  } */
  Form.Item{
    font-size:3rem;
  }
  input{
    font-size:3rem;
    width:62%;
    height:50px;
    @media(min-width: 768px) {
    margin:0 auto;
    width:90%;
  
  }
  }
`;
