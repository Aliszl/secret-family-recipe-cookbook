import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Card, Button } from "antd";
import styled from "styled-components";

const { Meta } = Card;
export default function RecipeCard(props) {
  const { deleteRecipe, getCurrentRecipeId } = useContext(Context);

  const { id, title, recipe_image, description } = props.recipe;
  return (
    <StyledCard>
      <Card
        style={{ width: 602 }}
        cover={<img alt="example" src={recipe_image} />}
        actions={[]}
      >
        <Meta title={title} description={description} />
        <br/>
        <Button onClick={e => getCurrentRecipeId(e, id)}>View details</Button>
        &nbsp;&nbsp;
        <Button type="primary" onClick={e => deleteRecipe(e, id)}>
          Delete
        </Button>
      </Card>
        <br/>
        <br/>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin: 30px auto;

  display: flex;
  flex-direction: column;
  justify-content:space-between;

  @media (min-width: 768px) {
    margin: 0 auto;
  }

  img {
    height: 400px;
    width: 30%;
  }
`;
