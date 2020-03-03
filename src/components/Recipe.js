import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";
const tabList = [
  {
    key: "tab1",
    tab: "tab1"
  },
  {
    key: "tab2",
    tab: "tab2"
  }
];

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>
};
const { Meta } = Card;
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
    <Card
      style={{ width: 900 }}
      cover={<img alt="example" src={recipe_image} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />
      ]}
    >
      <Meta
        avatar={<Avatar src={recipe_image} />}
        title={title}
        description={description}
        ingredients={ingredients}
      />
    </Card>
    // <div>
    //   <h1></h1>
    //   <img src={recipe_image} alt="food" />
    //   <br />
    //   <h3>{description}</h3>
    //   <h3>{ingredients}</h3>
    //   <h3>{directions}</h3>
    //   <h4>Prep time: {prepTime}</h4>
    //   <h4>Calories: {calories}</h4>
    //   <h4>no. servings: {servings}</h4>
    //   <h3>notes:</h3>
    //   <h4>source:{source}</h4>
    // </div>
  );
}
