import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";

// const { Meta } = Card;
export default function Recipes(props) {
  const {
    id,
    title,
    recipe_image,
    description,
    ingredients,
    directions,
    prepTime,
    calories,
    servings,
    notes,
    source
  } = props.recipe;
  return (
    <div>
      <h1>{title}</h1>
      <img src={recipe_image} alt="food" />
      <br />
      <h3>{description}</h3>
      <h3>{ingredients}</h3>
      <h3>{directions}</h3>
      <h4>Prep time: {prepTime}</h4>
      <h4>Calories: {calories}</h4>
      <h4>no. servings: {servings}</h4>
      <h3>notes:</h3>
      <h4>source:{source}</h4>
    </div>
  );
}
