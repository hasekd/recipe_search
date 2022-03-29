import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./SearchRecipe.module.css";

const APP_ID = "2349eb8a";
const APP_KEY = "86598a88f365652c35ecb9b9f8f5476f";

function SearchRecipe(props) {
  const [enteredRecipe, setEnteredRecipe] = useState("");
  const [query, setQuery] = useState("chicken");

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const recipeChangedHandler = (e) => {
    setEnteredRecipe(e.target.value);
  };

  useEffect(() => {
    axios.get(url).then((res) => {
      props.onAddRecipe(res.data.hits);
    });
  }, [query]);

  const submitRecipeHandler = (e) => {
    e.preventDefault();

    if (enteredRecipe.trim().length === 0) {
      return;
    }

    setQuery(enteredRecipe);
    setEnteredRecipe("");
  };

  return (
    <form className={classes.form} onSubmit={submitRecipeHandler}>
      <input
        placeholder="Enter Food"
        onChange={recipeChangedHandler}
        value={enteredRecipe}
        type="text"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchRecipe;
