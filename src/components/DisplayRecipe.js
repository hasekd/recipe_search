import React from "react";
import classes from "./DisplayRecipe.module.css";

function DisplayRecipe(props) {
  return (
    <div className={classes.card}>
      {props.recipe.map((recipe) => (
        <div key={recipe.recipe.label} className={classes.recipe}>
          <h2>{recipe.recipe.label}</h2>
          <ol>
            {recipe.recipe.ingredients.map((ingredient) => (
              <li key={Math.random()}>{ingredient.text}</li>
            ))}
          </ol>
          <p>{Math.round(recipe.recipe.calories)} Calories</p>
          <img src={recipe.recipe.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default DisplayRecipe;
