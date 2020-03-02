import React from "react";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
export default function Recipes(){
 return (

<div>

  <li key={recipe.id}>
    <h1>
    {recipe.title}
        </h1>
    <img src={recipe.recipe_image} alt="food"/>
    <br />
    <h3>
    {recipe.description}
    </h3>
    <h4>
    {recipe.ingredients}

    </h4>
    <h4>

    {recipe.directions}
    </h4>
   <h3>Prep time: {recipe.prepTime}</h3> 
   <h3>Calories: {recipe.calories}</h3> 
   
    {recipe.servings}
    {recipe.notes}
    {recipe.source}

  </li>
</div>


 )

}

