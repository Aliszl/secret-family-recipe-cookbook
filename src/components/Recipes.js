import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import styled from "styled-components";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function Recipes() {
  const { recipes, setRecipes, withAuth, homeSearch, setHomeSearch } = useContext(Context);
  useEffect(() => {
    console.log("recipe component mounted");
    withAuth()
      .get("https://lambda-cook-book.herokuapp.com/api/recipes")
      .then(response => {
       setRecipes(response.data.data);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  },[]);

  const filteredRecipes = recipes.filter(char => char.title.toLowerCase().includes(homeSearch.toLowerCase()))

  console.log(recipes)
  console.log(filteredRecipes)
  return (
     
      <StyledCards className="recipes">
         <Button type="primary" >Add a recipe</Button>  

        <h1>Family Heirloom Recipes:</h1>
        

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
  flex-direction:column;
  
 
`;
const StyledCard = styled.div`
margin-top:20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
 
  img{
    height: 400px;
    width:30%;
  }
 
 
`;