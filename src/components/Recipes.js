import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import styled from "styled-components";
import { Context } from "../context/Context";

export default function Recipes() {
  const { recipes, setRecipes, withAuth } = useContext(Context);
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


  console.log(recipes)
  return (
      <div>
      <div className="recipes">
        <h1>Recipes:</h1>
        {recipes.map(recipe => {
          return <Recipe key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}
