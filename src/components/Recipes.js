import React, { useEffect, useContext } from "react";
import Recipe from "./Recipe";
import styled from "styled-components";
import { Context } from "../context/Context";
import { Button } from "antd";

export default function Recipes() {
  const { recipes, setRecipes, withAuth, homeSearch, getAllRecipes } = useContext(Context);

  
  useEffect(() => {
      getAllRecipes()
  },[]);

  const filteredRecipes = recipes.filter(char =>
    char.title.toLowerCase().includes(homeSearch.toLowerCase())
  );

  console.log(recipes);
  console.log(filteredRecipes);
  return (
    <StyledCards className="recipes">
     
      <h1>Secret Family Recipes:</h1>

      <StyledCard>
        {filteredRecipes.map(recipe => {
          return <Recipe key={recipe.id} recipe={recipe} />;
        })}
      </StyledCard>
    </StyledCards>
  );
}
const StyledCards = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;
const StyledCard = styled.div`
  margin-top: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    height: 400px;
    width: 30%;
  }
`;
