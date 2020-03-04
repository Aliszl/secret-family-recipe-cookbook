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
        style={{ width: 620 }}
        cover={<img alt="example" src={recipe_image} />}
        actions={[]}
      >
        <Meta title={title} description={description} />
        <Button onClick={e => getCurrentRecipeId(e, id)}>View details</Button>
        &nbsp;&nbsp;
        <Button type="primary" onClick={e => deleteRecipe(e, id)}>
          Delete
        </Button>
        &nbsp;&nbsp;
      </Card>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin: 30px auto;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin: 0 auto;
  }

  img {
    height: 400px;
    width: 30%;
  }
`;
