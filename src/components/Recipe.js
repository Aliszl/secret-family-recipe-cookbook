import React, {useContext} from "react";
import { Card, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";

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

// 
const { Meta } = Card;
export default function Recipes(props) {
    const { seeMoreDetails } = useContext(Context);
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
      style={{ width:620}}
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
            />
<Link>
<Button onClick={(e)=>seeMoreDetails(e, id)}>View details</Button>
</Link>
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
