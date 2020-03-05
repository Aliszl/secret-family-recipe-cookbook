import React, { useContext, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import styled from "styled-components";
import { Context } from "../context/Context";
import SearchBar from "./SearchBar";

export default function Recipes() {
  const { recipes, searchValue, getAllRecipes } = useContext(Context);

  useEffect(() => {
    getAllRecipes();
  }, []);

  const filteredRecipes = recipes.filter(char =>
    char.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <StyledCards className="recipes">
      <h1>Recipe Archive</h1>
     <div className="searchBar">
      <SearchBar />
     </div>
      <StyledCard>
        {filteredRecipes.map(recipe => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
      </StyledCard>
    </StyledCards>
  );
}
const StyledCards = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  .searchBar{
    display:flex;
    justify-content:center;

  }
`;
const StyledCard = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin: 0 auto;
  }

  img {
    height: 400px;
    width: 30%;
  }
`;
