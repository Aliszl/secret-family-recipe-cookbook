import React, {useContext} from "react";
import { Context } from "../context/Context";
import { Card, Avatar, Button } from "antd";
import styled from "styled-components";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Link} from "react-router-dom";

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
export default function RecipeCard(props) {
    const { seeMoreDetails, deleteRecipe, setCurrentRecipeId, getCurrentRecipeId } = useContext(Context);

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
    // source
  } = props.recipe;
  return (
      <StyledCard>

    <Card
      style={{ width:620}}
      cover={<img alt="example" src={recipe_image} />}
      actions={[
      
      ]}
    >
      <Meta
        // avatar={<Avatar src={source} />}
        title={title}
        description={description}
            />

<Button onClick={(e)=>getCurrentRecipeId(e, id)}>View details</Button>&nbsp;&nbsp;
<Button type="primary" onClick={(e)=>deleteRecipe(e, id)}>Delete</Button>&nbsp;&nbsp;

{/* <Link to={`/${currentRecipeId}`}> */}
{/* 
<Button  onClick={(e) => setCurrentRecipeId(e, id)}>Edit</Button> */}
{/* </Link> */}

    </Card>
      </StyledCard>
  );
}
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
const StyledCard = styled.div`
  margin: 30px auto;
 
  display: flex;
  flex-direction: column;

  @media(min-width: 768px) {
    margin:0 auto;
  
  }

  img {
    height: 400px;
    width: 30%;
  }
`;
