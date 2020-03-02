import React, { useState, useEffect } from 'react';
import axios from "axios";


export default function Recipes(){


    return(
        <div>
               <div className="recipes">
        <h1>Recipes:</h1>
        {dummyData.map(recipe => (
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
        ))}
      </div>

        </div>
    )
}




const dummyData= [
        {
            "id": 15,
            "recipe_image": "https://i.imgur.com/HW2AIVK.jpg",
            "title": "Yummy Apple Pie",
            "categories": "Pie, Apple, Dessert, Fruit",
            "prepTime": "",
            "cookTime": "",
            "calories": "1752",
            "servings": "",
            "description": "Pie filled with delicious apples",
            "ingredients": "Dough:\n2 1/2 cups all-purpose flour\n\n4 teaspoons sugar\n\n1/4 teaspoon fine salt\n\n14 tablespoons cold butter, diced\n\n1 large egg, lightly beaten with 2 tablespoons cold water\n\nFilling:\n2 tablespoons freshly squeezed lemon juice\n\n3 pounds baking apples like Golden Delicious, Cortland, or Mutsu\n\n2/3 cup sugar, plus more for sprinkling on the pie\n\n1/4 cup unsalted butter\n\n1/4 teaspoon ground cinnamon\n\nGenerous pinch of ground nutmeg\n\n1 large egg, lightly beaten",
            "directions": "1. Make the dough by hand. In a medium bowl, whisk together the flour, sugar, and salt. Using your fingers, work the butter into the dry ingredients until it resembles yellow corn meal mixed with bean sized bits of butter. (If the flour/butter mixture gets warm, refrigerate it for 10 minutes before proceeding.) Add the egg and stir the dough together with a fork or by hand in the bowl. If the dough is dry, sprinkle up to a tablespoon more of cold water over the mixture.\nMake the dough in a food processor. With the machine fitted with the metal blade, pulse the flour, sugar, and salt until combined. Add the butter and pulse until it resembles yellow corn meal mixed with bean size bits of butter, about 10 times. Add the egg and pulse 1 to 2 times; don't let the dough form into a ball in the machine. (If the dough is very dry add up to a tablespoon more of cold water.) Remove the bowl from the machine, remove the blade, and bring the dough together by hand.\n\n2. Form the dough into a disk, wrap in plastic wrap and refrigerate until thoroughly chilled, at least 1 hour.\nMake the filling. Put the lemon juice in a medium bowl. Peel, halve, and core the apples. Cut each half into 4 wedges. Toss the apple with the lemon juice. Add the sugar and toss to combine evenly.\nIn a large skillet, melt the butter over medium-high heat. Add the apples, and cook, stirring, until the sugar dissolves and the mixture begins to simmer, about 2 minutes. Cover, reduce heat to medium-low, and cook until the apples soften and release most of their juices, about 7 minutes.\nStrain the apples in a colander over a medium bowl to catch all the juice. Shake the colander to get as much liquid as possible. Return the juices to the skillet, and simmer over medium heat until thickened and lightly caramelized, about 10 minutes.\n\n3. In a medium bowl, toss the apples with the reduced juice and spices. Set aside to cool completely. (This filling can be made up to 2 days ahead and refrigerated or frozen for up to 6 months.)\nCut the dough in half. On a lightly floured surface, roll each half of dough into a disc about 11 to 12 inches wide. Layer the dough between pieces of parchment or wax paper on a baking sheet, and refrigerate for at least 10 minutes.\nPlace a rack in the lower third of the oven and preheat the oven to 375 degrees F.\nLine the bottom of a 9-inch pie pan with one of the discs of dough, and trim it so it lays about 1/2 inch beyond the edge of the pan. Put the apple filling in the pan and mound it slightly in the center. Brush the top edges of the dough with the egg. Place the second disc of dough over the top. Fold the top layer of dough under the edge of the bottom layer and press the edges together to form a seal. Flute the edge as desired. Brush the surface of the dough with egg and then sprinkle with sugar. Pierce the top of the dough in several places to allow steam to escape while baking. Refrigerate for at least 15 minutes.\n\n4. Bake the pie on a baking sheet until the crust is golden, about 50 minutes. Cool on a rack before serving. The pie keeps well at room temperature (covered) for 24 hours, or refrigerated for up to 4 days.",
            "Notes": "You may freeze the uncooked pie, but don't brush it with egg or dust it with sugar beforehand. Place the pie in the freezer for 30 minutes, to harden it slightly, and then double wrap it with plastic wrap. Freeze for up to 6 months. When ready to bake, unwrap the pie and brush it with egg and sprinkle with sugar. Bake, from the frozen state, until golden brown, about 1 hour and 10 minutes.",
            "source": "Isaiah Francois",
            "bio": "18yr old genius programmer",
            "source_image": null,
            "user_id": 2
        },
        {
            "id": 17,
            "recipe_image": "https://www.dessertfortwo.com/wp-content/uploads/2018/01/small-batch-sugar-cookies-recipe.jpg",
            "title": "Easy Sugar Cookies",
            "categories": "CCookies",
            "prepTime": "",
            "cookTime": "",
            "calories": "86",
            "servings": "48",
            "description": "Quick and easy sugar cookies! They are really good, plain or with candies in them. My friend uses chocolate mints on top, and they're great!",
            "ingredients": "2 3/4 cups all-purpose flour\n1 teaspoon baking soda\n1/2 teaspoon baking powder\n1 cup butter, softened\n1 1/2 cups white sugar\n1 egg\n1 teaspoon vanilla extract",
            "directions": "1 Preheat oven to 375 degrees F (190 degrees C). In a small bowl, stir together flour, baking soda, and baking powder. Set aside.\n\n2 In a large bowl, cream together the butter and sugar until smooth. Beat in egg and vanilla. Gradually blend in the dry ingredients. Roll rounded teaspoonfuls of dough into balls, and place onto ungreased cookie sheets.\n\n3 Bake 8 to 10 minutes in the preheated oven, or until golden. Let stand on cookie sheet two minutes before removing to cool on wire racks.",
            "Notes": "",
            "source": "",
            "bio": "",
            "source_image": null,
            "user_id": 1
        },
        {
            "id": 14,
            "recipe_image": "https://www.worldvision.org/wp-content/uploads/2017/07/s160256-4-Traditional_Food-Mongolia-JDouglass_-8-copy-1280x853.jpg",
            "title": "Buuz Buuz",
            "categories": "Dumplings",
            "prepTime": "",
            "cookTime": "",
            "calories": "1000",
            "servings": "4",
            "description": "yummy in your tummy",
            "ingredients": "ground beef, salt, onions, flour, water",
            "directions": "Make the Dough: Take 4 cups of all purpose flour and put 1/5th of a spoon of salt and mix it with water. Make sure the dough is not too wet nor too dry. Knead the dough till it becomes one piece. Have the dough rest for 15 mins and divide the dough into 4 same pieces. Take one of the pieces and make into a 2 inches thick string. Cut the string into 2 inch long pieces. Using a rolling pin make the pieces into thin rounds.\nPrepare the Meat: Mix your ground beef with salt and onions. Adding vegetable oil is optional. \nMake the Buuz: Put the meat in the middle of the prepared round pieces of dough and pinch it around so it look like the picture.\nCook the Buuz: Put the buuz on steamer and steam them for 15-20 mins.",
            "Notes": "GoodLuck and enjoy your Buuz!",
            "source": "Bilguun",
            "bio": "Pro Buuz Maker's husband",
            "source_image": null,
            "user_id": 13
        },
        {
            "id": 26,
            "recipe_image": "https://media-cdn.tripadvisor.com/media/photo-s/0a/9b/3d/cb/yummy-traditional-dish.jpg",
            "title": "huushuur",
            "categories": "fried dish",
            "prepTime": "",
            "cookTime": "",
            "calories": "400",
            "servings": "2",
            "description": "Raelyns food",
            "ingredients": "ground beef and flour dough and a pinch of love",
            "directions": "fry",
            "Notes": "hot ",
            "source": "Raelyn",
            "bio": "daughter of awesome guy",
            "source_image": null,
            "user_id": 13
        },
        {
            "id": 27,
            "recipe_image": "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps957_TH143195C09_04_4b.jpg",
            "title": "Aunt Lucy's Double Chocolate Cake",
            "categories": "Desserts, Cake, Chocolate",
            "prepTime": "",
            "cookTime": "",
            "calories": "325",
            "servings": "2",
            "description": "A delicious homemade double choclate cake that will satisfy the biggest chocolate cravings!",
            "ingredients": "2 cups flour\n       1 cup evaporated milk\n       3 large eggs\n       1 cup semi-sweet chocolate, roughly chopped\n       1 cup sugar\n       1 tbsp baking powder\n       1 tbsp baking soda\n       2 sticks of butter, softened",
            "directions": "Preheat oven to 350º F\n       Grease and flour pan\n\n\n\n\n       \n\n       \n       Sift flour into large bowl\n       Mix sugar, baking powder, and baking soda into large bowl",
            "Notes": "\n       Can subsitute evaporated milk for any milk alternatives\n       Additional toppings can be sprinkled on top for additional flavor (ex: peanut\n       butter chips, coconut flakes, etc.)\n\n",
            "source": "",
            "bio": "Aunt Lucy was an amazing cook. She always made the best brownies, cakes, and chocolate chip cookies. I remember every time we would visit, she would have fresh baked cookies waiting for us. They were amazing. She’d bring us a glass of milk in our favorite mugs. Aunt Lucy was the best!\n\nThis recipe was actually a variation of a recipe she learned from her mother. I don’t know what that original recipe was. But Aunt Lucy tweaked it and made it her own. From what I know, her recipe is definitely the best!   Aunt Lucy passed away in 2012. But I’m hoping that her recipe will make others as happy as we were. You might not have known Aunt Lucy. But at least with this recipe, you’ll know her cooking! \n\nEnjoy!",
            "source_image": null,
            "user_id": 1
        }
    ]
