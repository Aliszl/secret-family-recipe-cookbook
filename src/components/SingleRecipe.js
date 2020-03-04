import React, { useContext } from "react";
import { Context } from "../context/Context";
import styled from "styled-components";

export default function SingleRecipe() {
  const { recipe } = useContext(Context);

  return (
    <StyledDiv>
      
      <h1>{recipe.id}</h1>
      <h1>{recipe.title}</h1>
      <h1>Ingredients</h1>
       <h1> {recipe.ingredients}</h1>
       <h2>Directions</h2>
      <h2>{recipe.directions}</h2>
      <img src={recipe.recipe_image} alt="food" />
      <h3>notes:{recipe.notes}</h3>
      <h3>Calories:{recipe.calories}</h3>
      <h3>Prep time:{recipe.prepTime}</h3>
      <h3>Servings:{recipe.servings}</h3>
      <h3>source:{recipe.source}</h3>
      
    </StyledDiv>
  );
}
  // styling
  const StyledDiv = styled.div`
  margin: 20px auto;
  width: 80%;
  border:#a1b5c9 2px solid;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
 h1{
   font-size:3rem;
 }
 h2{
   font-size:2rem;
 }
 h3{
   font-size:1rem;
 }
  `


//   @media(min-width: 768px) {
//     margin:0 auto;
  
//   }

//   img {
//     height: 400px;
//     width: 30%;
