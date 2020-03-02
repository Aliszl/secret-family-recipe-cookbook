import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import styled from "styled-components";
import { Context } from "../context/Context";

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
      <div>
      <div className="recipes">
        <h1>Recipes:</h1>
        {filteredRecipes.map(recipe => {
          return <Recipe key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}
