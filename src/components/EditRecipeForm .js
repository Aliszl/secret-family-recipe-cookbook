import React, { useContext, useState } from "react";
import { Form, Input, Button } from "antd";
import { Context } from "../context/Context";
import { useHistory, useParams } from "react-router-dom";
import { CameraOutlined } from "@ant-design/icons";
import styled from "styled-components";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

export default function EditRecipeForm() {
  const { withAuth, recipes } = useContext(Context);
  const history = useHistory();
  const { id } = useParams();

  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const currentRecipeData = recipes.find(
    recipe => Number(recipe.id) === Number(id)
  );

  const [fieldData, setFieldData] = useState({
    recipe_image: currentRecipeData.recipe_image,
    title: currentRecipeData.title,
    description: currentRecipeData.description,
    ingredients: currentRecipeData.ingredients,
    directions: currentRecipeData.directions,
    Notes: currentRecipeData.Notes
  });

  const handleChange = e => {
    setFieldData({
      ...fieldData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmitEdit = () => {
    withAuth()
      .put(
        `https://lambda-cook-book.herokuapp.com/api/recipes/${id}`,
        fieldData
      )
      .then(response => {
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
          label="Image url"
          rules={[{ required: true, message: "recipe_image" }]}
        >
          <Input
            name="recipe_image"
            prefix={<CameraOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="url"
            value={fieldData.recipe_image}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Title" rules={[{ required: true, message: "title" }]}>
          <Input
            name="title"
            placeholder="Title"
            value={fieldData.title}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          rules={[{ required: true, message: "description" }]}
        >
          <Input
            name="description"
            placeholder="Description"
            value={fieldData.description}
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
            value={fieldData.ingredients}
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
            value={fieldData.directions}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Notes" rules={[{ required: true, message: "Notes" }]}>
          <Input
            name="Notes"
            placeholder="Notes about recipe"
            value={fieldData.Notes}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={handleSubmitEdit}>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 3rem;
  width: 50vw;
  font-size: 3rem;
  padding: 2.5rem !important;
  margin: 2.5rem !important;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 90%;
  }

  form.Item {
    font-size: 3rem;
  }
  input {
    font-size: 3rem;
    width: 62%;
    height: 50px;
    @media (min-width: 768px) {
      margin: 0 auto;
      width: 90%;
    }
  }
`;

/* @media only screen and (max-width: 600px) {
    padding: 2.5rem 1.5rem !important;
    margin: 1.5rem !important;
    width: 100vw;
  } */
