import React, { useContext } from "react";
import RecipeCard from "./RecipeCard";
import styled from "styled-components";
import { Context } from "../context/Context";
import SearchBar from "./SearchBar"



export default function Recipes() {
  const { recipes, searchValue } = useContext(Context);



  const filteredRecipes = recipes.filter(char =>
    char.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <StyledCards className="recipes">
      <SearchBar/>
      <h1>Secret Family Recipes:</h1>
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
`;
const StyledCard = styled.div`
  margin-top: 20px;
    display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media(min-width: 768px) {
    margin:0 auto;
  
  }

  img {
    height: 400px;
    width: 30%;
  }
`;
